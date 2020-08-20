---
path: "/blog/developing-a-python-twitter-integration"
title: "Developing A Python Twitter Integration"
subtitle: "Using OAuth 1.0 to Tweet Changelog Updates Automatically for Users"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-08-19T16:33:46+10:00
---

We recently released automatic posting of changelogs to twitter to help
customers engage with their communities and get feedback on product updates.
Outside of release notes there are plenty of other reasons to integrate your
application with twitter and with the twitter team announcing
[their new developer portal and API](https://blog.twitter.com/developer/en_us/topics/tools/2020/introducing_new_twitter_api.html)
and the [potential of subscription services](https://www.theverge.com/2020/7/8/21317266/twitter-subscription-platform-codename-gryphon-job-listing) we wanted to share how we
did our integration to help others rapidly setup an integration of their own.

## Package Selection

There are a handful of OAuth python packages out there that can be used to abstract
away a lot of the complexity of three-legged OAuth. Unfortunately not all of them are
maintained and many of the first search results seemed to point to abandoned projects.
The OAuth package that appears to have the largest community around it and continues to
be maintained is [OAuthLib](https://github.com/oauthlib/oauthlib). Instead of using the package
directly the [Requests OAuthlib](https://github.com/requests/requests-oauthlib)
package provides a few niceties that further reduce your effort.

For interfacing with Twitter it’s easy enough to use their REST API directly using the
[Requests](https://requests.readthedocs.io/en/master/) package but we’d recommend using
[Tweepy](https://github.com/tweepy/tweepy), which has an active community, is well
tested, and provides a nice pythonic interface to Twitter. Tweepy actually comes with
[Requests OAuthlib](https://github.com/requests/requests-oauthlib) installed so if you’d like to use their wrapper around the package to
manage OAuth that can save a few lines of code too.

Using Requests OAuthlib with Tweepy in Django connecting up to Twitter looks something
like the following:

```python
from requests_oauthlib import OAuth1Session

from django.conf import settings
from django.db import models

class Organization():
    twitter_temp_oauth_token = models.CharField(
       max_length=1024, default=None, null=True, db_index=True
    )
    twitter_temp_oauth_token_secret = models.CharField(max_length=1024, default=None, null=True)
    twitter_oauth_token = models.CharField(max_length=1024, default=None, null=True)
    twitter_oauth_token_secret = models.CharField(max_length=1024, default=None, null=True)


    def twitter_authorize(self):
       request_token_url = 'https://api.twitter.com/oauth/request_token'
       authorize_url = 'https://api.twitter.com/oauth/authorize'
       app_callback_url = settings.TWITTER_CALLBACK_URL
       oauth = OAuth1Session(
           settings.TWITTER_API_KEY,
           client_secret=settings.TWITTER_API_SECRET_KEY,
           signature_type='auth_header',
           callback_uri=app_callback_url
       )
       fetch_response = oauth.fetch_request_token(request_token_url)

       self.twitter_temp_oauth_token = fetch_response.get('oauth_token')
       self.twitter_temp_oauth_token_secret = fetch_response.get('oauth_token_secret')
       self.save()

       return oauth.authorization_url(authorize_url)

    def twitter_callback(self, oauth_token, oauth_verifier):
       access_token_url = 'https://api.twitter.com/oauth/access_token'
       oauth = OAuth1Session(settings.TWITTER_API_KEY,
                    client_secret=settings.TWITTER_API_SECRET_KEY,
                    resource_owner_key=oauth_token,
                    resource_owner_secret=self.twitter_temp_oauth_token_secret,
                    verifier=oauth_verifier,
                    signature_type='auth_header')
       oauth_tokens = oauth.fetch_access_token(access_token_url)

       self.twitter_oauth_token = oauth_tokens.get('oauth_token')
       self.twitter_oauth_token_secret = oauth_tokens.get('oauth_token_secret')
       self.twitter_temp_oauth_token = None
       self.twitter_temp_oauth_token_secret = None
       self.save()

       return True

    def twitter_tweet(self, content):
       tweet_url = 'https://api.twitter.com/1.1/statuses/update.json'
       oauth = OAuth1Session(settings.TWITTER_API_KEY,
                             client_secret=settings.TWITTER_API_SECRET_KEY,
                             resource_owner_key=self.twitter_oauth_token,
                             resource_owner_secret=self.twitter_oauth_token_secret,
                             signature_type='auth_header')
       return oauth.post(tweet_url, data={'status': content})
```

This is a naive approach that has potential for optimization but will get your
application hooked up and able to read and write to your customer’s twitter
account.

## Authentication

In the code snippet above there’s a bit going on so let’s step through some
pieces of it to better understand what it is we’re doing. The first step we take
is asking Twitter to provide us with a authorization url. To do this we send Twitter
our application credentials which you can get through the Twitter API portal.

```python
def twitter_authorize(self):
   request_token_url = 'https://api.twitter.com/oauth/request_token'
   authorize_url = 'https://api.twitter.com/oauth/authorize'
   app_callback_url = settings.TWITTER_CALLBACK_URL
   oauth = OAuth1Session(
       settings.TWITTER_API_KEY,
       client_secret=settings.TWITTER_API_SECRET_KEY,
       signature_type='auth_header',
       callback_uri=app_callback_url
   )
   ...
```

Twitter verifies which app we’d like to prompt a user to grant access to and sends
us back a set of temporary request tokens that can be utilized to generate an
authorization url.

```python
    ...
    fetch_response = oauth.fetch_request_token(request_token_url)

    self.twitter_temp_oauth_token = fetch_response.get('oauth_token')
    self.twitter_temp_oauth_token_secret = fetch_response.get('oauth_token_secret')
    self.save()
    ...
```

We need to save these temporary values somewhere so that we can use them to
correlate the non-temporary tokens that are generated by twitter upon a user
granting authorization to our application. You could save them in memory, a cache,
or like we are doing above, in a database.

```python
   return oauth.authorization_url(authorize_url)
```

With these temporary tokens we can now generate an authorization url which we can use to
redirect a user to Twitter with to ask them for permission to access their account.

In our application we return the authorization url to our frontend application which uses
it as a hyperlink that customers can click to authorize access to Twitter.

Once a user clicks the link and grants permission to your application, Twitter will use
a callback url that you’ve predefined in the Twitter API Portal to navigate the user
back to your site along with approved credentials in the query params of the url. The
query params include “oauth_token” and “oauth_verifier” which are the two parameters we
pass to our twitter_callback method.

```python
def twitter_callback(self, oauth_token, oauth_verifier):
   access_token_url = 'https://api.twitter.com/oauth/access_token'
   oauth = OAuth1Session(settings.TWITTER_API_KEY,
                client_secret=settings.TWITTER_API_SECRET_KEY,
                resource_owner_key=oauth_token,
                resource_owner_secret=self.twitter_temp_oauth_token_secret,
                verifier=oauth_verifier,
                signature_type='auth_header')
   oauth_tokens = oauth.fetch_access_token(access_token_url)
   ...
```

We use these values to fetch the non-temporary access tokens that can be used to interface
with Twitter on behalf of our users.

After we receive these values we can delete the temporary request tokens and store off
the access tokens for future use.

```python
   ...
   self.twitter_oauth_token = oauth_tokens.get('oauth_token')
   self.twitter_oauth_token_secret = oauth_tokens.get('oauth_token_secret')
   self.twitter_temp_oauth_token = None
   self.twitter_temp_oauth_token_secret = None
   self.save()

   return True
   ...
```

Now that we have access tokens we can start interfacing with the Twitter API and
tweeting for our users. We have to provide both our application keys and the individual
user’s access keys to access the API so that Twitter knows which application is making
the request for which user and whether or not that user has granted the necessary
permissions to your application.

```python
def twitter_tweet(self, content):
   tweet_url = 'https://api.twitter.com/1.1/statuses/update.json'
   oauth = OAuth1Session(settings.TWITTER_API_KEY,
                         client_secret=settings.TWITTER_API_SECRET_KEY,
                         resource_owner_key=self.twitter_oauth_token,
                         resource_owner_secret=self.twitter_oauth_token_secret,
                         signature_type='auth_header')
   return oauth.post(tweet_url, data={'status': content})
```

To learn more about three-legged OAuth and additional security elements such as signature
types and hashing algorithms checkout some of Twitter’s docs:

-   [Encryption](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/creating-a-signature)
-   [Authorizing a Request](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/authorizing-a-request)
-   [OAuth 1.0a](https://developer.twitter.com/en/docs/authentication/oauth-1-0a)
-   [Three-legged OAuth](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens)

Getting Started Walkthroughs
There are a lot of awesome resources to help you get started with your twitter integration.
Most of our implementation was formed through the assistance of the following guides:

-   [twauth-web](https://github.com/twitterdev/twauth-web/blob/master/twauth-web.py)
-   [OAuth1Session Class](https://github.com/requests/requests-oauthlib/blob/c80b2b6d9f518c3cbcc424237a6075de5dcdb2fe/requests_oauthlib/oauth1_session.py#L52-L104)
-   [RealPython’s Twitter Bot with Tweepy](https://realpython.com/twitter-bot-python-tweepy/)
-   [Python-OAuth2 Twitter Three Legged OAuth](https://github.com/joestump/python-oauth2/wiki/Twitter-Three-legged-OAuth)
-   [Python Requests OAuthlib OAuth1 Session Docs](https://github.com/requests/requests-oauthlib/blob/c80b2b6d9f518c3cbcc424237a6075de5dcdb2fe/requests_oauthlib/oauth1_session.py)

The easiest walkthrough to follow was
[twauth-web](https://github.com/twitterdev/twauth-web/blob/master/twauth-web.py)
but it uses an outdated python OAuth package. So after using it to get started we transitioned to requests-oauthlib
which works similarly but with the more maintained [OAuthlib package](https://github.com/oauthlib/oauthlib). There’s actually a
solid authentication walk through for twitter within the requests-oauthlib repository
but it isn’t easy to find in the read the docs page. You’ll want to check out the [docstring
for the OAuth1Session class](https://github.com/requests/requests-oauthlib/blob/c80b2b6d9f518c3cbcc424237a6075de5dcdb2fe/requests_oauthlib/oauth1_session.py#L52-L104).

If you run into any trouble or have any questions feel free to [hit us up](https://www.nextrelease.io/contact) :).
