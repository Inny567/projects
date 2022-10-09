'use strict';

/*
//scoping in practise
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); // this works just fine even though the firstName was declared after the calcAge function. the code in the function only gets executed once it is called. so if the code in the function is called before declaring the firstName this will be an error because this function wil no loger have access to the global scope defined.

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // here the firstName remains 'Jonas' because firrstName is not declared in this function.
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variables with same name as outer's scope's variable.
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`; // here we get 'Steven' as the first name because it is present in the same function so the variable will no longer do a lookup check, also every function has its own scope.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3)); // functions are also block scope only while using strict mode
    }
    // console.log(str); this gives an error because the str is block scoped
    console.log(millenial); // this actually works outside the block scope because var variables are functon scope
    //console.log(add(2, 3)); functions are also block scope only while using strict mode
    console.log(output); // we get 'NEW OUTPUT' as the output because we already manipulated the output in the child scope by redefining the variable
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); this wil gives eror bacause is not accessible in  the global scope.
// printAge(); thi will also gives error bacause its not accesible in the global scope
*/

/*
// Hoisting in practice

//hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// hoisting with functions
console.log(addDecl(2, 3));
console.log(addArrow);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // here we are testing if x is a property of window object.
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// Practise on the this keyword
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const maltilda = {
  year: 2017,
};

maltilda.calcAge = jonas.calcAge; // this process is called method borrowing.
maltilda.calcAge(); // in this method call here the this keyword does not actually point to maltilda. this proves that the this keyword always point to the objet calling the method.

const f = jonas.calcAge;
f(); // this will gives UNDEFINED as the result because the function here is now just a regular function call. its not attached to any object
*/
