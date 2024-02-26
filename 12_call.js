// HOW CODE IS EXECUTED IN JAVASCRIPT

// JavaScript Execution Context

/* Global Execution Context is always be there */
/* Functional Execution Context */
/* Eval  Code Execution Context */

let val1=10
let val2=20

function add(val1,val2){
    let total = val1 + val2
    return total
}
let result1=add(val1,val2) /* calling the function and returning the value */
let result2=add(10,5) 