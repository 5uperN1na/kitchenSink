//assign first and last name to variables
var firstName = "Paula";
var lastName = "Suarez";

console.log(firstName);
console.log(lastName);

//assign value 50 for 50 states to a constaint
const states = 50;
console.log(states);

//assign numbers and add 5 + 4
var number1 = 5;
var number2 = 4;
console.log(number1 + number2);

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

//setting up my function from lecture example
console.log(add(5, 5));
function add(num1, num2) {
    return num1 + num2;
}

//copied and pasted function from above and changed values
console.log(sayHello(alert));
function sayHello() {
    alert("hello world");
}

//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}

//Calling checkAge function and passing 5 individuals each with a name and age argument.

checkAge('Paula', 41);
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge ('John', 17);


//Array with fav veggies
var veggies = ['green beans', 'tomatoes', 'lettuce'];
//testing alert 
//alert(veggies[1]);

//Using same array with for each loop to display list in console
veggies.forEach(function (veggies) {
    console.log(veggies);
});

//Array with an 5 objects and two properties where the properties will be passed to the ckAge function that will check if older or under 21.

var person = [
    {
        name: 'Paula',
        age: 41
    },
    {
        name: 'Viven',
        age: 2
    },
    {
        name: 'Hernan',
        age: 47
    },
    {
        name: 'Julien',
        age: 5
    },
    {
        name: 'Dog',
        age: 23
    },
]


var i;
for (i = 0; i < person.length; i++) {
    console.log(checkAge(person[i].name, person[i].age));

    function checkAge(name, age) {
        if (age < 21) {
            alert('Sorry ' + name + ' you are not old enough to view this page.');
        } else {
            alert('Congrats ' + name + ' you are old enough to view this page.');
        }
    }



}

//Create a function that passes a string as an argument and getting length of string.  Should be 5 or "Paula".

var name = 'Paula';
console.log(getLength(name));
function getLength(name) {
    console.log(name.length);
}

//Different function passing string argument and getting length after clicking button.
//var myname = 'Suarez';
//console.log(myfunction(myname));
//document.write('<button id="button" type="button" onclick="myfunction(myname);">click</button>');
//function myfunction(myname) {
//alert(myname.length);
//}

//Using function from above to pass "Hellow World" and getting length back--should be 11.  Store length in a variable the test whether it is an odd (display appropriate message) or even and displate appropriate message.
var name = 'Hello World';
console.log(getLength(name));
function getLength(name) {
    var x = name.length;
    console.log(x);

    if (x % 2 == 0)
        console.log("The world is even and nice!");
    else
        console.log("The world is odd place!");

}








