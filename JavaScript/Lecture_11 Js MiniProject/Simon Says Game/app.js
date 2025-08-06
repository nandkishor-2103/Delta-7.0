let gameSeq = [];
let userSeq = [];

let btns = ["pink", "green", "orange", "blue"];

let started = false;
let level = 0;
let highestLevel = localStorage.getItem("highestLevel") || 0;
document.addEventListener("DOMContentLoaded", function() {
document.querySelector("#highestLevel").innerText = `Highest Level : ${highestLevel}`;
});

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started === false) {
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200);
}
  

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level - ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function isUserEnteredColorMatched(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1200)
        }
    }
    else{
        gameOverSound();
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        resetGame();
    }
}

function buttonPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    isUserEnteredColorMatched(userSeq.length - 1);
}

let allButtons = document.querySelectorAll(".btn");
for(button of allButtons) {
    button.addEventListener("click", buttonPress);
}

function resetGame() {
    if(level > highestLevel) {
        highestLevel = level;
        localStorage.setItem("highestLevel", highestLevel); // save to local storage
        document.querySelector("#highestLevel").innerText = `Highest Level : ${highestLevel}`;
    }

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function gameOverSound() {
    const audio = new Audio('./game-over-31-179699.mp3');
    audio.play();
}
