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
const username = localStorage.getItem("username");
if (username) {
  const welcomecontainter = document.getElementById("welcome-container");
  const usernameDisplay = document.getElementById("usernameDisplay");
  usernameDisplay.textContent = username;
  welcomecontainter.style.display = "block";
  setTimeout(() => {
    welcomecontainter.style.display = "none";
  }, 3000);
}
