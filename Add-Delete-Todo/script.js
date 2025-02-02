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
    let li = document.createElement("li");
    li.textContent = index + 1 + ". " + task;
    taskList.appendChild(li);
  });
  const TotalTaskData = JSON.stringify(TaskArray);
  localStorage.setItem("TaskData", TotalTaskData);
};

const btn = document.getElementById("btn");
btn.addEventListener("click", AppendTask);
