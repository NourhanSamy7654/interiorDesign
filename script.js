let darks = document.getElementById("darks");
darks.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

/////////show user
// let setinter = setTimeout(function () {
//   const username = localStorage.getItem("username");

//   const usernameDisplay = document.getElementById("usernameDisplay");
//   usernameDisplay.textContent = username ? username : "Guest";
// }, 1000);
// setTimeout(() => {
//   const usernameDisplay = document.getElementById("usernameDisplay");
//   usernameDisplay.style.display = "none";

//   clearInterval(setinter);
//   alert("clear succes!");
// }, 2000);
const username = sessionStorage.getItem("username");
if (username) {
  // Ensure these elements exist in the DOM
  const welcomeContainer = document.getElementById("welcome-container");
  const usernameDisplay = document.getElementById("usernameDisplay");

  if (welcomeContainer && usernameDisplay) {
    usernameDisplay.textContent = username; // Display the username
    welcomeContainer.style.display = "block"; // Show the container

    // Hide the container after 5 seconds
    setTimeout(() => {
      welcomeContainer.style.display = "none";
    }, 5000);
  } else {
    console.error("Elements with IDs 'welcome-container' or 'usernameDisplay' are missing.");
  }
}

