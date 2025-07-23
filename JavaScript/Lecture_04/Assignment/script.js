// ! Assigenment Questions
// Q1.

/* let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
        arr.splice(i, 1);
    }
}

console.log(arr); */


// Q2.
/* let num = 2345678;
let originalNum = num;
let digitCount = 0;

while(num > 0) {
    digitCount++;
    num = Math.floor(num/10)
}

console.log(`Number of digit in ${originalNum} is ${digitCount}`); */


// Q3.
/* let num = 12345;
let sum = 0;

while(num) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num/10);
}

console.log("Sum of the digit of number is : ", sum); */


// Q4.

/* function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

let n = 5;
console.log(`Factorial of ${n} = ${factorial(n)}`); */


// Q5

let nums = [2, 5, 1, 3, 7, 8, 3, 9, 4, 6, 10];
let largest = nums[0];

for(val of nums) {
    largest = Math.max(largest, val);
}

console.log(`Largest number in nums array is : ${largest}`);