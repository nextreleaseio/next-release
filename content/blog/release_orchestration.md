---
path: "/blog/release_orchestration.md"
title: "What is Release Orchestration"
subtitle: "Implementing & Optimizing Release Orchestration"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
date: 2020-04-16T22:33:46+10:00
---

Release orchestration is the management of releasing and deploying your software application into your
non-development environments. A team's release orchestration can come in multiple flavors, including:

-   Orchestrating releases by manually updating code on a server
-   Deploying packaged code automatically in containers to distributed clusters
-   Auditing code, summarizing the changes in it, tagging it, deploying it to specific customers,
    and getting a reading on how their system performed during the release so they can retrospect on
    it and continue to make improvements.

We help teams improve the throughput, stability, and visibility of their software supply chain through
enhancements to their release orchestration. If you think we can help your team, book a time that works
for you on our [calendar](https://calendly.com/nextrelease-devon/developer-operations-optimization-introduction).

In this article, we'll cover some aspects of release orchestration that can help teams overcome
challenges created by reduced lead times to change and increased deployment frequencies. If you're
working on developer operations for your team, these are typical growing pains you want to be
facing.

## Advanced Shipping Notice

Informing team members, third parties, and customers when new features, bug fixes, or
enhancements are rolling out brings visibility ahead of rollouts. Having advanced shipping
notifications allows others to prepare for changes, provide feedback ahead of time, and ask
questions before impacts occur. These notifications reduce the change failure rate associated
with new rollouts as you're able to resolve integration issues ahead of time. It also improves
alignment between teams that are working on APIs and other interfaces that third parties rely
on by enabling a third party to plan for upcoming changes and factors in integrations into their schedules.

An advanced shipping notice is a snapshot of your draft release notes, which include your
upcoming version number for the release, the changes that will be going out, possible expected
deployment date, and potentially how stakeholders can gain early access to the updates.

## On-Demand Shipping

Being able to deploy updates with confidence at any point in time gives you the ability to impact all the [key results
of DevOps](https://www.nextrelease.io/blog/getting_started_with_devops.md). Achieving this has become easier in the last
few years, and there are many tools out there that manage a lot of the heavy lifting for you, such as [Heroku](https://heroku.com), [Netlify](https://www.netlify.com/),
and [CircleCI](https://circleci.com/). How we define confidence is that an intern can join the team tomorrow, and
start contributing code that ships to production that same day. If they can break things in a way that they can't start
contributing on day one, we're not building a stable enough solution. Using this as a starting point helps us frame
what we need out of our on-demand shipping. Some examples are:

-   Tagging of releases with versions for easy traceability
-   Instantaneous rollback of production to any previous version
-   Simple database recovery with a recovery point and time that aligns with your business

You can also include unit tests or other automated tests to help ensure changes to the code base do not
break known usage paths. It's also a good idea to have some static code analysis tools both for styling and security
that audit your releases and throw flags before it getting upstream as well.

## Bug Driven Software Supply

When a bug appears in production, that causes a high demand for the team to supply a fix. It's common to
have a workflow, such as GitFlow, that factors in patch releases that explicitly handle the identified
bug. Having a patching workflow allows a team to branch from the tag representing production, add the fix,
and deploy it without having to include any other modifications to the release that might cause alternative issues.

Having a hotfix workflow can cause additional complexity for your workflow. Still, bugs will happen, and
introducing new features, enhancements, when trying to resolve the bug tends to lead to miserable change
failure rates and mean time to restore durations.

## First In, First Out vs. Prioritized Queuing

Most continuous integration (CI) and continuous deployment (CD) configurations take a simple first
in first out (FIFO) approach. FIFO means the first commits or pull requests into the queue are the
first ones to be built, tested, audited, and certified for deployment. This approach works for the
majority of teams who don't release updates at a rate that creates a backlog in their CI/CD platform.
Usually, scaling the system vertically or horizontally (depending on your CI/CD of choice) enables you
to overcome short-term challenges. However, this can become costly as your team's deployment frequency
increases.

One way to reduce costs is to configure how your queue prioritizes builds. For example, your team may
want to prioritize hotfixes above all other changes and deprioritize other types of updates. Alternative
prioritization methods can also be deployed based on your organization and your unique challenges.

## Proof of Delivery

How do you know a change you shipped is running healthy on the intended device? If you manually deployed
the update, you probably know it was shipped and that it is up and running. Perhaps you send an email
off to the individual responsible for the release if you weren't the one who built it. If you have an
automated continuous delivery pipeline, you might receive some notifications from your hosting provider
that things look good. Whatever your case, you want to ensure that you have proof that the delivery of
your release was successful, and it is in good health. Upon receiving this notification, it is best to
automatically relay that information to impacted stakeholders so that they know that the changes
identified in the advance shipping notice are now available in a given environment and ready for them to use.

Having an audit log of when specific deployments occurred is also helpful when bugs popup. It helps teams
to debug the problem with the proper version of software rather than having to guess which version was
running at the time. Having this audit log is especially critical if your software is running in a
regulatory rich environment where you might need proof when a version was executing for a customer
or legal inquiries.

## Bill of Material Creation

A list of all the dependencies needed to build an application is necessary to set up a continuous integration or deployment
ecosystem. Most modern languages have a package manager, or a few (looking at the JS community) that developers can
use to document which third party packages are needed to make the application work. Some examples are [pip](https://pip.pypa.io/en/stable/) for python,
[yarn](https://yarnpkg.com/) / [npm](https://www.npmjs.com/) / (sure there will be something new tomorrow) for javascript,
[composer](https://getcomposer.org/) for php, [gradle](https://gradle.org/) for java, and the list goes on.
These dependency managers, for the most part, document which packages or files your application relies
on, what versions those packages need to be at, and the more advanced ones tell you about security
vulnerabilities that might impact you.

Depending on your business, a list of third-party licenses and dependencies of your dependencies may also
be useful. Most of this information you can gather from your repository and the configuration
files within your dependencies. We would recommend easing your life a bit with one of the tools
that can automate pulling all of this information for you like [WhiteSource](https://www.whitesourcesoftware.com/),
[BlackDuck](https://www.blackducksoftware.com/),
or [ScanCode Toolkit](https://github.com/nexB/scancode-toolkit). If you're in a highly regulated
industry, it might make sense to package up your bill of materials with your release notes when you send out
your advanced shipping notice.

## Quality Assurance Checks

Don't let the perfect be the enemy of the good but don't use customers as smoke testers. You can checkout debates
across the web on how much test coverage is good test coverage vs. what amount stifles productivity or innovation; I'd at least
recommend checking out [Martin Fowler's article](https://martinfowler.com/bliki/TestCoverage.html) on the topic.

To add to his piece, once you have sand trails formed that users have to take or consistently take and
convert through, it's a good idea to have tests that check they still work before deploying code. As
the paths mature to highways, you'll want to have testing due to the volume of traffic moving through
them. Before people turn your trail into a path, you might change the flow or remove a feature altogether,
and it'd probably be a better use of time to manually test a few paths that make sense until you prove out the
path is worth keeping.

If you're to the point of needing unit tests, most languages have a diverse set of testing frameworks such as
[casper.js](https://github.com/casperjs/casperjs), [mochajs](https://mochajs.org/), [pytest](https://docs.pytest.org/en/latest/),
or [django testing](https://docs.djangoproject.com/en/3.0/topics/testing/) that developers can use locally to execute
tests before things enter the pipeline at all. Using this method can help reduce lead time to change and improve
deployment frequency by alleviating log jams occurring due to the CI environment becoming the build and
test environment for every line change. This situation can be a common issue if you haven't improved
your team's local development environments and have made running tests locally as easy as running `git commit`. If faced with complex configurations, setups, or multiple commands, everyone is going to
choose `git commit` and use the wonderful continuous integration tool that makes their life easier.

Having everyone rely on the CI environment for building and testing could be worth proving
out configurations centrally and kicking the can on virtualizing local development environments.
Using something like CircleCI gives your team the ability to run builds on every commit to a fork and
scale workers with a button click to avoid log jams. Using your CI environment in this way can deliver
improvements on your key metrics while buying you time to figure out how to virtualize local environments
best. If your team is stuck in an on-premise deployment, where it takes 3 months to get approval for a
new server, it might be worth prioritizing the virtual environment set up so that developers can do
everything the CI does locally. We recommend starting with [docker](https://www.docker.com/) and
[docker-compose](https://docs.docker.com/compose/), which helps to replicate your production environment,
databases, and all, locally.

A couple of other areas of quality assurance that can improve developer productivity, improve security, and reduce change
failure rates are:

-   Vulnerability Analysis Integration ([GitHub](https://github.com/features/security), [WhiteSource](https://www.whitesourcesoftware.com/),
    [Snyk](https://snyk.io/), or [others](https://github.com/topics/vulnerability-scanner))
-   [Auto Code Formatter](https://github.com/psf/black) or if you like to bikeshed over configs, like us, there are Lint type tools
    for blocking builds ([Flake8](https://github.com/PyCQA/flake8), [jslint](https://www.npmjs.com/package/jslint))
-   Maintainability Index Tracking (I'm sure there's some science around the index, might wanna scope that out)

## Scenarios

All of these optimizations might not apply to you, and which you prioritize depends on your team's current
situation and product. There are a few poster pipelines out there that it might be helpful to cover and use
to provide some idea starters on where you might want to take your pipeline.

### Manual Releasing

If your team is deploying using FTP, SSH, email, or some other manual approach, now is a great time to
upgrade your release orchestration. You should be able to get some solid wins on all four
of the key DevOps measurements, lead time for a change, deployment frequency, change failure
rate, and mean time to restore. Beyond DevOps measurements of success, you may also be able to
cross off some security vulnerabilities.

Depending on your application and the ecosystem around it, there are many paths to take.
Too many for even this article but if you have a cloud application, we would recommend
checking out [Heroku](https://www.heroku.com/), for IoT applications, we would recommend
[Particle.io](https://www.particle.io/) if you don't have hardware selected. If you do have
specific hardware for your IoT app, [Mender.io](https://mender.io/) paired with
a CI tool like [CircleCI](https://circleci.com/) or [TravisCI](https://travis-ci.org/) works for most use cases.
For mobile application developers checkout [fastlane.tools](https://fastlane.tools/).

We recommend these tools based on the assumption that you have a lightweight pipeline,
and these tools give you the perks of having an automated monitored pipeline without the
overhead of needing any part-time or full-time additions to your team.

#### Optimizations to Focus On

-   On-Demand Shipping
-   Quality Assurance Checks - Unit Testing / Code Style

#### Other Enhancements

-   Bug Driven Software Supply
-   Proof of Delivery

#### Reasons To Consider Expanding

-   Increase the amount of time you're able to spend building improvements to your product and less deploying
-   Decrease your teams change failure rates by reducing the potential for manual errors
-   Increase the efficiency of your application and its scalability
-   Enable auto-recovery and increase the durability of your system
-   Automation of routine tasks done at deployment
-   Remove security risks of having FTP / SSH or any ports enabling remote control of your system
-   Expand optimizations like automated release audits, changelog generation, and tagging.

### Single Environment, Automated Releasing

This deployment is the go-to configuration for a lot of initial projects. The tools
mentioned above make this pretty easy to get up and running for both cloud and IoT applications.
Depending on your business, this might be sufficient to manage risk while fitting into the budget.
Since your team does not have a staging environment to run integration tests on it is important to
make sure you have a way to:

-   Version your code
-   Revert changes to production quickly and easily
-   Document what is being deployed when, with a changelog

If you have some usage paths that have formed, you might want to start looking at unit tests,
and if you don't have a patching process integrated into your workflow, it would be good to add one.

#### Optimizations to Focus On

-   Advanced Shipping Notice
-   Quality Assurance Checks - Unit Testing / Code Style
-   Bug Driven Software Supply
-   Proof of Delivery
-   Incident management & disaster recovery

#### Other Enhancements

-   Quality Assurance Checks - Security

#### Reasons To Consider Expanding

-   Reduce change failure rates through improved ability to do integration testing
-   Increase confidence in fully automated deployments by having blue/green deployments
    that auto-detect application health and revert when problems appear

### Staged Environment Supported, Automated Releasing

Having a non-production staging environment and a production environment is a great way to enable early integration and
smoke testing before rolling updates out to the production environment. It enables your team to test out updates
in a production-like environment with certificates, remote servers, and other variables that are difficult to replicate
locally. If you have this type of configuration, there can be some construction you need to do to manage deployments
from staging to production, such as handling when advanced shipping notices go out, when release notes go out, and
how the team triggers the deployment. One solution is tying deployments and notifications to mergers of pull requests.
This approach avoids adding additional overhead to team members and fits directly into their existing workflow.

#### Optimizations to Focus On

-   Ease of packaging changes from staging and shipping to production
-   Quality Assurance Checks - Security
-   Proof of Delivery
-   Incident management & disaster recovery
-   Deployment management of database migrations - keep in mind that you may have to revert any release that goes out, so
    you might need some intermediate steps for migrations that hadn't previously been done.

#### Other Enhancements

-   Customer Engagement with Advanced Shipping Notices or Release Notes

#### Reasons To Consider Expanding

-   Business requirement expansion (Need to support additional software or hardware platforms, etc)
-   Increase confidence in fully automated deployments by having blue/green deployments that auto-detect application
    health and revert if problems are found
-   Have increased security or compliance needs
-   Have more than a handful of servers running your application. Having a deployment with multiple
    servers can cause unexpected errors as you roll out updates as two or more versions can be operating,
    unmanaged and untracked, with live traffic flowing through them. Multi-server deployments can be especially
    hairy if you're running database migrations during an update.

### Blue / Green Deployment

Blue / Green deployments are environments where you have two production environments,
one active and the other idle. This type of deployment enables you to roll out an update
to the idle environment, do your final integration tests there, and once you are ready,
shift all traffic from the active environment to the idle one. Configuring your deployment
like this makes rolling back changes fast since you have a hot-swap environment ready to go
with your previous version.

Database migrations can be tricky with this type of deployment, and your team may have to
factor in some additional refactoring efforts when deploying migrations so that both versions
of the code can operate during the initial deploy. Then complete the migration after you have
both idle and production environments to a version that doesn't rely on the old schema.

#### Optimizations to Focus On

-   Bill of Materials
-   Proof of Delivery
-   Customer Engagement with Advanced Shipping Notices or Release Notes

#### Other Enhancements

-   Build queue prioritization
-   IoT integrated deployments into regulated environments such as automotive and health care
-   Load testing on new deployments
-   Automation of testing disaster recovery on new releases

## Closing

Teams are accomplishing amazing things with pipelines that manage software for autonomous cars and
others that deploy to specific user segments with the ability to revert at a moment's notice. Some pipelines
send advance shipment notices to key stakeholders highlighting which changes are coming out so that they
can prepare other parts of the organizations such as marketing, sales, and customer support. And others are
orchestrating container deployments out to multi-region [Kubernetes](https://kubernetes.io/) clusters. We're looking forward to
seeing what you build out your team's pipeline to do, keep us posted [@nextreleaseio](https://twitter.com/nextreleaseio) <3.

## Further Reading

-   [Supply Chain and Logistics Technology: 8 Steps to Supply Chain Visibility](https://www.logisticsmgmt.com/article/supply_chain_and_logistics_technology_8_steps_to_supply_chain_visibility)
    -   Although this article is about traditional supply chains, the topics and suggestions
        apply to software pipelines and release orchestration.
