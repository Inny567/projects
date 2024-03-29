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

/*
// Push Method (ADDS elements at the END of an Array)
const friends = ['Micheal', 'John', 'Julius'];
const newLenght = friends.push('Jay'); // this is used to calculate the new lenght of a push function..
console.log(friends);
console.log(newLenght);

// Unshift Method (ADDS element at the BEGINNING of the Array)
friends.unshift('James');
console.log(friends);

// Pop Method (Pop method REMOVE the LAST element of an Array)
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift Method (Shift Method REMOVE the element that BEGINS an Array)
friends.shift();
console.log(friends);

// indexOf Method (this tells the position of an element in an array)
console.log(friends.indexOf('John'));
console.log(friends.indexOf('Bob'));

// includes Method ( this tells whether an element is present in an array by TRUE/FALSE value)
friends.push(23);
console.log(friends.includes('John'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('John')) {
    console.log('you have a friend called John 🥰');
} */

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
}
const bill = 100;
console.log(calcTip(bill));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + (calcTip(bills[0])), bills[1] + (calcTip(bills[1])), bills[2] + (calcTip(bills[2]))];
console.log(totals);

const totals1 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals1); */

// Introduction to OBJECTS
// const jonasArray = [
//     'Jonas',
//     'King',
//     2037 - 1991,
//     'developer',
//     ['Micheal', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'King',
//     age: 2037 - 1991,
//     job: 'developer',
//     feirnds: ['Micheal', 'Peter', 'Steven']
// };


// DOT and BRACKET Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'King',
    age: 2037 - 1991,
    job: 'developer',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName); // using DOT Notation
console.log(jonas['lastName']); // using BRACKET notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, job, age, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! choose between firstName, lastName, job, age, and friends');
}

// using DOT and BRACKET otation to add a property to an object.
jonas.location = 'Portugal';
jonas['twitter'] = '@emmyvandross567';
console.log(jonas);

// Challenge
// "jonas has 3 friends, and his best friend is called micheal"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend is called ${jonas.friends[0]}`)
*/

/*
// OBJECT METHODS
const jonas = {
    firstName: 'Jonas',
    lastName: 'King',
    birthYear: 1991,
    job: 'developer',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLincense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYear;
    },

    getSummary: function () {
        return `${jonas.firstName} is a ${jonas.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriversLincense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary()); */

// Coding Challenge 3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) !`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} */

// ITERATION : THE FOR LOOP
// LOOPS keep running if coditions are true
// console.log('lifting weights repetition 1 🏋️‍♀️');
// console.log('lifting weights repetition 2 🏋️‍♀️');
// console.log('lifting weights repetition 3 🏋️‍♀️');
// console.log('lifting weights repetition 4 🏋️‍♀️');
// console.log('lifting weights repetition 5 🏋️‍♀️');
// console.log('lifting weights repetition 6 🏋️‍♀️');
// console.log('lifting weights repetition 7 🏋️‍♀️');
// console.log('lifting weights repetition 8 🏋️‍♀️');
// console.log('lifting weights repetition 9 🏋️‍♀️');
// console.log('lifting weights repetition 10 🏋️‍♀️');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log('lifting weights repetition 1 🏋️‍♀️');
// }
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
// }

/*
// looping arrays, breaking and continuing
const jonas = [
    'Jonas',
    'King',
    2037 - 1991,
    'developer',
    ['Micheal', 'Peter', 'Steven'],
    true
];
const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);

for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and Break statement
// Continue statement
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}*/


/*
// Looping Backwards and Loops in Loops
// LOOPING loop
const jonas = [
    'Jonas',
    'King',
    2037 - 1991,
    'developer',
    ['Micheal', 'Peter', 'Steven']
];
// 0, 1, ..., 4  (looping forward)
// 4, 3, ..., 0  (looping backwards)

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]); // the i is to check the descending orders. i is the counter variable.
}

// LOOPS inside LOOPS
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}       Lifting weight repitition ${rep} 🏋️‍♀️`);
    }
} */

// the WHILE loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: lifting weight repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end....😜');
// }

// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);

// // for (let i = 0; i < tips.length; i++) {
// //     console.log(tips[i]);
// // }

// const total = function (bill, tip) {
//     return bill + tip;
// }

// for (let i = 0; i < tips.length && i < bills.length; i++) {
//     totals.push(total(bills[i], tips[i]));
// }

// console.log(totals);

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

//BONUS
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/