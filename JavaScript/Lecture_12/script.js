//! Callback Hell

let h1 = document.querySelector("h1");


function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      if (internetSpeed > 4) {
        h1.style.color = color;
        resolve("color successfully changed");
      } 
      else {
        reject("weak connection, color not changed");
      }
    }, delay);
  });
}

//! Callback Hell
/* changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000);
  });
}); */

// ! Callback Hell converted into Promise
changeColor("red", 1000)
  .then((result) => {
    console.log("result : " + result);
    console.log("color changed to red");
    return changeColor("orange", 1000);
  })
  .then((result) => {
    console.log("result : " + result);
    console.log("color changed to orange");
    return changeColor("green", 1000);
  })
  .then((result) => {
    console.log("result : " + result);
    console.log("color changed to green");
  })
  .catch((error) => {
    console.log("404 error, something went wrong!");
    console.log("error : " + error);
  });

//! To tackel Calback Hell we uses Promises, async/ await concept.
/* function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}


//! Callback Hell
savetoDB(
  "Apna College",
  () => {
    console.log("success1: your data was saved");
    savetoDB(
      "Hello World",
      () => {
        console.log("success2: your data was saved");
        savetoDB(
          "Radha",
          () => {
            console.log("success3: your data was saved");
          },
          () => {
            console.log("failure3 :weaker connection! Data not saved");
          }
        );
      },
      () => {
        console.log("failure2 :weaker connection! Data not saved");
      }
    );
  },
  () => {
    console.log("failure1 :weaker connection! Data not saved");
  }
); */
