// Generic Functions
function abcd<T>(a: T) {}

abcd<string>("hey");
abcd<number>(12);
abcd<() => void>(() => {});
abcd(true);

// Generic Interfaces

interface User<T> {
    name: string;
    id: string;
    key: T;
}

function defg(a: User<string>) {}

defg({ name: "satya", id: "234234", key: "it's my desc." });

// Generic Classes

class BottleMaker<T> {
    constructor(public key: T) {}
}

let b1 = new BottleMaker<string>("hey");
let b2 = new BottleMaker<number>(23);
let b3 = new BottleMaker(false);
console.log(b1, b2, b3);

// IMPORTANT : Generic Catch

function pqrs<T>(a: T, b: T): T {
    // return "hey";  you cannot do that, because "hey" is a string litreal (Litreal === Littreally you have given string).

    return "hey" as T; // here "hey" will return as Type <T>
    // or

    return <T>"hey"; // this is also valid it's type association.

    // if (typeof a === "string") {
    //     a.charAt(3);
    // }
}

pqrs("hey", "hello");
