//Immediate Invoked Function Expressed

let result = [];
//incorrect variant, problem with closures
// for(var i = 0; i < 5; i++){
//     result.push(function (){
//         console.log(i);
//     })
// }
//
// result[1]();

for (var i = 0; i < 5; i++){
    (function (){
        var j = i;
        result.push(function (){
            console.log(j);
        })
    })()
}

result[1]();
result[2]();