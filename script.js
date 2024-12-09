// Select the game iframe and fullscreen button
const gameFrame = document.getElementById("gameFrame");
const fullscreenButton = document.getElementById("fullscreenButton");

// Function to toggle fullscreen
fullscreenButton.addEventListener("click", () => {
  if (gameFrame.requestFullscreen) {
    gameFrame.requestFullscreen(); // Standard Fullscreen API
  } else if (gameFrame.webkitRequestFullscreen) {
    gameFrame.webkitRequestFullscreen(); // For Safari
  } else if (gameFrame.msRequestFullscreen) {
    gameFrame.msRequestFullscreen(); // For IE/Edge
  } else {
    alert("Fullscreen is not supported in this browser.");
  }
});
