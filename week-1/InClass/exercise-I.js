function getBornYear(age){
    return 2020 - age;
}

function getPersoneInfo(name, age) {
    return name + " - " + getBornYear(age); 

}
console.log(getPersoneInfo("Dani", 30));
