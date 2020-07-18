---
path: "/blog/project-nunicorn-alpha"
title: "Project Nunicorn Alpha"
subtitle: "Distributed DevOps"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-07-13T18:33:46+10:00
---

## 15 Years of Centralized Continuous Integration

In February of 2005, Jenkins first made its debut and quickly
became the de facto continuous integration (CI) platform for developers.
Fast forward a few years and SaaS platforms such as TravisCI and CircleCI
started offering products that significantly reduced the effort required
to manage project configurations and brought easy scalability to growing
teams. The mass majority of development teams today have some centralized
continuous integration platform as the foundation for their continuous
deployment pipeline.

## Centralized DevOps Platform Flaws

As software teams have scaled and the tools we use to develop have
increased, our build environments have grown in complexity. Much of this
complexity is shielded wonderfully by the platforms we use. Still, it can
be seen in increased run times, expanding queues, and ballooning costs for
containers and execution cycles. These problems are exacerbated by the
increasing number of devices that teams are building software for. Mobile
devices, edge gateways, connected cars, gaming systems, and server
applications, to name a few. Each environment requiring unique setups and
configurations that shift month by month as new technologies are released
to help developers be more efficient within their domain.

Centralized platforms and developer operation teams struggle to keep up with
these changes. While the CI platforms add new features, it’s impossible to
add everything immediately in a cost-effective way. This leaves operation
teams stuck waiting on the platforms to adopt new technologies or forces
them back to managing sprawling Jenkins infrastructure. They have no
alternative validation methodology that provides the same level of
confidence that each audit and test has been executed and passed before
deploying the changes to production environments.

## Distributing DevOps Across Developers

Developers already need to have local environments set up to test what
they’re developing; there’s no need for a centralized system that duplicates
this environment. Developers already have powerful enough machines to run
their code on; there’s no need for a centralized platform to build and test
code. With docker and other virtualization technology, local environments
can already be made to mimic production environments, and operation teams
should already be assisting team members with making their local environments
as production-esque as possible.

So if we already all have production-like environments locally, why do we
need the centralized CI environment to run tests? Especially when we’re
already running inspections, tests, and other audits before pushing code
into the pipeline. This wastes CPU cycles, wastes resources, wastes time,
creates additional security threats, increases policy complexity, creates
single points of failure, and wastes people’s energy. The problem is we don’t
have a way to certify what actions have been taken by developers in their
local environments.

Someone could run the unit test suite multiple times locally, and the CI
environment will still run it. Another developer might run one set of tests
that certifies those tests pass, but the CI environment will still rerun
those tests when they are pushed. As a DevOps engineer, how do you know
what has already been done, and what needs to be completed prior to
deploying it to production? You can’t trust someone’s verbal commitment
that they ran all the tests. You can’t stand over everyone’s shoulder and
run the tests for them. This is why we’ve historically relied on a
centralized platform for a record of trust that everything that needs to
be run against the code, is run.

What if there was a way to log and certify what was executed locally on a
developer’s machine for a given version of code? This is what our distributed DevOps platform, Nunicorn, does. We define a protocol that allows you to log each action that is taken against a given variant of code and then use this information to query what has already happened to it.

We generate auditable records of validation actions taken by developers in
their local environment and allow DevOps engineers to define what needs to
be executed before pushing code.

This distributed approach lets organizations incentivize developers to
run more checks on their code locally and reduce strain on their
centralized CI platforms by having a percentage of the costs for executing
actions go to the developer. This, in turn, helps shift more responsibility
left, which also helps to promote learning by the developers of what types
of checks they should be running to produce the best code.

By taking this approach, developers can use the existing environments they
use locally to validate their code. DevOps engineers can focus on improving
efficiencies in team culture and adopting new technologies into local
development environments. And team members receive incentives for adopting
the new processes. By decentralizing where audits are executed, we’re able
to reduce the load on CI pipelines, increase build throughput, reduce or
remove single points of failure, and create an audit trail of everything that
has happened to facilitate a feature. The audit log, in turn, enables more
accurate measurement of the four key DevOps measurables:

-   Lead Time To Change
-   Deployment Frequency
-   Mean Time to Restore
-   Change Failure Rate

If you’d like to join the alpha, [contact us](https://www.nextrelease.io/contact) today and let us know what
solutions make up your DevOps toolchain.
