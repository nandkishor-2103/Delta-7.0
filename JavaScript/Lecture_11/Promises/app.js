//! Asynchronous function

function savetoDB(data, success, failure) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weake connection");
    }
  });
}

/* let request = savetoDB("apna college"); // request --> promise object
request.then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promise was rejected");
}) */

savetoDB("apna college")
  .then((result) => {
    console.log("result : " + result);
    console.log("data1 saved");
    return savetoDB("hello world");
  })
  .then((result) => {
    console.log("result : " + result);
    console.log("data2 saved");
    return savetoDB("Radha");
  })
  .then((result) => {
    console.log("result : " + result);
    console.log("data3 saved");
  })
  .catch((error) => {
    console.log("error : " + error);
    console.log("promise was rejected");
  });
