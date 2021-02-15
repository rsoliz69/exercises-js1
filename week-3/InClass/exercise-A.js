/*Create an array with the names of the people on your table
console.log out the names and how many people are at the table
Put someone from another table at the beginning of the array
Add someone else to the end of the list*/
const alumnos = ["Jorge", "antonio", "Marc", "Daniel", "Marta"];
console.log(alumnos.length);
console.log(alumnos);
alumnos.unshift("Alberto");
console.log(alumnos.length);
console.log(alumnos);
alumnos.push("Maria");
console.log(alumnos.length);
console.log(alumnos);
alumnos.sort();