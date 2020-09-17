this - context , Self 
this
  Objects: 
    arrays hashes, functions, classess
  window object 
  primary object of your browser

hierarchy
  window 
    global 
      function call
        functions called in other functions





// Variable Scopes

// var foo = 'bar';  //Global
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }
// //console.log(baz) this is an error baz has not been defined yet.

// whatIsThis();  // baz gets defined at this point
// console.log(baz);






// var foo = 'bar';  //Global
// var baz
// var foo
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }

//console.log(baz) this is an error baz has not been defined yet.


// whatIsThis();  // baz gets defined at this point

// console.log(baz);



// var x = true
// var xIsTrue;
// var xIsALie;

// if (x)
//   var xIsTrue = true
// else
//   var xIsALie = true
  
// function cl(item) {
//   console.log(item)
// }

// no longer using var for variables
