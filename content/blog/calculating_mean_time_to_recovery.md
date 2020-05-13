---
path: "/blog/calculating_mean_time_to_recovery"
title: "Calculating Mean Time To Recovery"
subtitle: "How Quickly Does Your Team Recover From Issues"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-13T07:33:46+10:00
---

Who do you let merge changes into production? Are you confident enough
to allow someone new add changes on their first day joining the project?
Does it depend on who the individual is? Getting to the level of confidence
in your developer operations where you will let anyone on the team make
modifications to production is a long journey. It requires periodic
backups of data, versioned rollback capability, and a stack of other
tools and processes that will let you recover quickly when a change
creates an issue. Being able to recover from problems effectively
is a key measure of the health of your developer operations.

## Identify Incident

To track your team's ability to recover from an issue requires a few metrics.
First of which is how quickly you can identify the bug after it makes
it into production. Any issues you're able to resolve before that are
better measured by your
[change failure rate](https://www.nextrelease.io/blog/calculating_change_failure_rate),
which measures how many issues make it into production to begin with.

How long it takes you to identify an issue impacts how many customers
are affected by the issue. To identify problems quickly, you'll want
to have a mix of human and automated monitoring solutions in place that
you can gather initial timestamps from that indicate when the team found
the issue. I'd recommend having a minimum of two systems in place, one
being customer support and another being an application performance
monitoring (APM) tool.

Customer support can be as simple as a contact form on your website, a
customer accessible issue collector on GitHub, or the ability to direct
message you on Twitter. Having multiple ways to contact you has its
strengths and weaknesses and can create headaches for tracking down
when the team first heard of the incident, so you'll want to weigh
what makes the most sense for your organization.

There are a slew of tools out there that you can use to catch production
incidents before customers realize they exist. Using an APM, like [Sentry.io](https://www.sentry.io),
ensures that when an unhandled exception occurs, you're informed of the problem
and have the context to be able to start fixing it. Some are more
feature-rich than others, and adding a monitoring platform that can
also monitor your data stores, the third party systems you rely on,
and security threats like [DataDog](https://www.datadoghq.com/)
are worth taking for a test run.

If you already have monitoring tools in place, I'd recommend looking
at the chaos engineering tools out there like [Gremlin](https://www.gremlin.com/)
to produce unexpected situations before customers or force majeure create them.
Most of the logging tools out there are easy enough to integrate, have
some concept of a free plan to get started, and are worth allocating
budget towards once you validate they fit your team's needs.

The problem with both of these systems is that they create a lot of noise.
There's a non-trivial amount of overhead associated with linking bug
tickets to the initial incident reports, determining which incident
notification identified the issue first and whether there was an incident
report for the problem. Then there's additional overhead associated with
rolling code changes up to a specific bug ticket, and one patch may or
may not resolve the identified issue. This overhead balloons as bikeshedding
ensues figuring out whether the original issue ticket should be reopened
based on the regression or if a new issue ticket should replace it.

Avoid wandering into that nightmare until you have a more maintainable
way of getting an approximation of what your mean time to recovery (MTTR) is.
Two items are less accurate but much easier to monitor and track. One is
when reversions or rollbacks occur. The other is taking the timestamp of
the first commit made that is working towards getting a hotfix into
production. These two values won't give you a holistic view but will
get you 80% of what you need to figure out when your team first identified
the issue. For the other 20% of cases, you can create a manual log of when
you first identified the issue, and when you resolved it. After you have
that baseline then you can determine if it's worth your time to pursue
optimizing the accuracy of when the team first identifies incidents,
programmatically.

## Recovery

Once your team has identified an incident, how long does it take you to
recover from it? Determining when your team resolved an issue has similar
challenges as pinpointing when they recognized the event. Avoid the
complications if you're just getting started with measuring MTTR. Use
the timestamp of when a reversion or rollback completed if no
development was necessary. If development is required to fix the problem,
use the timestamp associated with the hotfix rolling out to production
as the marker for the issue resolution.

## Release Zero

Once you're able to measure how quickly you identify issues and recover
from them, you'll need a way to figure out which release introduced the
issue into production. Finding the version can be as simple as looking
at the latest production release, but if you're deploying tens or
hundreds of releases a day more than likely, you'll need to do some
investigative work to determine which release introduced the issue.
Whether it's cross-referencing APM identified code snippets with releases
or looking through release notes to see which versions affected the
impacted system, you'll need to figure out what time the release that
caused the issue merged into production.

## Calculating

Once you have these three measurements, we can calculate
your MTTR and one of the key contributors to it,
mean time to incident identification.

Using Django you could implement the function to calculate mean time to
recovery and mean time to incident identification like this:

```
from datetime import timedelta
from django.db import models

class Incident(models.Model):
    time_of_identification = models.DateTimeField()
    time_of_recovery = models.DateTimeField()
    time_of_release_zero = models.DateTimeField()

def mean_time_to_recovery():
    downtime = timedelta(0)
    all_incidents = Incident.objects.all()
    for incident in :
        downtime += incident.time_of_recovery - incident.time_of_release_zero

    return downtime / all_incidents.count()

def mean_time_to_identification():
    downtime = timedelta(0)
    all_incidents = Incident.objects.all()
    for incident in :
        response_time += incident.time_of_recovery - incident.time_of_identification

    return response_time / all_incidents.count()

```

These are naive approaches to taking a baseline but should give you
a figure to start working with. Once you have incidents tracked,
you can improve the benchmarks based on your specific needs.

## Leaderboard Standings

If you're wondering how your team stacks up against others when it comes
to recovering from issues, according to the State of DevOps 2019,
20% of teams are elite performers, 23% are high performers, 44% are
medium performers, and 12% are low performers. These percentages
are based on their performance in all [4 key metrics]() of DevOps performance.
Regarding ability to recover from an incident here's how other teams are
staking up:

<table>
<tr>
  <td style="font-weight: bold;">Tier</td>
  <td style="font-weight: bold;">Time to restore service</td>
</tr>
<tr>
  <td>Elite</td>
  <td>Less than one hour</td>
</tr>
<tr>
  <td>High</td>
  <td>Less than one day</td>
</tr>
<tr>
  <td>Medium</td>
  <td>Less than one day</td>
</tr>
<tr>
  <td>Low</td>
  <td>Between one week and one month</td>
</tr>
</table>

If you'd like the complete breakdown or the methods of the study,
check it out in
[Google's State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf).

## Conclusion

Now that you can take a baseline of your mean time to recovery and mean
time to incident identification, you can see how new tools and processes
you introduce impact these key measurements. Depending on your team, you
might have enough incidents occurring that you can use your them to perform
benchmarks. If you don't have many incidents, then I would recommend
developing a strategy to inject incidents into the system periodically
to help identify areas that can be improved and to avoid getting caught
flat-footed when an incident happens next.
