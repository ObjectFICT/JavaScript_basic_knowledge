function sayHelloTo(name){
    const message = "Hello " + name;

    return function (){
        console.log(message);
    }
}

const helloToEduard = sayHelloTo("Eduard");
console.log(helloToEduard);
console.log(helloToEduard());

function createFrameworkManager(){
    const fw = ['Angular', 'React'];

    return {
        print: function (){
            console.log(fw.join(" "));
        },

        add: function (framework){
            fw.push(framework);
        }
    }
}

const manager = createFrameworkManager();
console.log(manager);

manager.print();
manager.add("VueJS");
manager.print();

//setTimeOut

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++){
    setTimeout(function (){
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500);
}

//1 variant to fix (change ver to let)

for (let i = 0; i < fib.length; i++){
    setTimeout(function (){
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500);
}

// 2 variant to fix (use closures)

for (var i = 0; i < fib.length; i++){
    (function (j){
        setTimeout(function (){
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500);
    })(i)

}
