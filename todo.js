//  created div dynamically and inserted inside DOM
let divEl = document.createElement("div");
divEl.setAttribute("id", "container");
document.body.appendChild(divEl);
console.log(divEl);

// created h1 dynamically inside parent div
let firstHeading = document.createElement("h1");
firstHeading.innerHTML = "My Pure Dynamic Todo";
console.log(firstHeading);
let parentEl = document.getElementById("container");
parentEl.appendChild(firstHeading);

// Dynamic UL
let listUl = document.createElement("ul");
listUl.setAttribute("id", "list");
parentEl.appendChild(listUl);
// console.log(listUl);
let i = 0;
// created dynamic list and appended with onCLick function
let listLi = document.createElement("li");
listLi.setAttribute("id", `listItem${i}`);

// listLi.innerHTML = "Todo Task 1";
// let parentList = document.getElementById("list");
// parentList.appendChild(listLi);

// Dynamic input element
let inputText = document.createElement("input");
let inputVal = inputText.value;
// inputText.setAttribute("value", "text");
inputText.setAttribute("id", "text");
parentEl.appendChild(inputText);
console.log(inputText);

//  Dynamic button

let addBtn = document.createElement("button");
addBtn.setAttribute("onclick", "addTodo()");
addBtn.innerHTML = "Add Todo";
parentEl.appendChild(addBtn);

function addTodo() {
  let newListItem = document.createElement("li");
  newListItem.setAttribute("id", `listItem${i}`);
  newListItem.innerHTML =
    inputText.value +
    `<button onclick = 'deleteTodo("listItem${i}")'> Delete Task </button>`;
  document.getElementById("list").appendChild(newListItem);
  i++;
  inputText.value = "";
}

function deleteTodo(task) {
  let deleteEl = document.getElementById(task);
  deleteEl.parentNode.removeChild(deleteEl);
}
