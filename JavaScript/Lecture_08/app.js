//! Array Methods

//? forEach()

/* let arr = [1, 2, 3, 4, 5];


arr.forEach( (el) => {
    console.log(el);
});

arr.forEach(function(el) {
    console.log(el);
});
 */

/* let arr = [
    {
        name : "radha",
        marks : 99
    },

    {
        name : "Balaram",
        marks : 90
    },

    {
        name : "Krishn",
        marks : 95
    }
];

arr.forEach( (student) => {
    console.log(student.marks);
}); */



//?  map()

/* let student = [
  {
    name: "radha",
    marks: 99,
  },

  {
    name: "Balaram",
    marks: 90,
  },

  {
    name: "Krishn",
    marks: 95,
  },
];

let gpa = student.map((el) => {
    return el.marks / 10;
});
 */


//? filter()

/* let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let ans = nums.filter( (el) => {
    return el % 2 == 0; 
}); */



//? every()

/* let arr = [2, 4, 6];

let result = arr.every( (el) => {
    return el % 2 == 0;
});

console.log(result); */


//? some()

/* let arr = [2, 1, 3, 5, 7, 9];

let result = arr.some( (el) => {
    return el % 2 == 0;
});

console.log(result); */



//? reduce()

/* let nums = [1, 2, 3, 4, 5];

let finalValue = nums.reduce( (res, el) => {
    console.log(res);
    return res + el;
}); */

// ! Find the maximum using reduce method?

/* let nums = [1, 4, 2, 6, 9, 3, 7, 4, 7, 6, 0, 8];

let ans = nums.reduce( (max, el) => {
    
    if(el > max) {
        return el;
    }
    else {
        return max;
    }
});

console.log(ans);
 */


// ? Q1.

/* let arr = [10, 20, 30, 40, 50];

let ans = arr.every( (el) => {
    return el % 10 === 0;
});

console.log(ans); */

// ? Q2. 

/* let arr = [ 5, 6, 9, 1, -4, 3, 0, -8, 2, 5];

let ans = arr.reduce( (accum, el) => {
    if(el < accum) {
        return el;
    }
    else {
        return accum;
    }
});

console.log(ans); */


//? spread method

let arr = [1, 2, 4, 5,  6, 7, 8, 9];
/* let ans  = Math.min(...arr);
console.log(ans);
console.log(...arr);
console.log(..."apna college"); */



/* let newArr = [...arr];

const data = {
    email : "nandkishor@gmail.com",
    password : "learner@21Usha"
};

console.log(data); 

let dataCopy = {...data, id : 473};
console.log(dataCopy); */



// ? Rest

function sum(...theArgs) {
  let total = 0;
  let i = 0;
  for (args of theArgs) {
    console.log(theArgs[i]);
    total += args;
    i++;
  }
  console.log(theArgs); // now theArgs become an array, which collected all argruments and bundel it into na single array ([1, 2, 3, 4, 5])
  return total;
}


console.log(sum(1, 2, 3, 4, 5));


//? Destructuring

/* let names = ["Rahul", "Tejas", "Radha", "Balaram", "Krishn", "Madhav", "Parth"];
let [a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others); */


// ? Destructuring object
/* 
const student = {
    name : "Radha",
    age : 21,
    class : "12th",
    subjects : ["Hindi", "English", "OOPs", "CN", "OS", "DBMS"],
    username : "radha@21",
    password : "57357235"
}

// accessing with key
let {name, age, ...others} = student; 
console.log(name + " : " + age); 
console.log(others);
// accessing with variable
let {username: user, password: secret} = student;
console.log(user + " : " + secret);

// assign student to new property
let { city = "Mumbai" } = student;
console.log(city);

// assign student to new property and storing into some variable
let {city: place = "Pune"} = student
console.log(place); */















