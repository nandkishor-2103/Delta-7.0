// ! Loops in Java

/* for(let i = 0; i < 5; i++) {
    console.log(i+1);
} */

// ! Print all odd numbers

/* for(let i = 1; i <= 15; i+=2) {
    console.log(i);
} */

//! Print all even number
/* for(let i = 2; i <= 10; i += 2) {
    console.log(i);
} */

// ! Print table of 5
/* for(let i = 1; i <= 10; i++) {
    console.log(`${5*i}`);
} */

//! Favourite movies guess
/* let favouriteMovies = "RadhaKrishn";
let guess = prompt("Guess the movie : ");

while ((guess.toLocaleLowerCase() != favouriteMovies.toLocaleLowerCase()) && (guess.toLocaleLowerCase() != "quit")) {

  console.log("Wrong guess!");
  guess = prompt("Please guess again : ");
}

if (guess.toLocaleLowerCase() != "quit") {
  console.log(`You gussed correct movies that is ${favouriteMovies}.`);
}
else {
    console.log(`You ${guess} the game.`);
} */



// ! for of loops

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(val of arr) {
    console.log(val);
} */

// ! Nested for of loops

let nums = [[1, 2, 3, 4], [5, 6, 7, 8]];

for(list of nums) {
    for(val of list) {
        console.log(val);
    }
    console.log("\n");
}
