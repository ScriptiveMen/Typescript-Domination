/* 

Interfaces and Type Aliases
 1. Define interfaces
 2. Using interface to define object shapes
 3. Extending interfaces
 4. Type aliases
 5. Intersection types
*/

//  1. Define interfaces
//  2. Using interface to define object shapes

interface User {
    name: string;
    email: string;
    password: string;
    gender?: string;
}

function abcd(obj: User) {}

abcd({
    name: "satya",
    email: "satya@gmail.com",
    password: "satya123",
    gender: "male", // optional
});

// Extending Interfaces

interface Page {
    color: string;
    line: boolean;
}

interface Book extends Page {
    image: boolean;
}

function createBook(obj: Book) {}
createBook({ image: true, color: "white", line: true });

// Type Aliases

type sankhya = number;

let a: sankhya;

type arg = string | number | null;

function test(a: arg) {}

test("satya");

// Intersection Types

// Union type:
type value = string | number;

//Intersection type:

type NewUser = {
    name: string;
    email: string;
};

type Admin = NewUser & {
    getDetails(user: string): void;
};

function pqr(a: Admin) {
    a.getDetails("satya");
}
