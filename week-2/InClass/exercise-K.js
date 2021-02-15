let arrStudent = ["Juan", "Daniel", "Carlos", "Joanna", "Antonio"];

function getNameStudent(arr){
    for (x in arr){
        console.log(`El nombre del estudiante ${ parseInt(x) + 1 } es: ${ arr[x] }`);
    }
}
getNameStudent(arrStudent);