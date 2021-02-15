 
function happyOrSad(estado) {
    if (typeof estado === "number") {
        return `Beep beep boop`;
    } else if (typeof estado === "string") {
        let a = estado.toLowerCase();
        if (a === "happy"){
            return `Good job, you're doing great!`;
        } else if (a === "sad") {
            return `Every cloud has a silver lining`;
        } else {
            return `I'm sorry, I'm still learning about feelings!`;
        }
    }else {
        return `I'm sorry, I'm still learning about feelings!`;
    }
  }

console.log(happyOrSad("happy"));
console.log(happyOrSad("Happy"));
console.log(happyOrSad("sad"));
console.log(happyOrSad("SAD"));
console.log(happyOrSad(45));
console.log(happyOrSad(true));
console.log(happyOrSad("Hola!"));