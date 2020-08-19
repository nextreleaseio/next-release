---
path: "/features/pull-request-dependencies"
title: "Pull Request Dependencies"
subtitle: "Keep every team up-to-date on every release"
date: 2018-11-18T12:33:46+10:00
image: ../../src/images/features/programming-approve-check.png
items:
    - Use GitHub Check Runs to track pull request dependencies
    - Convert checklists into red/green states in Github
    - Track needed pull requests across repositories
---

How many pull requests require a matching pull request, updating some documentation, or getting feedback from other stakeholders?

Next Release will generate custom check runs for your pull requests dependencies for other pull requests or custom checklists, bringing the visibility and feedback of continuous integration to everything your pull requests depend on.

#### Pull Request Dependencies

Do you write “don’t merge without backend updates” in your pull request descriptions? Next Release’s pull request dependencies let you create an automatically-updating check run that turns your PR green when the pull requests you specify get merged in.

#### Convert Checklists to Check Runs

Do you want to enforce that checklists get completed before merging a PR? For things like updating documentation, manual QA, getting stakeholder approval, you can create a custom checklist and your PR will fail until they are all completed.

#### How it Works

Drop a quick line in your pull request ([or setup a custom pull request template for your repo](https://docs.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates#pull-request-templates)) to enable these checks.

```
This pull request does a lot of things, but needs some help!

#### Checklist
- [ ] Update Shawn in Sales
- [ ] Test functionality in review site
- [ ] Ensure tests are updated
- [ ] Update knowledge base with new features


#### Requires
- our-org/backend-repo/pull/12345
```

Next Release will automatically create check runs in GitHub providing everyone on the PR with instant feedback about the
status of these checks.
