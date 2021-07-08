---
path: "/blog/socialize-your-releases-on-github"
title: "Socialize Your Releases on GitHub"
subtitle: "Managing GitHub Releases"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2021-03-20T16:33:46+10:00
---

GitHub is the social network for developers.
From following repositories your team uses daily to
developers working on technology you're passionate about,
GitHub provides a place to engage on code.

The best way to drive engagement on your projects is to
post your Release Notes to GitHub on every release.

<div class="flex">
    <div class="w-1/2 mr-12">
        <img alt="Nextjs" src="../../src/images/blog/github_releases/nextjs_1102canary7_release.png">
        <h4 class='text-center'><a class='text-sm' href='https://github.com/vercel/next.js/releases/tag/v11.0.2-canary.7'>Nextjs v11.0.2-canary.7 Release</a></h4>
        <h5 class='text-center'><a class='text-xs' href='https://github.com/timneutkens'>timneutkens</a></h5>
    </div>
    <div class="w-1/2 mr-12">
        <img alt="Openzeppelin Contracts Upgradeable 4.2.0 Release" src="../../src/images/blog/github_releases/openzeppelin_420_release.png">
        <h4 class='text-center'><a class='text-sm' href='https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/releases/tag/v4.2.0'>Openzeppelin Contracts Upgradeable 4.2.0 Release</a></h4>
        <h6 class='text-center'><a class='text-xs' href='https://github.com/frangio'>frangio</a></h6>
    </div>
</div>

This keeps your community updated on recent developments and
lets them provide feedback on the changes. Releases are
so important that GitHub allows users to filter their notifications
to only alert them about new releases.

<div>
    <img alt="GitHub Watch Releases" src="../../src/images/blog/github_releases/watch_github_releases.png">
    <h4 class='text-center'><a href='https://github.com/vercel/next.js'>Nextjs Watch Releases</a></h4>
</div>

GitHub walks you through the manual steps on how to create a GitHub Release for your repository
in their [Administering A Repository Documentation](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/about-releases).
Instead of manually figuring out what version your next
release is, creating a git tag, compiling your release notes,
and inputting them into the GitHub Release form you can
configure your Next Release project to do it for you
automatically each time you cut a release.

Once you've linked your GitHub account with Next Release
we automatically enable GitHub Releases. We use
[git tag](/blog/mark-releases-with-git-tags)
to mark your release with the appropriate version,
take your automatically generated release notes, and
use both the create a GitHub Release that shows up
in everyone's GitHub activity stream that has permission
to view your repository.

If you'd like to tweak your
GitHub Release settings, navigate to your Next Release
project settings where you can enable / disable the feature
and configure the formatting for the title used
to create your GitHub Releases.

![GitHub Releases Project Configuration](../../src/images/blog/github_releases/github_releases_configuration.png)
