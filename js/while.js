//Do-While Loop: Condition is evaluated at the end of loop, instead of the beginning, like a while loop.

/*do {
    //body
// } while(/*condition*/

//While Loop: Executes code block as long as a certain condition is true.

// while (/*condition*/) {
//     //body
// }*/

//  1. Create a file named while.js in the js directory.
//  2. Create a while loop using console.log() creating the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

//  Do While Loop
//  1. An ice cream seller can't go home until she sells all of her cones.
//  First write enough code that generates a random number between 50 and 100 representing
//  the amount of cones to sell before you start your loop. Inside of the loop your code should
//  generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
//  Use a do-while loop to log to the console the amount of cones sold to each person.
//  The below code shows how to get the random numbers for this exercise.
//      This is how you get a random number between 50 and 100
//  var allCones = Math.floor(Math.random() * 50) + 50;
//      This expression will generate a random number between 1 and 5
//  Math.floor(Math.random() * 5) + 1;
//  The output should be similar to the following:
//5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

//  1.(sic) Finally, commit the changes to git repository, and push to GitHub.
// function  sum(a,b){
//      return a+b;
// }
let num1 = 10;
// let num2 =20;
// let num3 = sum(num1,num2);
console.log(num1);