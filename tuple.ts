// Tuples
// Fixed number of array with fixed typed 

// const person = {
//     name: 'Dilnawaz',
//     age: 24,
//     hobbies: ['Games', 'Coding'],
//     role:[2, 'coder']
// }

// defined tupel in person object 'role'
//by default TS doesn't know that we want explicitly 2 indexes with exact type

//person.role.push('xyz'); //we didn't defined length so we can push
//person.role[1] = 2; // we didn't type either so we can change string to number

// to do so we have to inferred types with objects like shown below
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // here we defined tupel with fixed length and fixed type 
} = {
    name: 'Dilnawaz',
    age: 24,
    hobbies: ['Games', 'Coding'],
    role:[2, 'coder']
}

//person.role.push('xyz');  //push couldn't be detected by TS even if we defined 2 length array
//person.role[1] = 2; //Error because first index can have string only

//However to verify length we can see example below
//person.role = [2, 'Hello', 'xyz'] // Error becoz we defined the size to be two and here we assign third element
