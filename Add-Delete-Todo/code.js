const TaskArray = JSON.parse(localStorage.getItem("TaskData")) || [];

const AppendTask = () => {
  let TaskInput = document.getElementById("input").value;
  if (TaskInput.trim() === "") {
    return alert("Task cannot be empty");
  }

  TaskArray.push(TaskInput);
  document.getElementById("input").value = "";
  RenderTasks();
  localStorage.setItem("TaskData", JSON.stringify(TaskArray));
};

const RenderTasks = () => {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing tasks before re-rendering

  TaskArray.forEach((task, index) => {
    let TaskDiv = document.createElement("div");
    TaskDiv.classList.add("task-row");

    let TaskContentDiv = document.createElement("div");
    TaskContentDiv.classList.add("task-content");
    TaskContentDiv.textContent = task;

    let IconDiv = document.createElement("div");
    IconDiv.classList.add("icon-div");

    // Create Edit Icon
    let EditIcon = document.createElement("i");
    EditIcon.classList.add("fa", "fa-edit");
    EditIcon.style.cursor = "pointer";
    EditIcon.style.marginRight = "10px";
    EditIcon.addEventListener("click", () => HandleEdit(index));

    // Create Delete Icon
    let DeleteIcon = document.createElement("i");
    DeleteIcon.classList.add("fa", "fa-trash");
    DeleteIcon.style.cursor = "pointer";
    DeleteIcon.addEventListener("click", () => HandleDelete(index));

    // Append icons to the container
    IconDiv.appendChild(EditIcon);
    IconDiv.appendChild(DeleteIcon);

    // Append elements to the task row
    TaskDiv.appendChild(TaskContentDiv);
    TaskDiv.appendChild(IconDiv);
    taskList.appendChild(TaskDiv);
  });
};

// Edit Task
const HandleEdit = (index) => {
  let newTask = prompt("Edit your task:", TaskArray[index]);
  if (newTask !== null && newTask.trim() !== "") {
    TaskArray[index] = newTask;
    RenderTasks();
    localStorage.setItem("TaskData", JSON.stringify(TaskArray));
  }
};

// Delete Task
const HandleDelete = (index) => {
  TaskArray.splice(index, 1);
  RenderTasks();
  localStorage.setItem("TaskData", JSON.stringify(TaskArray));
};

document.getElementById("btn").addEventListener("click", AppendTask);
RenderTasks(); // Load existing tasks on page load
