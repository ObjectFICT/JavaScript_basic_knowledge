//null, boolean, number, string, symbol, undefined, object

console.log(typeof true);
console.log(typeof 1);
console.log(typeof "this is string");
console.log(typeof Symbol('EP'));
console.log(typeof undefined);
console.log(typeof Math);

//it`s inaccuracy JavaScript

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof function () {
});

//undefined uses when the variable had not created and when function have not return
//null returns when variable had created but value is not assigned

//Cast data type

//'', 0, null, undefined, NaN, false - it`s false other true
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {
}));

//string and number

console.log(1 + '20');//String
console.log('20' + 1);//String
console.log('' - 1)//Number
console.log('4' * '5');//Number
console.log(10 + 25 + "px");//Number -> String
console.log("px" + 10 + 20);//String
console.log("30" - 5);//Number
console.log("10px" - 2);//NaN
console.log(null + 1);//Number
console.log(undefined + 1);//NaN

// == VS ===
// == with cast date type
// === without cast date type

console.log(1 == '1');//true
console.log(1 === '1');//false
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log('0' == false);//true

console.log(false == '');//true
console.log(false == []);//true
console.log(false == {});//false

console.log('' == 0);//true
console.log('' == []);//true
console.log('' == {});//false

console.log(0 == []);//true
console.log(0 == {});//false
console.log(0 == null);//false


//recommended to use ===

