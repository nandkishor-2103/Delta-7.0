//! Template literals

// console.log(`The sum of two number is : ${5 + 7}`);

//! Practice Questions

// let color = "green";
// if(color == "red") {
//     console.log("Stop!");
// }
// if(color == "yellow") {
//     console.log("Slow Down!");
// }
// if(color == "green") {
//     console.log("Go");
// }

/* let str = "liverage";

if ((str[0] === 'a') && str.length > 3) {
    console.log("good string");
}
else{
    console.log("not a good string");
} */

// Q1.
/* let num = 13;
if(num % 10 === 0) {
    console.log("good");
}
else{
    console.log("bad");
} */

// Q2.
/* let fullName = prompt("Enter you name : ");
let age = prompt("Enter your age : ");
alert(`${fullName} is ${age} year old.`); */

// Q3.
/* let quarter = 5;
switch (quarter) {
    case 1:
        console.log("January, Ferbuary, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;

    default:
        console.log("You entered invalid quarter!");
        break;
} */

// Q4.
/* let str = "apple bag";
if((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log("Golden string!");
}
else{
    console.log("Not a golden string!");
} */

// Q5.
/* let num1 = 10;
let num2 = 1;
let num3 = 1;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Num1 is greater!");
  } 
  else {
    console.log("Num3 is greater!");
  }
} 
else {
  if (num2 > num3) {
    console.log("Num 2 is greater");
  }
  else {
    console.log("Num3 is greater!");
  }
} */


// Q6.

let num1 = 30;
let num2 = 4360;

if((num1 % 10) === (num2 % 10)) {
    console.log("Number has the same last digit which is : ", (num1 % 10));
}
else {
    console.log("Numbwr don't have the same last digit!");
}
