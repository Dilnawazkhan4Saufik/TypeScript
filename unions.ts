// UNIONS

// we use pipe| symbol for passing more than one type it means that variable can be either of this type or that

function combine(n1: number | string, n2: number | string) {
  // const rst = n1+n2; //this line has error because now TS cant make sure that the operator we are applying is applicable on both types
  // so we do a little logic to make TS understand
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = n1.toString() + n2.toString();
  return result;
}

// now we can pass string and number 
console.log(combine(2, 5)) //7
console.log(combine('abc', 'xyz')) // abcxyz
console.log(combine(2, 'n'))  //2n
