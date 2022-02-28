// Arrow Functions

// 1st way
const addNumbers = (a: number, b: number) => {
  return a + b;
};

// 2nd way if there is only one state in function we can remove return keyword and braces too
const printOutput = (opt: string | number) => console.log(opt);

//3rd way if there is only one argument with one return statement we can use below method

const miniFunc: (a: string | number) => void = (opt) =>
  console.log("This is very short way of function defining", opt);

printOutput(addNumbers(5, 6));
miniFunc(addNumbers(34, 4));
