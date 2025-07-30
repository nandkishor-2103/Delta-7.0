// ! Q1.
/* 
const arrayAverage = (arr) => {

    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

let arr = [5, 6, 4, 6, 3];

console.log("Average = " + arrayAverage(arr));
 */


//! Q2.

/* const isEven = (n) => {
    if(n % 2 === 0) return "even";
    else return "odd";
}

let n = 42;

console.log(n + " is " + isEven(n)); */


// ! Q3.

/* const object = {
    message : "Hello World!",

    logMessage() {
        console.log(this.message);
    }
}

setTimeout(object.logMessage(), 1000); */ // Output --> Hello World
        //  (undefined, 1000);
// ! Q4.

let length = 4;

function callback() {
    console.log(this.length);
}

callback();

const object = {
    length : 5,

    method(callback) {
        callback();
    }
};

object.method(callback, 1, 2);  // Output --> 0, 0 (in browser), but in nodejs --> undefined, undefined
