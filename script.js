const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
});
