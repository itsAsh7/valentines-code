const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

 // Fade out hero
  document.querySelector(".hero").style.transition = "opacity 0.8s ease";
  document.querySelector(".hero").style.opacity = "0";

  // Scroll after short delay
  setTimeout(() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }, 600);

});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heartsContainer = document.querySelector(".hearts-container");
  if (!heartsContainer) {
    return;
  }

  const heart = document.createElement("div");
  heart.classList.add("heart");

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // random size
  const size = Math.random() * 20 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // random animation duration
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  heartsContainer.appendChild(heart);

  // remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}


