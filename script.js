
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
/*
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
*/
//if questions, check procedence table

//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name +' is married!');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

if(isMarried) {
    console.log('Yes!');
} else {
    console.log('No!');
}

if (23 == "23") {
    console.log('Something to print...');
}
//JS thinks these are the same thing because of type coercion

if (23 === "23") {
    console.log('Something to print...');
}
*/
//JS does not use type coercion because of === because it is not true.  This is the more traditional use because it is safer.

//Lecture:  Boolean logic and switch

var age = 20

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in London.');
        break;
    case 'cop': 
        console.log('John fights crime.');
        break;   
    default:
        console.log('John does something else.');    
}