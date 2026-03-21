// Predict and explain first...

// =============> write your prediction here
// I predict that we will get an error because the multiply function does not return a value, it only logs the result to the console. When we try to use the result of the multiply function in the template literal, it will be undefined, which will lead to an error. To fix this, we can modify the multiply function to return the product of a and b instead of logging it.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The error is occurring because the multiply function does not return a value, it only logs the result to the console. When we try to use the result of the multiply function in the template literal, it will be undefined, which will lead to an error. To fix this, we can modify the multiply function to return the product of a and b instead of logging it.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // Output: "The result of multiplying 10 and 32 is 320"
