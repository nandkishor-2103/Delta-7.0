/* let btn = document.querySelector("button");

const mouseOut = function() {
    // btn.style.backgroundColor = "green";
    // btn.textContent = "Mouse left me!";
    btn.style.transform = "scale(1)";
}

const mouseOver = function() {
    // btn.style.backgroundColor = "blue";
    // btn.textContent = "Mouse is over me!";
    btn.style.transform = "scale(1.5)";
}

btn.addEventListener("mouseover", mouseOver);

btn.addEventListener("mouseout", mouseOut);
 */

/* let inp = document.querySelector("input");

inp.addEventListener("keypress", function () {
    console.log("key pressed!");
}); */


/* let div = document.querySelector("#scroll-box");

div.addEventListener("scroll", (event) => {
    console.log("Scroll event fired!");
}); */

/* window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
}); */


// ! Q2.

/* let btn = document.createElement("button");
btn.innerText = "Submit";
document.body.append(btn);

btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "green";
}); */


// !Q3.

let heading = document.createElement("h2");
heading.style.color = "#fff";
document.body.append(heading);

let inp = document.createElement("input");
inp.setAttribute("placeholder", "Enter you name");
document.body.append(inp);

inp.addEventListener("input",  function() {
    let filtered = this.value.replace(/[^a-zA-Z ]/g, "");
    this.value = filtered;
    heading.textContent = filtered;
});