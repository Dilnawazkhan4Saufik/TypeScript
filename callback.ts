// Call Back Functions
// we can callback functions in our functions
// this means the functions instructions are executed and after that a mention callback would get executed 
// Example 1:

function addAndHandle(n1:number, n2:number, callbackFunc:(a:number)=> void):void{
    const opt = n1+n2;
    callbackFunc(opt);
}

addAndHandle(5,5,(opt)=>{ //we are using anonymous functions as call back we could use some other too
    console.log(opt ,' is the output')
})

// Note down we have mentioned call back function return type void which means even if we return something won't be
//entertained and would be ignored