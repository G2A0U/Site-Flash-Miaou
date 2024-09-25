// Sélectionne les éléments importants
const video = document.getElementById('myVideo');
const unmuteNotice = document.getElementById('unmuteNotice');
const light = document.querySelector('.light');
const overlay = document.querySelector('.overlay');

// Fonction pour démarrer la vidéo et activer le son après un clic
const startVideoWithSound = () => {
  video.play(); // Démarre la vidéo
  video.muted = false; // Active le son
  unmuteNotice.style.display = 'none'; // Cache le message
  document.removeEventListener('click', startVideoWithSound); // Supprime l'écouteur d'événement après le clic
};

// Ajoute un écouteur d'événement pour démarrer la vidéo lors d'un clic sur le document
document.addEventListener('click', startVideoWithSound);

// Gestion de l'effet de lumière qui suit la souris
document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Empêche la lumière de sortir des bords de l'écran
  const adjustedX = Math.min(Math.max(x, 0), viewportWidth);
  const adjustedY = Math.min(Math.max(y, 0), viewportHeight);

  // Met à jour les variables CSS pour l'effet de lumière
  light.style.setProperty('--x', `${adjustedX}px`);
  light.style.setProperty('--y', `${adjustedY}px`);
  overlay.style.setProperty('--x', `${adjustedX}px`);
  overlay.style.setProperty('--y', `${adjustedY}px`);
});
