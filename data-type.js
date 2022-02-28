"use strict";
console.log('Core DataTypes');
// Example 1
// function add(n1, n2){
//     return n1+n2;
// }
// console.log(add(5,2.4));  // valid
// console.log(add('5', 2.4)) //unwanted output
//Improved via TS Number
// function add(n1: number, n2: number){
//     // Extra check in JS
//     // if(typeof n1 !== 'number' && typeof n2 !== 'number')
//     //  throw new Error('Incorrect Input!');
//     //  else
//     return n1+n2;
// }
// console.log(add(5,2.4));  // valid
// console.log(add('5', 2.4)) //unwanted output
// Example with Boolean
function add(n1, n2, showOutput, phrase) {
    const ans = n1 + n2;
    if (showOutput)
        console.log(phrase + ans);
    else
        return ans;
}
add(5, 2.4, true, 'Result is: ');
