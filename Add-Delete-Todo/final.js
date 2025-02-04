const TaskArr = JSON.parse(localStorage.getItem("TaskData")) || [];

const AppendTask = () => {
    const inputElement = document.getElementById("taskInput");
    const inputVal = inputElement.value;

    if (inputVal.trim() !== "") {
        TaskArr.push(inputVal);
        RenderTasks();
    }

    inputElement.value = ""; // Clear the input field
};

const RenderTasks = () => {
    const TaskLists = document.getElementById("append-task-list");
    TaskLists.innerHTML = ""; //Clear previous tasks to prevent duplication

    TaskArr.forEach((task, index) => {
        const singleTask = document.createElement("p");
        singleTask.classList.add("single-task")
        singleTask.textContent = task;

        const SpanIcons = document.createElement("span");

        const EditIcon = document.createElement("i");
        EditIcon.classList.add("fa-sharp", "fa-solid", "fa-pen", "edit-icon");

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

const AddBtn = document.getElementById("btn");
AddBtn.addEventListener("click", AppendTask);

const HandleDelete = (index) => {
    // alert(index)
    TaskArr.splice(index,1)
    localStorage.setItem("TaskData", JSON.stringify(TaskArr));
    RenderTasks();
}