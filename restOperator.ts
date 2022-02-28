// Rest Parameters:

// if we want to have a function that could accept any number of parameters
//either 1 or 10 depending on call we can achieve this via Rest Parameters
// syntax :
/*
function func(...num: number[]){
    ...logic here
}

...num in parameter means rest parameter which can have any number of arguments of number type array
*/

// Example: 1

const restParameterFunc = (...num: number[]) => {
  return num.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(restParameterFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55 opt

// Note we can pass any number of arguments and even no arguments to this function

// Example 2: Tuple in Rest Parameter:
const shortWayFunc = (...num: [number, number, number]) => {
  return num.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
