//__proto__ ES6
// Object.getPrototypeOf() ES5

function Phone(name, color){
    this.name = name;
    this.color = color;
}

Phone.prototype.ringing = function (){
    console.log(`Phone ${this.name} is ringing`);
};

const phone = new Phone("Iphone", "Gold");
phone.ringing();

console.log(Phone.prototype);
console.log(phone.__proto__ === Phone.prototype);
console.log(phone.constructor);
console.log(phone);

function Person(){}
Person.prototype.legs = 2;
Person.prototype.skin = `white`;

const person = new Person();
person.name = "Eduard";

console.log(`skin` in person);

console.log(person.legs);
console.log(person.name);

console.log(person.hasOwnProperty('name'));//check fields in object - true
console.log(person.hasOwnProperty('skin'));//check fields in object - false because skin in prototype

// Object.create()

const proto = {age: 21};
const myAge = Object.create(proto);

console.log(myAge.age);
proto.age = 22;
console.log(myAge.age);

console.log(myAge.hasOwnProperty('age'));
console.log(myAge.__proto__ === proto);