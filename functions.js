// function = A section of reusable code.
//              Declare code once, use it whenever you want 
//              call/invoke the function to execute the code 

// function happyBirthday(username, age){
//      console.log(`Happy Birthday to ${username}`);
//       console.log(`Happy Birthday to ${username}`);
//        console.log(`Happy Birthday dear ${username}`);
//         console.log(`Happy Birthday dear ${username}`);
//          console.log(`You are ${age} years old`);
// }
// happyBirthday("King Zeesar", 27);
//    happyBirthday("Brocode", 99);



// function add (x, y){
//     // let result =  x + y
//     return x + y;
// }

// // let result = add(2, 3);
// console.log(add(2, 3))

// function isEven(number) {
//     // if(number % 2 === 0){
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(3));

function isValidEmail(email){
        // if(email.includes("@")){
        //     return true;

        // } else{
        //     return false
        // } 
        return email.includes("@") ? true : false;
}

console.log(isValidEmail("zeesargmail.com"));