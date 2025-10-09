/* 

1. Functions
2. Function Types
3. Optional and default parameters
4. Rest parameters
5. Overloads

*/

// Normal JS Functions
function abcd() {
    return 12;
}
abcd();

// Function Types

function def(name: string, cb: (value: string) => void) {
    cb("hello");
}

def("satya", (value: string) => {
    console.log(value);
});

// optional parameters & default parameters

function tef(
    name: string,
    age: number,
    gender?: string, // gender parameter is optional
    isStudent: boolean = true // isStudent parameter's by default true
) {}

tef("satya", 22, "male", false);
tef("laqbataq", 16);

// Rest Parameters

function sum(...args: number[]) {
    // rest operator
    console.log(args);
}

sum(1, 2, 3, 4, 5);

let arr1 = [4, 5, 6, 7, 8];
let arr2 = [...arr1]; // spread operator
console.log(arr2);

// Function Overloading

// Overload signatures (no body, no semicolon after closing paren)
function abcdf(a: string): void;
function abcdf(a: string, b: number): number;

// Implementation signature (one function body)
function abcdf(a: string, b?: number): void | number {
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
