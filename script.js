// script.js

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const confirmationMsg = document.getElementById('confirmationMsg');
  const taskList = document.getElementById('taskList');

  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskName = document.getElementById('taskName').value;
      const dueDate = document.getElementById('dueDate').value;

      localStorage.setItem('taskName', taskName);
      localStorage.setItem('dueDate', dueDate);

      confirmationMsg.textContent = `✅ "${taskName}" added! Due: ${dueDate}`;
      taskForm.reset();
    });
  }

  if (taskList) {
    const taskName = localStorage.getItem('taskName');
    const dueDate = localStorage.getItem('dueDate');

    if (taskName && dueDate) {
      const li = document.createElement('li');
      li.textContent = `📌 ${taskName} - Due by ${dueDate}`;
      taskList.appendChild(li);
    }
  }
});
