---
path: '/kb/setup-next-release'
title: 'Setup Next Release'
slug: 'setup'
section: 'Get Started'
---

###Authorize GitHub
Initial setup of Next Release requires you to authorize your personal GitHub account or an organization GitHub account that you manage. You will be quickly navigated away from the Next Release web app, to GitHub’s authorization interface to complete this step. Authorizing Next Release will enable us to access pull requests, labels, and general repository information necessary to automate the generation of your team’s release notes. If you’re interested in what permissions next release requires and what we use them for please checkout our Permissions & Security page which outlines the information in detail.

### Select Repository
Once you’ve authorized Next Release for your GitHub account you’ll be redirected back from GitHub’s site to the Next Release application. Upon returning you’ll see a list of your repositories that are associated with the accounts you authorized access for. In this step select the first repository you’d like to configure to have automated notes generated for.

### Configure Environment
After selecting the repository you want to configure release notes for, you’ll land on a page that lets you configure how you deploy software for that repository. There are currently two options, one where you have a staging environment that changes are loaded into prior to deploying to production, and another where you use a single branch to stage changes and then cut releases for deployment from.


### No Staging Environment
This type of configuration is common for open source projects and small teams that do not have a staging environment. This configuration requires that you select a single branch where all of your changes are merged into. We will use the pull requests that are opened up against the selected branch to generate your release notes.

### Environment With Staging Environment
Staging environment configurations are common for larger organizations that have a dedicated staging area that replicates their production environment. You’ll need to select both the branch associated with your staging area as well as the branch linked to your production environment to finish this setup. We will use the pull requests that are opened up against the selected staging branch to compile your release notes and by default open up a pull request between the staging and production branch to track upcoming releases.


### Free Personalized Onboarding & Migration Assistance

We love helping teams get started with automating their release notes as well as making it seamless to migrate existing releases & their notes. Regardless of the reason, we’re more than happy to help you and your team start benefiting from Next Release. Some of our services include:

- White gloved import of past releases & notes
- Ensure the versions Next Release is creating for you match your existing structure & start where you’re current version left off
= Personalized repository setup and configuration

Please contact us if you need any assistance or have any questions. Even if you work through setup on your own and find something you need assistance with our team is here to help.