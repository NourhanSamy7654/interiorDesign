let darks = document.getElementById("darks");
darks.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const username = sessionStorage.getItem("username");
if (username) {
  const welcomeContainer = document.getElementById("welcome-container");
  const usernameDisplay = document.getElementById("usernameDisplay");

  if (welcomeContainer && usernameDisplay) {
    usernameDisplay.textContent = username;
    welcomeContainer.style.display = "block";

    setTimeout(() => {
      welcomeContainer.style.display = "none";
    }, 500);
  } else {
    console.error(
      "Elements with IDs 'welcome-container' or 'usernameDisplay' are missing."
    );
  }
}
