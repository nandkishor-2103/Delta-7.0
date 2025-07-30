// !<!-- ========== Start "this" keyword Section ========== -->

/* const student = {
    name : "Radha",
    age : 23,
    eng : 89,
    math: 90,
    phy : 98,

    getAverage() {
        return (this.eng + this.math + this.phy) / 3;
    }
}

function getAverage() {
    console.log(this);
} */

// !<!-- ========== End "this" keyword Section ========== -->

// ?<!-- ========== Start 'try catch block' Section ========== -->

/* try {
    console.log(a);
}
catch(error) {
    console.log(error);
} */

// ?<!-- ========== End 'try catch block' Section ========== -->

// !<!-- ========== Start Arrow function Section ========== -->

/* const sum = (a, b) => {
    return a + b;
}

console.log(`Sum of two number is ${sum(3, 5)}`); */

/* const mul = (a, b) => a * b;

console.log(mul(2, 4)); */

// !<!-- ========== End Arrow function Section ========== -->

// ? setTimeout(function, timeout);

/* console.log("Hi there!");

setTimeout(() => {
    console.log("Apna college");
}, 4000);

console.log("Welcome to "); */

// ! setInterval(function, timeout);

/* let id = setInterval( () => {
    console.log("Radha");
}, 2000);


clearInterval(id); */

// ? this With Arrow function

/* const student = {
    name : "Radha",
    marks : 99,
    prop : this, // global --> redirect to windows

    // Normal function
    getName : function() {
        console.log(this); // own scope
        return this.name;
    },


    // Arrow function
    getMarks : () => {
        console.log(this); // parent's scope
        return this.marks;
    }
} */

// !<!-- ========== Start Practice Questions Section ========== -->

// Q1. Write an arrow function that calculate square of a number?

/* const square = (n) => {
    return n * n;
} */


//? Q2. Write a function to print 5 times helloworld at the interval of 2 sec ?

let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000)

// !<!-- ========== End Practice Questions Section ========== -->
