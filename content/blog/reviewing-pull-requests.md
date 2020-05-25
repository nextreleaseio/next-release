---
path: "/blog/reviewing-pull-requests"
title: "Getting Started with Pull Request Reviews"
subtitle: "What to Focus Reviews On"
author: "devon"
profilePic: "https://next-release-public-assets.s3.us-east-2.amazonaws.com/devon_profile_pic.png"
image: ../../src/images/blog/devops_team.png
date: 2020-05-25T16:33:46+10:00
---

## What is a Pull Request

A pull request (PR) is a change you’re requesting to be made against a
particular body of work, tending to be a codebase in developer operations.
This request includes the code modifications you are asking the team to accept
into some version of the code base, possibly a feature branch or staging environment.
When making the request, it’s courteous to include notes outlining:

-   Summary of why you’re making the pull request
-   Description of what the modification(s) you’re submitting do (add videos and images
    if applicable)
-   Document limitations not handled by the change and are related to the modified code

If you have a ticket management system such as Atlassian’s JIRA or IBM’s Rational,
you can maintain traceability from requirements to the code by including reference
to the ticket number associated with the change.

Pull requests are the go-to process for change management in software development
and were made popular by GitHub. They allow thousands of developers to contribute
code to a single repository simultaneously. Once you have one opened, others can
review the changes for a variety of criteria.

### Why Review Pull Requests?

We review code to help coach teammates on community best practices, software design
patterns, security, and possible language implementation optimizations. Reviews are
there to help the team develop and promote solid habits that lead to maintainable,
readable, and reusable code.

### Automating Reviews

Once your team is more than just you, you’ll probably run into papercut problems
like how many spaces you should use in python or if you should have curly brackets
on the same line as the function header in javascript or below it.

Don’t spend time on this, use static analyzers and formatters to solve the problem
and align your code’s formatting with a style that others in the community use.
Utilizing these practices helps to make onboarding easier, reduces wasted effort,
and improves the readability of your code.

Here are a few examples that you can start using to automate these bikeshedding tasks:

-   [Black](https://black.readthedocs.io/en/stable/) - Python’s Uncompromising Code Formatter
-   [Prettier](https://prettier.io/) - JavaScript’s Opinionated Code Formatter
-   [Google Java Formatter](https://github.com/google/google-java-format) - Format Java Code to Comply with Google Standards
-   [Rufo](https://github.com/ruby-formatter/rufo) - Ruby Opinionated Code Formatter
-   [Rustfmt](https://github.com/rust-lang/rustfmt) - Format Rust Code According to Style Guidelines

### What To Focus On In Pull Request Reviews

Helping teammates develop solid habits, developing secure, maintainable, readable,
and reusable code. Everyone is at a different level each time they open a pull request.
Dealing with varying skill levels means that when doing a pull request review you’ll want to:

-   Have an understanding of what the contributor skill level is, including topics they
    are solid on vs. ones they can still improve.
-   Understand what topics you can teach with the submitted pull request and what to leave
    for future submissions.
-   Record which patterns they show knowledge in and utilize it to orient future reviews.

Also, be realistic, a lot of people say every commit must be a single atomic, coherent
change. Atomic changes is a best practice; it’s not something to fall on your sword over.
If a team member continues to exhibit a given behavior and it reduces performance, point
it out, but if it happens a few times while someone is attempting to fix a bug or work
through something, it may make sense to let it go.

Once you’re in this mindset, there are hundreds of lessons you can help team members
learn. Here are a few examples to get started with:

#### Code Inspection: Patterns & Anti-Patterns

-   [Software Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern) / [Anti-patterns](https://en.wikipedia.org/wiki/Anti-pattern)
    -   [Composition over Inheritance](https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205)
    -   Community driven design patterns / anti-patterns. Taking, for example, [Django
        anti-patterns](https://docs.quantifiedcode.com/python-anti-patterns/django/index.html).
-   Some degree of testing for new enhancements/breaking changes and regression tests for bugs.
    -   [Unit Test Design Patterns](https://www.codeproject.com/Articles/5772/Advanced-Unit-Test-Part-V-Unit-Test-Patterns)
    -   Avoid using code coverage as your only measuring stick:
        -   [Test Coverage != Quality Target](https://martinfowler.com/bliki/TestCoverage.html)
        -   [How to Misuse Code Coverage](http://www.exampler.com/testing-com/writings/coverage.pdf)
        -   [How Much Test Coverage Do You Need?](http://www.developertesting.com/archives/month200705/20070504-000425.html)
-   Handling of security vulnerabilities
    -   [OWASP Patterns for Security](https://owasp.org/www-pdf-archive/Vanhilst_owasp_140319.pdf)
    -   [OWASP Vulnerability Catalog](https://owasp.org/www-community/vulnerabilities/)
        -   Since it’s a full-time job keeping up with vulnerabilities, I would recommend
            also integrating a static code analyzer that checks for vulnerabilities. [OWASP
            has a solid list of tools](https://owasp.org/www-community/Source_Code_Analysis_Tools),
            and many of its core sponsors provide commercial
            solutions. It can be difficult for these tools to pick up on every vulnerability,
            so keep an eye out during your reviews.
        -   Like unit testing, security is largely about risk management and incident
            responsiveness. As your product matures, you should integrate some level of
            security design into your process, including:
            -   [Threat Assessment & Remediation Analysis (TARA)](https://www.mitre.org/publications/technical-papers/threat-assessment-and-remediation-analysis-tara)
            -   Incident Response Plan
-   Self documenting code where it is possible and comments where it’s not. Documented
    code helps to increase readability and can help in reducing redundant code when used
    instead of hardcoded values.
    -   Ensuring contributors are using descriptive variable & function names helps to
        increase readability and can help in reducing redundant code when used instead of
        hardcoded values.
-   Size of functions / classes (mega classes / dumping ground)
    -   A good rule of thumb is if a function is over 25 lines, step back and think if the
        contributor can decompose it into a more modular structure.
    -   Having large functions makes it hard to understand at a glance what it does; it makes it
        difficult to maintain and tends to reduce the reusability of the function.

#### Pull Request Inspection

-   Amount of changes in a PR (features, bug fixes, breaking changes, etc.); Pull requests do not
    need to be explicitly atomic but should try to be when possible. - Including multiple changes in a single PR makes it hard to understand the impact of the
    release, root cause bugs created by it, validate backward compatibility, enable others to review
    it, share with the team what has changed, and let customers know what to expect. - Pre-1.0 releases often warrant letting this lesson wait until more stable releases. Setting
    up foundational scaffolding for a project, retooling to enable reaching business objectives,
    and complete pivots are common in these stages. While this churn is happening, it may make sense
    to limit the scrutiny of atomic changes with fully baked out test cases depending on your product.
-   Pull request titles & commits are on point and describe what changed, aka they’re not fluff.
-   Pull request outlines
    -   Why the pull request was submitted
    -   The modification(s) being submitted including videos and images if applicable
    -   Limitations not handled by the change that is related to the modified code
-   Pull request is labeled with the type of change it contains

#### Additional Checks

-   Optimizations for the solution (reduce memory, CPU, disk usage, etc.)
-   Visualize changes (video/image of the impact of changes, UML, etc.)
-   Ensure the pull request is open against the intended branch. For example, if
    the change is a hotfix, it might be intended for the production branch where a
    new feature should go into a staging environment.

Very few people are experts on all of these topics, so don’t feel bad if you
struggle with one or all of these topics. Each pull request is an opportunity for
us to improve our development skills and push each other to be better.
