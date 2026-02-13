const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

  // Create hearts burst
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 100);
  }

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
