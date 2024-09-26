const videoMask = document.getElementById('videoMask');

// Met à jour la position du cercle de révélation autour de la souris
document.querySelector('.video-container').addEventListener('mousemove', (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left; // Position relative dans le conteneur vidéo
  const y = event.clientY - rect.top;

  // Ajuste le clip-path pour créer un effet de cercle autour du curseur
  videoMask.style.clipPath = `circle(10% at ${x}px ${y}px)`;
});

// Si la souris quitte la zone, cache de nouveau complètement la vidéo
document.querySelector('.video-container').addEventListener('mouseleave', () => {
  videoMask.style.clipPath = 'circle(0% at 50% 50%)'; // Cache la vidéo en dehors du survol
});
