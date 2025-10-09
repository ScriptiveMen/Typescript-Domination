/*

1. Functions
2. Function Types
3. Optional and default parameters
4. Rest parameters
5. Overloads

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Normal JS Functions
function abcd() {
    return 12;
}
abcd();
// Function Types
function def(name, cb) {
    cb("hello");
}
def("satya", function (value) {
    console.log(value);
});
// optional parameters & default parameters
function tef(name, age, gender, // gender parameter is optional
isStudent // isStudent parameter's by default true
) {
    if (isStudent === void 0) { isStudent = true; }
}
tef("satya", 22, "male", false);
tef("laqbataq", 16);
// Rest Parameters
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // rest operator
    console.log(args);
}
sum(1, 2, 3, 4, 5);
var arr1 = [4, 5, 6, 7, 8];
var arr2 = __spreadArray([], arr1, true); // spread operator
console.log(arr2);
// Implementation signature (one function body)
function abcdf(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
        return;
    }
    if (typeof a === "string" && typeof b === "number") {
        return 23;
    }
    throw new Error("Something went wrong");
}
abcdf("hey");
abcdf("hey", 12);
