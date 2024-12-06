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

//
let inputText = document.createElement("input");
inputText.setAttribute("value", "text");
inputText.setAttribute("id", "text");
parentEl.appendChild(inputText);
console.log(inputText);

// Dynamic UL
let listUl = document.createElement("ul");
listUl.setAttribute("id", "list");
parentEl.appendChild(listUl);
// console.log(listUl);
let listLi = document.createElement("li");
listLi.setAttribute("id", "listItem");
listLi.innerHTML = "Todo Task 1";
let parentList = document.getElementById("list");
parentList.appendChild(listLi);
