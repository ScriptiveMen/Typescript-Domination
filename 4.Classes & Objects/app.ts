/* 

1. Class Definition
2. Constructors
3. Access Modifiers (Public, Private, Protected)
4. Readonly Properties
5. Optional Properties
6. Parameter Properties
7. Getters and Setters
8. Static members
9. Abstract classes and methods

*/

//Class - Blueprint of an object.

class Device {
    model = "samsung";
    price = 12000;
    color = "white";
}

let device1 = new Device();
let device2 = new Device();

// Constructors

class BiscuitMaker {
    constructor(
        public name: string,
        public color: string,
        public price: number,
        public isReady: boolean
    ) {}
}

const biscuit1 = new BiscuitMaker("Parle G", "brown", 10, false);
console.log(biscuit1);

// This keyword

class dfg {
    constructor(public name: string, public isStudent: boolean) {
        this.name = name;
        this.isStudent = isStudent;
    }
}

let n1 = new dfg("satya", true);
console.log(n1.isStudent);

// private access modifier

class BottleMaker {
    constructor(private name: string) {}
}

class MetalBottle extends BottleMaker {
    constructor(name: string) {
        super(name);
    }

    setValue(name: string) {
        // this.name = name;
    }

    getValue() {
        // console.log(this.name);
    }
}

const b1 = new MetalBottle("Milton");
b1.getValue();
b1.setValue("Chilton");
b1.getValue();

// protected access modifiers

class DeviceMaker {
    protected model: string = "S24";
}

class AndroidDevice extends DeviceMaker {
    public price: number = 50000;

    changeName() {
        this.model = "S45";
    }
}

let d1 = new AndroidDevice();
d1.changeName();
console.log(d1);
// d1.model = "Iphone";

// Readonly property

class User {
    constructor(public readonly name: string) {}
    changeName() {
        // this.name = "Hello";
    }
}

let u1 = new User("Satya");
u1.changeName();
console.log(u1.name);

class NewUser {
    constructor(
        public name: string,
        public age: number,
        public gender?: string
    ) {}
}

let nu1 = new NewUser("Satya", 22, "male");
let nu2 = new NewUser("Lagbhatak", 17); // here gender is a Optional Property

//parameter property
class Cake {
    constructor(
        public name: string,
        public color: string,
        public price: string
    ) {}
}

// getters and setters

class Employee {
    constructor(public _name: string, public age: number) {} // _ is used to remove the duplicacy

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let e1 = new Employee("Satya", 33);
console.log(e1);
console.log(e1.name);
e1.name = "Sanvikaa";
console.log(e1.name); // use as property not method

// Static members

class MyMath {
    static version = 1.0;

    static getRandom() {
        return Math.random();
    }
}

// you no need to create an instance to check version or to get random numbers

console.log(MyMath.version);
console.log(MyMath.getRandom());

// Abstract Classes and Methods

class CookingEssentials {
    // abstracted, we don't have to create any instance of this class we have to extend this class because it a bare minimum thing.
    constructor(public gasUsed: number, public gasName: string) {}
}

class Sabji extends CookingEssentials {}

class Cakes extends CookingEssentials {}
