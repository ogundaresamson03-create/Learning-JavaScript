// const age = 26;

// if (age >= 18) {
//     console.log('Adult');
// }


// const age = 8; 

//  if (age >= 18) {
//     console.log('Adult');
//  } else {
//     console.log('Minor');
//  }

//  const balance = 8000; 

//  if (balance >= 5000) {
//     console.log('Fiyin is Not Broke');
//  } else {
//     console.log('Fiyin is Broke');
//  }


let score = process.argv[2];


if (score >= 70) {
    console.log('A');
} else if (score >= 60) {
    console.log ('B');
} else if (score >= 50) {
    console.log ('C');
} else {
    console.log ('Fail')
}