const secretWord = "mossad";
const secretSound = new Audio('/sounds/jumpscare.mp3');

// --- Web Audio API Setup ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(secretSound);
const gainNode = audioCtx.createGain();

gainNode.gain.value = 3.0; 


// Connect the path: File -> Multiplier -> Speakers
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
// ----------------------------

let inputBuffer = "";

window.addEventListener('keydown', (e) => {
    inputBuffer += e.key.toLowerCase();
    inputBuffer = inputBuffer.slice(-secretWord.length);

    if (inputBuffer === secretWord) {
        triggerEasterEgg();
        inputBuffer = ""; 
    }
});

function triggerEasterEgg() {
    const overlay = document.getElementById('easter-egg-overlay');
    
    // Resume context (Browsers often pause AudioContext until a key is pressed)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";

    secretSound.currentTime = 0;
    
    // Note: secretSound.volume remains 1.0, but the GainNode triples it
    secretSound.play().catch(err => console.error("Audio failed:", err));

    secretSound.onended = () => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        
        // Optional: Reset gain if you use this node for other sounds
        // gainNode.gain.value = 1.0; 
    };
}
