---
path: "/blog/big-indentation-screwup"
title: "Our Big Indentation Email Screw Up"
subtitle: "We're sorry for sending so many emails"
author: "donald"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/donald_profile_pic.jpeg"
image: ../../src/images/screenshots/include-github-issues.png
date: 2020-06-01T12:33:46+10:00
---

Last week, we decided to implement a weekly activity email, a project that shouldn't require much drama.
We just wanted to show each week what Next Release helped them ship.

If you're one of customers, unfortunately you got to see our biggest screw up in my career, and you may have received up to hundreds of
duplicate of these new status emails.

**I am very sorry and deeply embarrassed for any inconvenience and annoyance I may have caused you.**

I was solely responsible for this error because I refactored the code sending the emails and just straight up
missed the indentation in the nested loop responsible for processing the emails.

What I wrote (mostly copied and pasted):

```python
for user in users():
    email = make_email(user)
    email.send()
```

What I should have wrote:

```python
for user in users():
    email = make_email(user)
email.send()
```

If you're one of our customers who is annoyed and and upset by this, you absolutely deserve to be.

This is the type of mistake that is terribly embarrassing and won't happen again.
