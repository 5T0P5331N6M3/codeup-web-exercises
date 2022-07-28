console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
alert("Great, green is my favorite color, too!")

/* You have rented some movies for your kids:
The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to
like it). If price for a movie per day is $3,
how much will you have to pay?
*/

var LittleMermaid = 3;
var LittleMermaid = prompt("How many days have you rented this movie?");
var BrotherBear = 5;
var BrotherBear = prompt("How many days have you rented this movie?");
var Hercules = 1;
var Hercules = prompt("How many days have you rented this movie?");

var day = 9;
var price = 3;
var total = day * price;
alert("Your current total price for movie rentals will be $ .");

/*Tried calculating tally for days using shorthand assignment operators,
becasue the movies have not been returned (don't know yet if kids will
like the movie Hercules). I tried showing a running tally. Grr. How? */


/*Suppose you're working as a contractor for 3 companies: Google, Amazon
and Facebook, they pay you a different rate per hour. Google pays $400,
Amazon $380, and Facebook $350. How much will you receive in payment for
this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours
for Amazon. */

var FB = 350;
var FB = prompt("How much does Facebook pay contractors per hour?");
var Amazon = 380;
var Amazon = prompt("How much does Amazon pay contractors per hour?");
var Google = 400;
var Google = prompt("How much does Google pay contractors per hour?");
var Fh = 10;
var Fh = prompt("How many hours did you work for Facebook?");
var Ah = 4;
var Ah = prompt("How many hours did you work for Amazon?");
var Gh = 6;
var Gh = prompt("How many hours did you work for Facebook?");
var totalFB = FB * Fh;
var totalAmazon = Amazon* Ah;
var totalGoogle = Google * Gh;
totalGoogle + totalFB + totalAmazon; //$7420//
alert("Your total payment received for this week is $ .");

/*A student can be enrolled in a class only if the class is not full
and the class schedule does not conflict with her current schedule.
*/

var isFull = false;
var isConflict = false;
let enroll = (!isFull && !isConflict);



/*Exercises
Complete exercise 3 from the previous lesson, but write your code in the external.js
file instead of in the console.

When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
Finally, commit the changes to your git repository, and push to GitHub.*/