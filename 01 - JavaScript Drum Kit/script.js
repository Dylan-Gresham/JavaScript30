window.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`);

    if(!audio) {
        return; // Returns if the button pressed doesn't correspond to an audio key
    } else {
        audio.currentTime = 0; // Rewind to start of audio
        audio.play(); // Play the audio
    }
    
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName !== 'transform') return; // Skip if it's not a transform
        key.classList.remove('playing');
    });
});