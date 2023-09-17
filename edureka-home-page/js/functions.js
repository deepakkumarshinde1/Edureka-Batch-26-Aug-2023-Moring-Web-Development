let a = 10;
let b = 20; // global variable (scope is global)

// function is block of code ,we again and again
// () is a argument or parameter body
// {} is a function body to write code
function add(varOne, varTwo) {
  // main will be
  let result = varOne + varTwo;
  // result is a local variable
  return result;
} // function definition
// add pure function as it has 100% local variable
// run a function we need to call that function
let result_1 = add(a, b); // function call
let result_2 = add(20, 40);
let result_3 = add(50, 60);

// console.log(result_1, result_2, result_3);

// function with callback

function funOne(callback) {
  // console.log("funOne");
  // console.log(varOne);
  callback();
}
// callback function is a function  written in other function call
// call back function are also called in line function
funOne(function () {
  console.log("hello");
});
// funcOne is higher order function (HOF)
