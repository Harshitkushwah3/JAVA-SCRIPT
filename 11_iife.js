// IMMEDIATELY INVOLED FUNCTINO EXPRESSION (IIFE)

// IIFE is a unique JavaScript construct that combines the power of function expressions, closures, and immediate execution. It's a function expression that's defined and invoked immediately after its declaration.


//IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
