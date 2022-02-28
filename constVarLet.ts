// const, let and var

const systemName = 'Dell';
// systemName = 'Lenovo' // can't change const variable because it is constant

var temp = 0;
// var is an old way of defining variables, var has function scope and global scope means any variable declared with var can 
// be accessible with these scope but the problem with var is that it doesn't have block-scope{if-else / loops} any variable 
// with var can is accessible outside of these block-scope 
//to overcome this  ES-6 introduced let keyword which not only have global, function scope but block scope too
// Example 1:
// for(var i=0; i<5; i++){
//     console.log('First Loop', i)
//     for(var i=0; i<5; i++){
//         console.log('Second Loop', i)
//     }
// }

// above example has executed first i for once and used the second loop i value to terminate the first loop condition
// this flaw has been overcome with let

// Example 2:
// for(let i=0; i<5; i++){
//     console.log('First Loop: ', i)
//     for(let i=0;i<5;i++){
//         console.log('Second Loop', i)
//     }
// }
