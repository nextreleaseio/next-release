Single Branch

<table>
<tr>
  <td>
   Small to Medium Size Companies
  </td>
  <td>This cell contains a table:
   
  </td>
  <td>
  </td>
</tr>
<tr>
  <td>This cell contains a list
   <ul>
    <li>apples</li>
    <li>bananas</li>
    <li>pineapples</li>
   </ul>
  </td>
  <td>HELLO</td>
  <td>
  </td>
</tr>
<tr>
  <td>
  </td>
  <td>
   </td>
   <td>
   </td>
</tr>
</table>

Overview
Making all pull requests against a single “master” branch is an excellent strategy to quickly get up and running while reducing the cognitive overhead for developers and managers. This ease of use makes a single branch release strategy popular among open source developers and projects who have simple deployment needs.

This release strategy centers around a single master branch where all of the edits from the contributors is staged. Forks, branches, and direct commits all funnel into this primary branch and then the maintainers determine when to cut a new release and push it out to their end-users.

Staging & Deployment Branch Strategy
Overview
This strategy requires a minimum of a staging branch and a production branch. The staging branch acts as an area where all the upcoming changes in the next release are aggregated. Often times the changes loaded into staging are validated and shipped out to a production like environment where the team can manually test fixes and new features prior to deploying them to production.
Multi-Branch GitFlow Branch Strategy

Overview
There are multiple strategies that teams use when they move into multi-environment deployments. The most common, standardized workflow is the Gitflow Workflow which was first published by Vincent Driessen at nvie. This is one git workflow that is designed to be a release strategy and provides the most flexibility in validating updates that are meant for production while still enabling hotfixes to go directly out if there is a large enough issue.
Don’t see what you’re looking for?
We understand that there is no one-size-fits-all solution to managing your software. If you feel like you need something a little different, please contact us for a free 1:1 consult.
