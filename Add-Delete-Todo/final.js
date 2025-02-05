const TaskArr = JSON.parse(localStorage.getItem("TaskData")) || [];
const AddBtn = document.getElementById("btn");
const inputElement = document.getElementById("taskInput");
let editIndex = null;

const AppendTask = () => {
  const inputVal = inputElement.value.trim();

  if (inputVal === "") {
    alert("Task cannot be empty!");
    return;
  }

  if (editIndex !== null) {
    // If in edit mode, update the existing task
    TaskArr[editIndex] = inputVal;
    editIndex = null;
    AddBtn.textContent = "Add"; // Reset button text
  } else {
    // Otherwise, add a new task
    TaskArr.push(inputVal);
  }

  localStorage.setItem("TaskData", JSON.stringify(TaskArr)); // Save to localStorage
  inputElement.value = ""; // Clear input
  RenderTasks(); // Re-render the list
};

const RenderTasks = () => {
  const TaskLists = document.getElementById("append-task-list");
  TaskLists.innerHTML = ""; //Clear previous tasks to prevent duplication

  TaskArr.forEach((task, index) => {
    const singleTask = document.createElement("p");
    singleTask.classList.add("single-task");
    singleTask.textContent = task;

    const SpanIcons = document.createElement("span");

    const EditIcon = document.createElement("i");
    EditIcon.classList.add("fa", "fa-pen", "edit-icon");
    EditIcon.onclick = (event) => HandleEdit(event, singleTask, index);

    const DeleteIcon = document.createElement("i");
    DeleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-icon");
    DeleteIcon.onclick = () => HandleDelete(index);

    SpanIcons.appendChild(EditIcon);
    SpanIcons.appendChild(DeleteIcon);
    singleTask.appendChild(SpanIcons);

    TaskLists.appendChild(singleTask);

    localStorage.setItem("TaskData", JSON.stringify(TaskArr));
  });
};

AddBtn.addEventListener("click", AppendTask);

const HandleDelete = (index) => {
  // alert(index)
  TaskArr.splice(index, 1);
  localStorage.setItem("TaskData", JSON.stringify(TaskArr));
  RenderTasks();
};

const HandleEdit = (event, taskElement, index) => {
  event.stopPropagation(); // Prevent cursor from staying on the button

  inputElement.value = TaskArr[index]; // Load existing text into input
  inputElement.focus(); // Move cursor to input field

  AddBtn.textContent = "Save";
  editIndex = index; // Store the index of the task being edited
};

AddBtn.addEventListener("click", AppendTask);
RenderTasks(); // Load tasks on page load
