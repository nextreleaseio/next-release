---
path: "/blog/calculating_change_failure_rate"
title: "Calculating Change Failure Rate"
subtitle: "Measuring How New Tools & Processes Affect Issues Making it to Production"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-10T16:33:46+10:00
---

How many changes until an issue makes it through to production?
It's going to happen no matter what your test coverage is or how many
static checks and peer reviews you put the code through. Bugs happen to
the best of us and help drive change within teams and organizations. They
can highlight where we have vulnerabilities and help create ideas to
improve our systems. Root causing them helps us to reduce the rate that
they make it out into production, and new tools and processes evolve out
of this cycle to solve new and complicated challenges we encounter. To
figure out how these new tools or processes are impacting us, we need to
track our change failure rate.

## Categorize Changes

To determine your change failure rate, you'll need some approach to track
how many of your changes result in patches or issues. You could use a
ticket manager, but in my experience, unless you have a pretty sophisticated
setup where you link commits and PRs to tickets, the tickets don't end up
getting closed effectively. Also, tickets tend not to track the actual
number of changes or the actual number of bug fixes deployed to production.
I've found it's better to shift the labeling of changes and fixes further to
the left, putting the responsibility on the people committing changes, when
they are committing changes.

Most code collaboration platforms like GitHub have a labeling feature,
where you can add labels to pull requests indicating what type of changes
are being proposed. Using labels is the best way I've found to drive
involvement from developers, limit overhead, and avoid human errors, which
helps improve the accuracy of the measurements.

I've tried tracking commit message strings like "fix" and "patch", and this
can work + has the added benefit of not relying on a version control
systems (VCS) or one of their supporting platforms. However, it scales
poorly without a lot of regex or AI, and getting everyone to use the same
words and syntax is a headache. Secondly, a single commit is not always
representative of a change that makes it to production. What's pushed out
to production might be (and most likely will be) multiple commits.

Using pull request labeling, you'll want some distinction between a pull
request that is a change request and one that captures multiple change
requests into a release that merges into the production branch of the
platform. That way, you can track what changes are going out to production
rather than adding noise of commits or pull requests that fix things before
they are actually deployed to production.

I'd suggest starting with at least 4 different labels:

<table>
<tr>
  <td style="font-weight: bold;">Label</td>
  <td style="font-weight: bold;">Change Type</td>
</tr>
<tr>
  <td>Breaking Change</td>
  <td>A backward-incompatible change</td>
</tr>
<tr>
  <td>Feature</td>
  <td>New functionality that is backward compatible</td>
</tr>
<tr>
  <td>Bug</td>
  <td>Backwards compatible bug fixes</td>
</tr>
<tr>
  <td>Release</td>
  <td>A group of changes that will be merged into your production system</td>
</tr>
</table>

You may want to add some more like "Enhancement" or "Infrastructure",
but for initial training, I've found it easiest to break things into these
categories and then work with developers to refine as your team needs,
rather than over-optimizing at the outset.

## Create a Hotfix Category

Once you know what types of changes your team is making, and which ones
are merging into production, you'll need the number of issues that occur
during that release. You can get fancy and utilize your application performance
monitoring (APM) tool to track issues identified or create releases in your
project management tool and link bugs to it. In my experience, these approaches
result in quite a bit of noise. You can reduce that noise with more advanced
APM implementations or project management processes, but I suggest taking the
same approach of labeling pull requests. Branch naming can be another okay
solution, but again it has trouble scaling for similar reasons to tracking
commit messages.

You can utilize the same "bug" label we discussed above, but that approach
also has some limitations. For example, as we noted above, there are times
when bug fixes are made before changes merge into production. If this occurs,
the deployment system is working as intended, and that shouldn't go against
our change failure rate. That's why you might want to add a "hotfix" label
that team members add whenever they are working on a fix for a bug that made
it into production.

## Calculating Change Failure Rate

Once you have the labels in place, and the team using them, doing the
calculation becomes possible. To do the equation across the entire history
of your project in Python, you'll do:

```
round((hotfixes / (breaking-changes + features)) * 100.0, 1)
```

Once you have this, you can then work your way towards tracking what your
change failure rate is over time and how it changes from release to release.
Doing so allows you to monitor how inserting a new tool or process into your
team's development cycle is helping, hurting, or not making a difference in
the rate of issues that are making it into production.

## Leaderboard Standings

Knowing where others stand can help you understand where your team is
at and where you might want to aim next. Google and the DevOps Research &
Assessment organization put out a study each year based on data collected
from thousands of professionals worldwide. In it teams fall into various
tiers depending on their performance. Below is the breakdown for change
failure rate.

<table>
<tr>
  <td style="font-weight: bold;">Tier</td>
  <td style="font-weight: bold;">Change Failure Rate</td>
  <td>% of Teams in Tier</td>
</tr>
<tr>
  <td>Elite</td>
  <td>0-15%</td>
  <td>20%</td>
</tr>
<tr>
  <td>High</td>
  <td>0-15%</td>
  <td>23%</td>
</tr>
<tr>
  <td>Medium</td>
  <td>0-15%</td>
  <td>44%</td>
</tr>
<tr>
  <td>Low</td>
  <td>46-60%</td>
  <td>12%</td>
</tr>
</table>

For the complete study and methods utilized check out
[Google's State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf).
Also the percentages equal 99% due to rounding.

## Conclusion

Understanding the change failure rate of your system helps you to optimize
what happens pre-deployment, helping to eliminate mistakes and build more
maintainable code. However, it does not help you measure how quickly you can
identify a bug made it into production or how quickly you can resolve it
once you identify it. To measure this, you'll want to calculate your [mean
time to recovery and duration to incident identification]().
