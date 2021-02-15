const arr = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];
const newArr = arr.filter(el => typeof el === "string").map(element => element.toUpperCase().concat("!"));

newArr.forEach(element => console.log(element));

console.log(newArr);

// arr.filter(el => typeof el === "string").map(element => element.toUpperCase().concat("!")).forEach(element => console.log(element));