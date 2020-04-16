---
path: "/blog/getting_started_with_devops.md"
title: "What is Release Orchestration"
subtitle: "Implementing & Optimizing Release Orchestration"
author: "devon"
date: 2020-04-16T122:33:46+10:00
---

Release orchestration is the management of releasing and deploying your software application into your 
non-development environments. Some teams are orchestrating their releases by manually updating code on a server,
others are deploying their packaged code in containers to distributed clusters, and others are 
automatically auditing their code, summarizing the changes in it, tagging it, deploying it to a specific segment of
their customer base and getting a reading on how their system performed this release so they can retrospect on it 
and continue to make improvements. We help teams  improve the throughput, stability, and visibility of their software supply chain
through enhancements to their release orchestration. If you think we can help your team, book a time that works for you on our [calendar](). 

In this article we'll cover some aspects of release orchestration that can help teams overcome challenges created
by reduced lead times to change and increased deployment frequencies. If you're working on developer operations for your
team, these are common growing pains you want to be facing, but that we've had trouble finding information around. 


## Advanced Shipping Notice ##
Informing team members, third parties, and customers when new features, bug fixes, or enhancements are rolling out 
brings visibility ahead of roll outs. This allows others to prepare for changes, provide feedback ahead of time, and 
ask questions before impacts occur. This reduces the change failure rate associated with new roll-outs as you're able to 
resolve integration issues ahead of time. It also improves alignment between teams that are working on APIs and other
interfaces that third party's rely on by enabling the third party's to plan for upcoming changes and factor in integrations
into their schedules. 

An advanced shipping notice is normally just a snapshot of your draft release notes which include your upcoming version 
number for the release, the changes that will be going out, possible expected deployment date, and potentially how 
stakeholders can gain early access to the updates.


## On-Demand Shipping ##
Being able to deploy updates with confidence at any point in time gives you the ability to impact all the [key results
of DevOps](https://www.nextrelease.io/blog/getting_started_with_devops.md). Achieving this has become easier in the last
few years and there are many tools out there that manage a lot of the heavy lifting for you such as [Heroku](), [Netlify](),
and [CircleCI](). How we define confidence is that an intern can join the team tomorrow, and
start contributing code that ships to production that same day. If they can break things in a way that they can't start
contributing on day one, we're not building a stable enough solution. Using this as a starting point helps us frame 
what we need out of our on-demand shipping. Some examples are:

* Tagging of releases with versions for easy traceability
* Instantaneous roll-back of production to any previous version
* Simple database recovery with a recovery point and time that aligns with your business

You can also include unit tests or other automated tests to help ensure changes to the code base do not 
break known usage paths. It's also a good idea to have some static code analysis tools both for styling and security
that audit your releases and throw flags prior to it getting upstream as well.


## Bug Driven Software Supply ##
When a bug appears in production that causes a high demand for the team to supply a fix. To handle this in your
release system it's common to have a workflow, such as GitFlow, that factors in patch releases which explicitly handle the identified bug. This
allows a team to branch from the tag representing what is in production, add the fix, and deploy it without 
having to include any other modifications to the release that might cause alternative issues.

This can cause additional complexity for your workflow but bugs will happen and introducing new features, enhancements, 
when trying to resolve the bug tends to lead to poorer change failure rates and mean time to restore durations. 
 

## First In, First Out vs Prioritized Queuing ##
Most continuous integration (CI) and continuous deployment (CD) configurations take a simple first in first out approach where
what commits or pull requests are built, tested, audited, and certified for deployment are based on which comes into the queue first. 
This works for the majority of teams who don't release updates at a rate that creates a backlog in their 
CI/CD platform. Usually scaling the system vertically or horizontally (depending on your CI/CD of choice) enables you 
to overcome short-term challenges. However, this can become costly as your team's deployment frequency increases.
One way to reduce costs is to configure how your queue prioritizes builds. This way builds for things like 
hotfixes are always pushed to the front of the queue, ahead of new features or enhancements. Alternative 
prioritization methods can also be deployed based on your organization and your unique challenges. 

## Proof of Delivery ##
Once you ship a change, how do you know that it made it to the unit it is intended to run on and is up and executing?
If you manually deployed the update, you probably know where it was deployed and that it is up and running. Perhaps you
send an email off to the individual responsible for the release if you weren't the one who built it. If you have an
automated continuous delivery pipeline, you might receive some notifications from your hosting provider that things
look good. Whatever your case, you want to ensure that you have proof that the delivery of your release has been 
received and it is in good health. Upon receiving this notification it is best to automatically relay that information
to impacted stakeholders so that they know that the changes identified in the advance shipping notice is now available
in a given environment and ready for them to use.

Having an audit log of when specific deployments occurred is also helpful when bugs popup. It helps teams to debug the
problem with the proper version of software rather than having to guess which version was running at the time. This is
especially critical if your software is running in a regulatory rich environment where you could eventually need
proof when a version was executing for customer or legal inquiries.


## Bill of Material Creation ##
A list of all the dependencies needed to build an application is necessary to setup a continuous integration or deployment
ecosystem. Most modern languages have a package manager, or a few (looking at the JS community) that developers can
use to document which third party packages are needed to make the application work. Some examples are [pip](https://pip.pypa.io/en/stable/) for python,
[yarn](https://yarnpkg.com/) / [npm](https://www.npmjs.com/) / (sure there will be something new tomorrow) for javascript, 
[composer](https://getcomposer.org/) for php, [gradle](https://gradle.org/) for java, and the list goes on. These dependency
managers for the most part document which packages or files your application relies on, what versions those packages need to be
at, and the more advance ones will tell you about security vulnerabilities that might impact you. 

Beyond a bill of materials representing your dependencies you might also need a breakdown of all the third party licenses
that you are utilizing and a list of all the dependencies your dependencies have. Most of this information can be gathered
out of your repository and the configuration files within your dependencies but there are also tools that can automate
pulling all of this information such as [WhiteSource](https://www.whitesourcesoftware.com/), [BlackDuck](https://www.blackducksoftware.com/), 
or [ScanCode Toolkit](https://github.com/nexB/scancode-toolkit). If you're in a highly regulated
industry it might make sense to actually package up your bill of materials with your release notes when you send out 
your advanced shipping notice.

## Quality Assurance Checks ##
Don't let the perfect be the enemy of the good but don't use customers as smoke testers. You can checkout debates
across the web on how much test coverage is good test coverage vs what amount stifles productivity or innovation, I'd at least
recommend checking out [Martin Fowler's article](https://martinfowler.com/bliki/TestCoverage.html). 

To add to his piece, once you have sand trails formed that users have to or consistently take or convert through, it's a good idea to have tests that
check they still work before deploying code. As the paths mature to highways you'll want to have testing anyways due to 
the volume of traffic moving through them. Before people turn your trail into a path though you might change the flow or remove a feature all together
and it'd probably be a better use of time to manually test a few paths that make sense until you prove out the path is
worth keeping. 

If you're to the point of needing unit tests most languages have a diverse set of testing frameworks such as
casper.js, pytest, django testing, [mochajs](https://mochajs.org/), ... that developers can use locally to execute
tests before things enter the pipeline at all. This helps to reduce lead time to change and improve deployment frequency
by alleviating log jams occurring due to the continuous integration environment being used as the thing that builds
everyone's packages and running the tests against them. This can be a common issue if you haven't improved your own
and your team's local development environments and made running tests locally as easy as running `git commit`.
If faced with complex configurations, setups, or multiple commands everyone is going to choose `git commit` and use the
fancy continuous integration tool. 

Using something like CircleCI which allows you to run builds & tests when anyone commits to their fork can alleviate the
short term need to get everyone's local development environment virtualized using something like docker and configuring all
the docker containers they need to run a replica production environment with docker-compose. But if you're stuck using 
something like Jenkins in an on-premise deployment, where it takes 3 months to get approval for a new server, it might be worth
prioritizing the virtual environment setup so that developers can run their unit tests and possibly other static analyzers
locally. 

A couple other areas of quality assurance that can improve developer productivity, improve security, and reduce change
failure rates are:

* Vulnerability Analysis Integration ([GitHub](https://github.com/features/security), [WhiteSource](https://www.whitesourcesoftware.com/), 
[Snyk](https://snyk.io/), or [others](https://github.com/topics/vulnerability-scanner))
* [Auto Code Formatter](https://github.com/psf/black) or if you like to bikeshed over configs, like us, there are Lint type tools 
for blocking builds ([Flake8](https://github.com/PyCQA/flake8), [jslint](https://www.npmjs.com/package/jslint))
* Maintainability Index Tracking (I'm sure there's some science around the index, might wanna scope that out)

## Scenarios ##
All of these optimizations might not apply to you and which you prioritize really depends on your team's current
situation and product. There are a few poster pipelines out there that it might be helpful to cover and use
to provide some idea starters on where you might want to take your pipeline.


### Manual Releasing ###
If your team is deploying using FTP, SSH, email, or some other manual approach now is a great time to 
upgrade your release orchestration. You should be able to get some solid wins on all four of the key DevOps
measurements, lead time for change, deployment frequency, change failure rate, and mean time to restore. 
Beyond DevOps measurements of success you may also be able to cross off some security vulnerabilities.

Depending on your application and the ecosystem around it, there are many paths to take. Too many for 
even this article but if you have a cloud application we would recommend checking out [Heroku](https://www.heroku.com/), for IoT 
applications we would recommend [Particle.io](https://www.particle.io/) if you don't have hardware selected, otherwise 
[Mender.io](https://mender.io/) paired with
a CI tool like [CircleCI](https://circleci.com/) or [TravisCI](https://travis-ci.org/), and for mobile application 
developers checkout [fastlane.tools](https://fastlane.tools/). Since you're able to deploy manually we're assuming 
you have a very lightweight pipeline and each of these tools are recommended because they give you the perks of 
having an automated monitored pipeline without the overhead of needing any part-time or full-time additions to your team.

#### Optimizations to Focus On ####
* On-Demand Shipping
* Quality Assurance Checks - Unit Testing / Code Style

#### Things To Start Planning For ####
* Bug Driven Software Supply
* Proof of Delivery

#### Reasons to Upgrade ####
- Increase the amount of time you're able to spend building improvements to your product and less deploying
- Decrease change failure rates by reducing potential for manual errors
- Increase the efficiency of your application and its scalability 
- Enable auto recovery and increase the durability of your system
- Automation of routine tasks done at deployment
- Remove security risks of having FTP / SSH or any ports enabling remote control of your system
- Lay foundation to enable further optimizations like automated release audits, changelog generation, and tagging.


### Single Environment, Automated Releasing ###
...

#### Optimizations to Focus On ####
* Advanced Shipping Notice
* Quality Assurance Checks - Unit Testing / Code Style
* Bug Driven Software Supply
* Proof of Delivery

#### Things To Start Planning For ####
* Quality Assurance Checks - Security

#### Reasons to Upgrade ####
-  ...


### Staged Environment Supported, Automated Releasing ###
...
#### Optimizations to Focus On ####
* Quality Assurance Checks - Security
* Proof of Delivery

#### Things To Start Planning For ####
* Customer Engagement with Advanced Shipping Notices or Release Notes

#### Reasons to Upgrade ####
-  ...


### Blue / Green Deployment ###
...

#### Optimizations to Focus On ####
* Bill of Materials
* Proof of Delivery
* Customer Engagement with Advanced Shipping Notices or Release Notes

#### Things To Start Planning For ####
* Build Queue Prioritization
* IoT Integrated Deployments Into Regulated Environments Such as Automotive and Health Care

#### Reasons to Upgrade ####
-  ...


## Closing ##
There are teams doing accomplishing amazing things with pipelines that manage software for autonomous cars and 
others that deploy to specific user segments with the ability to revert at a moments notice. There are pipelines
that send advance shipment notices to key stakeholders highlighting which changes are coming out so that they
can prepare other parts of the organizations such as marketing, sales, and customer support. And there are others
that are orchestrating container deployments out to multi-region kubernetes clusters. We're looking forward to
seeing what you build out your team's pipeline to do, keep us posted @nextreleaseio :heart:.


## Further Reading ##
* [Supply Chain and Logistics Technology: 8 Steps to Supply Chain Visibility](https://www.logisticsmgmt.com/article/supply_chain_and_logistics_technology_8_steps_to_supply_chain_visibility)
  * Although this article is oriented towards traditional supply chains the topics and suggestions apply to development
  pipelines and release orchestration.
  
  