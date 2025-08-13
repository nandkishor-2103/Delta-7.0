/* let url = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } 
  catch (error) {
    console.log(`Error: ${error}`);
    return "No fact found";
  }
}

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFact();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
}); */

// ! To pass headers in axios

/* const url = "https://official-joke-api.appspot.com/random_joke";

async function getJokes() {
  try {
    const config = {headers : {Accept : "application/json"}};
    let response = await axios.get(url, config);
    console.log(response.data);
    // return response.data.fact;
  } catch (error) {
    console.log(`Error: ${error}`);
    return "No fact found";
  }
} */

//! Updating query string

async function getUniversities(country) {
  try {
    let response = await axios.get(url + country);
    return response.data;
  } catch (error) {
    console.log("Error = " + error);
    return [];
  }
}

function showColleges(collegesArray) {

  let list = document.querySelector("#list");
  list.innerText = "";
  for (ele of collegesArray) {
    console.log(ele.name);

    let li = document.createElement("li");
    li.innerText = ele.name;
    
    list.appendChild(li);

  }
}

let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;

  let collgesArray = await getUniversities(country);
  console.log(collgesArray);

  showColleges(collgesArray);
});
