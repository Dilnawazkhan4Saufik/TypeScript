"use strict";
// Arrays in TS
const person = {
    name: 'Dilnawaz',
    age: 24,
    hobbies: ['Games', 'Coding']
};
// above hobbies is string array as we hover on hobbies
// TS way of defining array is given below
let favouriteShow; //all elemetns should be of string
favouriteShow = ['Money Heist', 'The Walking Dead']; //valid
//favouriteShow =['Money Heist', 1] // invalid 1 index holds integer to get it valid we could mention any type like shown below
// let data: any[];
// data = ['Boys', 1, 'Girls', true, {name: 'random'}] //as shown any keyword allows to assign any data which is bad practice
// TS benefit is shown in below example
for (const hobby in person.hobbies) {
    console.log(hobby.toUpperCase());
    // each iteration would hold a string which we defined while declaring thus it becomes handy to apply relevant 
    // method on it
}
