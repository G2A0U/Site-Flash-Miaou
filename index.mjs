const light = document.querySelector(".light");
const overlay = document.querySelector(".overlay");

window.addEventListener("mousemove", (e) => {
  light.style.setProperty("--x", e.clientX + "px");
  light.style.setProperty("--y", e.clientY + "px");

  // Met à jour la position du cercle lumineux sur l'overlay
  overlay.style.setProperty("--x", e.clientX + "px");
  overlay.style.setProperty("--y", e.clientY + "px");
});
