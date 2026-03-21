
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that we will get a SyntaxError because we are trying to declare a function with a parameter that is a number (3). In JavaScript, function parameters must be valid identifiers (variable names), and '3' is not a valid identifier. To fix this, we can change the parameter name to something like 'num'.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number '3'. Function parameters must be valid identifiers (variable names).

// =============> explain this error message here
// The error message indicates that we have an unexpected number '3' as a function parameter. In JavaScript, function parameters must be valid identifiers (variable names), and '3' is not a valid identifier.


// Finally, correct the code to fix the problem
    
// =============> write your new code here 
function square(num) {
    return num * num;
}       
// Test the function
console.log(square(3)); // Output: 9


