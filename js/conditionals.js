"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {

    if (colorName === "green") {
        alert("Color is Green");
    } else if (colorName === "blue") {
        alert("Color is Blue");
    } else {
        alert("I don't know this color " + colorName + " you typed.");
    }
}
analyzeColor("Unicorn");

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/*analyzeColor(randomColor);
/analyzeColor(randomColor)
    /console.log(analyzeColor);*/

analyzeColor(randomColor);
console.log(analyzeColor(color));
// Response is not random; keeps printing out "indigo".
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/*switch (randomColor) {
    case "blue":
        console.log(`${randomColor} is the color of the ocean.');
 }*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("What is your favorite color?");

/* ########################################################################## */

/*var color = prompt("What is your favorite color?").toLowerCase();
function analyzeColor(color) {
    switch (color) {
        case "red":
            return "apples are red"
        case "blue":
            return "Who is blue?"
        default:
            return "There are three primary colors."
    }
}
alert(analyzeColor(userColor));*/
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/*
1. Make a "confirm" asking if user would like iputting a number.
2. Assign "confirm" in a variable being a boolean
3. If "confirm" variable is true, then prompt user for number and store in a variable. Wrap Number(?).
4. Alert number as even or odd. (Implied conditional statement.)
5. Alert what the number plus 100 equals.
6. Alert if the number is negative or positive
7. If user input is NaN, inform incorrect input data type.
 */

var isTrue = confirm("Pick a number");
if(isTrue === true) {
    var someNumber = prompt("What is the number?");
    if (someNumber % 2 !== 0) {
        alert("Number is even.")
    } else if (someNumber) { //how to evaluate even or odd//
        alert("Number is odd.")
    }
    var newNum = someNumber + 100;
    alert(`${newNum} + 100 = ${newNum}`)
    if (someNumber < 0) {
        alert(`This number is negative ${someNumber}`);
    } else if (someNumber > 0) {
        alert(`This number is positive ${someNumber}`);
    }
}
//instruction sucks! all over the place with too many techniques and zero consistency with formulas/explaining.