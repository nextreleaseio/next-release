---
path: "/blog/using-prereleases-in-your-software-lifecycle"
title: "Using Prereleases In Your Product Release Cycle"
subtitle: "Benefits of Beta Programs & Early Feedback"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-10-28T16:33:46+10:00
---

Publishing prereleases serve as a dress rehearsal for the formal release.
Deploying prereleases helps your entire organization as well as the third
parties that integrate with your solution. That is why when releasing
software, many teams beta bug fixes, enhancements, and feature additions
before rolling out a formal release.

Using this release can be worth the risk to many stakeholders, such as
power users or developers. It provides early access to advanced features
to start benefiting from new improvements and share their experiences.
Simultaneously, you close the feedback loop and optimize the changes
before rolling it out to the broader user base. That's why so many
leading technology teams provide prereleases.

## Early Access to Advanced Features

Granting early access to new features is a win-win for both you and your
users. Normally the segments of people we see using prereleases fall into
one of the following groups:

-   Passionate product users
-   Users experiencing issues that the prerelease resolves
-   Early adopters of a new feature the prerelease makes available
-   Developers and third-party integrators who are building products with or
    around your package/platform

Each of these segments provides unique value to your early access
program. Passionate product users, users with resolved issues, and
early adopters of new features provide feedback purely through using
your release. Their usage allows you to:

-   Measure interest in features
-   Validate the stability of bug fixes
-   Identify edge workflows and behavior flows

In addition to passive feedback, these users may also provide active
feedback such as questions, comments, and reviews. This feedback can
help you:

-   Optimize training material
-   Prepare responses for frequently asked questions
-   Remove features that caused too many pain points
-   Market features that have strong positive responses

In addition to your users, developers, and third party integrators who
integrate with your system tend to give active feedback if they
subscribe to your prereleases. They can provide similar value to
your team as users but tend to do so at a more technical level,
helping to test out APIs, SDKs, and other integration points. By
following their usage patterns, you can evaluate interest in services
you expose and optimize documentation to make it easier for others to
use your latest changes.

## Sharing Experiences

Active feedback from users and integrators gives you the ability to
market features with a strong positive response. Publishing your
prerelease release notes to social platforms such as Twitter and Reddit
kicks off a central location for users to provide feedback and interact
with your team. This allows you to build momentum around your changes,
follow up with posts around feedback you've received, and use that
momentum to gain additional traction for your release.

By being transparent and pushing customers to share reviews and feedback
in the public spotlight, you put attention on your release. This shows
your engagement with the community and can help increase users in your
early access program while also alerting later adopters of upcoming
changes that will impact them. This, in turn, drives more sharing
and conversations around your release, which provides you with
additional inputs to base decisions off of.

## Benefiting From Activity Around Early Releases

With information coming in on your prerelease, you can close your feedback
loop by using the data points to make informed decisions on how to best
iterate on your release. From high-level decisions like pivoting or
persevering on a feature, down to more technical improvements such as:

-   Datastore optimizations
-   Algorithm refinement
-   Usage workflows and pathways
-   Bugfix improvements
-   Architecture enhancements
-   End of line check tests

Capturing, analyzing, and acting on the data you collect helps you
make your release as effective as possible. It reduces issues that
automated pipelines miss by uncovering reality and eliminating many
assumptions that need to be made before a release, such as how users
will use a feature or how developers will build integrations.

## Who Has Prerelease Programs

Many companies such as [Tesla](https://www.reddit.com/r/TeslaModel3/comments/b2bhr3/how_to_get_on_teslas_early_access_program/),
[Apple](https://beta.apple.com/sp/betaprogram/faq), and [Google](https://www.google.com/android/beta)
plus decentralized platforms like [Ethereum](https://ethereum.org/en/eth2/) and
[Prysmatic Labs](https://prysmaticlabs.com/) incorporate prereleases
into their product lifecycles. Using prereleases helps them deliver
the best possible experiences to their communities, reduce change
failure rates, and remove bugs before they become costly mistakes
that negatively impact their brand and reputation.

### Gaming Industry

-   [Bungie - Destiny](https://www.bungie.net/en/News/Article/11643/7_the-destiny-beta)
-   [Square Enix - FINAL FANTASY XIV](https://www.finalfantasyxiv.com/preparebeta/index_en.html)
-   [Blizzard](https://us.battle.net/support/en/article/7064)
-   [Valve](https://developer.valvesoftware.com/wiki/Category:Beta_Releases)

### Applications & Frameworks

-   [Chrome](https://www.google.com/chrome/beta/)
-   [EmberJS](https://emberjs.com/releases)
-   [React](https://reactjs.org/blog/2015/08/03/new-react-devtools-beta.html)
-   [Slack](https://slack.com/help/articles/226192087-Join-Slack%E2%80%99s-desktop-app-beta-program)
-   [JetBrains](https://www.jetbrains.com/pycharm/nextversion/)
-   [Adobe](https://blog.adobe.com/en/publish/2020/03/19/introducing-public-beta.html#gs.jqrh12)

### Operating System

-   [Windows](https://insider.windows.com/en-us/)
-   [Android](https://www.google.com/android/beta)
-   [Ubuntu](https://9to5linux.com/ubuntu-20-10-beta-is-now-available-for-download)

---

**Terminology Note:**
Nightly builds, alpha programs, beta programs,
canary releases, etc all relate to a prerelease program. Different teams
use different naming conventions for their prereleases. Usually, these
various names are indicative of different stages of a release. For
example, nightly builds tend to be builds that happen daily and are
highly unstable whereas a canary build is a more polished version but
still more temperamental than a beta release>

---

## How To Start Your Own Beta Program

### Quick Start

Seeing the mega, large, and mid cap's beta programs can be intimidating
but adding prereleases to your workflow and gaining from the benefits can
be done quickly by single contributors. Assuming you're using GitHub for
storing your software project, you can get started by tagging your git
releases using semantic versioning and add a `-beta` to it to indicate a
beta release. You can then socialize the release to your teammates or
community. It's important to use prerelease notation to inform end-users
that a release is not stable, meaning there is a higher probability for
unexpected things to happen. Doing so helps to protect your reputation
and the confidence users have in your standard releases.

For explicit alignment with the semantic specification, here's how to
define prereleases in your versioning:

> A prerelease version MAY be denoted by appending a hyphen, and a series
> of dot separated identifiers immediately following the patch version.
> Identifiers MUST comprise only ASCII alphanumerics and hyphens
> [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST
> NOT include leading zeroes. Prerelease versions have lower precedence
> than the associated normal version. A prerelease version indicates
> that the version is unstable and might not satisfy the intended
> compatibility requirements as denoted by its associated normal
> version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92,
> 1.0.0-x-y-z.–.
>
> > [Semantic Versioning Part 9](https://semver.org/#spec-item-9)

If you don't want to worry about managing prerelease versioning, you
can add the Next Release GitHub plugin to your build. Once it's added,
you can simply add a beta tag to your release, and we'll automatically
handle versioning of your prereleases and help you communicate them
to each of your stakeholders.

### Gathering Feedback From Your Program

Once you've managed your builds' versioning, you can start building out
your early access program. Deployment, enrollment, and notifications are
three foundational elements to making your program a success. This is why
we suggest asking yourself where you will deploy and host your prerelease
builds, how you will get people to use them, and how you will manage
feedback. There are thousands of options for these questions, and the
answers will depend on your product, community, and bandwidth. If you'd
like to brainstorm or need someone to bounce ideas off of, feel free to
send us a note, and we'll be happy to jump on a call.

For the purposes of this post, we'll assume you're developing an image
analysis package for python that is used by other developers who network
on Twitter and Reddit. Since your communities already use Twitter and
Reddit to socialize, you can reuse these platforms to notify users of
new beta releases, solicit feedback on the release, and dig deeper into
issues via direct messaging. You can use your GitHub repository to host the
prerelease packages and automatically publish them to PyPI for easy pip
installation via one of the [Python Foundation's GitHub Actions](https://packaging.python.org/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows/).

This approach can be reused for most software package use cases and can be
expanded on for consumer-facing applications. You might use feature flags and
your internal service desk for managing deployments and feedback.

### Additional Information

If you'd like more information on prereleases, setting up your pipeline to
support them, or general release management, feel free to reach out.
