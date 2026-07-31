// const age = 22;

// const hasId = true;

// if (age >= 18 && hasId) {
//     console.log('Allowed to Party')
//


// const isAdmin = 'Samson';
// const isModerator = 'Samson'
//  if (isAdmin || isModerator){
//     console.log('Access Granted!');
//  } else {
//     console.log('Access Denied!')
//  }

// const isLoggedIn = false;
// if (!isLoggedIn) {
//     console.log('Login First');
// } else {
//     console.log('Welcome back');
// }

// const age = 22;
// const hasPassport = false;
// const hasVisa = false;

// if ((age >= 18 && !hasPassport) || hasVisa) {
//     console.log('Travel')
// } else {
//     console.log(`Can't travel`)
// }

const currentSalary = 25000;
const experience = 2;
const location = 'Lagos';
const relationshipStatus = 'Single';

if ((currentSalary > 40000 && experience >= 2) || (location === 'Lagos'  && !relationshipStatus === 'Single')) {
    console.log('Qualified');
} else {
    console.log('Not Qualified');
}