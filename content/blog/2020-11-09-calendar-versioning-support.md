---
path: "/blog/calendar-versioning-support"
title: "New Feature: Add Release Date to Your Version"
subtitle: "Adding Calendar Versioning To Your Release"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-11-09T16:33:46+10:00
---

We’ve talked in the past about Calendar Versioning aka calver and how
many teams use it as the basis of their release versioning schema.
Today we’re adding the ability to extend your semantic version with an
ISO 8601 formatted date so that it appears like:

![Calendar Versioning aka Calver Example](../../src/images/blog/calver_example.png)

This makes it easy to see what day a version was deployed and determine which
version to rollback to in the case of an issue or outage.

To enable this feature go to your project settings and under the General
section and enable the “Add Date To Release Version” switch.

<video style="width: 100%;" controls>
<source src="https://next-release-public-assets.s3.us-east-2.amazonaws.com/enable_calver.mp4" type="video/mp4">
  <source src="https://next-release-public-assets.s3.us-east-2.amazonaws.com/enable_calver.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
