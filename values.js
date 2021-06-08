//elementary data type copy values
let a = 1;
let b = a;
b++;
console.log("a", a);
console.log("b", b);

//complex data types copy link, if not want copy link use .concat()
let array = [1, 2, 3];
let arrayCopy = array;
arrayCopy.push(4);
console.log("array", array);
console.log("array copy", arrayCopy);

let ar

let array1 = [1, 2, 3];
let arrayCopy1 = array1.concat();
arrayCopy1.push(4);
console.log("array1", array1);
console.log("array copy1", arrayCopy1);

