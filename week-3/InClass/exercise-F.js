/*You can drive in the UK at the age of 17.
Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
console.log the answers*/
const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const date = new Date().getFullYear();

let nuevoArray = birthYear.map((age) => date - age);
console.log(nuevoArray);

birthYear.forEach((getAge) => {
    let calculAge = date - getAge;
    if (calculAge >= 17) {
        console.log(`Born in ${getAge} can drive`);
    } else {
        console.log(`Born in ${getAge}. Can drive in ${17 - calculAge}!`);
    }   
});