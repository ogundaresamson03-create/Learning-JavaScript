// for-loop example

// for loop for counting
// for (let i = 0; i <= 3; i++) {
//     console.log("Count is:", i);
// }

// for counting up 

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for counting down

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// for looping through an array
// const fruits = ["apple", "Banana", "Orange"];
// const newFruits = "Mango";
// fruits.push(newFruits);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// for skipping a number
// for (let i = 1; i <= 5; i++) {
//     if (i=== 3) continue;
//     console.log(i);
// }
// const fruits = ["apple", "Banana", "Orange"];
// const newFruits = "Mango";
// fruits.push(newFruits);
// for (let i = 0; i < fruits.length; i++) {
//     if (i === 1) continue;
//     console.log(fruits[i]);
// }
    

// for breaking loops

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }


// for customs steps

//  for (let i = 0; i <= 14; i += 2) {
//     console.log(i);
// }

// for nested loops - Multiplication Grid

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

//for loop for simultaneously increasing and decreasing 2 variables

// for (let i = 0, j = 10; i < 5; i++, j--) {
//     console.log(`i is ${i}, j is ${j}`);
// }


// Major Example: Find odd Number

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
        
// }

// WHILE LOOPS

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// X-table using while loop

// let i = 1;

// while (i <= 40) {
//     console.log(`5 x ${i} = ${5 * i}`);
//     i++;
// }

// loof for array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for of loop

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// DO WHILE LOOP

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

let i = 1;
do {
    if ( i % 2 !== 0) {
         console.log(i);
    }
    i++;
} while (i <= 100);