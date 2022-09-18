//Basic Syntax:
//For Loop: Initialization; check condition; if True condition, body, increment, back to condition;
//          if False condition, done.
//for (/*initialization*/; /*condition*/; /*increment*/) {
//body

//  1. Create a file named for_loops.js inside js directory; link to loops.html
//      Cannot link.
//  2. Create a function named showMultiplicationTable accepting a number and
//      console.logs the multiplication table for that number (just multiply by the numbers 1-10.
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
};

showMultiplicationTable(7)

//  3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200,
//      and output to the console whether each number is odd or even.
//  For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
const randomNumber = Math.floor(Math.random() * 10) + 1;

function randomLoop(num) {
    for (let i = 20; i <= 200; i++) {
        console.log(randomNumber);
    }
    if (number % 2 === 0) {
        console.log('Number ' + randomNumber + ' is even.');

    } else {
        console.log('Number ' + randomNumber + ' is odd.');
    }
}
// How do I check in console if this works?

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

//  4. Create a for loop using console.log to create the output shown below
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Why does "toString" work here? Nothing in code suggests a string when console logging.
for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}
// console.log()

//  5. Create a for loop using console.log to create output shown below.
//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}