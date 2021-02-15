/* Write a function that:
- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop
*/

let n = 10;

function sumTillNum(num){
	//your code here
	sum = 0;
	for (let x = 0; x<=n; x++){
		sum = sum + x;
	}
	return sum;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));