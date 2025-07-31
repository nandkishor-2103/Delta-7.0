// Q1.

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



// Q2.

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


// Q3.

let btn = document.querySelector("#btn");
btn.classList.add("buttonStyle");

// Q4.

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1");
document.querySelector("body").append(h1);


// Q5.
let p = document.createElement("p");
p.innerHTML = "Apna college <strong>Delta</strong> Practice";
document.querySelector("body").append(p);