---
path: "/blog/measuring_lead_time_for_change"
title: "Measuring Lead Time For Change"
subtitle: "How Quickly Can You Get an Experiment Running"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-13T12:33:46+10:00
---

Measuring lead time for change is one of the more difficult
[DevOps key metrics](https://www.nextrelease.io/blog/getting_started_with_devops)
to measure due to the infinite number of ways teams ideate changes,
prioritize them, and implement them. Your goal should be to capture
the first point that a team member defines a change to whatever its
version of a minimally viable solution is, gets in front of an end-user.
That way, you can understand what areas are creating the most wasted effort,
adding the most overhead, and causing the most significant drag on delivering
value to customers.

## Starting Points

### Ticket Manager

Ticket management tools are notorious for becoming graveyards of tickets with
backlogs filled to the brim with fixes to papercuts and features planned for a
year. If you're doing this, you're falling into a waterfall trap. If you're
developing out of a backlog, then I'd suggest using the created date of tickets in
that backlog as the starting time for lead time for a change.

Do **not** use the time that you start a sprint because this does not capture when
you have ideas sitting on the shelf for months, that collect dust, distract people
from critical priorities, and will probably be outdated by the time you get to them
anyways. If the newest ticket in your backlog is taking longer than a month to ship
out, then your backlog is too long.

### Requirements Definition

Another starting point for organizations is a requirements definition phase
where an individual or a team attempts to capture every requirement for their
feature in a document. The feature owner hands this document off to an internal
or supplier's development team who then digest the requirements, provide quotes
on them, and upon agreement of what they mean, builds them out.

I've seen this process be as quick as a day and as long as three years. If your
teams follow a process like this, then use the day the feature owner created the
requirements document as the starting date. If you're beyond a week to push a
change from anywhere in your organization, I'd also recommend tracking how long
the duration of each stage is. That way, you will be able to analyze which areas
are taking the longest and focus efforts where you believe you can make the most
significant impact the fastest.

### Commits

If you do not use a ticket manager or you only use it for communicating
what you're currently working on, then you can use the first commit associated
with a change your team is making as the starting timestamp.

## Release Timestamp

Determining when the change is released is simpler to figure out.
With A/B testing and other segmenting techniques, you might have a few phases
you measure instead of having a single timestamp representing the release of the
change. If your team publishes changes to a segment of your customer base before
rolling it out to the entire community, then I'd recommend:

-   Tracking the timestamp when the change makes it to the segment
-   Tracking the timestamp when it is rolled out to all customers if it makes it past the beta test.

For our calculation, we'll use the timestamp of the change merging into the
production branch. This approach won't capture how long the infrastructure
takes to deploy the change, which is vital to a lot of organizations. If it's
important to you, then you'll need to pull timestamps from the tools you're
using for orchestration management.

## Calculating Lead Time For Change

Once you have the time a change request came in, to the time it was merged
into production, the calculation for lead time for change can be calculated.
Using Django, it would look like:

```
from datetime import timedelta
from django.db import models

class ChangeRequest(models.Model):
    date_change_requested = models.DateTimeField()
    date_change_deployed = models.DateTimeField()

def mean_time_to_recovery():
    lead_time = timedelta(0)
    all_change_requests = ChangeRequest.objects.all()

    for change in all_change_requests:
        lead_time += change.date_change_deployed - change.date_change_requested

    return lead_time / all_change_requests.count()
```

## Scoreboard Baselines

I've seen lead times to change vary widely based on industry, product, and regulation
overhead. In each of these scenarios, I've seen teams come up with innovative ways to get
changes to a segment of their customers at a high tier rate. Whether you're in automotive,
financial, medical, or another highly regulated industry, achieving elite scores is possible.

Here are how thousands of professions across different industries perform based on the
[2019 State of DevOps](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf)
study conducted by Google and the DevOps Research and Assessment organization:

<table>
<tr>
  <td style="font-weight: bold;">Tier</td>
  <td style="font-weight: bold;">Lead Time For Change</td>
  <td>% of Teams in Tier</td>
</tr>
<tr>
  <td>Elite</td>
  <td>Less than one day</td>
  <td>20%</td>
</tr>
<tr>
  <td>High</td>
  <td>Between one day and one week</td>
  <td>23%</td>
</tr>
<tr>
  <td>Medium</td>
  <td>Between one week and one month</td>
  <td>44%</td>
</tr>
<tr>
  <td>Low</td>
  <td>Between on month and six months</td>
  <td>12%</td>
</tr>
</table>

## Closing

Lead time for change helps you to figure out how quickly your team is responding to
your current reality. By tracking how quickly the team can deploy changes, gather
feedback, gauge the impact the change had on the key results of the team's objectives,
and determine if they should persevere or pivot will give you a better measurement of
your [team's velocity](https://www.nextrelease.io/blog/velocit).

Make sure the team isn't filling the backlog with work for work sake. Changes to your
product should be helping to move the needle on the measurements of success for your
business's top objectives, and if they're not, you should be thinking about pivoting.
As you learn more from the minimal changes you've pushed to customers, the team will
have better ideas on what direction to take next. Pilling up change requests and tracking
how many you can get through in a sprint makes the team less responsive, creates burnout,
and distracts from where the focus should be. The focus should be on whether your team is
helping your organization reach its objectives if you measure velocity this way check
out a [different approach](https://www.nextrelease.io/blog/velocity).
