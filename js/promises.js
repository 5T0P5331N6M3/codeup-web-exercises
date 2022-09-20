// fetch(url, {headers: {'Authorization': 'GITHUB_TOKEN'}})

//  TODO: Create a function accepting a GitHub username, and returns a promise resolving returning just the date of the last commit the user made. Reference the github api documentations to achieve this.

//  Accepts GitHub username
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'GITHUB_TOKEN'
})

await octokit.request('GET /users/{username}/events/public', {
    username: 'USERNAME'
})

const lastCommitDate = fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));
//  Returns a promise resolving returning just the date of last commit user made.