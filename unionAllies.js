"use strict";
// type allies
// to prevent using union types writing types again and again we can use
// type allies
function combine(n1, n2, outputConversion) {
    //output conversion has two specific literals which means this parameter would hold either of value nothing else
    let opt;
    if (typeof n1 === 'number' && typeof n2 === 'number' || outputConversion === 'as-number') {
        opt = +n1 + +n2;
    }
    else {
        opt = n1.toString() + n2.toString();
    }
    return opt;
}
// hence in above example we avoided writing number and string twice plus we defined in one place and can change in one place to reflect changes all over used
