//17a my solution
class Car {
    brand;
    model;
    speed;// You can set a default value for a property here, or in the constructor.
    isTrunkOpen = false;//boolean property

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.speed = carDetails.speed || 0;// this.speed = 0; You can set a default value for a property here 
        this.isTrunkOpen = carDetails.isTrunkOpen;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(
            `${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`
        );
    }

    go() {
        if (!this.isTrunkOpen) {
            this.speed += 5;
        }
        // Limit the speed to 200.
        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;
        // Limit the speed to 0.
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}


/*
const cars = [{
    brand: 'Toyota',
    model: 'Corolla',
    speed: 0
}, {
    brand: 'Tesla',
    model: 'Model 3',
    speed: 0
}].map((carDetails) => {
    return new Car(carDetails);
});

cars.forEach(car => car.displayInfo());
*/

//exercise solution

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});
const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});

console.log(car1);
console.log(car2);
//17b
car1.displayInfo();
car2.displayInfo();
//17c create, increases and decreases speed
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

// Trunk should not open since the car is moving.
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

// Trunk should open since the car is not moving.
car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
car2.displayInfo();