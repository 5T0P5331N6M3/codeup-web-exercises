var word = "bottle";
var count = 99;

while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }

}

//Test for jokes
var joke = "JavaScript walked into a bar ....'; //Do not mix double and single quotations
var toldJoke= "false"; //When Boolean, do not use quotes
var $punchline = "Better watch out for those semi-colons." //add semi-colon; not recommended using $ for variables
var %entage = 20; // % cannot be used for var
var result //missing semi-colon

if (toldKJoke == true) {
    Alert($punchline); //Alert must be lowercase
} else //missing an opening brace
    alert(joke);
}

//Movie Night
var zip code = 98104; //No spaces in var names
var joe'sFavoriteMovie = Forbidden Planet; //No quotes in var names; need quotes for value.
    var movieTicket$       =      9; //Whitespace is okay

if (movieTicket$ >= 9) {
    alert("Too much!");
} else {
    alert("We're going to see " + joe'sFavoriteMovie); //This if/else doesn't work because of the invalid var name.
}

if (inStock == true) { //First, see if the item is in stock
    if (onSale == true) { //And, if so, then see if it is on sale
        alert("buy buy buy!"); //And if so, then take some action, like buy a few
    } //Notice this code is executed only if both conditionals are true.
}
//Simplify above code by combining two conditionals.

if (inStock == true && onSale == true) { //AND operator combining the two conditionals; code is more readable
    alert("buy buy buy!");
}
//Adding multiple booleans

if (inStock == true && (onSale == true || price < 60)) {
    //Notice using parentheses to group the conditionals together, getting the result of the OR first,
    // and then us result to compute the result of AND
    alert("buy buy buy!");
}
/*Exercise
Bob and Bill, both from accounting, are working on a new price checker application for their company's website.
They've both written if/else statements using boolean expressions. Both are sure they've written the correct code.
Which accountant is right? Should these accountants even be writing code?
 */

//Bob
if (price < 200 || price > 600) {
    alert("Price is too low or too high! Don't buy the gadget");
} else {
    alert("Price is right! Buy the gadget.");
}

//Bill
if (price >=200 || price <= 600) {
    alert("Price is right! Buy the gadget.");
} else {
    alert("Price is too low or too high! Don't buy the gadget");
}
/*Bob's better

 */

//Verbosity

if (inStock == true) { //Often compare boolean variables to true or false to form conditionals.
    //And, inStock is a variable holding a boolean value of true or false.
}
//Overkill. The whole point of conditional is evaluating either T or F, but Boolean variable inStock already is
//one of those values. No need comparing the variable to anything; it stands on its own.

//inStock Simplified block
if (inStock) {
    //If using the boolean variable by itself, then if the variable is T, the conditional test is T. Block executed.
}

/*I keep forgetting:
alert displays results of code
prompt gets input from user
 */

//----------------------------------------------------------------------------------------------------------------------
//Functions

function bark(name, weight) {
    //The function keyword begins a function definition.
    //Function name is "bark". Use memorable names for functions, as they are reusable.
    //Two values for "bark", name and weight, are in the parameter of the function.
    //Code goes between curly braces, creating a block code, which will execute the function.
    //Between the curly braces {} is called the body.
}
//Write the code for the function. The code will check the weight and output function result(s).

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}
//Calling, or invoking, the function:
bark("Socrates", 35);
bark("Bubba", 42);
bark("Loki", 13);

//The parameters for bark are assigned values when the function is called.
//Everything inside the function (block code) is the body of the function.
//The values in the parentheses are "arguments".
//When calling function, the arguments are assigned to the parameter names.
//Any time the parameters appear in the function, the values passed in are used.
//Statements are executed from top to bottom, like all code. The only difference is the parameter
//names being assigned the values of the arguments passed into the function.



//      Pass-By_Value
//    1. Declare a variable age, and initialize it to the value 7
var age = 7;
//  2. declare a function addOne, with a parameter named x, adding 1 to the value of x.
function addOne(x) {
    x = x + 1;
}
//  3. Call the function addOne, pass it the variable age as the argument.
//      The value in age is copied into the parameter x.
addOne(age);
//  4. Value of x is incremented by one. "x" is a copy, so only "x" is incremented, not age.
function addOne(x) {
    x = x + 1;
}

//    RETURN STATEMENT
// The return statement includes a value or an expression, which is returned as a result of calling the function.
