 
function secondMatchesAmy(array) {
  if (array[2].toLowerCase() === "amy") {
    return "Second index matched!";
  }else {
    return "Second index not matched";
  }
}
const A1 = ['banana', 'strawberry', 'Amy', 'kiwi', 'fig', 'orange'];
const A2 = ['banana', 'hola', 'strawberry', 'kiwi', 'fig', 'orange'];
const A3 = ['banana', 'strawberry', 'amy', 'kiwi', 'fig', 'orange'];
console.log(secondMatchesAmy(A1)); // matched
console.log(secondMatchesAmy(A2)); // not mached
console.log(secondMatchesAmy(A3)); // matched
