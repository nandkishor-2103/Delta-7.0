/* let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of images ${i} is changed.`);
} */


// let ptag = document.getElementsByTagName("p")[0];

// ptag.innerText = "Radha";



// ! Query Selector

/* console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg")); */

// console.dir(document.querySelectorAll("div a"));


// let links = document.querySelectorAll(".box a");

/* for(let i = 0; i < links.length; i++) {
    links[i].style.color = "yellow";
} */

/* for(ele of links) {
    ele.style.color = "purple";
    ele.style.fontWeight = "800"; // both style set into inline style
} */


//! Practice Questtions

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").prepend(para1);

para1.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "I am a blue h3!";
document.querySelector("body").prepend(heading);

heading.classList.add("blue");


let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a DIV";
para2.innerText = "MEE TOO!";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").prepend(div);