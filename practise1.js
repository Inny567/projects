/*
let js = 'amazing';
//console.log(23 + 40 - 10);

let firstName = 'Vandross';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convenions
let _function = 'm'
let myFirstJob = 'cleaner';
let myCurrentJob = 'Programmer';
console.log(myFirstJob);
console.log(myCurrentJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Vandross');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job

var job = 'teacher';
job = 'coder';

// math operator
const now = 2067
const ageEmmy = now - 2000;
const ageSarah = now - 2018;
console.log(ageEmmy, ageSarah);

console.log(ageEmmy * 2, ageEmmy / 10, 5 ** 3);
// 5 ** 3 means 5 to the power of 3 i.e 5 * 5 * 5
const firstName = 'Emmanuel'
const lastName = 'Inioluwa'
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
x--;
console.log(x);

//Comparison operator
console.log(ageEmmy > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 48);
console.log(ageSarah >= 50);

const isFullAge = ageSarah >= 48;

console.log(now - 2000 > now - 2018);
*/


/*
// Precedence of basic operators
const now = 2067
const ageEmmy = now - 2000;
const ageSarah = now - 2018;

console.log(now - 2000 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageEmmy + ageSarah) / 2;
console.log(ageEmmy, ageSarah, averageAge);
*/


/*
// Coding Challenge 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

const heightMark = 1.69;
const massMark = 78;

const heightJohn = 1.95;
const massJohn = 92;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/


/*
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
*/


/*
// Strings and Template literals
const firstName = 'Inioluwa';
const job = 'Coder';
const birthYear = 2000;
const year = 2067;

const Inioluwa = "I'm " + firstName + ', a ' + (year - birthYear) +
    ' years old ' + job + '!';

console.log(Inioluwa);
const InioluwaNew = `I'm ${firstName}, a ${year -
    birthYear} years old ${job}!`;
console.log(InioluwaNew);

console.log('Strings \n\
with multiple \n\
lines')

console.log(`Strings
with multiple
lines`)
*/


/*
// Taking decisions
const age = 12;
const isOldEnough = age >= 18;


if (isOldEnough) {
    console.log('Inioluwa can start his driving license 🚘')
} else {
    const yearsLeft = 18 - age;
    console.log(`Inioluwa is too young🤣... wait another ${yearsLeft} years: 🤪`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding challenge 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI.The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


//const heightMark = 1.69;
//const massMark = 78;

//const heightJohn = 1.95;
//const massJohn = 92;

//const massMark = 95;
//const heightMark = 1.88;

//const massJohn = 85;
//const heightJohn = 1.76;

//const BMIMark = massMark / (heightMark * heightMark);
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log(BMIMark, BMIJohn)

//if (BMIMark > BMIJohn) {
//console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
//} else {
// console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
//}

// Type Conversion and Coercion
//TYPE CONVERSION


/*
// Converting a STRING to a NUMBER
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);

// Converting a NUMBER to STRING
console.log(String(23), 23);

// TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - '3');
console.log('23' + '10' + '3');
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
// TRUTHY and FALSY values
// FALSY values
// 5 FALSY values are: 0, '', Undefined, Null, NaN.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Inioluwa'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job !');
}

let height;
if (height) {
    console.log("YAY Height is DEFINED ;)");
} else {
    console.log('Height is UNDEFINED !');
}
*/

/*
// Equality Operator
//const age = 18;
const age = '18'
if (age === 18) console.log('You just became an adult :D (Strict)');
if (age == 18) console.log('You just bacame an adult :D (Loose)');
const favorite = Number(prompt("what's your favorite number...?"));
console.log(favorite);
console.log(typeof favorite);

//if (favorite == 23) { // '23' == 23
//console.log('Cool!🥰 23 is an amazing number😎');
//}

if (favorite === 23) { // '23' === 23 using Number() on line 292
    console.log('Cool!🥰 23 is an amazing number😎');
} else if (favorite === 9) {
    console.log('9 is also a cool😎 number!')
} else if (favorite === 7) {
    console.log('7 is also a cool😎 number!')
} else {
    console.log('Number is not 23 or 7 or 9')
}

// Different or not equal operator..
if (favorite !== 23) console.log('Why not 23..😥');
*/

// Boolean Logic 

/*
const hasDriverLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive 😎')
// } else {
//     console.log('Someone else should drive 😛')
// }

const isTired = false; //C
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive 😎')
} else {
    console.log('Someone else should drive 😛')
}*/

//Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//const dolphinsAverageScore = (96 + 108 + 89) / 3;
//const koalasAverageScore = (88 + 91 + 110) / 3;

//if (dolphinsAverageScore > koalasAverageScore) {
//console.log('Dolphin Wins the Trophy 🏆')
//} else if (dolphinsAverageScore === koalasAverageScore) {
//    console.log("It's a DRAW 😊")
//} else {
//    console.log('Koalas Wins the Trophy 🏆')
//}

// BONUS 1
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log('Dolphin Wins the Trophy 🏆');
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("It's a DRAW 😊");
// } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
//     console.log('Koalas Wins the Trophy 🏆');
// }

// BONUS 2
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 106) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log('Dolphin Wins the Trophy 🏆');
// } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
//     console.log("It's a DRAW 😊");
// } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
//     console.log('Koalas Wins the Trophy 🏆');
// } else {
//     console.log('No one wins the Trophy 😥');
// }

// THE SWITCH STATEMENT 

//const day = 'monday';
//const day = 'tuesday';
//const day = 0
// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meet up');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');

// }

// const day = 'monday';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meet up');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || 'thursday') {
//     console.log('write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// STATEMENTS and EXPRESSIONS

// THE CONDITIONAL (ternary) OPERATOR
//const age = 23;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink milk 🥛');
// const drink = age >= 18 ? 'wine 🍷' : 'milk 🥛';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷'
// } else {
//     drink2 = 'milk 🥛'
// }
// console.log(drink2);
// // using teplate literal 
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'milk 🥛'}`);

// Coding challenge 4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

//const bill = 275;
//const bill = 40;
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
