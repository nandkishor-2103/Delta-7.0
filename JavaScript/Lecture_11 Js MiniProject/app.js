/* let outerDiv = document.querySelector("#outer-div");
let innerDiv = document.querySelector(".inner-div");
let button = document.querySelector("button");

outerDiv.addEventListener("click", function() {
    console.log("Outer div triggered!");
});

innerDiv.addEventListener("click", function(event) {
    event.stopPropagation()
    console.log("Inner div triggered!");
});

button.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Button clicked");
}); */

// ! Todo App

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.style.marginLeft = "5px";
  delBtn.classList.add("delete");

  li.appendChild(delBtn);

  input.value = "";
  ul.append(li);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
