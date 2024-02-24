const name ="Harshit"
const lname="kushwah"

// console.log(name + lname+ "value"); // oldest way to  use

console.log(`hello my name is ${name} and ${lname}`);

// here we use backticks (`) to call the values in name and lname

// string declaratoin new method

const hname= new String('Harshit_kushwa_03')
//console.log(hname[0]);
//console.log(hname.__proto__.toUppercase());
console.log(hname.toUpperCase());
console.log(hname.charAt(2));
console.log(hname.indexOf('t'));

// substring

const newString =hname.substring(0,4)
console.log(newString);

const anoString=hname.slice(-8,5)
console.log(anoString);

const lstring="    Harshit   "
console.log(lstring);

console.log(lstring.trim());// remove estra space from string after and befoe string

const url="https://www.google.com"
console.log(url.startsWith('hj')); // for checking
console.log(url.endsWith('com')); // for checking
console.log(url.replace('com','in')); // for replacing
console.log(url.includes('google')); // for identify the existence


console.log(hname.split('-'));