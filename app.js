let i = 0;
function taskList() {
  let inputEl = document.querySelector("input");
  let inputVl = inputEl.value;
  let addTask = document.createElement("li");
  addTask.setAttribute("id", i);
  //   i = i + 1;  /* added id +1 causess deletion of next list */
  console.log(addTask);
  addTask.innerHTML =
    inputVl + `<button onclick="deleteTask(${i})">Delete Task</button>`;
  let parentUl = document.getElementById("task-list");
  parentUl.appendChild(addTask);
  i++; /* used to increment the id */
}

// function deleteTask(index) {
//   let deleteEl = document.getElementById(index);
//   deleteEl.parentNode.removeChild(deleteEl);
//   console.log(deleteEl);
// }
function deleteTask(taskId) {
  let deleteEl = document.getElementById(taskId);

  // Check if the element exists
  if (deleteEl) {
    deleteEl.parentNode.removeChild(deleteEl);
  } else {
    console.error(`Task with ID ${taskId} not found.`);
  }
}
