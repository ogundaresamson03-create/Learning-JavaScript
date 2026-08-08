// arrow functions = a concise way to write a=function expressions, good for simple function that you use only once 


// Functuin declaration 👇👇👇
// function hello(){
//     console.log("Hello!")
// }
// hello();

// Function Expression 👇👇👇

// const hello = function (){
//     console.log("Hello!")
// }

// hello();

// Arrow function 👇👇👇

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`Your are ${age} years old`)};
// hello("Zee", 26);

// setTimeout(() =>console.log(`Hello!`), 3000);

const numbers = [1, 2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares)
const cube = numbers.map((element) => Math.pow(element, 3));
console.log(cube);
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Your total is ${total}`)