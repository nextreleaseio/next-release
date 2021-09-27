---
path: "/kb/ignoring-labels/"
title: "Ignoring Changes"
slug: "ignoring-changes-with-labels"
section: "Using Next Release"
---

Are there certain types of changes - dependency updates, fixture data changes, settings config - you want to exclude from your release notes?

You can specify which changes to ignore with the "Ignored Labels section," in the "Labels" configuration options of your project.

![Ignore Changes with labels!](../../src/images/screenshots/ignored-labels.png)

You can add as many labels here as you want.

**An Important Note:**
When there are more than one label applied to an pull request or issue, we defer to the "biggest" label.

If you apply a "breaking" and "ignored" label to one pull request, we will treat that like a major change.
