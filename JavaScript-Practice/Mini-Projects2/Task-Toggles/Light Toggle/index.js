const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  // Toggles the "dark-mode" class on the document body
  document.body.classList.toggle("dark-mode");

  // Update button text based on state
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "Turn Light On";
  } else {
    button.textContent = "Turn Light Off";
  }
});
