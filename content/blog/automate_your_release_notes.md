---
path: "/blog/automate_your_release_notes.md"
title: "Automate Your Release Notes"
subtitle: "All You Need To Know About Automating Release Notes"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/automate_release_notes.png"
date: 2020-04-11T12:33:46+10:00
---

There are many benefits from maintaining a changelog, like increasing customer feedback, condensing
internal update cycles, and having a record of which changes are in what environments.

The release note space is full of articles, packages, and platforms that
[help you keep a changelog](https://keepachangelog.com/en/1.0.0/).
There are many release note generators that serve various needs as well as many companies who maintain
automatic release note creators & release pipelines internally to meet their niche requirements.

To help cut through the noise, we've compiled a list of what's out there. If you find something we
don't have listed, let us know so we can update our list.

We want you to pick the right solution for your team, so if you have questions about different
solutions, please ask us, we've used many of these solutions in the past and are happy to let
you know what limitations and roadblocks we've seen.

If you want automatic release notes and don't want to maintain them yourself, you can [get Next
Release integrated for free with a few button clicks by signing up](https://my.nextrelease.io/). If you'd like support with
your optimizing your developer operations please pick a time to chat that works for you on our
[calendar](https://calendly.com/nextrelease-devon/developer-operations-optimization-introduction).

### DIY Articles on Automating Release Notes

If you're a do it yourselfer, there are plenty of articles to help you get started.
Here are a few to get you on the right track to build an automatic release note
generator that follows some of the industry's best practices.

-   [The New York Times: Open Source: Automating Release Notes in GitHub](https://open.nytimes.com/open-source-automating-release-notes-in-github-dd08f964465c)
-   [University of York: Digital Team - Automated Release Versioning](https://university-of-york.github.io/guides/automated-versioning/)
-   [Automating Semantic Versioning for any Project by Matthew Hodgkins](https://hodgkins.io/automating-semantic-versioning)
-   [The Code Barbarian: Keeping a Changelog in Node.js](https://thecodebarbarian.com/keeping-a-changelog-in-nodejs)
-   [Hackernoon: These 6 essential tools will release, version, and maintain your NPM modules for you](https://hackernoon.com/these-6-essential-tools-will-maintain-your-npm-modules-for-you-4cbbee88e0cb)
-   [How to automate your releases, versioning, & release notes like a boss](https://medium.com/faun/automate-your-releases-versioning-and-release-notes-with-semantic-release-d5575b73d986)
-   [The way to fully automated releases in open source projects](https://medium.com/@kevinkreuzer/the-way-to-fully-automated-releases-in-open-source-projects-44c015f38fd6)
-   [How to automate your product's release notes like a badass](https://toucantoco.com/en/tech-blog/tech/release-notes)
-   [Microsoft: How to automate your release notes](https://cloudblogs.microsoft.com/opensource/2018/09/06/how-to-automate-software-release-notes/)

### Automatic Release Note Creators

-   [auto](https://intuit.github.io/auto/home.html)
-   [automatic-release](https://github.com/dominique-mueller/automatic-release)
-   [Automated Release Notes for Jira](https://marketplace.atlassian.com/apps/1215431/automated-release-notes-for-jira?hosting=cloud&tab=overview)
-   [automatic-release-notes](https://www.npmjs.com/package/automatic-release-notes)
-   [bump](https://www.notion.so/Competitors-bd2460f52a3b45c49626340aab6c19a8#c44e0365aa154d3498e70cb2443b32ec)
-   [generate-changelog](https://www.npmjs.com/package/generate-changelog)
-   [GitReleaseNotes](https://github.com/GitTools/GitReleaseNotes)
-   [git-release-notes](https://www.npmjs.com/package/git-release-notes)
-   [github-changelog-generator](https://github.com/github-changelog-generator/github-changelog-generator)
-   [github-release-notes (gren)](https://www.npmjs.com/package/github-release-notes)
-   [Release Drafter](https://github.com/marketplace/actions/release-drafter)
-   [Released](https://releasedapp.com)
-   [release-it](https://www.npmjs.com/package/release-it)
-   [releasenotes](https://github.com/posabsolute/releasenotes)
-   [Release Notes](https://release-notes.com/)
-   [release-notes-generator](https://github.com/opendatakit/release-notes-generator)
-   [release-notifier-action](https://www.notion.so/Competitors-bd2460f52a3b45c49626340aab6c19a8#8a882605ffd94b8fb5f9c172ab07a7fd)
-   [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)
-   [Release Notes Generator](https://github.com/semantic-release/release-notes-generator)

### Commit Guidelines

Some teams focus on making each commit message follow a style guide or specific format.
There are a handful of guides and standards that you can utilize instead of implementing
your own if you believe it benefits your team.

-   [Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
-   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
-   [Git Commit: How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
-   [OpenStack GitCommitMessages](https://wiki.openstack.org/wiki/GitCommitMessages)

We recommend that you avoid this approach, and instead use a feature or use case level
identifier such as a branch, pull request, or ticket from your project management system.
We recommend against it because:

-   Tracking to the commit results in overly technical release notes that are no different
    than publishing a commit log ([Friends don't let friends dump git logs into changelogs](https://keepachangelog.com/en/1.0.0/)).
-   A single commit rarely encompasses a full bug fix, feature, or breaking change.
-   Although good commit formatting practices are important, adding commit level audits can place
    an undue burden on developers

### Commit Level Audits

Depending on the granularity you're looking for in your release notes, there are a couple of
packages to help you enforce commit level formatting. These are great if your team sees every
commit as something they would like noted in a release note. However, as stated above, we'd
caution against implementing these for your team without good reason.

-   [Commitizen](https://github.com/commitizen/cz-cli)
-   [Commitlint](https://github.com/conventional-changelog/commitlint)
-   [Commit-Analyzer](https://github.com/semantic-release/commit-analyzer)

### Release Management Workflows

When building out an automatic release note generator, the workflow you use for releasing
software has a significant impact on when and how you cut release notes. If you have a simple
workflow such as OneFlow, you might only have a single release note feed where you generate
a new release note, each new feature. If you use a more complex workflow and have multiple
environments you're deploying changes to, you'll probably want to be cutting release notes
each time a new version of the software deploys into any of the environment. That way, you
can track what updates are where and notify the appropriate parties that need to take action
on that new release.

-   [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
-   [GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html)
-   [GitLab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html)
-   [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

### Versioning

There are many things to weigh when selecting how to version your software. What workflow
you're using, how many environments do you have, what is the standard for the language you're
developing in, how do other groups in your organization version things, and many others
should all factor into what you choose.

-   [Semantic Versioning (SemVer)](https://semver.org/)
-   [Calendar Versioning (CalVer)](https://calver.org)
-   [0-based Versioning (ZeroVer)](https://0ver.org/)
-   [Python Version Identification & Dependency Specification](https://www.python.org/dev/peps/pep-0440/)

### Examples of Release Notes

Lastly, here are a few examples of different release note variations. One big takeaway
is to know who the audience of your release notes is. If you're targeting mainstream
customers, you'll want to ensure you're focused at a high level about how this release
impacts them and provide images, videos, and other flare that develops your brand. If your
target audience is developers, it's better to keep it minimalistic, limiting to bullet
points indicating what breaking changes, improvements, new features, and bug fixes the
release includes.

-   [Stripe API](https://stripe.com/docs/upgrades#api-changelog)
-   [Slack Client](https://slack.com/help/articles/115004846068-slack-updates-and-changes)
-   [Slack API](https://api.slack.com/changelog)
-   [Django REST Framework](https://www.django-rest-framework.org/community/release-notes/)
-   [Django](https://docs.djangoproject.com/en/2.2/releases/)

If you'd like release notes like these, you can sign up for our [Performance Notes](https://www.nextrelease.io/performance_notes), and we'll
help you and your team improve the throughput and stability of your pipeline.
