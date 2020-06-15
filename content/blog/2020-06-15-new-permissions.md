---
path: "/blog/2020-06-update-on-github-permissions"
title: "Updating Our Github Permissions"
subtitle: "We updated our Github permissions "
author: "donald"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/donald_profile_pic.jpeg"
image: ../../src/images/screenshots/include-github-issues.png
date: 2020-05-16T12:33:46+10:00
---

If you have our app installed in one of your Github organizations, you received a notification that Next Release has
requested additional permissions from our installed application.

We have some new functionality coming out soon that requires access to the Github Status Checks and Team Discussions
api. We did not initially request this permission, so now need to come back to request this additional scope.

Here is a brief breakdown of the permissions and information we access from your Github organization and repositories:

### Contents

This is a very sensitive permission, but one we need to:

-   Access specific git hashes to create releases
-   Manage a changelog file
-   Add tags to your repository
-   Read specific branches

We treat this data extremely sensitively, encrypting our DB, and limiting access to any of your data

### Checks

We will be migrating our status checks to the Check Run API to provide better visibility and more functionality
for some features we will be shipping shortly.

### Issues (Read Only)

We read issues to gather data to populate your release notes.

### Pull Requests

We read and create pull requests to both generate your release notes and to create "release" and
changelog pull requests

### Commit Statuses

We use this information to manage our checkruns and issues surrounding releases.

### Organization Membership (Read Only)

We allow our users to let anyone who is a member of their Github Organization access data in Next Release if
instead of managing specific invites and permissions.

### Team Discussions

This is a new feature in Github and we have some new functionality coming soon (TM)...
