 
function userValid(name, type){
    let firstLetter = name.charAt(0);
    let nameLength = name.length;
    if ((firstLetter === firstLetter.toUpperCase() && nameLength >= 5 && nameLength <= 10) ||
     (type.toLowerCase() === "admin" || type.toLowerCase() === "manager")) {
        return "Username valid";
    } else {
        return "Username invalid";
    }
}

console.log(userValid("Joana", "admin")); // valid
console.log(userValid("Nicolai", "manager")); // valid
console.log(userValid("alex", "junior")); // invalid
console.log(userValid("Jorge", "junior")); // valid
console.log(userValid("Mateo", "Admin")); // valid
console.log(userValid("Armin", "Admin")); // valid
console.log(userValid("yi", "admin")); // valid
console.log(userValid("yii", "junior")); // invalid
console.log(userValid("Schweinsteiger", "junior")); // invalid
console.log(userValid("Schweinsteiger", "admin")); // valid