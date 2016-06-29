// Begin part 1 - MATH & MATH FUNCS


/*
// BEGIN problem 1

var enterDigit = prompt("Please enter a any number", "Enter positive or negative number");
console.log(Math.abs(enterDigit));
// END problem 1
*/


/*
// BEGIN problem 2

var enterDigit = prompt("Please enter a any decimal number", "Enter number here");
console.log(Math.ceil(enterDigit));
// END problem 2
*/


/*
// BEGIN problem 3

var enterDigit = prompt("Please enter a any decimal number", "Enter number here");
console.log(Math.floor(enterDigit));
// END problem 3
*/


// BEGIN problem 4

//SKIPPED
//END problem 4


/*
// BEGIN problem 5

var numInput = prompt("Pick a number", "Enter here");
console.log(Math.sqrt(numInput));
// END problem 5
*/


// End PART 1

//----------------------------------------------------

// Begin part 2 - DATE & DATE FUNCS


/*
// BEGIN problem 6

var d = new Date();

console.log(d.toDateString());
// END problem 6
*/


/*
// BEGIN problem 7

var d = new Date();
console.log(d.getDate());
// END problem 7
*/



/*
// BEGIN problem 8

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
window.console.log("The current month is " + monthNames[d.getMonth()]);
// END problem 8
*/



/*
// BEGIN problem 9
var d = new Date();
var n = d.getDay();
 if( n == 6 )
window.console.log("Its weekend!!");
else
window.console.log("Its not weekend");
// END problem 9
*/


/*
// BEGIN problem 10 

var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var d = new Date();
window.console.log("Yesterday was " + dayNames[d.getDay()-2]);
// END problem 10
*/



/*
// BEGIN problem 11

function letterOnly() {
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var d = new Date();
window.console.log("Today is " + dayNames[d.getDay()-1].charAt(0));
}

letterOnly();
// END problem 11
*/


// END part 2

//----------------------------------------------------

// Begin part 3 - CONDITIONAL LOGIC & LOOPING OPS


/*
// BEGIN problem 12

var questionOne = prompt("Pick a number", "Enter here");
var questionTwo = prompt("Pick another number", "Enter here");
window.console.log(Math.max(questionOne, questionTwo));
// END problem 12
*/


/*
// BEGIN problem 13

var questionOne = prompt("Enter Grade for Ursula.", "Enter here");
var questionTwo = prompt("Enter Grade for Paul.", "Enter here");
var questionThree = prompt("Enter Grade for Henry.", "Enter here");
var questionFour = prompt("Enter Grade for Tabitha.", "Enter here");
var questionFive = prompt("Enter Grade for Lucy.", "Enter here");
    if (questionOne < 60) {
    console.log("Ursula's Grade is F");
    window.}
    else if (questionOne < 70) {
    window.console.log("Ursula's Grade is D");
    }
    else if (questionOne < 80) {
    window.console.log("Ursula's Grade is C");
    }
    else if (questionOne < 90) {
    window.console.log("Ursula's Grade is B");
    }
    else if (questionOne <= 100) {
    window.console.log("Ursula's Grade is A");
    }


    if (questionTwo < 60) {
    window.console.log("Paul's Grade is F");
    }
    else if (questionTwo < 70) {
    window.console.log("Paul's Grade is D");
    }
    else if (questionTwo < 80) {
    window.console.log("Paul's Grade is C");
    }
    else if (questionTwo < 90) {
    window.console.log("Paul's Grade is B");
    }
    else if (questionTwo <= 100) {
    window.console.log("Paul's Grade is A");
    }

    if (questionThree < 60) {
    window.console.log("Henry's Grade is F");
    }
    else if (questionThree < 70) {
    window.console.log("Henry's Grade is D");
    }
    else if (questionThree < 80) {
    window.console.log("Henry's Grade is C");
    }
    else if (questionThree < 90) {
    window.console.log("Henry's Grade is B");
    }
    else if (questionThree <= 100) {
    window.console.log("Henry's Grade is A");
    }

    if (questionFour < 60) {
    window.console.log("Tabitha's Grade is F");
    }
    else if (questionFour < 70) {
    window.console.log("Tabitha's Grade is D");
    }
    else if (questionFour < 80) {
    window.console.log("Tabitha's Grade is C");
    }
    else if (questionFour < 90) {
    window.console.log("Tabitha's Grade is B");
    }
    else if (questionFour <= 100) {
    window.console.log("Tabitha's Grade is A");
    }

    if (questionFive < 60) {
    window.console.log("Lucy's Grade is F");
    }
    else if (questionFive < 70) {
    window.console.log("Lucy's Grade is D");
    }
    else if (questionFive < 80) {
    console.log("Lucy's Grade is C");
    window.}
    else if (questionFive < 90) {
    window.console.log("Lucy's Grade is B");
    }
    else if (questionFive <= 100) {
    window.console.log("Lucy's Grade is A");
    }
    else {
    window.console.log("Incorrect Value. Enter number grade between 0 and 100. Please try again");
}
// END problem 13
*/


/*
// BEGIN problem 14
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
window.console.log(evens + " evens");
window.console.log(odds + " odds");
// END problem 14
*/


/*
// BEGIN problem 15

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
// END problem 15
*/

// END part 3


//----------------------------------------------------

// Begin part 4 - Hitchhiker's Guide...

/*
//player first choice "OK" or "Cancel"
var ready = confirm("Are you ready to play a game?");
if (ready == true) {
    alert("Awesome, our hero is waiting!");
} else {
    alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

// Story line - Pt 1
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left." +"\n \n" + "Your back is against the wall…");


var choice = prompt("Which direction would you like to head" + "\n" + "(please enter forward, left, or right)");

switch (choice) {
  case "forward":
    window.alert("You walk about 100 yards and safely make your way out of the cave.");
    break;
  case "left":
    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
    break;
  case "right":
    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
    break;
  case "Forward":
    window.alert("You walk about 100 yards and safely make your way out of the cave.");
    break;
  case "Left":
    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
    break;
  case "Right":
    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
    break;
  default:
    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}
var response;
var rate = prompt("Please rate this game on a scale of 1-10.");
    if (rate < 5) {
        response = "Whatever, you weren’t very good at this game anyway!";
    }

    else if (rate >= 6) {
        response = "Thank you, we will continue to make improvements to the game!";
    }
    else {
        response = "That's not a value. We'll just give that a 10 then.";
    }
window.alert(response);
*/

// END part 4

//----------------------------------------------------

// BEGIN part 5 - COIN FLIP

/*
var coinflip = Math.random();
coinflip = Math.round();

var choice = window.prompt("Heads or Tails");

if (choice === "tails") {
    if (coinflip <= 0.5) {
        var result = window.alert("The flip was tails and you chose tails...you win!");
    } else {
        var result = window.alert("The flip was heads but you chose tails...you lose!");
    }
} else if (choice === "heads") {
    if (coinflip => 0.5) {
        var result = window.alert("The flip was heads and you chose heads...you win!");
    } else {
        var result = window.alert("The flip was tails but you chose heads...you lose!");
    }
}
*/

// END part 5

//----------------------------------------------------

// BEGIN part 6 - COIN FLIP REDUX

/*
var coinflip;
coinflip = Math.random();
coinflip = Math.round();

function coins () {
for (i = 0; i < 10; i++) {
    
if (choice = "tails") {
    if (coinflip === 0) {
        var result = window.alert("The flip was tails and you chose tails...you win!");
    } else {
        var result = window.alert("The flip was heads but you chose tails...you lose!");
    }
*/

// END part 6


//----------------------------------------------------

// BEGIN part 7 - COIN FLIP STREAK
// SKIPPED
// END part 7


//----------------------------------------------------

// BEGIN part 8 - LOOPING A TRAINGLE

/*
for ( var row = 1; row <= 7; ++row ) 
{
document.writeln( "<br />" );

for ( var column = 1; column <= row; ++column ) 
{ 

document.write( "# " );

}
}
*/

// END part 8


//----------------------------------------------------

// BEGIN part 9 - COIN FLIP STREAK

/*
for (var x=0; x<=15; x++) {  
        if (x === 0) {  
                console.log(x +  " is even");  
        }  
        else if (x % 2 === 0) {  
                console.log(x + " is even");     
        }  
        else {  
                console.log(x + " is odd");  
        }  
} 
*/
// END part 9