/*
Type Assertion

    - Type Casting
    - Non-null assertion operator

*/
// Type Assertion - When you know more about the type of that particular variable's value more than TS.
let a = 12;
// (a as string).charAt() -> here intellisense is working and giving methods of string.
// or
a.toFixed(); // it is giving suggestions of number
// Type casting
let t = Number("23");
console.log(typeof t); // number
// Non-null assertion operator
// kisi v variable ke aage (!) yeh symbol laga do, issey yeh gurantee hogi ki woh variable null or undefined to nahi hogi.
let value;
value = 23;
value.toFixed();
export {};
