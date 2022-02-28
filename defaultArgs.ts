// Default values in functions

// we can place default values in functions to make sure if user doesn't pass
// argument in function calling then the default should be assigned and function should
// work properly

const arrowFunc = (a: number, b: number = 1) => a + b;

console.log(arrowFunc(6));

// Note: if there are more than arguments in function then the default should be the last argument
