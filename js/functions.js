"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello(name) {
//     //return "Hello, Haskell!";
//     return "Hello, " + name + "!";
// }
// sayHello('Haskell');
// console.log(sayHello("Haskell"));

/*Re-Try*/

function sayHello(name) {
    return "Hello, " + name;
}
// sayHello("Codeup");
console.log(sayHello("Codeup" + "!"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello("Casanova"); //string literal argument//
// //console.log('helloMessage');

/*Re-Try*/

let helloMessage = sayHello("Cas");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// var myName = "Casanova";
// sayHello(myName); // "pass variable" means place into parameter ().//
// console.log(sayHello(myName));
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/*Re-Try*/

//my name as a string? Pass my name to sayHello. I should see what same output?
let myName = "Cas"
sayHello(myName);
console.log(sayHello(myName));

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function isTwo(x) {
//     return x === 2
// }
// isTwo(3);

/*Re-Try*/
var random = Math.floor((Math.random() * 3) + 1);
function isTwo(num) {
    return num === 2;
}
isTwo(random);
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
/*function calculateTip(bill + tipPercentage) {
    //I need a variable for tip percentage amounts//
    prompt("Tip Percentage" * x);
    var tipPercentage = x * calculateTip();
    var totalBill = tipPercentage + calculateTip();
    return*/
// function calculateTip(tipPercent, totalBill) {
//     return (tipPercent * totalBill);
// }
// console.log(calculateTip(0.20, 20));

/*Re-Try*/
//  Create function/name
//  Need variable for tip percentage and total of the bill
//  Return amount to tip. Does this mean return a prompt?
//  Example has % * total bill, returning tip amount; ergo, need variables.
function calculateTip(tipPercentage, totalBill) {
    let tip = prompt("What percentage would you like to tip?");
    let tipPercentage = tip *
    return tipPercentage * totalBill;
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
/*var userInput = prompt('Bill Total: ');
var userInput = prompt('Tip Amount (%): ');*/
//alert(calculateTip("Tip Percentage?" + calculateTip(prompt("How much would you like to tip?"))), ("Bill Total"));
// var userTip = prompt("Tip amount?");
// var userBill = prompt("Bill Total?");
// var userTipResult = calculateTip(userTip, userBill);
// alert("Your tip should be " + userTipResult);

/*Re-Try*/


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// function applyDiscount(price, discount) {
//     //var originalPrice
//     //var discountPercentage
//     return console.log(price - (price * discount));//console log checking algo//
// }
// applyDiscount(45.99, 0.12);

/*Re-Try*/
