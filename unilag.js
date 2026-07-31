// UNILAG Admission Checker — constants
const minAge = 16;
const minScore = 210;
const requiredState = "Lagos"

// CASE 1: Age too young
let age1 = 15, score1 = 271, origin1 = "Lagos", residence1 = "Lagos";

if (age1 < minAge) {
  console.log("Case 1: Admission denied. Student must be at least 16 years old.");
} else if (score1 <= minScore) {
  console.log("Case 1: Admission denied. JAMB score must be over 210.");
} else if (origin1 !== requiredState && residence1 !== requiredState) {
  console.log("Case 1: Admission denied. State of Origin or Residence must be Lagos.");
} else {
  console.log("Case 1: Congrats! You've been admitted.");
}


// CASE 2: JAMB score too low
let age2 = 19, score2 = 200, origin2 = "Lagos", residence2 = "Lagos";

if (age2 < minAge) {
  console.log("Case 2: Admission denied. Student must be at least 16 years old.");
} else if (score2 <= minScore) {
  console.log("Case 2: Admission denied. JAMB score must be over 210.");
} else if (origin2 !== requiredState && residence2 !== requiredState) {
  console.log("Case 2: Admission denied. State of Origin or Residence must be Lagos.");
} else {
  console.log("Case 2: Congrats! You've been admitted.");
}


// CASE 3: Wrong state (neither origin nor residence is Lagos)
let age3 = 19, score3 = 271, origin3 = "Ogun", residence3 = "Ogun";

if (age3 < minAge) {
  console.log("Case 3: Admission denied. Student must be at least 16 years old.");
} else if (score3 <= minScore) {
  console.log("Case 3: Admission denied. JAMB score must be over 210.");
} else if (origin3 !== requiredState && residence3 !== requiredState) {
  console.log("Case 3: Admission denied. State of Origin or Residence must be Lagos.");
} else {
  console.log("Case 3: Congrats! You've been admitted.");
}


// CASE 4: Meets every requirement
let age4 = 19, score4 = 271, origin4 = "Lagos", residence4 = "Lagos";

if (age4 < minAge) {
  console.log("Case 4: Admission denied. Student must be at least 16 years old.");
} else if (score4 <= minScore) {
  console.log("Case 4: Admission denied. JAMB score must be over 210.");
} else if (origin4 !== requiredState && residence4 !== requiredState) {
  console.log("Case 4: Admission denied. State of Origin or Residence must be Lagos.");
} else {
  console.log("Case 4: Congrats! You've been admitted.");
}

// CASE 5: Student fails every rule — profile mismatch
let age5 = 14, score5 = 150, origin5 = "Ogun", residence5 = "Kano";

let ageFails = age5 < minAge;
let scoreFails = score5 <= minScore;
let stateFails = origin5 !== requiredState && residence5 !== requiredState;

if (ageFails && scoreFails && stateFails) {
  console.log("Case 5: Admission denied. Student profile mismatch.");
} else if (ageFails) {
  console.log("Case 5: Admission denied. Student must be at least 16 years old.");
} else if (scoreFails) {
  console.log("Case 5: Admission denied. JAMB score must be over 210.");
} else if (stateFails) {
  console.log("Case 5: Admission denied. State of Origin or Residence must be Lagos.");
} else {
  console.log("Case 5: Congrats! You've been admitted.");
}