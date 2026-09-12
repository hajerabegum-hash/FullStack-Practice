let inputBox = document.querySelector("#input-box");
let addTaskButton = document.querySelector("#add-task-btn");
let taskContainer = document.querySelector("#task-container ");

addTaskButton.addEventListener("click", () => {
  const div = document.createElement("div");
  const newTaskInput = document.createElement("input");
  newTaskInput.classList.add("add-task-input");
  newTaskInput.readOnly = true;
  newTaskInput.value = inputBox.value;

  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";

  let isEdit = false;
  editbtn.addEventListener("click", () => {
    if (isEdit === false) {
      isEdit = true;
      newTaskInput.readOnly = false; // now, you can edit the newTaskInput
      newTaskInput.focus();
      editbtn.innerText = "Save";
    } else {
      isEdit = false;
      newTaskInput.readOnly = true;
      editbtn.innerText = "Edit Again";
    }
  });

  editbtn.addEventListener("click", () => {});

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.addEventListener("click", () => {
    deletebtn.parentElement.remove();
  });

  div.insertAdjacentElement("afterbegin", deletebtn);
  div.insertAdjacentElement("afterbegin", editbtn);
  div.insertAdjacentElement("afterbegin", newTaskInput);
  taskContainer.insertAdjacentElement("beforeend", div);
  inputBox.value = "";
});
