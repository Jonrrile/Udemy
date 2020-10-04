/***********************
 * Variables and data types


var firstName = "Jonathan";
console.log(firstName);

var lastName = 'Riley';
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
job = "macdaddy";
console.log(job);


/// Variable mutation
var firstName = "Jonathan";
var age = 26;


console.log(firstName + ' ' + age);

var job, isMarried;
job = "macdaddy";
isMarried = false;
//you can declare multiple variables on the same line.

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 27;
job = 'programmer';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last name?');
console.log(lastName);

Basic Operators
var year = 2020;
var yearJonathan = 26;
var yearMark = 33;
console.log(yearJonathan + 2);
var whoOlder = yearJonathan > yearMark
console.log(whoOlder);

var now = 2020;
var yearJonathan = 1993
var legalAge = 18;

var isLegalAge = now - yearJonathan >= legalAge;
console.log(isLegalAge);

// Coding challenge one

var johnHeight = 60;
var markHeight = 72;
var johnMass = 213;
var markMass = 178;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);
var markBmi = markMass / (markHeight * markHeight);

var higherBmi = markBmi > johnBmi;
console.log(higherBmi);
console.log("Is mark's BMI higher than John's?", higherBmi);
*/

// if else statements 
/*
var firstName = "Jonathan";
var civilStatus = "single";

if (civilStatus == "married") {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " will hopefully marry soon.");
}
var firstName = "Jonathan";
var age = 16;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager.")
} else {
    console.log(firstName + " is a man.");
}

*/

// Ternary Operators and Switch Statements 
/*
var firstName = "Jonathan";
var age = 26;

age >= 21 ? console.log(firstName + " drinks a beer.")
    : console.log("drinks a juice.");

//This is a ternary operator that can take the place of
// an else if statement. Need more practice on this.

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

var job = "Yuhhhh";
switch (job) {
    case 'unemployed':
        console.log('Get a job!');
        break;
    case 'driver':
        console.log('drives for uber.');
        break;
    case 'developer':
        console.log('builds awesome websites.');
        break;
    default:
        console.log("I don't know what to tell ya chief.");
}

//Truthy and Falsy Values

var height = 60;
if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined.');
}
// why does zero still return undefined?? 

if (height == '60') {
    console.log('The == operator does type coercion.');
}
// == will convert int to string === is strict comparison.
*/

// Coding Challenge 2: 

var johnScore = 89 + 120 + 103;
console.log(johnScore);
var mikeScore = 116 + 9 + 123;
var maryScore = 97 + 134 + 105;
var johnAverage = johnScore / 3;
var mikeAverage = mikeScore / 3;
var maryAverage = maryScore / 3;
console.log(mikeAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log(`John's team wins with an average score of ${johnAverage}.`);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log(`Mike's team wins with an average score of ${mikeAverage}`);
} else {
    console.log('Mary wins!');
}
