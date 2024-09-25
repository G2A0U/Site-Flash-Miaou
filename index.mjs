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
};

// Ajoute un écouteur d'événement pour démarrer la vidéo lors d'un clic sur le document
document.addEventListener('click', startVideoWithSound);

// Gestion de l'effet de lumière qui suit la souris
document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Met à jour les variables CSS pour la lumière et l'overlay
  light.style.setProperty('--x', `${x}px`);
  light.style.setProperty('--y', `${y}px`);
  overlay.style.setProperty('--x', `${x}px`);
  overlay.style.setProperty('--y', `${y}px`);
});
