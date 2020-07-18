---
path: "/blog/devops-traceability"
title: "DevOps Pipeline Visibility & Traceability"
subtitle: "Pipeline Agnostic Audit Log"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-07-15T18:33:46+10:00
---

Why is traceability within your pipeline important? Why do specifications
such as DO178C, ISO 26262, and IEC61508 place such a weight on traceability?
Traceability keeps everyone on the same page. Requirements help teams that
interface with your team's system understand what to expect from it without
needing to dig into the codebase. Tracing code to requirements makes it
easier to find what pieces of the system impact a specification, enabling
bidirectional change management when a piece of code is modified, or a spec
is changed. This traceability keeps requirements and code synchronized.
Tracing requirements and code to tests allow the team to see what validation
has been done on a given component and correlates what tests are needed to
meet the specifications shared with other teams.

By having traceability between these operations, the impact of changes can
be communicated effectively internally and externally, identifying potential
issues more quickly and reducing the project's change failure rate.

## Requirement Definition with Prototyping & Test Development

### Testing Early & Often

Requirements should not be developed in a vacuum. Specifications serve as a
definition of functionality, informing other subsystems what they can rely
on your team's system to do and how they should interface with it. Just like
with agile development of software, requirements should be iterated on with
change notes released to teams dependent on your system in real-time. These
requirements should be coordinated with other teams and revised throughout
development as new capabilities and limitations are identified. Attempting
to define all the requirements up front, waiting for development teams to
work through attempting to implement them, and then rinsing and repeating
builds silos within teams, resulting in increases in time to deployment,
change failure rates, and mean time to resolution. These issues are magnified
the longer each cycle is and with each new system that relies on yours.

To eliminate silos, it's best to start prototyping as soon as possible and
to build tests that verify identified requirements are met in parallel.
Creating prototypes allows the team to identify limitations and new
technologies that might be beneficial for accomplishing a requirement
while having tests that can be tweaked as the requirements are iterated.
When taking this approach to requirement management, each action must be
logged and linked so that release notes can be aggregated and communicated
to other teams who interface with your system.

## Creating Traceability Today

Most development pipelines are made up of tens, if not hundreds, of tools
and systems that manage everything from specifications to production
deployment. Many tools have some traceability capability built-in such as
JIRA with [smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html)
and IBM DOORS with [links](https://www.ibm.com/support/knowledgecenter/en/SSYQBZ_9.6.0/com.ibm.doors.requirements.doc/topics/c_abouttraceability.html). These solutions provide
a minimum level of traceability but have become insufficient in tracing
ideation to shipping a minimally viable solution and the iterations that
follow. The solutions also limit their interfaces to a select group of
tools that you may not want to be locked into, and configuration breaks
down the moment you want to change or add a tool to your ecosystem.

To overcome these challenges, you'll want an audit chain where every tool
can document changes. This log can then be utilized to link related changes
and be monitored for unexpected modifications to secure your pipeline.
Having a decentralized chain lets you define conventions that can be followed
to automate the linking of documents, code, tests, and modifications
across your entire pipeline. It allows for adding new tools and removing
old ones without losing information about your systems and products.
Lastly, it enables automation of changelogs that summarize updates that
others need to be made aware of.

If you'd like early access to our distributed DevOps platform Nunicorn,
which logs modifications to specifications, code, and tests from your
DevOps pipeline, links the changes and generates release notes on them,
[contact us](https://www.nextrelease.io/contact) to sign up for the alpha program.
