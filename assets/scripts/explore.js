function populateVoices() {
  const voiceSelect = document.getElementById('voice-select');
  voiceSelect.innerHTML = '';    // clear old
  speechSynthesis.getVoices().forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = `${v.name} (${v.lang})`;
    voiceSelect.appendChild(opt);
  });
}
window.speechSynthesis.onvoiceschanged = populateVoices;


const speakBtn = document.getElementById('press-to-talk');
const textArea = document.getElementById('text-to-speak');
const faceImg  = document.getElementById('face');

speakBtn.addEventListener('click', () => {
  const utter = new SpeechSynthesisUtterance(textArea.value);
  const voiceName = document.getElementById('voice-select').value;
  utter.voice = speechSynthesis.getVoices().find(v => v.name === voiceName);

  utter.onstart = () => faceImg.src = 'assets/images/smiling-open.png';
  utter.onend   = () => faceImg.src = 'assets/images/smiling.png';

  speechSynthesis.speak(utter);
});
