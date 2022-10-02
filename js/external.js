//TODO: Initial HTML linking


// console.log("Hello from external JavaScript");
// alert("Welcome to my Website!");
// var userInput = prompt("What is your favorite color?");
// alert("Great, green is my favorite color, too!")

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// This one makes me feel better.
let favColor = prompt("What is your favorite color?");
alert("Great "+ favColor + " is my favorite color too!")



/* You have rented some movies for your kids:
The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to
like it). If price for a movie per day is $3,
how much will you have to pay?
*/
//TODO: Movie Rental

// let littleMermaid = 3;
// let brotherBear = 5;
// let hercules = 1;
// let price = 3
// let littleMermaidTotal = price * littleMermaid;
// let brotherBearTotal = price * brotherBear;
// let herculesTotal = price * hercules;
// let totalPrice = littleMermaidTotal + brotherBearTotal + herculesTotal;
// console.log(totalPrice);
// console.log("The user entered: " + userInput);
// console.log("Your total due is $" + totalPrice + " .");
// alert("Your total due is $" + totalPrice + ".");

let littleMermaid = prompt("How many days did you rent Little Mermaid?");
alert("You rented Little Mermaid for " + littleMermaid + " days.");
console.log(littleMermaid);

let brotherBear = prompt("How many days did you rent Brother Bear?");
alert("You rented Little Mermaid for " + brotherBear + " days.");
console.log(brotherBear);

let hercules = prompt("How many days did you rent Hercules?");
alert("You rented Little Mermaid for " + hercules + " days.");
console.log(hercules);

let currentDue = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3);

alert("Your current movie rental total is $" + currentDue + ".")



        // var LittleMermaid = prompt("How many days have you rented Little Mermaid?");
        // var BrotherBear = prompt("How many days have you Brother Bear?");
        // var Hercules = prompt("How many days have you rented Hercules?");
        // var costLM  = LittleMermaid * 3;
        // var costBB = BrotherBear * 3;
        // var costH = Hercules * 3;
        //
        // alert("Your current total price is " + "$ " + (costLM+costBB+costH) + " .");

/*Tried calculating tally for days using shorthand assignment operators,
becasue the movies have not been returned (don't know yet if kids will
like the movie Hercules). I tried showing a running tally. Grr. How? */


/* Suppose you're working as a contractor for 3 companies: Google, Amazon
and Facebook, they pay you a different rate per hour. Google pays $400,
Amazon $380, and Facebook $350. How much will you receive in payment for
this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours
for Amazon. */

//TODO: Contractor Work

//  pay rate per hour
let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;
// //  hours worked
// let googleHours = 6;
// let amazonHours = 4;
// let facebookHours = 10;
// let googleTotal = googleRate * googleHours;
// let amazonTotal = amazonRate * amazonHours;
// let facebookTotal = facebookRate * facebookHours;
// let earnedTotal = googleTotal + amazonTotal + facebookTotal;
// console.log(earnedTotal);

let googleHours = prompt("Total hours with Google this week: ");
alert("You are owed " + (googleHours * googleRate ) + " from Google.");

let amazonHours = prompt("Total hours with Amazon this week: ");
alert("You are owed " + (amazonHours * amazonRate) + " from Amazon.");

let facebookHours = prompt("Total hours with Facebook this week: ")
alert("You are owed " + (facebookHours * facebookRate) + " from Facebook.");

let earnedTotal = ((googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate));
alert("Total earnings this week: $" + earnedTotal + ",  a meme amount.")




        // var FB = 350;
        //
        // var Amazon = 380;
        //
        // var Google = 400;
        //
        // var Fh = prompt("How many hours did you work for Facebook?");
        //
        // var Ah = prompt("How many hours did you work for Amazon?");
        //
        // var Gh = prompt("How many hours did you work for Facebook?");
        //
        // var totalFB = FB * Fh;
        // var totalAMZN = Amazon * Ah;
        // var totalGgle = Google * Gh;
        //
        // alert("Your total payment received for this week is " + "$" + (totalFB+totalAMZN+totalGgle) + " .");

//TODO: Student Enrollment
/*A student can be enrolled in a class only if the class is not full
and the class schedule does not conflict with her current schedule.
*/


let courseAvailability = prompt("Is the class full, Yes or No?");
alert("You selected " + courseAvailability + ".");

let  courseSchedule = prompt("Does the class schedule conflict with student's current schedule, Yes or No?");
alert("You selected " + courseSchedule + ".");

// function conflict () {
// Why do I not need function for the if statement?
// If Statement not performing as desired. Trying to stop prompt, not knowing how to stop at the first question if answered "No".
    if (courseAvailability === "No" || courseSchedule === "No") {
        alert("Student can attend course.");
    //    How do I alert
    } else {
        alert("Student cannot attend course.")
    }
// }


        // var isFull = confirm("Is the class full?");
        // var isConflict = confirm("Does the class schedule conflict with current schedule?")
        // var confirmConflict = !isFull && !isConflict;
        // alert("Enrollment status: " + confirmConflict);

/*var isFull = confirm("Is the class full?");
var isConflict = confirm("Does the class schedule conflict with current schedule?");
var confirm = !isFull && !isConflict;
alert("Approved");*/

// TODO: Product Offer

/* A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired. Premium members do not need to buy a
specific amount of products.
*/


/*var purchased = prompt("Quantity");
var product = true > 2;
var expired = false;
var premium = prompt("Premium Member?");
var confirm = purchased && expired;
var confirmPremium = !premium;
alert("Product offer" + confirmPremium + confirm);*/

        // var product = confirm("Purchased more than two?");
        // var expired = confirm("Offer expired?");
        // var confirmProduct = (product && !expired);
        // alert("Status: " + confirmProduct);



