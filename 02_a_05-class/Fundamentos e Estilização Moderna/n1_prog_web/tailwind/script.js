const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

function updateEmptyMessage() {
  emptyMessage.classList.toggle("hidden", taskList.children.length > 0);
}

function createTaskItem(taskText) {
  const item = document.createElement("li");
  item.className = "flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2";

  const text = document.createElement("button");
  text.type = "button";
  text.textContent = taskText;
  text.className = "flex-1 text-left text-slate-700";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remover";
  removeBtn.className = "rounded-md bg-rose-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-rose-600";

  text.addEventListener("click", () => {
    const isCompleted = text.classList.toggle("line-through");
    text.classList.toggle("text-slate-400", isCompleted);
  });

  removeBtn.addEventListener("click", () => {
    item.remove();
    updateEmptyMessage();
  });

  item.append(text, removeBtn);
  return item;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) {
    return;
  }

  taskList.appendChild(createTaskItem(taskText));
  taskInput.value = "";
  taskInput.focus();
  updateEmptyMessage();
});

updateEmptyMessage();
