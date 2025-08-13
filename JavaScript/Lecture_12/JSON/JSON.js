/* const jsonRes =
  '{"fact":"Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.","length":100}';

const validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
console.log(typeof validRes);

const student = {
  name: "Radha",
  marks: 99,
};

const jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData); */

// ! API call

let url = "https://catfact.ninja/fact";
/* 
fetch(url)
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((error) => {
    console.log("Error - " + error);
  }); */

async function getFact() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.fact);
  } 
  catch (error) {
    console.log("error --> " + error);
  }
}
