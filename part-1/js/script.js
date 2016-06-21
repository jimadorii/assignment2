/* problem 1
var name = prompt("Hello, what is your name?", "Enter here");
window.alert(name.length);
*/

/* problem 2
var firstName = prompt("Hello, what is your name?", "Enter here");
var pick = prompt("Count the letters in your name, pick a number between zero and that number", "Enter number here");
window.alert(firstName.charAt(pick));
*/

/* problem 3
var firstName = prompt("Please enter your first name", "First name here");
var lastName = prompt("Please enter your last name", "Last name here");
window.alert("Your name is: " + firstName.concat(" " +lastName));
*/

/* problem 4
var sentence = "The quick brown fox jumps over the lazy dog";
window.alert(sentence.indexOf("fox"));
*/

/* problem 5
var sentence = "The quick brown fox jumps over the lazy fox";
window.alert(sentence.lastIndexOf("fox"));
*/

/* problem 6
var sentence = "The quick brown fox jumped over the lazy dog";
var firstName = prompt("What is your full name?", "Name here");
window.alert(sentence.replace("the lazy dog", firstName));
*/

/* problem 7
var phrase = "The quick brown fox jumps over the lazy dog";
var sentence = prompt("Pick a word from this sentence:"  + "\n" + "\"" + (phrase) + "\"");
var answer;
    if (sentence == "The") {
    window.alert("The sentence contains this word!");
    } 
    else if (sentence == "quick") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "brown") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "fox") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "jumps") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "over") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "lazy") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "the") {
    window.alert("The sentence contains this word!");
    }
    else if (sentence == "dog") {
    window.alert("The sentence contains this word!");
    }
    else {
    window.alert("The sentence does not contain this word");
}
*/

/* problem 8
var old_string = "The quick brown fox jumped over the lazy dog";
var new_string = old_string.slice(32, 45);
window.alert(new_string);
*/

/* problem 9
var phrase = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(phrase.toLowerCase());
*/

/* problem 10
var sentence = "the quick brown fox jumped over the lazy dog";
window.alert(sentence.substring(0, 1).toUpperCase() + sentence.substring(1));
*/