---
path: "/blog/publish-release-notes-to-oculus-store"
title: "How to deploy releases into Oculus Store & Include Release Notes"
subtitle: "Publish Release Notes to Oculus Store Using The Next Release API"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-11-17T16:33:46+10:00
---

Today I was browsing around the release notes recently published to
Reddit and looking at some of the discussions being had about them. I
came across a [discussion](https://www.reddit.com/r/OculusQuest/comments/j7gdiv/better_release_notes_please/g84u0e2/?context=3)
in the Oculus community where a few people were
commenting on how they wished more teams would adopt publishing release
notes along with a few of the incentives to both them and the developers.
We couldn’t agree more with them :D!

Even the one negative comment in the feed admitted that having release
notes would be great but was pessimistic about the likelihood of Oculus
application development teams publishing them. Indicating there was little
incentive to adopt the extra work necessary to distribute them. Based on the
teams we work with they say there’s a lot of incentives, some of which are:

Show action taken to mitigate issues identified in negative comments
Drive adoption of new functionality
Promote feedback from the community on what's changed
Engage/re-engage users who have been waiting on specific changes

In this blog post I want to focus on how Oculus developers can add publishing
release notes to the app store as part of their DevOps pipeline. That way if
you’re an Oculus developer there’s no extra work when you push a new release
of your experience.

If you don’t already have a release note generation solution, you can use our
SaaS interface to automatically create semantic versioned release notes and
changelogs. Whether you’re using Next Release or a different changelog
generator you should be able to pipe your auto generated release notes to
the command line. If you’re using Next Release you can access your latest
release for a specific project by doing the following:

```shell script
curl --location --request GET \
'https://api.nextrelease.io/app/projects/{project_id}/latest_release_note/' \
--header 'Authorization: Token {access_token}' \
--header 'Content-Type: application/vnd.api+json' \
--header 'X-Organization: {organization_id}'
```

You can pull your `access_token` and `organization_id` from your
[Next Release Organization Settings](https://my.nextrelease.io/organization/settings)
page. Your `project_id` can be found in each of your project's Next Release
settings page.

Once you have your release notes in a local variable deploying to Oculus
can be done using their [Oculus Platform Command Line Utility](https://developer.oculus.com/distribute/publish-reference-platform-command-line-utility/).

```shell script
ovr-platform-util upload-quest-build --app_id {id} --app_secret
{oculus_app_secret} --token {oculus_user_token} --apk {path/to/your.apk} --obb
{path/to/your.obb} --assets-dir {path/to/DLCs/dir} --channel
{release_channel} --notes {release_notes} --asset-files-config
{}config.json} --language-packs-dir {path}
```

Replace `{release_notes}` with the variable you stored your automated
release notes in and they’ll be automatically uploaded into the Oculus
store once your modifications have been validated.

Hopefully this helps Oculus teams get more release notes out to their
communities.

If you need help deploying release notes or engaging your community,
[let us know](/contact) :).
