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
 */

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