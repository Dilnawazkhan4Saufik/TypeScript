// literal types

// this type means using the TS core type like string,number etc to define something specific 
// e.g we want a func that behaves according to the given parameter like shown in example below

function combine(n1: number| string, n2: number|string, outputConversion: 'as-number' | 'as-text') {
    //output conversion has two specific literals which means this parameter would hold either of value nothing else
    let opt;
    if(typeof n1 === 'number' && typeof n2 === 'number' || outputConversion === 'as-number'){
        opt = +n1 + +n2;
    }else{
        opt = n1.toString() + n2.toString();
    }
    return opt;
}

console.log(combine(4,5,'as-number')); //45
console.log(combine('3', '5',  'as-number')) //8
console.log(combine('abc', 'abc', 'as-text'))
