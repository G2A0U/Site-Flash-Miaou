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

  // Ajuste les coordonnées pour éviter le cercle noir
  const distanceToRightEdge = viewportWidth - adjustedX;
  const distanceToBottomEdge = viewportHeight - adjustedY;

  const minDistance = Math.min(adjustedX, distanceToRightEdge, adjustedY, distanceToBottomEdge);

  // Si la souris est proche des bords, réduire la taille du cercle
  const circleSize = Math.max(minDistance / 3, 50);

  // Met à jour les variables CSS pour l'effet de lumière
  light.style.setProperty('--x', `${adjustedX}px`);
  light.style.setProperty('--y', `${adjustedY}px`);
  overlay.style.setProperty('--x', `${adjustedX}px`);
  overlay.style.setProperty('--y', `${adjustedY}px`);

  // Ajuste la taille du cercle en fonction de la proximité des bords
  overlay.style.clipPath = `circle(${circleSize}px at ${adjustedX}px ${adjustedY}px)`;
});
