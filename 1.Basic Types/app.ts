/* 
 - Basic Types
    1. Primitive Type (Number, string, boolean)
    2. Arrays
    3. Tuples
    4. Enums
    5. Any, Unknown, Void, Null, Undefined, Never
*/

// Primitive Types

let a = 23;
let b = "Satya";
let c = false;

// Arrays

let d = [1, 2, 3, 4, { name: "Satya" }]; // Now it's a array of Number or Object with field of name with value of string.
// let arr: number[] = [1,2,3,4,5, {name:"Satya"}] now this is not allowed in typescript we defined a type of number here to this array.

// Tuples
let arr: [string, number] = ["satya", 33]; // It is a tuple - If you know the fixed size of the array and having fixed data types of the particular location - here create Tuple.

// enums - Enumerations - Set of pre-defined rules sort of, access it by using .(dot)
enum StatusCodes {
    Internal_Error = "500",
    Not_Found = "404",
    Sucess = "200",
}

StatusCodes.Sucess;

// Any
let r; // this is any because in future r will have number,string, or boolean. Make sure don't keep your variables type any.

// unknown
let h: unknown; // TS don't know what is your type it says ok assign any value but before you Operate anything on that variable you have to check it's type then Operate.

h = 2;
h = "Satya";

if (typeof h === "string") h.toUpperCase();

// void

function abcd(): void {
    // func is not returning anything that's why void
    console.log("Hello");
}

function dgf(): number {
    // func is returning number that's why number
    return 12;
}

function jhf(): boolean {
    // func is returning boolean that's why boolean
    return true;
}

let u: null;
let n: undefined;

function vbn() {
    // add :never here, console.log will never run
    while (1) {}
}

vbn();
console.log("Code End");
