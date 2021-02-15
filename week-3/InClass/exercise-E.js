
// /*Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. Take this array and create another array containing their ages.

let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let date = new Date().getFullYear();

    function birthYear(year){
        return date - year;
    }

let edad = years.map(birthYear);

console.log(edad);
console.log(years);

years.forEach(el => console.log(el));