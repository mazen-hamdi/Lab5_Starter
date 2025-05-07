function init() {
  // cache references once
  const hornSelect   = document.getElementById('horn-select');
  const hornImg      = document.getElementById('sound-image');
  const hornAudio    = document.getElementById('horn-sound');
  const volumeSlider = document.getElementById('volume');
  const volumeImg    = document.getElementById('volume-image');
  const playBtn      = document.getElementById('play');

  /* ---  Horn select  --- */
  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;        // e.g. "air-horn"
    hornImg.src  = `./assets/images/${choice}.svg`;
    hornAudio.src= `./assets/audio/${choice}.mp3`;
  });

  /* ---  Volume slider  --- */
  volumeSlider.addEventListener('input', () => {
    const vol = volumeSlider.valueAsNumber; // 0‑100
    hornAudio.volume = vol / 100;

    let iconLevel = 0;
    if (vol === 0) iconLevel = 0;
    else if (vol < 33) iconLevel = 1;
    else if (vol < 67) iconLevel = 2;
    else iconLevel = 3;
    volumeImg.src = `./assets/icons/volume-level-${iconLevel}.svg`;
  });

  /* ---  Play  --- */
  playBtn.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
