const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// TODO: 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// .filter Syntax array.filter(function(currentValue, index, arr), thisValue)
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

// TODO: 2. Use .map to create an array of strings where each element is a user's email address.
// .map((element, index, array) => { /* … */ })
const emailAddress = users.map(user => user.email);
console.log(emailAddress);

// TODO: 3.  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// .reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )
// Total Years added, then divided by Total Users for average Years of Experience.
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Conditional seems needed.
const totalYearsExperience = users.reduce((yearsOfExperience, user) => {
    return yearsOfExperience + user.yearsOfExperience;
}, 0);
console.log(totalYearsExperience);
let averageExperience = totalYearsExperience / users.length;
console.log(averageExperience);


// TODO: 4.  Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((email, user) => {
    if (user.email.length > email.length) {
        email = user.email;
    }
    return email;
}, '');
console.log(longestEmail);

// TODO: 5.  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. (Perhaps bring in the array.)
let lastUser = users[users.length - 1];
console.log(lastUser);
const userName = users.reduce((name, user) => {
    if (user === lastUser) {
        return name + user.name + '.'
    } else {
        return name + user.name + ', '
    }
}, '');
console.log(userName);
// TODO: Bonus. Use .reduce to get the unique list of languages from the list of users.
// If users language does not match others, then return as list (array).

const listOfLanguages = users.reduce((arr, user) => {
    let newArray = [...arr, ...user.languages];
    return [...new Set(newArray)]
    //    or return [...new Set([...arr, ...user.languages])]
}, []);
console.log(listOfLanguages);