 
function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}
for (let x = 5; x < 20; x++){
  if (isEven(x)){
    console.log(`el exponencial de ${ x } es ${ exponential(x) }`);
  }
}