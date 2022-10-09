'use strict';

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
