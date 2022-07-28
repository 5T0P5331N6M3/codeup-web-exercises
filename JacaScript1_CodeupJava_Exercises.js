var a = 1; //a = //
var b = a++; //b = //
var c = ++a; //c = //


var d = "hello";
var e = false;

d++; //d = //
e++; //e = //

var perplexed;

perplexed + 2;
//NaN//

var price = 2.7;
price.toFixed(2); //2.70//

isNaN(0)

isNaN(1)

isNaN("")

isNaN ("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN("false")

isNaN(false)

NaN == NaN

!true

!false

!!true

!!0

!!-0

!!1

!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"


/*Execute the following statement in the Chrome JavaScript console and then follow the directions below.


var sample = "Hello Codeup";
Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
*/

var sample = "Hello Codeup";
sample.length;
sample.toUppercase();
sample.toLowercase();
sample.replace("Students" , "Class");
sample.indexOf("C");
sample.substring("Codeup");

/* You have rented some movies for your kids: 
The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), 
and Hercules (1 day, you don't know yet if they're going to 
like it). If price for a movie per day is $3, 
how much will you have to pay?
*/

var day = 9;
var cost = 3;
var total = day * cost;

/*Tried calculating tally for days using shorthand assignment operators,
becasue the movies have not been returned (don't know yet if kids will
like the movie Hercules). I tried showing a running tally. Grr. How? */


/*Suppose you're working as a contractor for 3 companies: Google, Amazon 
and Facebook, they pay you a different rate per hour. Google pays $400, 
Amazon $380, and Facebook $350. How much will you receive in payment for 
this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours 
for Amazon. */

var FB = 350;
var Amazon = 380;
var Google = 400;
var Fh = 10;
var Ah = 4;
var Gh = 6;
var totalFB = FB * Fh;
var totalAmazon = Amazon* Ah;
var totalGoogle = Google * Gh;
totalGoogle + totalFB + totalAmazon; //$7420//

/*A student can be enrolled in a class only if the class is not full 
and the class schedule does not conflict with her current schedule.
*/

var isFull = false;
var isConflict = false;
let enroll = (!isFull && !isConflict);


/* A product offer can be applied only if a person buys more than 2 items, 
and the offer has not expired. Premium members do not need to buy a 
specific amount of products.
*/

var product = true > 2;
var offer = product > 2;
var purchase = ;
var expired = ;
var premium = false;


/* Use the following code to follow the instructions below:


var username = 'codeup';
var password = 'notastrongpassword';
Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
*/

var username = 'codeup';
var password = 'notastrongpassword';
var isPwdLong = password.length >=5;
var isPwdUnique = password.indexOf(username) == -1;
isPwdUnique //true//
password = username + "extra"; //'codeupextra'//
isPwdUnique //false//
var whiteSpace = true;
var isTooLong = username.length <=20;
//Use .trim?//
var isTrailing = password.indexOf(" ", 0); || paswword.indexOf(" ", -1);
password = "random" //'random'//

//Lost on the last one. Instructor worked around a problem; couldn't hear with class chatter.//
