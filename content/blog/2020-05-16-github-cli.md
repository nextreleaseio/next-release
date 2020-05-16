---
path: "/blog/lazy-developers-guide-to-easier-pull-requests"
title: "The Lazy Developer's Guide To Easier Pull Requests"
subtitle: "Save many clicks per day with a few terminal commands"
author: "donald"
image: ../../src/images/screenshots/create-report.png
date: 2020-05-16T12:33:46+10:00
---

When I first read about Github's cli tool, my first thought was "uhh... isn't that just like...git?"

But as so often happens, I was dead wrong. The [Github CLI](https://cli.github.com/) is one of the more
transformational tools I use on a daily basis since using Prettier for auto-code formatting.

The [Github CLI](https://cli.github.com/) lets you immediately create pull requests and manage issues from your
terminal, where you already likely are to manage branches and committing code.

Here's how easy it is to go from commit to pull request without ever leaving your terminal:

<div style="position: relative; padding-bottom: 61.649484536082475%; height: 0;"><iframe src="https://www.loom.com/embed/f18f5332083042a0872ebc9e21e6fec6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

On a mac, it's an easy command + oauth redirect to setup:

```
 brew install github/gh/gh
```

At Next Release, we're all zsh users, so here are a few helpful aliases we use to add labels even easier:

```
alias submit-patch='gh pr create --label bug'
alias submit-minor='gh pr create --label enhancement'
alias submit-major='gh pr create --label breaking'
```
