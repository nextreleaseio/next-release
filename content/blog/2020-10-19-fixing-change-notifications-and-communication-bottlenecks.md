---
path: "/blog/fixing-change-notifications-and-communication-bottlenecks"
title: "Fixing Change Notifications & Communication Bottlenecks"
subtitle: Problems Solved By Release Notes"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-10-19T16:33:46+10:00
---

Release notes add value to the smallest teams, helping to kick off
important interactions with end-users. Their value scales as the
team expands, eliminating communication barriers and missed changes.
That's why most open-source projects already use release notes to update
their users about recent releases and inform collaborators of what has
changed in the codebase. Every team should adopt publishing release notes
to communicate the changes they've made.

When organizations start to build software and formalize their continuous
deployment or integration pipeline, they begin to identify problems with
notifying the right team members about changes that impact them.
Identifying these problems usually occurs as teams can deploy changes
faster than every few weeks.

For example, let's take a backend engineering team who has reached
moderate developer operation performance levels and deploy releases
for multiple packages bi-weekly. This team works with the following
groups:

-   Quality Assurance Testers
-   Product Managers
-   Project Managers
-   Executives
-   Frontend Engineering

Let's assume the backend team has five releases a week. These changes
need to be communicated to every team member to avoid dropped balls.

Without release notes, the backend team has to:

-   Email the frontend team, letting them know about new API endpoints in staging
-   Email the validation team when the release goes into the QA environment
-   Slack product managers after validation finishes
-   Notify project managers about what changes are in which environments during the upcoming sprint planning meeting
-   Send another email off to the executive team when the release makes it to production
-   Let customer support and marketing know about the new features so that they can alert customers

These can be manual tasks when you have a release a month, but it becomes
difficult to coordinate and maintain as teams grow, organization complexity
increases, user bases expand, and deployment frequency rises. That is one
of the reasons why teams start compiling release notes for each release.
The release notes document what new features have been added, which bugs
have been fixed, and any additional information relevant to those
dependent on the code. Release notes can then be distributed to stakeholders
as code is moved through various environments.

Manually developing release notes also quickly becomes a challenge as
deployment frequencies increase. Compiling what changed between one code
drop and another takes time and quickly becomes a bottleneck impacting
your lead time to change. This bottleneck is why after adopting release
notes into a DevOps pipeline, most teams look towards automating them.

## Automate Your Release Notes

By automating your release notes, you continue to enhance their value by:

-   Eliminating single points of failure caused by individuals responsible for compiling and distributing the updates
-   Reducing the amount of time necessary to deploy a change
-   Enabling automation of routines such as for who should receive what release notes at which stage of integration
-   Shifting documentation to the left which promotes higher quality commits and pull request messaging from developers
-   Allowing integration with third-party tools so that the information can be formatted and distributed to customers and other community members

Our release note platform allows you to automate release notes for all
of your projects without writing or maintaining any additional scripts.
You can use our status checks to ensure everyone is tagging updates and
using best practices for documentation. After automating your release
notes, you can easily integrate your Slack workspace, Twitter account,
or email into the Next Release platform to distribute updates to the
right people in the place they're most likely to see the notes.

If you'd like to discuss your pipeline or need assistance with deciding
how to roll out your release notes, [let us know](https://www.nextrelease.io/contact).
