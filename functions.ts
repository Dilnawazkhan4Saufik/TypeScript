// functions

// TS infer functions return type by itself but we can do it too by ourself

// number return type func
function add(n1: number, n2: number): number{
    return n1+n2;
}

// string return type func
function concate(n1: number, n2: number): string{
    return n1.toString()+n2.toString();
}

// void return type
function printOpt(n1:number|string):void{
    console.log('Result: ', n1)
}

printOpt(add(5,6));
printOpt(concate(5, 6))