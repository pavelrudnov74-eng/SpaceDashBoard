const btn = document.getElementById('playBtn');
const audio = document.getElementById('myAudio');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = 'Пауза';
  } else {
    audio.pause();
    btn.textContent = 'Включить звук';
  }
});