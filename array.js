// First array of data 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];

// calling an array from list 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits[4]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// changing item in array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits[2] ="watermelon";
// console.log(fruits[2]);

// Finding lenght of an array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.length);

// Adding an iten to the en of an array list 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.push("grape");
// console.log(fruits);

// Adding an item to the start of an array list
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.unshift("lemon");
// console.log(fruits);

// Removing the last item
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.pop();
// console.log(fruits);

//Removing the first item
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.shift();
// console.log(fruits);

// To check if an item is included in an array 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.includes("banana"));


// To check the index of an item 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.indexOf("banana"));

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.join(", "));

// Putting array in order
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.sort());

// to reverse an array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.reverse());

// To loopthrough an array - For loop 

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];

// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// To change a list of array at once - map

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumber = numbers.map( n => n * 2);
// console.log(doubledNumber);

// const names = ["temi", "samson", "ife", "fiyin"];
// const shoutNames = names.map(names => names.toUpperCase());
// console.log(shoutNames);

// const users = [
//     {id: 101, name: "Samson"},
//     {id: 102, name: "Fiyin"},
//     {id: 103, name: "Temi"}
// ];

// const userIds = users.map(user => user.id);
// const userNames = users.map(user => user.name);
// console.log(userIds);
// console.log(userNames);

// To filter an array - filter

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = numbers.filter(n  => n % 2 === 0);
// const odds = numbers.filter(n  => n % 2 !== 0);
// console.log(evens);
// console.log(odds);


// const users = [
//     {id: 101, name: "Samson", active: true},
//     {id: 102, name: "Fiyin",  active: true},
//     {id: 103, name: "Temi", active: true}
// ];

// const activeUsers = users.filter(user => user.active);
// console.log(activeUsers)

// const fruits = ["Payaya", "Pear", "Avocado", "Pawpaw", "Orange"];
// const searchResult = fruits.filter(fruits => fruits.includes("O"));
// console.log(searchResult);

// Spread Operators

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers)
// let minimum =Math.min(...numbers)

// console.log(maximum);
// console.log(minimum);

// let username = "King Zeesar";
// let letters = [...username].join("-")

// console.log(letters);

// let fruits = ["apple", "orange", "banana"];
// let vegetables =["carrots", "potatoes", "tomatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(foods);