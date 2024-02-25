// this is the global scope

/*
WE CAN NOT USE VAR TO DEFINE ANY VARIABLE BECAUSE IT CAN BE ACCESSED ANYWHERE WHETHER IT IS IN GLOBAL SCOPE OR BLOCK SCOPE
*/
/*

let a=300
if (true){
    // this is the block scope
    let a=10
    const b=20
    const d=40
    console.log(b)
    console.log(d)
}

console.log(a) // here the value of scope is 300 because it passes in global scope

*/

// Nested Scope

/*

function one(){
    const nnmae="kushwah"
    function two(){
        const name ="harshit"
        console.log(name)
        
    }
    console.log(nnmae);
    two();
}
one();

*/


if (true){
    const username="harshit"
    if (username==="harshit"){
        const password="password"
            console.log(username + password)
        }
        // console.log(password);
    }
    // console.log(username);

//+++++++++++++INTERESTING EXAMPLE+++++++++++++++


console.log(addone(5))
function addone(num){
    return num+1
}
// addone(5)

/*
here we define console log anywhere before the function or after the function it excetues
*/

// another way to define function using variable

const abc= function addtwo(num){
    return num+2
}

console.log(abc(5))

/*
we only define the consolelog after the function declaration in variable
*/