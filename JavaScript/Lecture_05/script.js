// ! Object Literals

/* const item = {
    price: 987.94,
    discount: 50,
    colors: ["red", "pink"]
    }; 
*/

/* const post = {
    username: "@radha",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@kartikey", "@ganesh", "@balaram"]
    };
    
    
    console.log(post.content);
    console.log(post.tags[0]); 
*/

// ! **********************************************

/* const student = {
    name: "Radha",
    age: 21,
    marks: 98.94,
    city: "Vrindavan"
}; */

// 1. Update the value
/* student.name = "Valabh";
console.log(student); */

// 2. Add the properties inside object
/* student.gender = "female";
console.log(student); */

// 3. Change the value
/* student.marks = [89, 98, 90];
console.log(student); */

//  4. To delete any key
/* delete student.marks;
console.log(student); */

//!  ========== Start Objects of Objects Section ========== -->

/* const classInfo = {

    radha: {
        grade: "A+",
        city: "Barsana"
    },

    krishn: {
        grade: "A",
        city: "Vrindavan"
    },

    ganesh: {
        grade: "0",
        city: "Kailash"
    }
};

console.log(classInfo.radha.city); */

//!  ========== End Objects of Objects Section ========== -->

//? <!-- ========== Start Array of Objects Section ========== -->

/* const classInfo = [
  {
    name: "radha",
    grade: "A+",
    city: "Barsana",
  },

  {
    name: "krishn",
    grade: "A",
    city: "Vrindavan",
  },

  {
    name: "ganesh",
    grade: "0",
    city: "Kailash",
  },
];

console.log(classInfo[0].name); */

//? <!-- ========== End Array of Objects Section ========== -->

//! <!-- ========== Start Random number generate between specific range Section ========== -->

// let random = Math.floor((Math.random() * 100) + 1);

// let random = Math.floor((Math.random() * 5) + 1);

// console.log(random);

//! <!-- ========== End Random number generate between specific range Section ========== -->

//? <!-- ========== Start Guessing number game Section ========== -->

const maxNumber = prompt("Enter the maximum number: ");

let randomNumber = Math.floor((Math.random() * maxNumber) + 1);

let guess = prompt(`Guess the number between 1 to ${maxNumber}`);

while (true) {
  if (guess === "quit") {
    console.log("User Quit the game!");
    break;
  }

  if (guess == randomNumber) {
    console.log("Congratulation you guessed the correct number that is ", randomNumber);
    break;
  } 
  else if(guess < randomNumber) {
    guess = prompt("Your guess is too small. please try again!");
  }
  else {
    guess = prompt("Your guess is too large. please try again!");
  }
}

//? <!-- ========== End Guessing number game Section ========== -->
