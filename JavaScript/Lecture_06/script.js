/* function rollDice() {
    let random = Math.floor((Math.random() * 6) + 1);
    console.log(random);
}

rollDice(); */


/* function printTable(num) {
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    
}

let num = prompt("Enter the number you want to print table of that number");
printTable(num); */



// ! Function Expression
// to store function into variables

/* let sum = function(a, b) {
    return a+b;
}

console.log(sum(2, 5)); */


// ! High order function
// Take one or more function an argrument
/* function multipleGreets(func, n) {
    for(let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreets(greet, 5); */


/* let odd = function(n) {
    console.log(n % 2 == 1);
    }
    
    odd(4); */
    
// ? Higher order function which return functions

/* function oddEvenTest(request) {
    if(request === "odd") {
        return function(n) {
            console.log(n % 2 == 1);
        }
    }
    else if(request === "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("Wrong request!");
    }
} */

// let func = oddEvenTest("even");

// console.log(func);

// func(10);


// ! Methods --> Action that can be performed on an object

/* const calculator = {
    
    add : function(a, b) {
        return a + b;
    },

    sub : function(a, b) {
        return a - b;
    },

    mul : function(a, b) {
        return a * b;
    } 
} */

const calculator = {

    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b;
    },

    mul(a, b) {
        return a * b;
    }
    
}

// let result = calculator.mul(2, 4);

// console.log(result);
