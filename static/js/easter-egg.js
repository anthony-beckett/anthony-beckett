const secretWord = "mossad";
const secretSound = new Audio('/sounds/jumpscare.mp3');
let inputBuffer = "";

window.addEventListener('keydown', (e) => {
    // Append the key to our buffer
    inputBuffer += e.key.toLowerCase();

    // Keep the buffer the same length as the secret word
    inputBuffer = inputBuffer.slice(-secretWord.length);

    // Check for a match
    if (inputBuffer === secretWord) {
        triggerEasterEgg();
        inputBuffer = ""; // Reset after success
    }
});

function triggerEasterEgg() {
    const overlay = document.getElementById('easter-egg-overlay');
    
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";

    secretSound.currentTime = 0;
    secretSound.play();

    secretSound.onended = () => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    };
}
