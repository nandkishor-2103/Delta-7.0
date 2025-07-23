let todo = [];

let query = prompt("Enter your query : ");

while (true) {
  if (query == "list") {
    if (todo.length == 0) {
      console.log("No tasks available.");
    } 
    else {
      console.log("\nYour Tasks:");
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i}. ${todo[i]}`);
      }
    }
  } 
  else if (query == "add") {
    let task = prompt("Please enter your task :");
    todo.push(task);
    console.log("Task added!");
  } 
  else if (query == "delete") {
    let idx = parseInt(prompt("Please enter the task index you want to delete :"));
    if (todo.length == 0) {
      console.log("No tasks available to delete.");
    } 
    else if (idx < 0 || idx > todo.length) {
        let chance = 0;
        while (query != "quit") {
            chance++;
            console.log("Invalid task index.");
            idx = parseInt(prompt("Please enter the valid index: "));
            if (chance > 3) {
                query = prompt("Want to quit the app: write quit");
                chance = 0;
            } 
            else if (idx >= 0 && idx < todo.length) {
                break;
            }
        }
        console.log("Exiting To-Do App. Goodbye!");
        break;
    } 

    else if (idx >= 0 && idx <= todo.length) {
      todo.splice(idx, 1);
      console.log("Task deleted.");
    }
  }

  if (query == "quit") {
    console.log("Exiting To-Do App. Goodbye!");
    break;
  }

  query = prompt("Enter your query : ");
}
