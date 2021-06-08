const person = {
    surname: "Panasenko",
    knows: function (what, name){
        console.log(`You know ${what}, ${name} ${this.surname}`)
    }
}

const john = {
    surname: "Bush",

}

person.knows("all", "Eduard");
person.knows.call(john, "nothing", "Josh");//use parameters with comma
person.knows.apply(john, ["nothing", "Josh"]);//use array for parameters

const bound = person.knows.bind(john, "nothing", "Josh");//bind does not call a function at once
bound();

person.knows.call(john, ...["nothing", "Josh"]);//we can use spread

// class ES5 with supported function

function Human(name, age){
    this.name = name;
    this.age = age;

    console.log(this);
}

const eduard = new Human('Eduard', 21);

//explicit context

function logThis(){
    console.log(this);
}

const obj = {
    value: 0
}

logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

//implicit context

const animal = {
    legs: 4,
    logThis: function (){
        console.log(this);
    }
}

animal.logThis();

//arrow function

function Car(color){
    this.color = color;
    console.log("This", this);
    (()=> console.log("Arrow this ", this))();//arrow function does not created context and we can use this 
}

new Car("Magenta");
