/*
Variables and Data types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variables naming rules
var johnMark = 'John and Mark';
var if = 23;


/**********************

* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
 * Basic Operators
 */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeOf Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/*****************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/
/***********************
 * CODING CHALLENGE 1
 */
/*
var markBMI, johnBMI, markMass, johnMass, markHeight, johnHeight;
markMass = 130;
johnMass = 105;

markHeight = 1.5;
johnHeight = 1.7;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var isHigher = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher);
*/
/**********************
 * IF / ELSE statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');

}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markBMI, johnBMI, markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 105;

markHeight = 1.5;
johnHeight = 1.7;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log('Mark\' BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
//var isHigher = markBMI > johnBMI;
//console.log('Is Mark\'s BMI higher than John\'s? ' + isHigher);
*/
/**********************************
 * Boolean Logic
 */
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

*/

/*********************************
 * The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 14;
// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch Statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives and uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');

// }
// age = 56;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');

// }

/*************************************
 * Truthy and Falsy values and equality operators
 */

// fasly values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;
height = 23;


if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/*************************************
 * CODING CHALLENGE 2
 */

// var teamJohn = 365 + 129 + 153;
// var teamMike = 355 + 159 + 123;
// var teamMary = 375 + 159 + 123;


// teamJohn = teamJohn / 3;
// teamMike = teamMike / 3;
// teamMary = teamMary / 3;

// if (teamJohn > teamMike && teamJohn > teamMary) {
//     console.log('John\'s team has the higher average score with ' + teamJohn + ' points');
// } else if (teamMike > teamJohn && teamMike > teamMary) {
//     console.log('Mike\'s team has the higher average score with ' + teamMike + ' points');
// } else if (teamMary > teamJohn && teamMary > teamMike) {
//     console.log('Mary\'s team has the higher average score with ' + teamMary + ' points');
// } else {
//     console.log('The average score is a draw.')
// }

/********************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retried.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
 */
/********************************
 * Function Statements and Expressions
 */
// Function declaration
// function whatDoYouDo(job, firstName) {}

/*
// Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/
/**********************************
 * Arrays
 */
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

/*******************************
 * CODING CHALLENGE 2
 */

/*
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var allTips = [];
var paidAmounts = [];


function calculateTip(bill) {
   var tip, newBill;
   if (bill < 50) {
       tip = bill * 0.2;

       newBill = bill + tip;
       allTips.push(tip);
       paidAmounts.push(newBill);
       console.log(allTips);
       console.log(paidAmounts);
   } else if (bill > 50 && bill < 200) {
       tip = bill * 0.15;
       newBill = bill + tip;
       allTips.push(tip);
       paidAmounts.push(newBill);
       console.log(allTips);
       console.log(paidAmounts);
   } else {
       tip = bill * 0.10;
       newBill = bill + tip;
       allTips.push(tip);
       paidAmounts.push(newBill);
       console.log(allTips);
       console.log(paidAmounts);
   }
};

calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);
*/



















