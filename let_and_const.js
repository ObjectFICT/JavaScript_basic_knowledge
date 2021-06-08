//Let
let a = 'Variable a';
let b = 'Variable b';


{
    a = 'New variable a';
    let b = "local variable b";
    console.log("Scope A: " + a);
    console.log("Scope B: " + b);
}

console.log("A: " + a);
console.log("B: " + b);

//Const
const PORT = 8080;//can`t change

const array = ['All', "things", "is"];

array.push("!")//can change
array[0] = "Not all";//can change

console.log(array);

try{
    array = '';//can`t change
} catch (e) {
    console.log(e);
}

const obj = {};
obj.name = "Eduard";
obj.age = 21;

console.log(obj);

obj.name = "EDUARD";
delete obj.age;

console.log(obj);

try{
    obj = '';//can`t change
} catch (e) {
    console.log(e);
}


