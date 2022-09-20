// fetch(url, {headers: {'Authorization': 'GITHUB_TOKEN'}})

// Fetching GitHub User
fetch('https://api.github.com/users/5T0P5331N6M3/events', {headers: {'Authorization': 'token ' + GITHUB_TOKEN}})
    .then(response => response.json()).then(response => console.log(response))
    .catch(error => console.error(error));

//  TODO: Create a function accepting a GitHub username, and returns a promise resolving returning just the date of the last commit the user made. Reference the github api documentations to achieve this.

function gitUserCommitDate (username) {
    return new Promise ((resolve, reject) => {

    },);
}



