---
path: "/blog/calculating_change_failure_rate"
title: "Calculating Change Failure Rate""
subtitle: "Measuring How New Tools & Processes Affect Issues Making it to Production"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-10T16:33:46+10:00
---

How many changes till an issue makes it through to production? It's going to happen
no matter what your test coverage is or how many static checks and peer reviews
you put the code through. Bugs happen to the best of us and help to drive change within
teams and organizations. They can highlight where we have vulnerabilities and help
create ideas to improve our systems. Root causing them helps us to reduce the rate that they
make it out into production and new tools and processes will come out of this cycle
to solve new and complicated challenges we run into. To figure out how these
new tools or processes actually improve our change failure rate is what you'll
want to track.

To determine your change failure rate you'll need some approach to tracking
how many of your changes result in patches or issues. You could use a ticket
manager but in my experience unless you have a pretty sophisticated setup where
commits and PRs are linked to tickets the tickets don't end up tracking to the
actual number of changes that are occuring, and the actual number of bugs being
resolved. I've found it's better to shift the tagging of changes and fixes
further to the left, put the responsibility on the people commiting
changes, when they are committing changes.

This can be done in most code collaboration platforms like GitHub, where you can
add labels to pull requests indicating what type of changes are being proposed.
This is the best way I've found to drive involvement from developers, limit
overhead, and avoid manual error which helps improve the accuracy of the
measurements.

I've tried tracking commit message strings like "fix" and "patch"
and this can be made to work + has the added benefit of not relying on a
version control systems (VCS) or one of their supporting platforms. However,
it scales poorly without AI and getting everyone to use the same words and syntax is a
headache. Secondly, a single commit is not always representative of a change that
will be made to production. What's being pushed out to production might be
(and most likely will be) multiple commits.

Using pull request labeling you'll need some distinction between
a pull request that is a change and one that is being merged into the production
branch of the platform. That way you can track what changes are going out to
production rather than adding noise of commits or pull requests that fix things
before they are actually deployed to production.

I'd suggest starting out with at least 4 different labels:

<table>
<tr>
  <td style="font-weight: bold;">Label</td>
  <td style="font-weight: bold;">Change Type</td>
</tr>
<tr>
  <td>Breaking Change</td>
  <td>A backwards incompatible change</td>
</tr>
<tr>
  <td>Feature</td>
  <td>New functionality that is backwards compatible</td>
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

You may want to add some more like "Enhancement" or "Infrastructure" but
for initial training I've found it easiest to break things into these
categories and then work with developers to refine as your team needs, rather
than over optimizing at the outset.

Once you know what types of changes are being made, and which ones are
merged into production, you'll need the number of issues that occur during
that release. You can get fancy and utilize your APM to track issues identified or
create releases in your project management tool and link bugs to it, but in
my experience this approach results in a lot of noise. That noise can be reduced
with more advance APM implementations or project management processes, but I suggest
taking the same approach of labeling pull requests. Branch naming can be another okay
solution but again it has trouble scaling for similar reasons to tracking commit
messages.

You can utilize the same "bug" label we discussed above but it also
has some limitations. For example as we noted above there are times when bug
fixes are made before changes are pushed out to production. If this occurs the
deployment system is working as intended and that shouldn't go against our
change failure rate. That's why you might want to add a "hotfix" label
that team members add whenever they are working on a fix for a bug that
made it into production.

Once you have the labels in place and the team using them doing the calculation
becomes possible. To do the equation across the total history of your project
in Python you'll do:

```
round((hotfixes / (breaking-changes + features)) * 100.0, 1)
```

Once you have this you can then work your way towards tracking what your change
failure rate is over time and how it changes from release to release. Doing so
will enable you to monitor how inserting a new tool or process into your
team's development cycle is helping, hurting, or not making any difference
the rate of issues that are making it into production.

Understanding the change failure rate of your system will help you to
optimize what happens pre-deployment. Helping to eliminate mistakes
and build more maintainable code. However, it will not help you measure
how quickly you can identify that a bug made it into production or
how quickly you can resolve it once you identify it. To measure this
you'll want to calculate your mean time to recovery and duration to
incident identification.
