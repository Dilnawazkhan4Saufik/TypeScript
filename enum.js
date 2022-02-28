"use strict";
// Enum 
// we define enum to have const type value by default it has 0 against defined first element
//scenario user can have one role either admin, author, read-only
// Example 1
// const ADMIN = 'admin';
// const AUTHOR = 'author';
// const READONLY = 'is read only'
// const person = {
//     name: 'Dilnawaz',
//     age: 24,
//     hobbies: ['Games', 'Coding'],
//     role: READONLY
// } 
// // this works fine in  our scenario but down size is 
// // if we check role in if condition
// if(person.role === 'is_read_only') // we can forget the way in which value is assigned
// {
//     console.log('is read only');
// }
// down size of above example we have to make variable against each role and this make our code lengthy in case if we have thousands roles
// Example 2
// we can use enum which is supported in TS not in JS
// we define enum like below
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// now Role has assigned default value against each element like 0 to ADMIN, 1 to READONLY, 2 to AUTHOR
// we can assign our own values to enum elements like shown below
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 100] = "apple";
    fruits[fruits["banana"] = 101] = "banana";
    fruits[fruits["grapes"] = 102] = "grapes";
})(fruits || (fruits = {})); // every upcoming element by default gets next value like banana has 101
// we can also assign string values to enum element like shown below
var gender;
(function (gender) {
    gender["MALE"] = "MALE";
    gender["FEMALE"] = "Female";
})(gender || (gender = {}));
// NOTE if you assign string to enum for first element then you have to explicitly assign next elements value too or you get an error
const person = {
    name: 'Dilnawaz',
    age: 24,
    hobbies: ['Games', 'Coding'],
    role: Role.ADMIN
};
// now if condition can be used against any role properly without writing multiple lines of code
if (person.role === Role.READONLY) {
    console.log('is read only');
}
