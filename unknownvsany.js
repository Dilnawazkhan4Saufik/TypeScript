"use strict";
// unknown type
// this type is special type in TS which means the type of variable is not determined yet like it 
//could be number or string or anything else, it sounds like any type but there is difference between them 
// which we can see via examples
let userInp;
userInp = 5; // valid because unknown can have any type of data
userInp = 'avc'; //valid too
//problem occurs in example one
// Example 1
let x;
//x = userInp; //error because TS is not sure about userInp that is it string or number because it is said to be unknown
//hence we have to do some type check before assigning
if (typeof userInp === 'string')
    x = userInp; //here TS is sure that at this point if the userInp 
//would be string then x would have its value assigned otherwise not 
// Example 2
// the key difference between any and unknown is about to be revealed :D
//any is special type which make TS useless in its type checking whenever the any keyword is used TS tells coder to do 
//anything you want I won't type check if variable has type of any
let y;
y = 'abd'; //valid
y = 12; //valid
let z;
z = y; // valid too even we can see the last assigned value is not string and yet z allows to have y value assign 
//this not only assign incorrect value in z but also changes its type string to number 
console.log(typeof z); //number
// NOTE: unknown is a type which some sort of type check and any don't
// unknown should be used in case of uncertainty like what would be assigned in variable instead of any because any disables 
//TS all feature of type checking which is not good
