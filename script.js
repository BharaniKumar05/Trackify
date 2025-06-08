document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addTaskForm");
  const taskList = document.getElementById("taskList");
  const confirmation = document.getElementById("confirmationMsg");

  // Add Task Logic
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskName = document.getElementById("taskInput").value.trim();
      const dueDate = document.getElementById("dueDate").value;

      if (taskName && dueDate) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ name: taskName, due: dueDate });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        confirmation.textContent = `✅ Task "${taskName}" due on "${dueDate}" added successfully!`;
        form.reset();

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 2000);
      }
    });
  }

  // Display Task List
  if (taskList) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = `${task.name} (Due: ${task.due})`;
      taskList.appendChild(li);
    });
  }
});
