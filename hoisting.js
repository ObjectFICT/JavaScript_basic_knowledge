/*
* Hoisting - it is mechanism where variables and function declarations are
* moved to the top of their scope before code execution
* */

console.log(sum(2, 5));

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5));

//var supports hoisting
console.log(value1);
var value1 = 1;
console.log(value1);

//let and const don`t support hoisting
try {
    console.log(value2);
    let value2 = 2;
    console.log(value2);
} catch (e) {
    console.log(e);
}

try {
    console.log(value3);
    const value3 = 3;
    console.log(value3);
} catch (e) {
    console.log(e);
}

//Function expresion & Function declaration

//Function Declaration
console.log(funcDeclaration(67));//there will note be an error because the function call possible after and begin declarations

function funcDeclaration(value) {
    return value % 2;
}

console.log(funcDeclaration(67));

//Function Expression
funcExpression(10);//there will be an error because the function call possible after declarations

var funcExpression = function (values) {
    return value % 2;
}

funcExpression(10);

