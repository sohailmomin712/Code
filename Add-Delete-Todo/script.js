const TaskArray = JSON.parse(localStorage.getItem("TaskData")) || [];

const AppendTask = () => {
  let TaskInput = document.getElementById("input").value;

  TaskArray.push(TaskInput);
  document.getElementById("input").value = "";

  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  TaskArray.forEach((task, index) => {
    let TaskDiv = document.createElement("div");
    TaskDiv.classList.add("task-row");

    let TaskContentDiv = document.createElement("div");
    TaskContentDiv.textContent = task;
    TaskContentDiv.classList.add("task-content");

    let IconDiv = document.createElement("div");
    IconDiv.classList.add("icon-div");

    let EditIcon = document.createElement("i");
    EditIcon.classList.add("fa-sharp", "fa-solid", "fa-pen");
    EditIcon.style.cursor = "pointer";

    let DeleteIcon = document.createElement("i");
    DeleteIcon.classList.add("fa-regular", "fa-trash-can");
    DeleteIcon.style.cursor = "pointer";

    DeleteIcon.addEventListener("click", () => HandleDelete(index));

    IconDiv.appendChild(EditIcon);
    IconDiv.appendChild(DeleteIcon);

    TaskContentDiv.appendChild(IconDiv);
    TaskDiv.appendChild(TaskContentDiv);
    taskList.appendChild(TaskDiv);
  });

  localStorage.setItem("TaskData", JSON.stringify(TaskArray));
};

const btn = document.getElementById("btn");
btn.addEventListener("click", AppendTask);

const HandleDelete = (index) => {
  TaskArray.splice(index, 1); // Remove task from array
  AppendTask(); // Re-render tasks after deletion
  localStorage.setItem("TaskData", JSON.stringify(TaskArray)); // Update localStorage
};

