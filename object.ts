// Objects in TS
/*
Types and type assigned is not part of JS
object have key type pair e.g
const person: {
    name: string;
    age: number;
}
*/ 


// hovering over person gives us object type which is built-in feature we can manually do it too to restrict our objects see Example 2

// Example 1
// const person = {
//     name: 'Dilnawaz',
//     age: 23
// }

// console.log(person) // whole obj
// console.log(person.name) //Dilnawaz
// console.log(person.nickname)  //invalid doesn't exist  

// Example 2


// below Object specify that this object would hold mentioned keys with mentioned types adding some other key-value without 
// mentioning in object type would result in error as seen below

const person: {
    name: string;
    age: number;
 
} = {
    name: 'Dilnawaz',
    age: 23,
    // nickname: 'abc' //mention in above section before giving new property
}


// Better approach is in example 1 of declaring object
