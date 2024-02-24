/*

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());


console.log(typeof myDate);

*/

/*

let createDate=new Date(2023,0,23)
let createDate1=new Date(2023,0,23,25,5,3)
console.log(createDate); // its not easy to know the time by this method so we use methods from
console.log(createDate1.toLocaleString()); // specific format
console.log(createDate.toLocaleString());

console.log(createDate.toLocaleTimeString());
console.log(createDate1.toLocaleTimeString());

*/

// specific format as you define it here

/*

let newdate=new Date("01-14-2023")
console.log(newdate.toLocaleString());


let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(newdate.getTime());
console.log(Math.floor(Date.now()/1000));

*/

let newDate =new Date()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);


/* new format */

newDate.toLocaleString("default",{weekday:"long"});