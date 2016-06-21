// Begin part 1
/* problem 1
var enterDigit = prompt("Please enter a any number", "Enter positive or negative number");
console.log(Math.abs(enterDigit));
*/

/* problem 2
var enterDigit = prompt("Please enter a any decimal number", "Enter number here");
console.log(Math.ceil(enterDigit));
*/

/* problem 3
var enterDigit = prompt("Please enter a any decimal number", "Enter number here");
console.log(Math.floor(enterDigit));
*/

/* problem 4

*/

/* problem 5
var numInput = prompt("Pick a number", "Enter here");
console.log(Math.sqrt(numInput));
*/
// End part 1



// Begin part 2

/* problem 6
var d = new Date();

console.log(d.toDateString());
*/

/* problem 7
var d = new Date();
console.log(d.getDate());
*/


/* problem 8
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = month[d.getMonth()];
console.log(d.toDateString());
*/

/* problem 9
var d = new Date();
var n = d.getDay();
 if( n == 6 )
console.log("Its weekend!!");
else
console.log("Its not weekend");
*/

/* problem 10 SKIPPED
*/

/* problem 11 SKIPPED
*/

// Begin part 3
/* problem 12
var questionOne = prompt("Pick a number", "Enter here");
var questionTwo = prompt("Pick another number", "Enter here");
console.log(Math.max(questionOne, questionTwo));
*/

/* problem 13
var questionOne = prompt("Enter Grade for Ursula.", "Enter here");
var questionTwo = prompt("Enter Grade for Paul.", "Enter here");
var questionThree = prompt("Enter Grade for Henry.", "Enter here");
var questionFour = prompt("Enter Grade for Tabitha.", "Enter here");
var questionFive = prompt("Enter Grade for Lucy.", "Enter here");
    if (questionOne < 60) {
    console.log("Ursula's Grade is F");
    }
    else if (questionOne < 70) {
    console.log("Ursula's Grade is D");
    }
    else if (questionOne < 80) {
    console.log("Ursula's Grade is C");
    }
    else if (questionOne < 90) {
    console.log("Ursula's Grade is B");
    }
    else if (questionOne <= 100) {
    console.log("Ursula's Grade is A");
    }


    if (questionTwo < 60) {
    console.log("Paul's Grade is F");
    }
    else if (questionTwo < 70) {
    console.log("Paul's Grade is D");
    }
    else if (questionTwo < 80) {
    console.log("Paul's Grade is C");
    }
    else if (questionTwo < 90) {
    console.log("Paul's Grade is B");
    }
    else if (questionTwo <= 100) {
    console.log("Paul's Grade is A");
    }

    if (questionThree < 60) {
    console.log("Henry's Grade is F");
    }
    else if (questionThree < 70) {
    console.log("Henry's Grade is D");
    }
    else if (questionThree < 80) {
    console.log("Henry's Grade is C");
    }
    else if (questionThree < 90) {
    console.log("Henry's Grade is B");
    }
    else if (questionThree <= 100) {
    console.log("Henry's Grade is A");
    }

    if (questionFour < 60) {
    console.log("Tabitha's Grade is F");
    }
    else if (questionFour < 70) {
    console.log("Tabitha's Grade is D");
    }
    else if (questionFour < 80) {
    console.log("Tabitha's Grade is C");
    }
    else if (questionFour < 90) {
    console.log("Tabitha's Grade is B");
    }
    else if (questionFour <= 100) {
    console.log("Tabitha's Grade is A");
    }

    if (questionFive < 60) {
    console.log("Lucy's Grade is F");
    }
    else if (questionFive < 70) {
    console.log("Lucy's Grade is D");
    }
    else if (questionFive < 80) {
    console.log("Lucy's Grade is C");
    }
    else if (questionFive < 90) {
    console.log("Lucy's Grade is B");
    }
    else if (questionFive <= 100) {
    console.log("Lucy's Grade is A");
    }
    else {
    console.log("Incorrect Value. Enter number grade between 0 and 100. Please try again");
}
*/

/* problem 14
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
        }
        else {
            odds.push(nums[i]);
        }
    }

};

evenNumbers(nums);
console.log(evens + " evens");
console.log(odds + " odds");
*/

/* problem 15
for (var x=1; x <= 100; x++){
    if( x % 3 ===0) {
        document.write("Fizz");
    }
    else {
        if( x % 5 ===0) {
            document.write("Buzz");
        }
    }
    document.write(x + "<br>");
}
*/

/* part 4 - 9 incomplete */