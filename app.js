document.addEventListener("DOMContentLoaded", () => {
  const habitForm = document.getElementById("habitForm");
  const habitList = document.getElementById("habitList");

  if (habitForm) {
    habitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const habitInput = document.getElementById("habitInput");
      const newHabit = habitInput.value.trim();

      if (newHabit !== "") {
        const li = document.createElement("li");
        li.textContent = newHabit;
        habitList.appendChild(li);
        habitInput.value = "";
      }
    });
  }
});
