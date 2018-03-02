
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
/*
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
*/

//Coding Challege 1
/*
var billHeight = 200;
var billAge = 26;

var danHeight = 130;
var danAge = 20;

var samHeight = 300;
var samAge = 30;

billScore = (billHeight + billAge);
    console.log(billScore);

danScore = (danHeight + danAge);
    console.log(danScore);

samScore = (samHeight + samAge);
    console.log(samScore);
*/
    /*
  if (billScore > danScore) {
      console.log('Bill wins with a score of ' + billScore);
  } else if (danScore > billScore) { 
      console.log('Dan wins with a score of ' + danScore);
  } else {
      console.log('There is a draw.');
  }
  */
/*
  var maryHeight = 158;
  var maryAge = 31;
  var maryScore = (maryHeight + maryAge);
    console.log(maryScore);

 if (billScore > danScore && maryScore) {
    console.log('Bill wins with a score of ' + billScore + ' points!');
 } 
 */

 //Lecture: Functions
/*
 function calculateAge(yearOfBirth) {
     var age = 2016 - yearOfBirth;
     return age;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1969);
 var ageMary = calculateAge(1948);
 

 function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
 }

 yearsUntilRetirement('John', 1990);
 yearsUntilRetirement('Mike', 1969);
 yearsUntilRetirement('Mary', 1948);
 */

 //Lecture: Statements and Expressions

 //Lecture:Arrays
/*
 var namesArray = ['john', 'Jane', 'Mark'];
 var yearsArray = new Array(1990, 1969, 1948);

 console.log(namesArray); //pulls up all of the names
 console.log(namesArray[0]);  //pulls up just John

 namesArray[1] = 'Ben'; //mutates array
 console.log(namesArray);

 var john = ['John', 'Smith', 1990, 'designer', false];

 john.push('blue');  //push adds to the end of an array
 john.unshift('Mr.'); //unshift adds to the beginning of the array
 john.pop(); //pop removes the last element from the array
 john.shift(); //removes the first element from the array
 console.log(john);

 
 if (john.indexOf('teacher') === -1) {
     console.log('John is not a teacher.');
 }
 */

 //Lecture: Objects and Properties
/*
 var john = {
     name: 'John',
     lastName: 'Smith',
     yearOfBirth: 1990,
     job: 'teacher',
     isMarried: false
 }
 //this is an object literal

 console.log(john);
 console.log(john.lastName);
 console.log(john['lastName']);

 var xyz = 'job';
 console.log(john[xyz]);

 john.lastName = 'Miller';
 john['job'] = 'programmer';
 console.log(john);
 //data mutated

 //or you can write it this way

 var jane = new Object();
 jane.name = 'Jane';
 jane.lastName = 'Smith';
 jane['yearOfBirth'] = 1969;

 console.log(jane);
*/

//Lecture: Objects and Methods
/*
//v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016-this.yearOfBirth;
    }
};

console.log(john);  //all of John's info
console.log(john.family); //family
console.log(john.family[2]); //Bob
console.log(john.calculateAge(1990));  //John's age
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2016-this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
 

