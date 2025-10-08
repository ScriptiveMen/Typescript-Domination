/* 

Type Inference - TS itself identifies the data type of the variable
Type Annotations - You define a type to a variable after : .

*/

let a = 21; // TS knows a's value is number (Type inference)
let b: number | string | boolean; // Now b can hold a number , string, boolean (Type Annotations)
