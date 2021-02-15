 
let studentsA = ["Mateo", "Antonio", "Marc", "Daniel", "Marta"];
let studentsB = ["Jordi", "Antoni", "Marina", "Miguel", "Alfonso"];

let studentAll = studentsA.concat(studentsB).sort();

console.log(studentAll);

function isAtClass(list, name){
    if (list.includes(name)){
        return `${ name } is at class with ${ list }`;
    } else {
        return `${ name } is not at class with ${ list }`;
    }
}

console.log(isAtClass(studentAll,"Jordi"));
console.log(isAtClass(studentsA,"Jordi"));
console.log(isAtClass(studentsB,"Jordi"));