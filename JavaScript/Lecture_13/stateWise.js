// ! Statewise Search

/* name: "Indian Institute of Science"
state-province: "Karnataka" */

async function getUniversities(state) {
  try {
    let response = await axios.get(url + encodeURIComponent(state));
    return response.data;
  } catch (error) {
    console.log("Error = " + error);
    return [];
  }
}

function showColleges(collegesArray) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (let ele of collegesArray) {
    console.log(ele.name);

    let li = document.createElement("li");
    li.innerText = ele.name;

    list.appendChild(li);
  }
}

let url = "http://universities.hipolabs.com/search?country=India&name=";


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;

  let collgesArray = await getUniversities(state);
  console.log(collgesArray);

  showColleges(collgesArray);
});