---
path: "/kb/adding-status-check"
title: "Adding a Status Check"
slug: "adding-status-check"
section: "Using Next Release"
---

Next Release works best when you categorize your pull requests with labels. You can enforce status check to ensure each PR gets one.

![Creating a status check](../../src/images/screenshots/status-check.png)

To install a status check, configure your branch protection rules below to include the versioning/next-release
status check.

![protect branch](../../src/images/screenshots/branch-protect.png)

Now branches matching the pattern you've defined will fail status checks without an appropriate badge
(There are also tons of other helpful things you can do here like preventing WIP pull requests and more!)

![branch protection rules](../../src/images/screenshots/require-branch-rules.png)
