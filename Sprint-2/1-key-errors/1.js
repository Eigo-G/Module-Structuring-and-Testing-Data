// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because we are trying to declare a variable with the same name as the function parameter 'decimalNumber'. This causes a conflict and results in a SyntaxError. To fix this, we can simply remove the 'const' keyword and directly assign the new value to 'decimalNumber'.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The error is occurring because we are trying to declare a variable with the same name as the function parameter 'decimalNumber'. This causes a conflict and results in a SyntaxError. To fix this, we can simply remove the 'const' keyword and directly assign the new value to 'decimalNumber'.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
