---
path: "/blog/the_human_element_of_devops"
title: "The Human Element"
subtitle: "Dealing With The Non-Technical Side of DevOps"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/busywork_burnout.png
date: 2020-05-01T12:33:46+10:00
---

## Taking time away from tools and automation

Coming from the software engineering side before getting into DevOps,
it has been an ongoing struggle to lift my head up to see that a new
tool or script isn’t always the answer to improving operations. In the
early days, when our team was focused on making everything for those
focusing on development seamless, it was pretty easy getting buy-in
when re-platforming or changing up a process because it was usually
driven by everyone working on development.

As we’ve optimized our development operations, they no longer were the
driving limitation on improving our ability to experiment and iterate.
The entire organization is part of the development pipeline, and each team
interacts differently with it. As you look to make larger changes to the
organization to improve efficiencies, there are a lot of changes that require
changing habits, which is a different challenge than changing how unit tests
are executed in the continuous integration environment.

Luckily principles identified in software development and optimization of
the pipeline hold up.

## Get Feedback ASAP

Before you start writing code or changing a process, meet with people that
rely on and use the existing process. Understand how they measure the success
of the system, why they gauge success that way, what technology is already in
use, and what inputs and outputs exist.

## Take a Baseline

Understand where you are today so that you can measure improvement and
communicate progress via quantitative evidence. This helps me mentally by
enabling me to see what impact I’m making and quickly identify if I’m running
in place. It’s like taking a photo before a house project; it’s awesome to look
at the before and after.

## Create an MVP

Utilize this information to pull together an initial minimal viable product or
solution. I usually try to avoid writing any code in the first iteration; this
helps to reduce scope creep, the lead time to the change and helps to improve
alignment with stakeholders. This also helps to determine whether automation or
additional tooling is necessary. Many times existing tooling can be used, and only
the way it is used needs to be changed. It also helps to point out limitations in
existing tooling and build a case for transitioning to a tool that alleviates those
bottlenecks or for adding custom software to solve the problem.

## Deploy Your MVP

Roll out the new process, preferably with some hand-holding so that you can
monitor engagement, gather feedback in real-time, and document issues or unforeseen
challenges. When deploying a new process or tooling to a team, I try to keep in mind
that the people I’m rolling the changes out to may not have the same level of
visibility into:

-   The overall system
-   How this process fits into it
-   What the changes to the process are
-   New tools being integrated

To combat this, we’ll generate release notes for the change to the system. In them,
we outline what is being changed, provide videos showcasing those changes and
explaining the rationale behind them, and provide baselines outlining how we measure
success. This helps to bring transparency to the change process and improve the efficiency
of gathering fruitful feedback by reducing usage questions and bikeshedding.

If dealing with larger teams, you can reduce the complexity by choosing specific segments
of your organization to roll an MVP out to first. That way, you can gather feedback
without being swamped or bogged down with change requests. If you have a large enough
organization and team, you can also orchestrate A/B testing of processes within various
groups.

## Measure Results & Learn

Take a new baseline on the metrics you are gauging the success of the system on and
see where this latest change got you. Determine if these modifications improved the
system and have helped move the needle on organization objectives. Utilize this
information and the feedback gathered during your deployment to pivot or persevere.

## Iterate

Launching a new process seldomly takes root after the first iteration. It takes tweaks,
improvements, and issue resolution paired with support and training to ensure stakeholders
are adopting the process and habituating it.
