/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

for (let i= 0; i<daysOfWeek.length; i++) {
  if (daysOfWeek[i].startsWith('T')) {
    const dayMessage = 'The days that starts with T are: ' + daysOfWeek[i];
    const indexMessage = ' ' + i;
    console.log(indexMessage, dayMessage);
  }
}

//if (daysOfWeek[i].charAt(0) === 'T') {