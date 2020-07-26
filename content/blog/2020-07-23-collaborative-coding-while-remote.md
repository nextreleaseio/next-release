---
path: "/blog/remote-collaborative-coding"
title: "How Can We Facilitate Collaborative Coding In a Remote World?"
subtitle: "Breaking Down Silos & Finding Issues ASAP"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-07-23T18:33:46+10:00
---

With multiple teams transitioning to 100% remote due to COVID-19, we
seem to get asked how to facilitate collaborative coding while fully
remote, at least once a week. When transitioning from being 100% onsite
to offsite, integrating international teams, or taking a remote-first
perspective, there are multiple ways to enable and promote real-time and
near-time collaboration to accommodate different schedules and timezones.
Many of the lessons learned from open source projects can be reapplied to
small to large teams and adapted to meet other industries' needs.

## Git Workflows: Change Management

The first step to enable collaboration while remote is setting up a
workflow for managing changes coming into your codebase. If you haven't
defined a strategy, yet there are a handful of solutions that have proven
track records of scaling from a couple of developers to thousands. We have
a longer post on the [different strategies](https://www.nextrelease.io/blog/release_strategies)
if you need help selecting one.

Teams with workflows can ensure the correct version of code is used in
development and place guard rails on what deploys. Keeping versions of
code straight helps avoid redundant work done by multiple people and
ensures that you can efficiently resolve conflicting changes.

## WIP: Open Pull Requests Fast and Often

In a similar vein of reducing redundant work, it's a good policy to push
developers to open up pull requests as soon as they start working on
something within the codebase. It's
[common practice}(https://github.com/apps/wip) to place WIP ahead
of the pull request name to indicate it is still a work in progress.
Adding the WIP text lets others know that the pull request may not be
finished but still provides transparency on current work, its status,
and the direction for initial implementation.

This approach also makes it easier for developers to share code snippets
that they are working on with others, allows teammates to comment on the
snippets, and makes it easy to check off suggested modifications. Making
changes easy to share and provide feedback on is one of the keys to
enabling remote collaboration.

## Decentralization: Localize All the Things

Having a lot of remote teams can create new demand for existing DevOps
pipelines. The increased demand can drive up the cost of maintaining the
pipe and create a burden on leaders as they have to wait for tasks to
complete before [conducting code reviews](https://www.nextrelease.io/blog/reviewing-pull-requests).
To reduce the load on the system,
we recommend virtualizing as much of your solution as possible and making
it easy to execute as many inspections and operations on the code as
possible locally. If it's easier to run tests and audits locally than
it is to commit code, push it, and wait for the continuous integration
environment to build and run audits, people are more likely to do the
checks locally.

Empowering developers to run checks locally promotes good programming
habits such as testing your code and linting it before pushing it up
into collaborative environments. Running audits ahead of collaboration
reduces the overhead on the pipeline, improves change rates by reducing
cycle times for modifications, and removes distractions for peer reviewers
who are screening the updates.

## Traceability: Requirement Linking

Collaboration between developers isn't the only area of focus when going
remote. As discussed in our [recent post on traceability](https://www.nextrelease.io/blog/devops-traceability),
linking code changes up to requirements and issues enable non-technical team members
to stay informed on what engineering is currently working on and what
state each requirement is in.

Enabling traceability can be done within multiple tools and across many
others:

-   [JIRA with smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html)
-   [IBM DOORS with Links](https://www.ibm.com/support/knowledgecenter/en/SSYQBZ_9.6.0/com.ibm.doors.requirements.doc/topics/c_abouttraceability.html)
-   [Keywords directly in GitHub](https://docs.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords)
-   [GitLab Crosslinking](https://about.gitlab.com/blog/2016/03/08/gitlab-tutorial-its-all-connected/)

## Validation Environments: Staging, Quality Assurance, and More

Depending on your organization's size, you may have zero to many
validation environments that mimic production. When supporting a
remote team, having at least one of these environments is important
for collaboration to enable non-technical teams to get in on the
action without requiring them to manage a local deployment. Having a
production-like environment allows individuals to review modifications
when it makes the most sense for their schedule and avoids the need
to coordinate meetings with developers to be shown features that
only exist locally on the developer's system.

## Notify The Right Stakeholders @ The Right Time In The Right Place

Having defined validation environments and traceability between
requirements and your team's code allows you to inform teams impacted by
specific changes, when the changes are available to them, in the medium
they expect to be notified in.

For example, let's assume there is a JIRA requirement that links to four
different subsystems. Someone on the team picks up that requirement and
opens a pull request to fulfill it. If you have traceability, your system
can automatically inform the team responsible for the requirement that it
is under construction and where they can contribute.

Upon merging the changes into a staging environment, those responsible for
the other subsystems will be informed that the requirement has been met and
where they can access the code to start integrating with their dependent
features.

Once the system moves into the quality assurance environment, the
validation teams can be notified by release notes detailing which
requirements have been fulfilled and which systems they impact, so
that they can orient their test plans accordingly. Finally, once the
system has been validated and moved into production, release notes
indicating the new features can be distributed to sales, marketing,
and customer support so that everyone is on the same page about what's
available to customers.

### Talk To The Team Where They Listen

Each of these notifications may use separate mediums. For example,
development teams might receive their notifications through Slack,
validation teams via a JIRA ticket, sales and marketing via email, and
customer support in the Slack channel where they monitor real-time
messages.

The goal is to find the right balance for your team to achieve effective
communication with all parties involved. Without that communication
duplicate code can be written, customer support can be caught off guard,
system integration testing may be delayed, along with a plethora of other
problems.

If you need help enabling collaboration within your remote team,
[hit us up](https://www.nextrelease.io/contact).
