//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/* 

    TYPES OF VALUES
1:- UNDEFINED => UNDEFINED
2:- NULL => OBJECT
3:- BOOLEAN => BOOLEAN
4:- NUMBER => NUMBER
5:- STRING => STRING
6:- SYMBOL => SYMBOL
7:- OBJECT(native and does not implement [call]) => OBJECT
8:- OBJECT(native or host  and does implement [call]) => FUNCTION
9:- OBJECT(host and does not implement [call]) => IMPLEMENT DEFINED EXPECT MAY NOT BE "UNDEFINED" ; "BOOLEAN" ; "STRING" ;OR "NUMBER"



*/




// https://262.ecma-international.org/5.1/#sec-11.4.3

// const is not changed

/*
const name = "John";
console.log(name);
*/

// Output: John

// let is changed

/*
let name = "John";
name = "Jane";
console.log(name);
*/

// Output :Jane

// Var can not be use directly

/*
Prefer not to use var
because of issue in block scope and functional
scope (ES6)
*/

/*
account=11231
console.log(account)
*/

// DATATYPE
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object



