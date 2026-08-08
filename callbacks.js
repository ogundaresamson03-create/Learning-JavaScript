// A callback is a function that is passed as an argument to another function 

//              used to handle asynchronous operations
//                      1. reading a file 
//                      2. network requests
//                      3. interacting with databases

//                  Example in lay man term: 'Hey When you're done, call this next'


// hello(wait);


// function hello (callback){
// console.log("Hello");
// callback();
// }

// function wait (){
//     console.log("Wait");
// }

// function leave (){
//     console.log("Leave");
// }

// function goodbye (){
// console.log("Goodbye");
// }


sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x+y;
    callback(result);
}

function displayConsole (result){
    console.log(result);
}

function displayPage (result){
    document.getElementById("myH1").textContent = result;
}