---
path: "/blog/measuring_deployment_frequency"
title: "Measuring Deployment Frequency"
subtitle: "How Often Do You Ship Changes"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-14T12:33:46+10:00
---

Deployment frequency is the easiest of the
[four key DevOps metrics](https://www.nextrelease.io/blog/getting_started_with_devops) to track,
and the one we started our DevOps journey off with monitoring. The end objective is being able to
deploy on-demand so that you can deploy hotfixes as soon as they are ready and get new experiments
in front of customers as quickly as you can create new functionality.

## Measuring Deployment Frequency

Deployment frequency is what it sounds like the number of releases you've
deployed over a given time frame. According to Google's
[2019 State of DevOps Report](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf)
teams have the following deployment rates:

<table>
<tr>
  <td style="font-weight: bold;">Tier</td>
  <td style="font-weight: bold;">Deployment Frequency</td>
  <td>% of Teams in Tier</td>
</tr>
<tr>
  <td>Elite</td>
  <td>On-demand (multiple deploys per day)</td>
  <td>20%</td>
</tr>
<tr>
  <td>High</td>
  <td>Between once per day and once per week</td>
  <td>23%</td>
</tr>
<tr>
  <td>Medium</td>
  <td>Between once per week and once per month</td>
  <td>44%</td>
</tr>
<tr>
  <td>Low</td>
  <td>Between once per month and once every six months</td>
  <td>12%</td>
</tr>
</table>

Depending on your team and industry, some of these figures may
come across as impossible. To achieve elite performance, just
having a continuous deployment ecosystem setup doesn't always cut
it, and you'll need to get creative on how you can help your team to
get changes to customers fast.

## Achieving Elite Deployment Frequency in Systems That Can Kill People

Releasing changes to cars, medical equipment, aircraft, and banking systems have standards and
compliance requirements from years of failures and theorizing of possible problems. These
regulations tend to drive longer cycle times as a large amount of manual testing is required
with slow reporting and long turn around times. A lot of these processes serve as a potential
legal shield or are used in the absence of metrics to determine if the methods make an impact
on making changes more safe, secure, or robust.

When working towards achieving high performance, start measuring what the impact of these
processes are and what your baselines are with them in place. That way, as you work around
them in the short term, you can build up evidence on whether they are valid and should be
kept or are just checking a box.

Since some of these requirements are required by law, you might be stuck with them unless
you have some legit legal teams. Just because you cannot deploy new changes to all of your
customers without complying with regulations does not mean you can't still release
modifications to a production-like environment to gather feedback from control segments.

### Internal Test Fleets

In the automotive industry, its been a long-standing tradition to have fleets of
10s to hundreds of vehicles built for development and validation teams. Some of the
durability vehicles in the fleet are driven hundreds of miles a day on massive enclosed
tracks. Some tracks in Michigan, like the American Center for Mobility Test Track at Willow Run,
have custom-built tunnels to simulate live disconnecting of cellular signals within a shielded
area. These cars also live in labs for electromagnetic compatibility testing and power cycling.

![American Center for Mobility Test Track at Willow Run](../../src/images/blog/american_center_for_mobility.jpg)

Having these fleets enables automotive manufactures to deploy changes to their test fleets on demand so that
developers can gather real-world feedback from stakeholders without endangering customers.

You can apply this concept in most IoT spaces such as medical equipment, manufacturing systems, as
well as other transport industries. The downside to the approach is that there is a significant
investment cost, a high maintenance cost, and delays in feedback from larger percentages of use cases.

### Digital Twins

Multiple automotive, healthcare and aerospace companies already have a digital twin
of their products and systems. These enable them to run new changes on-demand within
virtualized duplicates of their real-world platforms. NASA has been benefiting from
the concept of digital twins since at least the 1970s when they used replica systems
on earth to debug and validate solutions to the oxygen problem faced by the Apollo 13 crew.

Teams like [unlearn.ai](https://www.unlearn.health/) are starting to take digital
twins to the next level, creating digital twins of individuals to reduce lead time to
verification on clinical trials. These twins are still in rudimentary states, but with
the help of advances in artificial intelligence, our understanding of DNA, and the
sharing of personal medical information, it's possible to start building virtual
customers who behave like their real-world twin.

![Apollo 13 Capsule](../../src/images/blog/Apollo-13.jpg)

Depending on the complexity of your product and the other units, you need to build digital
twins for this approach can require significant initial investments as well. The
[unlearn.ai team just raised a few million](https://techcrunch.com/2020/04/20/unlearn-ai-nabs-12m-to-build-digital-twins-to-speed-up-and-improve-clinical-trials/)
to help build out their human digital twin. Once you have your initial twin, it's much quicker
to make modifications to the twins and replicate them to simulate larger percentages
of use cases.

### Replaying & Streaming Real World Inputs

Deploying changes without exposing them to customers to see how they would
perform in contract to the existing deployment is another solution being used
by various IoT product teams to hit elite performance deployment frequencies.
This approach can take two forms. One is recording all of the inputs coming into
your production devices and replaying those inputs through your latest change to
see how it compares.

Alternatively, if you have enough horsepower at the edge, you can deploy your
changes and have them run in parallel to your primary system. This way, you can
stream the same data being received in real-time through your change to see how
it performs.

If it performs better, then you can switch it to the primary role.

##

You can use these approaches with teams working on products with lower potential
for bodily harm as well. Having them assists with increasing deployment frequency
while reducing change failure rate, mean time to resolution, and lead time to change.

For many companies writing test scripts, adding static code checks, and conducting
peer reviews will be more manageable both from an overhead perspective and a
budgetary one. With these in place and a decent way to recover from failures,
you and your team should be able to achieve on-demand deployments.
