// ! Async function

/* async function greet() {
//   throw "404 page not found";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result : " + result);
  })
  .catch((error) => {
    console.log(error);
  }); */





//! Await keyword

/* function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
} */


    

// ! Using async await concept to changeColor function
/* 
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if(num > 5) {
            reject("Promise rejected");
        }
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      resolve("color successfully changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("violet", 1000);
  await changeColor("indigo", 1000);
  await changeColor("blue", 1000);
  await changeColor("grey", 1000);
  await changeColor("yellow", 1000);
  await changeColor("orange", 1000);
  await changeColor("red", 1000);
} */




// ! Handling rejection with Await

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        if (num > 5) {
          reject("Promise rejected");
        }
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      resolve("color successfully changed");
    }, delay);
  });
}

async function demo() {
try {
    await changeColor("violet", 1000);
    await changeColor("indigo", 1000);
    await changeColor("blue", 1000);
    await changeColor("grey", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
    await changeColor("red", 1000);
} catch (error) {
    console.log("Error Caught..........");
    console.log(error);
}
  

  console.log(`\n****************** Other Work *********************`);

  let num = 5;
  console.log(`Number is ${num}`);
  console.log(`New number is ${num + 5}`);
}
