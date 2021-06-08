function Car(color, brand){
    this.color = color;
    this.brand = brand;
}

const car = new Car("Black", "Ford");
console.log(car);

function myNew(constructor, ...args){
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj;
}

const newCar = myNew(Car, "Red", "Ferrari");
console.log(newCar);