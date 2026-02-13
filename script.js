document.addEventListener("DOMContentLoaded", () => {

  // 🔥 Reveal animation runs immediately
  const reveals = document.querySelectorAll(".reveal");

  setTimeout(() => {
    reveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 300);
    });
  }, 200);

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

    heart.style.animationDuration = (Math.random() * 3 + 6) + "s";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

 let heartInterval = null;

beginBtn.addEventListener("click", () => {

  if (heartInterval) return;

  // 💗 Start hearts
  heartInterval = setInterval(() => {
    createHeart();
  }, 300);

  // 🔽 Scroll
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

  // 💌 Trigger letter animation AFTER scroll
  setTimeout(() => {

    const letterBox = document.querySelector(".letter-box");
    const innerItems = document.querySelectorAll(".reveal-inner");

    if (letterBox) {
      letterBox.classList.add("active-box");

      setTimeout(() => {
        innerItems.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("active-inner");
          }, index * 200);
        });
      }, 200);
    }

  }, 700); // delay matches scroll timing

});

});
