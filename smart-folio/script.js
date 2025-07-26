console.log("Smartfolio JS Loaded Successfully!");

document.getElementById("helloBtn").addEventListener("click", function () {
  alert("Hello from Chanakya's Smartfolio! 👋");
});

document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.documentElement.style.setProperty('--dark-bg', '#ffffff');
    document.documentElement.style.setProperty('--text-light', '#000000');
    document.documentElement.style.setProperty('--card-bg', '#f5f5f5');
  } else {
    document.documentElement.style.setProperty('--dark-bg', '#121212');
    document.documentElement.style.setProperty('--text-light', '#ffffff');
    document.documentElement.style.setProperty('--card-bg', '#1e1e1e');
  }
});
