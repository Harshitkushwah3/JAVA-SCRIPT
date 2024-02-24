const score = 400
const bal=new Number(1000000)
console.log(bal);
console.log(score);
console.log( bal.toString().length);
console.log(bal.toFixed(2));

const val=23.8666
console.log(val.toPrecision(3));

const newv=1000000
console.log(newv.toLocaleString("en-IN"));

// /*  ---MATH  --- */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.random()); // gives value under 0 and 1
console.log(Math.random()*10+1); // gives value under 0 and 1
console.log(Math.floor(Math.random()*10)+1); // gives value under 0 and 10 to avoid 0 and give value betwwen 0 to 9


const max=100
const min=50
console.log(Math.floor(Math.random()*(max-min+1))+ min);