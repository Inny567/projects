// Activating Strict Mode
'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true,
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// FUNCTIONS

// function logger() {
//     console.log('my name is Inny');
// }

// invoking / calling / running functions
// logger();
// logger();
// logger();


// FUNCTION DECLARATIONS
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// fruitProcessor(5, 0);
// const apppleJuice = fruitProcessor(5, 0);
// console.log(apppleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//const num = number('23');

// function calcAge1(birthYear) {
//     return 2037 - birthYear; //GENERIC FUNCTION
// }

// const age1 = calcAge1(1991);
// //console.log(age1); //FUNCTION DECLARATION

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Inioluwa'));
// console.log(yearsUntilRetirement(1980, 'Emmanuel'));


// FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing Functions
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉🎈`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Inioluwa'));
// console.log(yearsUntilRetirement(1970, 'Bob'));


/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team.Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B.Apply this to the team's average scores 😉

GOOD LUCK 😀 */

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
// Test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalaswins the trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins 😥`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
*/

// Arrays
/*
const friend1 = 'Micheal';
const friend2 = 'John';
const friend3 = 'Julius';

const friends = ['Micheal', 'John', 'Julius'];
console.log(friends);

const y = new Array(1991, 1992, 1993, 1994, 1995);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // This is to know the last element present in an Array
friends[2] = 'King';
console.log(friends);
// friends = ['Bob', 'Alice']; //this cannot work because we cannot change the entire const values of an ARRAY.
const firstName = 'Inioluwa';
const vandross = [firstName, 'Emmanuel', 2022 - 2000, 'Developer', friends];
console.log(vandross);
console.log(vandross.length);

//Exercises on Arrays
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// Basic Array Operations (Methods)

// Push Method
const friends = ['Micheal', 'John', 'Julius'];
friends.push('Kelvin');
console.log(friends);
//const newLenght = friends.push('Jay'); // this is used to calculate the new lenght of a push function..

// Unshift Method 
