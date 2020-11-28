---
path: "/blog/release-notes-via-api"
title: "New Feature: API Access to Release Notes"
subtitle: "Accessing Your Release Notes Via The Next Release API"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-11-16T16:33:46+10:00
---

Over the last few months we’ve heard from teams using Next Release and
others looking to automate their release notes about different ways that
marketplaces and platforms accept release note uploads. We continue to
work on single click integrations that allow teams to instantly publish
release notes to their communities but understand that teams need a way
to pull and interact with their release notes programmatically. That’s
why we’re happy to announce the beta release of the new Next Release API.

With the Next Release API you can pull your latest release and latest
release notes using a curl request containing a token, Organization ID,
and project ID. You can find your token and Organization ID in your
[Next Release Organization Settings](https://my.nextrelease.io/organization/settings)
and your Project ID in your relevant Next Release project's setting page.

```shell script
curl --location --request GET \
'https://api.nextrelease.io/app/projects/{project_id}/latest_release_note/' \
--header 'Authorization: Token {access_token}' \
--header 'Content-Type: application/vnd.api+json' \
--header 'X-Organization: {organization_id}'
```

You can currently access two endpoints using the Next Release API:

-   `https://api.nextrelease.io/app/projects/{project_id}/latest_release_note/`
-   `https://api.nextrelease.io/app/projects/{project_id}/latest_release/`

The `latest_release_note` endpoint will return a markdown formatted
version of your release notes in a string that can be piped
into any command line or programmatic routines you use to automatically
upload releases to a marketplace.

The `latest_release` endpoint returns a Release object that houses the
information about your release and the changes associated with it. You
can use this object to build your own release note or access specific
information about your release you may want to include in your marketplace
submission such as version number or date created.

We’ll be refining the API during the beta and would love to hear your
feedback and what information you’d like to access programmatically.
