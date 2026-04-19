const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskLabel = document.createElement("span");
  taskLabel.className = "task-text";
  taskLabel.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-btn";
  removeButton.textContent = "Remover";

  taskLabel.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  removeButton.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.append(taskLabel, removeButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskInput.focus();
});
