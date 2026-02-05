const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    // Delete task
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}