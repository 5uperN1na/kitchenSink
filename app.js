//assign first and last name to variables
var firstName= "Paula";
var lastName = "Suarez";

console.log (firstName);
console.log (lastName);

//assign value 50 for 50 states to a constaint
const states = 50;
console.log (states);
 
//assign numbers and add 5 + 4
var number1 = 5;
var number2 = 4;
console.log(number1+number2);
 
//charCodeAt() comparison between first letter of my name to the letter "L"

//finding ASCII value of letter P
var p = "Paula";
var pUnicode = p.charCodeAt(0);
console.log(pUnicode);

//finding ACSII value of letter L
var l = "L";
var lUnicode = l.charCodeAt(0);
console.log(lUnicode);

//comparing if ASCII value of P is greater than ASCII value of letter L.
if (pUnicode > lUnicode) {
    // code to run if condition is true
    console.log("Back at the end of the line!");
} else {
    // code to run if condition is not true
    console.log("Next!");
}


function sayHello(msg) {
   alert ("Hello world!");
}