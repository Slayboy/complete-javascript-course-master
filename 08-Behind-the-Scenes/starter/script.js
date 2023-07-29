'use strict';
// // function calcAge(birthYear) {
// //   const age = 2023 - birthYear;
// //   console.log(firstName);
// //   return age;
// // }
// // const firstName = 'Nitish';
// // calcAge(2002);

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `my name is ${firstName} and you are ${age} now, you are birth in ${birthYear}`;
//     console.log(output);

//     //   printAge();
//     if (birthYear >= 1981 && birthYear <= 2003) {
//       const firstName = 'steven';
//       var where = 'glb';
//       const str = "Oh, and you're a millenial, ${firstName)";
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       output = 'new';
//     }
//     console.log(where);
//   }
//   printAge();
//   return age;
//   //   add();//functions are now in fact, block scope its works for strick mode
// }
// const firstName = 'Nitish';
// calcAge(2002);
// // printAge(); //we can't call printAge() from the calcAge() function

//variables hosting
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// var firstName = 'nitish';
// let middleName = 'rajshekhar';
// const lastName = 'changti';

// //function hosting
// // console.log(addfunc(2, 3));
// console.log(addEx(3, 3));
// // console.log(funArrow(2, 3));

// function addfunc(a, b) {
//   return a + b;
// }
// let addEx = function (a, b) {
//   return a + b;
// };
// let funArrow = (a, b) => a + b;

///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);
// // let a = 19;
// // console.log(this.a);

// const calAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calAge(2002);

// const calAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
// };

// This keyword
// console.log(this);
// calAgeArrow(2022);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2200 - this.birthYear);
//   },
// };
// jonas.calcAge();

// const nitish = {
//   year: 2013,
// };
// nitish.calcAge = jonas.calcAge; //copying a method from one object to another object is called method borrowing
// nitish.calAge();

// const f = jonas.calAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
