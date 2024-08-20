class Vehicle {
    constructor(
        public color: string,
        public brand: string
    ) { }

    // This method will be overridden by the method below due to the way JavaScript/TypeScript works.
    displayInfo() {
        console.log(`The Vehicle is in ${this.color} from ${this.brand}`);
    }

    // The second method definition with the same name.
    displayInfo(brand: string) {
        console.log(`The Vehicle is in ${this.color} from ${brand}`);
    }
}

class Car extends Vehicle {
    typeOfVehicle() {
        console.log("Car");
    }

    // Overriding the displayInfo method from Vehicle
    displayInfo() {
        console.log(`The Car is in ${this.color} from ${this.brand}`);
    }
}

const car = new Car("blue", "Honda");
car.displayInfo();  // This calls the overridden method in Car
car.typeOfVehicle();
