---
path: "/blog/github-prerelease-versioning-support"
title: "New Feature: Prerelease Versioning Support For GitHub"
subtitle: "Adding Prereleases into Your Release Cycle"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-11-03T16:33:46+10:00
---

We’ve just launched support for prerelease versioning in our
GitHub app. Add a label with any of the following names to
your release pull request, and we’ll automatically mark that
release as a prerelease by updating your semantic version
accordingly.

-   alpha
-   beta
-   rc
-   pre

For example, if your release is version 1.1.0 and you add a label
named `rc`, we’ll manage that release as a prerelease and
update the version to 1.1.0-rc.1. If you have a second
release candidate after deploying rc.1, add the rc label
to the next release, and we’ll automatically update it to
1.1.0-rc.2. Once you’ve finished validating your release
candidates, leave the additional labels off, and we’ll
orchestrate your 1.1.0 release.

We’re incredibly excited to finally support prereleases
and simplify using them in your release cycle.
For more information, check out our recent
[blog post](/blog/using-prereleases-in-your-software-lifecycle) on
the benefits of using prereleases in your software lifecycle.
