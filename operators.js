// //Arithmetic Operators
// //1, additions
// let sum = 5 + 3;
// console.log(sum);

// //2, subtractions Operators
// let sum2 = 6 - 4;
// console.log(sum2);

// //3, multiplication
// let product = 7 * 2;
// console.log(product);

// //4, division
// let quotient = 20 / 5;
// console.log(quotient);

// //5, remainder
// let reminder = 10 % 3;
// console.log(reminder);

// //6, raise to power
// let power  = 2 ** 10;
// console.log(power);

// //Assignment Operators
// //1, Assignment
// let x = 5;
// console.log(x);

// //2, additional Assignments
// let y =  5;
//  y += 2;
//  console.log(y);

// //3, subtractions Assignments
// let z = 10;
// z -= 2;
// console.log(z);

// // Comparison Operators
// //1, eguals
// console.log(5 == 5);

// //Logical Operators
// //&& this means AND operator
// //|| this means OR operator

// let v = 2;
// let b = 4;
// console.log(true && false);

// //3, Logical operators
// // AND (&&): Returns true if both operaors are true.
// let isTrue = (5 > 3 && 3 > 5);
// // OR (||): Return true if not least one operand is true.
// let isFalse = (5 > 3 || 3 > 5); //true
// //NOT (!): Return true if the operand is

// //if statement: Executes a block of code if a specified conditio n is true

// let a = 4;

// if (a > 0) {
//     console.log(`a is posiive`);
// } else {
//     console.log(`a is nagative`);
// }

// //if else statement: Executes a block of code if a specified conditio n is true, otherwise another block of code is excuted.

// if (a > 0) {
//     console.log(` a is positive`);
// } else if (a === 0) {
//     console.log(`a is zero`);
// } else {
//     console.log(`a is nagetive`);
// }


// let temprature = 15;
// if (temprature > 25) {
//     console.log("It's a hot day");
// }else if (temprature < 15) {
//     console.log("It's cold day!");
// } else {
//     console.log("It's a warm day");
// }

// let fruit = 'apple';
// switch (fruit) {
//     case 'banana':
//         console.log("It's a banana");
//         break;
//     case 'apple':
//         console.log("It's an apple");
//         break;
//     case "orange":
//         console.log("It's an orange");
//         break;
//     default:
//         console.log("unknown fruit");
// }


// const value = 'apple';
// const fruits = ['apple', 'banana', 'orange'];

// switch (false) {
//     case fruits.includes(value)://includes means to search through the array
//         console.log(`${value} is in the fruits array.`);
//         break;
//     default:
//         console.log(`${value} is not in the fruits array.`);
// };


// const tobias = 'Orange';
// const ifeoma = ['rice', 'beans', 'yam', 'Orange'];

// switch (true) {
//     case ifeoma.includes(tobias):
//         console.log(`${tobias} is in the fruits array.`);
//         break;
//     default:
//         console.log(`${tobias} is not in the fruits array.`);
// };

// //A loop is a programming construct used to repeat a block of code multiple
// //times unitl a specific condition is met. Loops help automate repetitive tasks.

// //for loop: The for loop is ideal when you know in advance how many times you want to
// //repeat a block of code.

// for (initialization; condition; increment) {
//     // code to be executed
// };

// //initialization: let i = 0 sets the starting points.
// //Condition: i < 5 keeps the loop running while i is less than 5
// //Increment: i++ increment i by 1 after each loop iteration

// // for (let i = 0; i < 5; i++) {
// //     console.log(i); //Outputs: 0, 1, 2, 3, 4
// // };

// const Items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];

// for (let i = 0; i < Items.length; i++) {
//     console.log(Items[i]);
// };

// // While loop: The while loop is used when the number of iterations isn't known
// // beforehand. It keeps running as long as the condition is true

// while (condition) {
//     // code to be executed
// }

// let i = 0;
// while (i < 5) {
//     console.log(i); // Output: 0, 1, 2, 3, 4
//     i++;
// }

// // do....while loop: Ths loop ensures that the block of code runs at least once
// // before checking the condition

// do {
//     // code to be executed
// } while (condition);

// let g = 0;
// do {
//     console.log(g); //Output: 0, 1, 2, 3, 4
//     x++;
// } while (g < 5);

// // break;
// // for (let i = 0)

// // let Items3 = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];

// // for (let i = 0; i < 5; i++) { // this loop from 1 - 3
// //     if (i == 1 ) break;
// //     console.log(Items3[i])
// // };

// //OR

// for (let i = 0; i < Items.length; i++) { // this loop from 0 - 4
//     console.log(Items[i])
//     if(i === 3){
//         break;
//     }
// };

// // break
// // for (let i = 0; i < 5; i++) {
// //     if (i === 3) break;
// //     console.log(i); // output: 0, 1, 2
// // };

// // continue;
// // for (let i = 0; i < 5; i++) {
// //     if (i === 3) continue;
// //     console.log(i); // outputS: 0, 1, 2, 4
// // }

// //function: A function is a block of code that can perform an action and can be reused
// // declaration

// function functionName(parameters) {
//     // code to be executed
// }

// function greet(name) {
//     console.log(`Hello,  ${name}`);
// };

// greet('Martins'); //output Hello, Martins

// // Function Expression
// const functionName = function(parameters) {
//     // code to be executed
// };

// const greett = function(name) {
//     console.log(`Hello,  ${name}`);
// };

// greett('John'); //Output: Hello, John


// function add(a, b) {
//     return a + b;
// };

// const sum5 = add(4, 5)
// console.log(sum5);


// function mutiple(a, b) {
//     return a * b;
// };

// const mul = mutiple(2,2)
// console.log(mul)

// // Assignment
// // Write a function that returns a different of two number
// function reminder(c, d) {
//     return c % d;
// }

// console.log(reminder(5, 2))
// // End of the reminder

// // Assignment
// // Write a function that accept 2 parameter name and your course, that console = "Hello name, you are a fronEnd Developer"
// function user(name, course) {
//     console.log("Hello " + name, "you are " + course);
// }

// user("Tobias", "FrontEnd");

// //Function Expression
// const functionName = function(parameters) {
//     // code to be executed
// };


// //example
// const greet = function(name) {
//     console.log("Hello, " + name);
// };

// greet("Tobias"); //output: Hello, Tobias

// //Assignment1
// const nameCode = function(a, b) {
//     return a + b;
// }

// console.log(nameCode(3, 6));

// //Assignment2
// let nameCode1 = function(c, d) {
//     return c * d;
// }

// console.log(nameCode1(2, 2));

// //Assignment3
// const courseName2 = function(name, course, school) {
//     return ("Hello " + name + " you're a " + course + "at " + school);
// };

// console.log(courseName2("Tobias", "FrontEnd Developer ", "New Horizons"));

// alert("Hello World");

//DOM
const button3 = document.getElementById("drive");

button3.addEventListener('click', function (e) {
    alert("Hello Tobias World");
});


// // Array
// const f = ['Apple', 'Banana', 'Cherry'];
// // Adding to the end of the array
// fruits.push('mango', 'orange');
// console.log(f); 

// // Adding to the beginning of the array
// fruits.unshift('Elderberry');
// console.log(fruits); // ['Elderberry', 'Apple', 'Banana', 'Cherry'];

// // Removing from the end of the array
// const look = ['Apple', 'Banana', 'Cherry'];
// look.pop();
// console.log(look);

// // Removing from the beginning
// const look2 = ['Apple', 'Banana', 'Cherry'];
// look2.shift();
// console.log(look2);

// // Removing from a specific position
// const look3 = ['Apple', 'Banana', 'Cherry'];
// look3.splice(1, 1);
// console.log(look3);

// // Modifying elements
// const look5 = ['Apple', 'Banana', 'Cherry'];
// look5.splice(2, 3, 'coconut');
// console.log(look5);

// // Using forEach
// const fruits5 = ['Apple', 'Banana', 'Cherry'];
// fruits5.forEach(function(fruit) {
//     console.log(fruit);
// });

// map
const fruits6 = ['Apple', 'Banana', 'Cherry'];
let uppercaseFruits = fruits6.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits);

// const add = (a, b) => a + b
// add(2, 4)
// console.log(add)

// filter
// const fruits7 = ['Apple', 'Banana', 'Cherry'];
// let longFruits = fruits7.filter(fruit => fruit.length> 5)
// console.log(longFruits);

// // find
// const fruits8 = ['Apple', 'Banana', 'Cherry'];
// let foundList = fruits8.find(fruitLine => fruitLine === "Apple");
// console.log(foundList);

// //includes
// const fruits9 = ['Apple', 'Banana', 'Cherry'];
// let hasCherry = fruits9.includes("Cherry");
// console.log(hasCherry);

// // combining Arrays
// //show how to concatenate arrays using concats
// const fruits10 = ['Apple', 'Banana', 'Cherry'];
// let moreFruits = ['Fig', 'Grape'];
// let allFruits = fruits10.concat(moreFruits);
// console.log(allFruits);

// // sorting Arrays
// // Explain how to sort arrays with sort
// const fruits11 = ['Apple', 'Banana', 'Cherry'];
// let sortedFruits = fruits11.sort();
// console.log(sortedFruits);

// // Original array
// const numbers3 = [1, 2, 3, 4, 5];
// // Using map to create a new array with each element doubled
// const doubledNumber = numbers3.map(number => number * 2);
// console.log(doubledNumber);

// const people = [
//     {name: 'Alice', age: 25, address: "5 obafemi street, Agege", course: "Javascript"},
//     {name: 'Tobias', age: 31, address: "5 obafemi street, Agege", course: "Javascript"},
//     {name: 'Ifeoma', age: 29, address: "5 obafemi street, Agege", course: "Javascript"}
// ];

// // Using map to create a new array with just the names of the people
// const namess = people.map(person4 => person4.name);
// console.log(namess);

// const ages = people.map(age4 => age4.age);
// console.log(ages);


// decrement function

function createCounter() {
    let b = 0;

    return {
        increment: function() {
            b ++;
            return b;
    },  
        decrement: function() {
            b --;
            return b;
        },
        getCount: function() {
            return b;
        }
    };
};

const c = createCounter();
console.log(c.increment())
console.log(c.increment())
console.log(c.decrement())
console.log(c.decrement())
console.log(c.getCount())



