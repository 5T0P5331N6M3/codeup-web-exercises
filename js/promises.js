// fetch(url, {headers: {'Authorization': 'GITHUB_TOKEN'}})

// Fetching GitHub User
fetch('https://api.github.com/users/5T0P5331N6M3/events', {headers: {'Authorization': 'token ' + GITHUB_TOKEN}})
    .then(response => response.json()).then(response => console.log(response))
    .catch(error => console.error(error));

//  TODO: Create a function accepting a GitHub username, and returns a promise resolving returning just the date of the last commit the user made. Reference the github api documentations to achieve this.

function gitUserCommitDate (username) {
    fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token ' + GITHUB_TOKEN}}).then(respones => respones.json().then(data => {
        // console.log(data);
        const commits = data.filter(event => event.type === "PushEvent");
        console.log(`${username} had their last commit on ${commits[0].created_at}.`)

    }));
}
gitUserCommitDate("5T0P5331N6M3");

const wait = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms){
                resolve(`You'll see this after ${ms/1000} second(s).`);
            } else {
                reject(`Failure to include proper numeric input.`)
            }
        })
    }, ms);
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(5000).then(() => console.log('You\'ll see this after 5 second'));
wait(7000).then(() => console.log('You\'ll see this after 7 seconds'));