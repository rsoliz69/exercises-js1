function porcentage (param1, param2){
    const porMentores=(100/(param1+param2))*param1;
    const porStudents=(100/(param1+param2))*param2;
    return [Math.round(porMentores), Math.round(porStudents)]
}
function message ([porcentaje1, porcentaje2]){
    const mensaje = "Porcentaje mentores: " + porcentaje1 +"\nPorcentaje estudiantes: "+porcentaje2;
return mensaje
}
const numMentores= 8;
const numStudents= 15;
const perce= porcentage(numMentores,numStudents);
console.log(message(perce))