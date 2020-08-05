---
path: "/blog/centralized-vs-decentralized-devops-security"
title: "DevOps Security in Centralized & Decentralized Pipelines"
subtitle: "Overview of Threats Within Two Paradigms"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-07-26T16:33:46+10:00
---

Cyber threats are at an all-time high, and malicious actors continue to
find innovative ways to impact organizations worldwide from disrupting
pipelines through [DDoS attacks](https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/)
to stealing data from validation
environments that have less protection than their production equivalents.
As more developers move to remote offices protecting your pipeline takes
on new and exciting challenges. There are a variety of solutions to mitigate
the growing number of attack vectors. For this post, we'll stick to a
high-level review of distributed vs. centralized developer operation
pipelines.

In a decentralized network running across thousands of systems, wouldn't
my code and results be open to everyone? The short answer is no, but
let's take a look at how traditional developer pipelines work and
contrast it to a decentralized system to weigh the differences in
security.

## Security On Centralized Platforms

Today most developers put their trust in companies like Microsoft + GitHub,
Amazon, Google, Atlassian + Bitbucket, and IBM to store their code,
databases, and other information. We trust that these companies and their
employees:

-   Won't maliciously mess with our data
-   Will protect our data as though their lives depended on it
-   Won't use our data to steal our ideas or gain a competitive advantage against us
-   Will encrypt our data from end to end and not decrypt without our permission ([Zoom](https://theintercept.com/2020/03/31/zoom-meeting-encryption/))
-   Will not disappear / dissolve, along with our data, for any amount of time
-   Will not use our data against us ([Cambridge Analytica](https://www.vox.com/2018/3/17/17134072/facebook-cambridge-analytica-trump-explained-user-data))
-   Forget about us when we ask them to (Required new laws to overcome this; [GDPR](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/right-to-erasure/#:~:text=The%20GDPR%20introduces%20a%20right,erasure%20verbally%20or%20in%20writing.&text=The%20right%20is%20not%20absolute%20and%20only%20applies%20in%20certain%20circumstances.))

These are valid concerns and leading reasons why many Fortune 50 companies,
especially in automotive, continue to be wary of housing data on cloud
platforms as companies like Google and Amazon work to disrupt the industry
with autonomous vehicle technology. There are antitrust lawsuits against
[Apple](https://9to5mac.com/guides/antitrust/) and
[Amazon](https://www.cnbc.com/2020/06/11/amazon-to-reportedly-face-antitrust-charges-in-eu.html) for using data collected from their platforms to kill
businesses that rely on their platforms. Companies like Google and Facebook
openly admit they sell our data to increase advertising revenues.

Although there are security concerns with centralized systems, these
companies have advanced security teams and partner with cybersecurity
leaders to protect their networks from outside threats. These teams
usually are better equipped to protect data from external predators
than small and medium-sized businesses. But keep in mind that one of
the most successful threat vectors are [insider threats](https://www.varonis.com/blog/insider-threats/).

## Security on Decentralized Blockchains

Unlike with centralized platforms, decentralized blockchains do not
place trust in a single entity. Information is hashed and distributed
across multiple systems so that owners can always access it, regardless
if a single node goes offline. These blockchain networks use consensus
algorithms to "agree on the true state of the network and the validity of
transactions" - [Binance](https://academy.binance.com/blockchain/what-makes-a-blockchain-secure).
This, paired with the immutability of blocks,
meaning they cannot be changed after a transaction has been confirmed,
ensures that malicious parties cannot manipulate your existing data. If
they attempt to change data in an existing block, it invalidates the
chain, and if they modify the data through a transaction, it is logged
in a new block that can be identified and resolved.

The data you place on the blockchain can be encrypted as Duncan McIntyre
points out in
[Controlling Your Data in a Blockchain Application](https://www.zettaset.com/blog/controlling-data-blockchain-application-encryption-can-help/#:~:text=Blockchain%2C%20Encryption%20and%20Your%20Personal%20Data&text=Instead%2C%20transaction%20data%20could%20be,data%20for%20advertisers%20or%20brands.), using a
private key, enabling users to grant access to their data on their terms.
Instead of requiring companies to conform to GDPR regulations where they
must delete user data after a user requests it, the user can stop
granting the application access to their data. As stated by Tal Kol in
[SecurityInfoWatch](https://www.securityinfowatch.com/cybersecurity/article/21122947/why-blockchain-is-the-necessary-safeguard-against-data-breaches#:~:text=Blockchain%20Addresses%20Security%20Breaches%2C%20But,what%20personal%20information%20is%20shared.) this means "Revoking access does not require any
cooperation from the company and can be completely one-sided. In essence,
access control guarantees users the right to be forgotten".

### Impact of Decentralization on DevOps

By using decentralized solutions to perform code verification and
deployment, you are able to protect your data using encryption,
distribute it amongst multiple systems so that it is always accessible,
allow and revoke access rights to it on your terms, avoid single points
of failure that can halt your operations, and monitor for unapproved
modifications or access that occur throughout the pipeline. This security
and visibility provide you with a much more robust solution for protecting
your data and pipeline from abuse.

### State of Decentralized DevOps

Though there are many advantages to decentralized developer operations,
it is in its infancy, and there are not as many teams providing solutions
within the ecosystem yet. We're working on changing that, and if you're
interested in being an alpha partner, [hit us up](https://www.nextrelease.io/contact) and let us know what your
tech stack looks like.

## Hybrid Approach & Trust in a Trustless Environment

While decentralized DevOps matures, you can still use some of the
features to improve the security and visibility of your centralized
pipeline. By logging actions made on your code and requirements, you
can form an audit log of activities that enable you to identify:

-   Developer operation patterns and performance metrics
-   Invalid activity taken against your artifacts
-   Duplicate activity within your pipeline and local developer environments
-   Modifications made to requirements and code

If you'd like early access to our distributed DevOps platform Nunicorn,
which logs modifications to your artifacts, like code and requirements,
links the changes, and generates release notes on them,
[contact us](https://www.nextrelease.io/contact) to sign up for the alpha program.
