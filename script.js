// Create balloons background
function createBalloons() {
  const colors = ["#ff6b6b", "#4ecdc4", "#ffbe76", "#a55eea", "#45aaf2"];
  const balloonsContainer = document.getElementById("balloons");

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.width = Math.random() * 100 + 50 + "px";
    balloon.style.height = balloon.style.width;
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = Math.random() * 10 + 10 + "s";
    balloon.style.animationDelay = Math.random() * 5 + "s";
    balloonsContainer.appendChild(balloon);
  }
}

// Music control
const audio = document.getElementById("birthdayAudio");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    musicBtn.innerHTML = "🔊";
  } else {
    audio.pause();
    musicBtn.innerHTML = "🎵";
  }
});

// Auto-changing wishes with transition
function rotateWishes() {
  const wishes = document.querySelectorAll(".wish");
  let current = 0;

  // Show first wish immediately
  wishes[current].classList.add("active");

  // Rotate wishes every 5 seconds
  setInterval(() => {
    wishes[current].classList.remove("active");
    current = (current + 1) % wishes.length;
    wishes[current].classList.add("active");
  }, 5000);
}

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  createBalloons();
  rotateWishes();

  // Try to autoplay music after user interaction
  document.body.addEventListener(
    "click",
    function () {
      audio.play().catch((e) => console.log("Audio play failed"));
    },
    { once: true }
  );
});
