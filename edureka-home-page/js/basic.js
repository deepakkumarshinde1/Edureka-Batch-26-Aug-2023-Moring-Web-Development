let studentName = "Deepakkumar"; // string
let studentBatchNo = 123; // number
let studentMarks = 50.6; // number
let studentAttendanceStatus = true; // boolean
let studentMobile = null; // object
let studentParentMobile; // undefined

// object --> array , jsObject , null , function

// check the data type

console.log(typeof studentName);
console.log(typeof studentBatchNo);
console.log(typeof studentMarks);
console.log(typeof studentAttendanceStatus);
console.log(typeof studentMobile);
console.log(typeof studentParentMobile);
studentMobile === null;

// function fun() {}

// let number = 30;
// // even or odd;
// let result = null;

// if (number % 2 === 0) {
//   result = "even";
// } else {
//   result = "odd";
// }

// console.log(result);
//  arithmetic operators
let a = 10;
let b = 20;
let result = a + b;
result = a - b;
result = a / b;
result = a * b;
result = a % b; // reminder of div before fraction
// console.log(result);

// inc / dec operators
let a1 = 10;
// a1++; post inc
// ++a1; pre inc
// a1--; post dec
// --a1; pre dec

// console.log(a1++);
// console.log(--a1);
// console.log(a1);

// Assignment operators
a1 += 5; // a1 = a1 + 5;
a1 -= 5; // a1 = a1 - 5;
a1 /= 5; // a1 = a1 / 5;
a1 *= 5; // a1 = a1 * 5;
a1 %= 5; // a1 = a1 * 5;
console.log(a1);

// compare operators
let a2 = 31;
let b2 = 30;
let c2 = 30;
// >  < === !== >= <=

// check this all operations with conditions

// conditional statement

// logical operators
// and --> &&
// or --> ||
// not --> !
// if ... else
// false || true ==> !(true) ==> false
// false && true ==> !(false) ==> true
if (!(a2 === b2 && b2 === c2)) {
  // true block
  console.log("Yes");
} else {
  // false block
  console.log("No");
}

// switch
let userCourse = "JAVA FSD"; //; Javascript React MERN ;

switch (userCourse) {
  case "Javascript":
    // code
    console.log("You have selected a Javascript Course");
    break;

  case "React":
    // code
    console.log("You have selected a React Course");
    break;
  case "MERN":
    // code
    console.log("You have selected a MERN Course");
    break;

  default:
    console.log("You have selected a invaid course");
    break;
}
