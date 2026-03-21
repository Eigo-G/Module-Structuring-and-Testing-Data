// Predict and explain first...
//  =============> write your prediction here
// I predict that we will get an error because the sum function does not return a value, it only has a return statement without any expression. When we try to use the result of the sum function in the template literal, it will be undefined, which will lead to an error. To fix this, we can modify the sum function to return the result of a + b instead of just having a return statement.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The error is occurring because the sum function does not return a value, it only has a return statement without any expression. When we try to use the result of the sum function in the template literal, it will be undefined, which will lead to an error. To fix this, we can modify the sum function to return the result of a + b instead of just having a return statement.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // Output: "The sum of 10 and 32 is 42"
