/*

WE CAN DEFINE OBJECT IN JAVASCRIPT AS LITERAL AND CONSTRUCTOR

// SINGLETON OBJECT
When de define object as literal then it is not a singleton object. 

*/

/*

// DECLARING SYMBOL DATATYPE SYNTAX

    const mysym = Symbol("my symbol"); // creating symbol with description


// OBJECT LITERALS

const jsuser={
    name:"Harshit",
    "lname":"Kushwah",
    age : 22,
    [mysym] : "key1",
    // console.log(mysym); // not accessing because of wrong syntax

    email : "bkhhm@gmail.com",
    isloggedin :false,
    loginday:["monday","tuesday","wednesday"]
}

// accessing the object

console.log(jsuser.name); // oldest way to access the object
console.log(jsuser["name"]); // latest way to access the object
console.log(jsuser["lname"]); // latest way to access the object
console.log(jsuser[mysym]);
console.log(typeof mysym);


jsuser.age=32 //we can override the values of the object like this
console.log(jsuser.age);


// Object.freeze(jsuser); // freeze the object can't change tha values in it.
jsuser.age=98
console.log(jsuser); // print all teh values
console.log(jsuser.age); // here the value of age is not changed


// we can use function as variable in the object

jsuser.greeting=function(){
    console.log("hello");
}
jsuser.greetingtwo=function(){
    console.log(`hello ${this.name}`); // here we use backtick to use function in the object
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

*/

//* *************************** 2 *************************** * 

// OBJECT DECLARE USING LITERAL OR CONSTRUCTOR

/*

const tduser = new Object();

tduser.name = "Harshit";
tduser.age = 22;
tduser.email = "bkhhm@gmail.com";
tduser.isloggedin = false;
console.log(tduser);

*/

/*

const reguser ={
    name:"Harshit",
    fname:{
        uname:{
            phname :"Harshit",
            lsname:"Kushwah"
        }
    }
}
console.log(reguser.fname.uname.phname);

*/

// we can merge two object same as array

/*

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

// const ob3={ob1,ob2} // hard way to define the conactenation

const obj3 = Object.assign({} , ob1 , ob2) ; // easy way for concatenating or merging of objects

console.log(obj3);

*/

/********************* Part 3 *************************/

// DESTRUCTURING using {} braces

const course = {
    cr_name :"javascript",
    cr_price : 1000,
    cr_teacher: "Harshit",
}

// course.cr_name

// const {cr_teacher , cr_name , cr_price }= course //defining the values we    have to access from the object without using the constructor like (course.cr_name)

const{cr_name:hk, cr_price: pr ,cr_teacher: tc}= course // here we define the new name to the constructor values so that we can access using the short name

//console.log(cr_teacher , cr_name , cr_price);

console.log(hk,pr,tc);