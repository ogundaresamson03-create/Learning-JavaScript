// FirstTrust Bank — Loan Eligibility Checker
const minAge = 21;
const minIncome = 100000;
const minCreditScore = 600;

// CASE 1: Fails only the age rule
let age1 = 19, income1 = 150000, credit1 = 620, status1 = "employed";

if (age1 < minAge) {
  console.log("Case 1: Loan denied. Applicant must be at least 21 years old.");
} else if (income1 <= minIncome) {
  console.log("Case 1: Loan denied. Monthly income must be over ₦100,000.");
} else if (credit1 < minCreditScore) {
  console.log("Case 1: Loan denied. Credit score must be at least 600.");
} else if (status1 !== "employed" && status1 !== "self-employed") {
  console.log("Case 1: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 1: Congrats! Your loan has been approved.");
}


// CASE 2: Fails only the income rule
let age2 = 27, income2 = 80000, credit2 = 620, status2 = "employed";

if (age2 < minAge) {
  console.log("Case 2: Loan denied. Applicant must be at least 21 years old.");
} else if (income2 <= minIncome) {
  console.log("Case 2: Loan denied. Monthly income must be over ₦100,000.");
} else if (credit2 < minCreditScore) {
  console.log("Case 2: Loan denied. Credit score must be at least 600.");
} else if (status2 !== "employed" && status2 !== "self-employed") {
  console.log("Case 2: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 2: Congrats! Your loan has been approved.");
}


// CASE 3: Fails only the credit score rule
let age3 = 27, income3 = 150000, credit3 = 500, status3 = "employed";

if (age3 < minAge) {
  console.log("Case 3: Loan denied. Applicant must be at least 21 years old.");
} else if (income3 <= minIncome) {
  console.log("Case 3: Loan denied. Monthly income must be over ₦100,000.");
} else if (credit3 < minCreditScore) {
  console.log("Case 3: Loan denied. Credit score must be at least 600.");
} else if (status3 !== "employed" && status3 !== "self-employed") {
  console.log("Case 3: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 3: Congrats! Your loan has been approved.");
}


// CASE 4: Fails only the employment rule
let age4 = 27, income4 = 150000, credit4 = 620, status4 = "unemployed";

if (age4 < minAge) {
  console.log("Case 4: Loan denied. Applicant must be at least 21 years old.");
} else if (income4 <= minIncome) {
  console.log("Case 4: Loan denied. Monthly income must be over ₦100,000.");
} else if (credit4 < minCreditScore) {
  console.log("Case 4: Loan denied. Credit score must be at least 600.");
} else if (status4 !== "employed" && status4 !== "self-employed") {
  console.log("Case 4: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 4: Congrats! Your loan has been approved.");
}


// CASE 5: Fails ALL FOUR rules at once — profile mismatch
let age5 = 18, income5 = 40000, credit5 = 450, status5 = "unemployed";

let ageFails = age5 < minAge;
let incomeFails = income5 <= minIncome;
let creditFails = credit5 < minCreditScore;
let statusFails = status5 !== "employed" && status5 !== "self-employed";

if (ageFails && incomeFails && creditFails && statusFails) {
  console.log("Case 5: Loan denied. Applicant profile mismatch.");
} else if (ageFails) {
  console.log("Case 5: Loan denied. Applicant must be at least 21 years old.");
} else if (incomeFails) {
  console.log("Case 5: Loan denied. Monthly income must be over ₦100,000.");
} else if (creditFails) {
  console.log("Case 5: Loan denied. Credit score must be at least 600.");
} else if (statusFails) {
  console.log("Case 5: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 5: Congrats! Your loan has been approved.");
}


// CASE 6: Passes everything
let age6 = 27, income6 = 150000, credit6 = 620, status6 = "self-employed";

if (age6 < minAge) {
  console.log("Case 6: Loan denied. Applicant must be at least 21 years old.");
} else if (income6 <= minIncome) {
  console.log("Case 6: Loan denied. Monthly income must be over ₦100,000.");
} else if (credit6 < minCreditScore) {
  console.
log("Case 6: Loan denied. Credit score must be at least 600.");
} else if (status6 !== "employed" && status6 !== "self-employed") {
  console.log("Case 6: Loan denied. Applicant must be employed or self-employed.");
} else {
  console.log("Case 6: Congrats! Your loan has been approved.");
}
