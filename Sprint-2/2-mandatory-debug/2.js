// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that we will get an error because the getLastDigit function does not take any parameters, but we are trying to pass a number as an argument when calling the function. This will lead to a TypeError. To fix this, we can modify the getLastDigit function to accept a parameter and use that parameter instead of the hardcoded 'num' variable.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// TypeError: getLastDigit is not a function. This error occurs because we are trying to call getLastDigit with an argument, but the function definition does not accept any parameters. To fix this, we need to modify the getLastDigit function to accept a parameter and use that parameter instead of the hardcoded 'num' variable.
// Explain why the output is the way it is
// =============> write your explanation here
// The output is a TypeError because we are trying to call getLastDigit with an argument, but the function definition does not accept any parameters. In JavaScript, if you try to call a function with arguments that it does not expect, it will result in a TypeError. To fix this, we need to modify the getLastDigit function to accept a parameter and use that parameter instead of the hardcoded 'num' variable.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // Output: "The last digit of 42 is 2"
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // Output: "The last digit of 105 is 5"
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // Output: "The last digit of 806 is 6"

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// =============> write your explanation here
// The getLastDigit function is not working properly because it does not accept any parameters, but we are trying to pass a number as an argument when calling the function. This leads to a TypeError. To fix this, we need to modify the getLastDigit function to accept a parameter and use that parameter instead of the hardcoded 'num' variable. By doing this, we can correctly determine the last digit of any number passed to the function.
