"use strict";
// functions types
// function types mean that we can assign any function pointer to a variable along with it's parameter and return so that 
// that variable only accepts functions of that nature
// number return type func
function add(n1, n2) {
    return n1 + n2;
}
// void return type
function printOpt(n1) {
    console.log('Result: ', n1);
}
// printOpt(add(5,6));
// Example 1: we want to define a variable that could point to a function named add
let funcType;
funcType = add;
console.log(funcType(2, 4));
// above example works fine uptil now but if we assign some other data to funcType then we would be caught by TS and it would 
// get executed with an exception
// funcType = 5;
//console.log(funcType(5,6)) // this would throw an error because funcType is not pointing to function anymore
// Example 2
//we can improve it via explicitly telling that funcType1 should only point to function and shouldn't accept any other data type
let funcType1;
funcType1 = add;
console.log(funcType1(3, 5));
//the problem is not solved overall, because now funcType1 can have function 
// assigned in it but what if we assign some other function in and want it to
//  behave like the function we assigned for the first would it work LET'S SEE!!!
funcType1 = printOpt;
console.log(funcType1(2, 3)); //undefined 
// basically we changed this variable pointer to some other
//  function and that function has other number of arguments with different type
// so it throw undefined 
// Example 3
// to restrict our type regarding functions we need to specify what type of function should our variable points
// to achieve this we can use Function Type like shown below
let funcType2;
// here funcType2 is defined that it would have such function which get's 2 arguments with return type of number
// other than this would result as error let's see
funcType2 = add; //fine
//funcType2 = printOpt //error  !!! because printOpt function has one argument and with void return type so we 
// restricted our function point variable as we wanted 
//NOTED: funcType2 can have any function that accepts 2 argument of number type with number return type add is not compulsory
console.log(funcType2(2, 3));
