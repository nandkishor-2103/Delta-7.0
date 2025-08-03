//! Generate random color

/* function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
}); */

// ! Change background color after click

/* let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "#6495ed";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor); */

// ! Keyboard event listner
/* let inp = document.querySelector("input");
inp.addEventListener("keydown", function() {
    console.log("Keyboard Pressed");
}) */

/* let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.dir(form);
  let username = form.elements[0];
  let password = form.elements[1];
  console.log("Username : " + username.value);
  console.log("Password : " + password.value);
  alert(`Hi ${username.value}, your password is ${password.value}`);
});
 */

let textArea = document.querySelector("#text");
let p = document.querySelector("p");

textArea.addEventListener("input", function () {
  // console.log(textArea.value);
  p.innerText = textArea.value;
});
