console.log("Smartfolio JS Loaded Successfully!");

// Hello button alert
const helloButton = document.getElementById("helloBtn");
if (helloButton) {
  helloButton.addEventListener("click", () => {
    alert("👋 Hello from Chanakya's Smartfolio!\nFeel free to connect with me anytime.");
  });
}

const darkBtn = document.getElementById("darkModeBtn");
if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("smartfolio-theme", isDark ? "dark" : "light");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("smartfolio-theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
