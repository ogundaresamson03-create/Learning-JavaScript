// let age = 13;
//  if(age >= 18) {
//     console.log(`Your are an adult`);
//  } else {
//     console.log(`You are a minor`);
//  }

//  let age = 13;
//  let message = age >= 18 ? `You are an adult` : `You are a monor`;

//  console.log(message);

// const passMark = 50;
// let score = 45;
// let message = score >= passMark ? `You Passed` : `You failed`
// console.log(message);

// if (score >= passMark){
//     console.log(`You Passed`);
// } else{
//     console.log(`You failed`);
// }


// FirstTrust Bank — Loan Eligibility Checker - for if, else and elseif
const minAge = 21;
const minIncome = 100000;
const minCreditScore = 600;

// CASE 1: Fails only the age rule
let age1 = 19, income1 = 150000, credit1 = 620, status1 = "employed";

let result = age1 < minAge ? "Case 1: Loan denied. Applicant must be at least 21 years old." : income1 <= minIncome ? "Case 1: Loan denied. Monthly income must be over ₦100,000."
: credit1 < minCreditScore ?  "Case 1: Loan denied. Credit score must be at least 600." : status1 !== "employed" && status1 !== "self-employed" ? "Case 1: Loan denied. Applicant must be employed or self-employed."
: "Case 1: Congrats! Your loan has been approved.";

console.log(result)
