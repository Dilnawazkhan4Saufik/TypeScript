// never type 
// it is used for such functions that never return anythin
// Example 1:
function generateError(msg: string, code:number): never{
    throw {message:msg, errorCode: code}
}

// throw key word is use to throw errors and it uses never return type

console.log( generateError('An Error Occured!', 500))