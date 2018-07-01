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
console.log(checkAge("Paula", 20));
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}

//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
console.log(checkAge("Charles", 21));
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}

//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
console.log(checkAge("Abby", 27));
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}

//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
console.log(checkAge("James", 18));
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}

//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
console.log(checkAge("John", 17));
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ' you are not old enough to view this page.');
    } else {
        alert('Congrats ' + name + ' you are old enough to view this page.');
    }
}
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



