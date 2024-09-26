
const video = document.getElementById('myVideo');
const unmuteNotice = document.getElementById('unmuteNotice');
const light = document.querySelector('.light');
const overlay = document.querySelector('.overlay');


const startVideoWithSound = () => {
  video.play(); // Démarre la vidéo
  video.muted = false; // Active le son
  unmuteNotice.style.display = 'none'; // Cache le message
};


document.addEventListener('click', startVideoWithSound);


document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  light.style.setProperty('--x', `${x}px`);
  light.style.setProperty('--y', `${y}px`);
  overlay.style.setProperty('--x', `${x}px`);
  overlay.style.setProperty('--y', `${y}px`);
});
