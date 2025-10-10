/*
Exporting and Importing Modules
Default exports
*/
// Importing Modules
import { addPayment, verifyPayment } from "./payment.js";
addPayment(12);
verifyPayment("1234");
// default exports
import customClass from "./customClass.js";
let c1 = new customClass("Custom Class 1");
console.log(c1);
