We treat each customer’s project as if it contains the most sensitive
of our own data. Every customer is putting their trust in us and looking for
us to exceed their expectations on transparency and security. To live up to this
expectation below you’ll find a breakdown of what the permissions we ask for are
and why we need them.

## Permissions & Rational

### GitHub

#### Repository Permissions

##### Checks (Read & Write)

We will be migrating our status checks to the Check Run
API to provide better visibility and more functionality for
some features we will be shipping shortly.

##### Content References (Read & Write)

We use this permission to attach content loaded into nextrelease.com onto release notes.

##### Contents (Read & Write)

This is a very sensitive permission, but one we need to:

-   Access specific git hashes to create releases
-   Manage a changelog file
-   Add tags to your repository
-   Read specific branches

We treat this data extremely sensitively, encrypting our database,
and limiting access to any of your data.

##### Issues (Read Only)

We read issues to gather data to populate your release notes.

##### Metadata (Read Only)

We utilize metadata about your repositories to list collaborators
and access your repository via the GitHub API.

##### Pull Requests (Read & Write)

We read and create pull requests to both generate your
release notes and to create "release" and changelog pull
requests

##### Commit Statuses (Read & Write)

We use this information to manage our checkruns and issues
surrounding releases.

#### Organization Permissions

##### Membership (Read Only)

We allow our users to let anyone who is a member of their
Github Organization access data in Next Release if instead
of managing specific invites and permissions.

##### Team Discussions (Read & Write)

This is a new feature in Github and we have some new
functionality coming soon (TM)...
