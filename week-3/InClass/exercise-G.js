 
/*Create a function which:
Takes an array of birthYears
Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
Returns an array of people who can drive (remember, you can drive if you are 17 years or older)*/

const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const date = new Date().getFullYear();

// birthYear.filter((getAge) => {
//     let calculAge = date - getAge;
//     if (calculAge >= 17) {
//         console.log(`These are the birth years of people who can drive: ${getAge}`)}
// });


let canDrive = birthYear.filter((getAge) => date - getAge >= 17)

console.log(`These are the birth years of people who can drive: ${canDrive}`)