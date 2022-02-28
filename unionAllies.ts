// type allies
// to prevent using union types writing types again and again we can use
// type allies

// it can help preventing us defining list of types again and again like in union case or literal case

// !!we use type keyword to define our own types
// example
type combinable = number | string; 
type literalDesciptor = 'as-number' | 'as-text'

function combine(n1: combinable, n2: combinable, outputConversion: literalDesciptor) {
    //output conversion has two specific literals which means this parameter would hold either of value nothing else
    let opt;
    if(typeof n1 === 'number' && typeof n2 === 'number' || outputConversion === 'as-number'){
        opt = +n1 + +n2;
    }else{
        opt = n1.toString() + n2.toString();
    }
    return opt;
}

// hence in above example we avoided writing number and string twice plus we defined in one place and can change in one place to reflect changes all over used