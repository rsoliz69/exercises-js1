function arrayNumero(numero){
    console.log(`El numero es: ${ numero }`);
}

let num = [5,8,5];

console.log("con forEach:");
num.forEach(arrayNumero);
console.log("con map:");
num.map(arrayNumero);

let studentsA = ["Ricardo", "Cristian", "Marc", "Daniel", "Paula"];

studentsA.forEach(el=> console.log(`con forEach: ${ el } string mide ${ el.length }`));
studentsA.map(el=> console.log(`Con map: ${ el } string mide ${ el.length }`));