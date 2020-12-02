---
path: "/blog/designing-release-notes-for-twitter"
title: "How We Design Release Notes for Twitter"
subtitle: "Changelog Designs For Twitter"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-09-06T16:33:46+10:00
---

While developing our Twitter Release Note Integration, we reviewed hundreds of
changelog tweets and talked with multiple teams about why they publish notes to
twitter and how they structure them.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">IntelliJ IDEA 2020.2 is here!<br>- Review and merge GitHub pull requests<br>- Jump between issues in a file, view a full list of problems, be notified when your changes break other files<br>- Use Jakarta EE 9, get better support for Quarkus, Micronaut, and OpenAPI<a href="https://t.co/5wghCbzFYE">https://t.co/5wghCbzFYE</a> <a href="https://t.co/mz99VK2637">pic.twitter.com/mz99VK2637</a></p>&mdash; JetBrains IntelliJ IDEA (@intellijidea) <a href="https://twitter.com/intellijidea/status/1288146411050213377?ref_src=twsrc%5Etfw">July 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🥳🎉 TypeScript 4.0 is here! 🎉🥳<br><br>Read up on what&#39;s new and get it today!<a href="https://t.co/gVDik8g7Pb">https://t.co/gVDik8g7Pb</a> <a href="https://t.co/6dtY83mZyu">pic.twitter.com/6dtY83mZyu</a></p>&mdash; TypeScript (@typescript) <a href="https://twitter.com/typescript/status/1296487126423474178?ref_src=twsrc%5Etfw">August 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There are plenty of ways to share release notes on Twitter. The three most common
practices are full note, minimalist, and hook notifications. Full note tweets
include the complete details of the latest release notes. The minimalist method
announces that a release has occurred and provides followers with a link to its
changelog. Hook notifications provide some teaser information highlighting key
changes made in the release and aim to give followers just enough information to
be valuable to them while limiting exposure, encouraging them to engage with the
tweet, or clicking the link for additional information.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">💎New release alpha.23 is up 💎<br><br>This release stabilizes the sync process, and has number of critical fixes (see full release notes below)<a href="https://t.co/5yziMWf1rp">https://t.co/5yziMWf1rp</a></p>&mdash; Prysmatic Labs (@prylabs) <a href="https://twitter.com/prylabs/status/1295705946509864968?ref_src=twsrc%5Etfw">August 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

We've chosen to design our changelog posts to Twitter around these notification
methods to let teams use the notification method that aligns with their release
management process. For organizations that tend to have bigger releases with more
highlights than can fit into a single tweet, a minimalist notification enables a
team to notify their community that an update occurred and inform them of all the
changes via their hosted release notes.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Catalyst 20.05.1 is here,<br>- TracerCallback for model tracing during training<br>- improved CheckpointCallback for better multi-stage experiments support<br>- BatchBalanceSampler, CircleLoss, LanguageModelingDataset and many other contrib extensions <a href="https://t.co/KK3P6uzKcL">pic.twitter.com/KK3P6uzKcL</a></p>&mdash; Catalyst.Team (@catalyst_core) <a href="https://twitter.com/catalyst_core/status/1264558467735531527?ref_src=twsrc%5Etfw">May 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

For teams with smaller releases, a full or hook notification gives your community
a place to socialize about the release. Having your community socialize about the
release helps:

-   Gather immediate feedback from active users
-   Drive adoption of new features
-   Promote verification of bug fixes
-   Spread news of the release to other users and different communities
-   Increase the quality of traffic coming to your full changelog

Design Objectives
When designing what changelogs look like when published to Twitter, we have a
few core objectives. We wanted to:

-   Increase engagement with release notes (comments, likes, retweets, link clicks)
-   Effectively communicate changes with limited overhead to customers and their community
-   Accommodate long-running and rapid release cycles
-   Align with Twitter culture and styling

With all of our integrations, we work to deliver the right information, to the
right people, in the way they expect, based on their chosen medium of engagement.
Twitter has a strict culture centering around 280 characters and favors imagery and
visual stimulation supporting the characters displayed.

Since the average changelog is 270 characters, and some can be hundreds of pages long,
we developed a set of algorithms to condense the release note's content to about 250
characters. These algorithms give us enough space also to include a link to the full set
of notes, which takes up 23 characters.

For the extremely long changelogs, we found that it was easier for users to navigate to a
page containing the full set of release notes rather than summarizing them into 250
characters. This led to the minimalistic notification method.

These initial design iterations are just our first attempt at helping teams connect with
their community on twitter. We're continuing to iterate on the designs based on what's
working for our customers. If you have any thoughts or ideas for improvements, please
[let us know](https://www.nextrelease.io/contact) :)
