---
path: "/blog/managing-dependencies-with-release-notes"
title: "Managing Dependencies Using Release Notes & Versioning"
subtitle: "Identifying Changes That Impact You"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-07-09T18:33:46+10:00
---

We all rely on third-party packages to build our software products.
Whether those dependencies are internal components or open-source modules,
threats, and changes have the same impact on our projects. When they are
updated, we need to quickly understand the impact to our project and what
changes are required. That way, we can integrate changes that fix bugs,
resolve security issues, and add new functionality. Identifying the changes
that impact your project and the fact that [75% of all vulnerabilities reside
in indirect dependencies](https://www.zdnet.com/article/more-than-75-of-all-vulnerabilities-reside-in-indirect-dependencies/)
is why it's essential to gauge the maturity of
packages before integrating them by ensuring they have release notes,
versioning, and maintainable code.

Managing dependencies has become more accessible in recent years with
improvements in virtualization technology such as docker and enhancements
to language package management solutions like
[pip](https://pip.pypa.io/en/stable/user_guide/) and [yarn](https://yarnpkg.com/). Unfortunately,
these improvements do not protect you from modifications to unversioned
packages. Once you eliminate unversioned packages from your requirement tree,
you can utilize your package manager to ensure your application uses the
version of a dependency you expect by freezing your version requirements to
a specific minor or patch version. Freezing version requirements reduces the
chances of a breaking change coming in and trashing your build.

For example, python's main package manager, pip allows you to define
a requirements file that looks like the following:

**requirements.txt**

```regexp
Django>=2.2.13, <2.3.0
redis>=3.3.11, <4.0.0
```

This example sets the installation version for Django at 2.2.13 and allows
for patch changes to be used. Redis is set to 3.3.11 and provides for any
patch and minor update to be applied. JavaScript has further enhancements in
yarn where you can define
[resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) in your package.json file.

**package.json**

```json
{
    "dependencies": {
        "ember-concurrency-decorators": "1.0.0"
    },
    "resolutions": {
        "ember-concurrency-decorators/ember-concurrency": "1.1.3"
    }
}
```

Resolutions allow you to call out what version of a sub-dependency to utilize
explicitly. Setting a resolution enables you to do things like force an update
of a sub-dependency to adopt a security update without having to wait for a
change from the primary dependency to achieve it.

Package managers paired with bots like [Dependabot](https://dependabot.com/) automate a lot of the
legwork to track dependencies and integrate updates to packages required
by your project. These bots will track version changes and release notes
published by the projects you rely on and open up pull requests on your
behalf to alert you of changes. You can then roll these pull requests
into your release notes to allow teams that depend on your project to see
what changes you've made in your latest release.

While there are multiple bots for tracking updates to dependencies, there
is also a vibrant community of dependency analysis tools that track license
compliance and security threats for you. These tools monitor your project's
dependencies to ensure that contributors are not using licenses that break
your organization's compliance while also scanning threat databases for
emerging risks. They also follow version changes and release notes indicating
fixes to security issues and alert you to the changing landscape of your
project's threat profile.

To benefit from these tools, you need to ensure that your dependencies
are maintained or maintainable, have release notes, and version their
modifications. Without meeting these requirements, it's easy to fall
into a situation where updates to dependencies happen without your knowledge
or are misrepresented, causing your customers' issues.
