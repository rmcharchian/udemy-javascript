
// Lecture on Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2

/*var name = 'John';
var age = 26;

console.log(name + age); //type coercion
console.log(age + age); //adds the numbers

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is ' + age + ' and is a ' + job + '.  Is he married? ' + isMarried);
// type coercion converts all of this to a string in the console log

age = 'thirty six';
job = 'driver';

console.log(name + ' is ' + age + ' and is a ' + job + '.  Is he married? ' + isMarried);
// We changed their values on line 35 and 36.  Code is read in a sequence of instructions.

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is ' + age + ' and is a ' + job + '.  Is he married? ' + isMarried);
*/

// Lecture: Operators
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
// 2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 

ageJohn++
console.log(ageJohn);
console.log(ageMark);
//if questions, check procedence table