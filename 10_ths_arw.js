// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this); // here it shows both the user details and the method welcomeMessage
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // here this print the Empty String


// function abc(){
//     console.log(this); // if we define the this inside function it will retunr all the global values of the node variables
// }
// abc()

// function chaia(){
//     let username = "hitesh"
//     console.log(this.username); // here we can use this keyword with the username the value is undefined and prints Undefined
//     console.log("Username is : ", username) // we access the username by using the username keyword which belongs to the local scope of the function
// }

// chaia()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

const addTwo = (num1, num2) => { // if we use curly braces then we have to use return keyword
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2 // we cannnot use curly braces so we dont use return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

