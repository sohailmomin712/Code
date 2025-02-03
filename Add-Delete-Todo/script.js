const TaskArray = JSON.parse(localStorage.getItem("TaskData")) || [];

const AppendTask = () => {
  let TaskInput = document.getElementById("input").value;
  // console.log(TaskInput)
  if (TaskInput === "") {
    return alert("Task cannot be empty");
  }
  TaskArray.push(TaskInput);
  // console.log(TaskArray)
  document.getElementById("input").value = "";

  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  TaskArray.forEach((task, index) => {
    // console.log(task)
    // console.log(index)
    let TaskDiv = document.createElement("div"); //main div for task row//
    TaskDiv.classList.add("task-row"); //class for styling//
    
    let TaskContentDiv = document.createElement("div"); //inner div for single task//
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
    

    IconDiv.appendChild(EditIcon);
    IconDiv.appendChild(DeleteIcon);
    
 
    TaskContentDiv.appendChild(IconDiv);
    TaskDiv.appendChild(TaskContentDiv);
    

    taskList.appendChild(TaskDiv);
    
  });
  const TotalTaskData = JSON.stringify(TaskArray);
  localStorage.setItem("TaskData", TotalTaskData);
};

const btn = document.getElementById("btn");
btn.addEventListener("click", AppendTask);
