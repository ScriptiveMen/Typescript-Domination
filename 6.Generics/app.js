"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Functions
function abcd(a) { }
abcd("hey");
abcd(12);
abcd(() => { });
abcd(true);
function defg(a) { }
defg({ name: "satya", id: "234234", key: "it's my desc." });
// Generic Classes
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("hey");
let b2 = new BottleMaker(23);
let b3 = new BottleMaker(false);
console.log(b1, b2, b3);
// IMPORTANT : Generic Catch
function pqrs(a, b) {
    // return "hey";  you cannot do that, because "hey" is a string litreal (Litreal === Littreally you have given string).
    return "hey"; // here "hey" will return as Type <T>
    // or
    return "hey"; // this is also valid it's type association.
    // if (typeof a === "string") {
    //     a.charAt(3);
    // }
}
pqrs("hey", "hello");
//# sourceMappingURL=app.js.map