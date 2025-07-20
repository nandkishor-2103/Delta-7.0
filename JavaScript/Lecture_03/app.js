
// ! trim method
/* let name = "      Radha       ";
console.log(name.trim());

let fullName = prompt("Enter you full name : ");
console.log("Your full name before trim is : ", fullName);
console.log("Your full name after trim is : ", fullName.trim()); */


// ! toLowerCase(), toUpperCase()

/* let fullName = "Radha";
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase()); */


//! indexOf()
/* let position = "Web Developer";
console.log(position.indexOf("Radha")); */ // not found and return -1


//! method chaining
/* let msg = "   hello     ";
let newmsg = msg.trim().toUpperCase();
console.log(newmsg );*/


//! slice()
/* let msg = "apnacollege";
console.log(msg.slice(0, 4));
console.log(msg.slice(4));
console.log(msg.slice(-5)); */ // length-5 = 11 - 5 = 6



//! replace()
/* let str = "ILoveCoding";
console.log(str);
let newStr = str.replace("Love", "do");
console.log(newStr);
console.log(str.replace("ov", "ik")); */


// ! repeat();
/* let str = "Radha ";
console.log(str.repeat(5)); */



//! Practice Questions

// Q1.
/* let str = "radha";
console.log(str.trim().toUpperCase()); */

//Q2.
/* let str = "apnaCollege";
console.log(str.slice(4, 9));
console.log(str.indexOf("na"));
console.log(str.replace("apna", "Our")); */



// Q3. 
/* let str = "apnaCollege";
console.log(str.slice(4));
console.log(str.replace("l", "t")); */



//? ****************************** Arrays Data Structure******************************** 


/* let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr); */

// let mixedArray = ["Radha", "Krishn", 1, 2, 3.14, 2.25];
// console.log(mixedArray);
// console.log("Length of an array is : ",mixedArray.length);


//? Arrays Method

/* let arr = [1,2,3,4,5];
console.log(arr);

// push()
arr.push(6);
console.log(arr);
console.log(arr.pop());

// unshift()
arr.unshift(0);
console.log(arr);

// shift()
console.log(arr.shift());
console.log(arr); */


// let arr = [7, 9, 0, -2];
// let n = 3;

// let ans = arr.slice(0, n);
// console.log(ans);

// let ans = arr.slice(arr.length - n);
// console.log(ans);


/* let str = "Radha";

if(str.length == 0) {
    console.log("String is empty!");
}
else{
    console.log("String is not empty!");
} */


/* let str = "Radha";
let idx = 3;

if(str[idx] == str[idx].toLocaleLowerCase()) {
    console.log("Character is lower case!");
}
else {
    console.log("Character is not in lower case!");
} */

/* 
let str = "     Radha     ";
console.log(`Orignal string ${str}`);
console.log(`After trim, string is ${str.trim()}`); */


let arr = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(arr.includes(6));