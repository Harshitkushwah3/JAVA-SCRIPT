// A function in JavaScript is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

/*  // EXAMPLE

function name(){   // syntax of function
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}
name    // syntax of function refernece
name(); // calling the function using function reference
        // syntax of function calling

for (let i = 0; i < 10; i++) {  // for printing n no.of times
    name();
}

*/

/*

function addtwonumber(num1,num2){ // here num1,num2 are the parameters
 console.log(num1+num2); // we can not define here console.log here because it will not return the value instead it will print the value or arguments passed to the function or arguments that we will pass to this function while calling it.
}

*/

/*

function addtwonumber(num1,num2){ // here num1,num2 are the parameters
    let result=num1+num2;
    return result; // we can define here return statement because it will return the value instead of printing it.
}

 const result = addtwonumber(3,"4")  // here 3 and 4 are arguments
    console.log(result);

*/

/*

// here ... are the rest operator
function calculatecarprice(...num1){
    return num1
}
console.log(calculatecarprice(200,500,700))

*/

// defining object in the function

/*
const user={
    name:"Harshit",
    age:25,
    gender:"male",
    hobbies:["football","basketball","cricket"],
    occupation:"programmer"
}
*/
function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleobject(user);

// other method to define object

handleobject({
    name:"Harshit",
    age:30,
    gender:"male",
    hobbies:["football","basketball","cricket"],
    occupation:"programmer"
})

