const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText == "") {
    alert("please enter a task");
    return;
  }

  //create new list
  const listItem = document.createElement("li");
  listItem.style.listStyle = "none";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.justifyContent = "space-between";
  listItem.style.padding = "0.5rem 0.8rem";
  listItem.style.marginBottom = "0.5rem";

  //create span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "#e74c3c"; // Red background
  deleteButton.style.border = "none";
  deleteButton.style.padding = "0.3rem 0.8rem";
  deleteButton.style.borderRadius = "0.5rem";
  deleteButton.style.marginLeft = "1rem";
  // Removed marginBottom from button, handled by listItem
  deleteButton.style.cursor = "pointer";

  //event listener: delete task
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  //Append taskitem and delete button to list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  //Append the list item to the task list
  taskList.appendChild(listItem);

  //clear input field
  taskInput.value = "";
});

function submitForm() {
  console.log("Form sunmitted:");

  let form = document.getElementById("form");

  let formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}
