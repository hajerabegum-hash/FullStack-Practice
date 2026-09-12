// let input = document.querySelector("#input-box");
// let addTodoBtn = document.querySelector("#add-todo-btn");

// function deletefn() {
//   console.log("delete button clicked");
// }
// let counter = 0;

// addTodoBtn.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.setAttribute("id", counter);
//   counter++;
//   const newParaTag = document.createElement("p");
//   newParaTag.innerHTML = input.value;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "Delete";
//   deleteBtn.setAttribute("onclick", "deleteFn()");

//   const editBtn = document.createElement("button");
//   editBtn.innerText = "Edit";

//   div.insertAdjacentElement("afterbegin", editBtn);
//   div.insertAdjacentElement("afterbegin", deleteBtn);
//   div.insertAdjacentElement("afterbegin", newParaTag);

//   addTodoBtn.insertAdjacentElement("afterend", div);

//   input.value = "";
// });

// const box = document.querySelector("#box");
// const para = document.querySelector("#para");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   box.backgroundColor = `rgb(${red} ,${green}, ${blue})`;
//   para.innerText = `rgb(${red} ,${green}, ${blue})`;
// });

//generating random color activity

// const box = document.querySelector("#box2");
// const para = document.querySelector("#para");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   const red = Math.floor(Math.random() * 256); // 0-255
//   const green = Math.floor(Math.random() * 256); // 0-255
//   const blue = Math.floor(Math.random() * 256); // 0-255

//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // "rgb(233, 234, 9)"
//   para.innerText = `rgb(${red}, ${green}, ${blue})`;
// });

//multiple color boxes:

const box = document.querySelector(".box2");
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256); // 0-255
  const green = Math.floor(Math.random() * 256); // 0-255
  const blue = Math.floor(Math.random() * 256); // 0-255

  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // "rgb(233, 234, 9)"
  para.innerText = `rgb(${red}, ${green}, ${blue})`;
});
