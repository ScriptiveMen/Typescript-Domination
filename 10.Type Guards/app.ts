//  Type Guards and TypeScript Utility Types

// Using typeof and instanceof

// Partial, Required, Readonly

// Type Guard is a Type Narrowing
// Type narrowing means

function abcd(a: string | number) {
    if (typeof a === "string") {
        // a.charAt();
    }
}

abcd(12);
abcd("23");

// instanceof (instance narrowing)

class TvKaRemote {
    switchOffTv() {
        console.log("switching off tv...");
    }
}

class CarKaRemote {
    switchOffCar() {
        console.log("switching off car...");
    }
}

const tv = new TvKaRemote();
const car = new CarKaRemote();

function SwitchOffKaro(device: TvKaRemote | CarKaRemote) {
    if (device instanceof TvKaRemote) {
        device.switchOffTv();
    }
    if (device instanceof CarKaRemote) {
        device.switchOffCar();
    }
}

// SwitchOffKaro();
