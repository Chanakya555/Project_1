console.log("Smartfolio JS Loaded Successfully!");

const helloButton = document.getElementById("helloBtn");
helloButton.addEventListener("click", function() {
    alert("Hello from Chanakya's Smartfolio! Feel free to connect.");
});

const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
