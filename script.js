document.addEventListener("DOMContentLoaded", () => {

  const beginBtn = document.getElementById("beginBtn");
  const heartsContainer = document.querySelector(".hearts-container");

  if (!beginBtn || !heartsContainer) return;

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 20 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  beginBtn.addEventListener("click", () => {

    // Heart burst
    for (let i = 0; i < 25; i++) {
      setTimeout(() => createHeart(), i * 100);
    }

    // Smooth scroll only (no hero fade)
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"

      const reveals = document.querySelectorAll(".reveal");

setTimeout(() => {
  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, index * 300);
  });
}, 200);

    });

  });

});
