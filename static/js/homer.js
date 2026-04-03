document.addEventListener("DOMContentLoaded", function() {
  const roamer = document.getElementById('roamer');
  const maxDelay = 15000; 
  let goingRight = true; 
  let isCaught = false; 
  let timeoutId; 

  function triggerWalk() {
    if (isCaught) return; 

    if (goingRight) {
      roamer.classList.remove('walk-left');
      roamer.classList.add('walk-right');
    } else {
      roamer.classList.remove('walk-right');
      roamer.classList.add('walk-left');
    }
    goingRight = !goingRight;
  }

  roamer.addEventListener('animationend', function() {
    if (isCaught) return;
    const randomTime = Math.random() * maxDelay;
    timeoutId = setTimeout(triggerWalk, randomTime);
  });


const whackSound = new Audio('/sounds/homer-scream.mp3');

roamer.addEventListener('click', function() {
    if (isCaught)
	return; 
    
    whackSound.play();
    isCaught = true;
    
    clearTimeout(timeoutId);

    // 1. Get the current screen coordinates and dimensions
    const rect = roamer.getBoundingClientRect();
    const originalHeight = rect.height; // Capture the height of the walking GIF

    // 2. Lock to absolute page coordinates
    roamer.style.position = 'absolute'; 
    roamer.style.left = (rect.left + window.scrollX) + 'px';
    
    // Lock the coordinate to the BOTTOM of the old image
    roamer.style.top = (rect.bottom + window.scrollY) + 'px';
    roamer.style.bottom = 'auto'; 
    
    // --- NEW: Set width of the NEW image to the height of the OLD image ---
    roamer.style.width = originalHeight + 'px';
    roamer.style.height = 'auto'; // Let height scale proportionally to the new width

    // Check direction before removing classes
    const wasWalkingLeft = roamer.classList.contains('walk-left');

    // Stop the animation
    roamer.classList.remove('walk-left', 'walk-right');
    
    // Use translateY(-100%) to pull the image UP so it rests on the bottom line
    if (wasWalkingLeft) {
      roamer.style.transform = 'translateY(-100%) scaleX(-1)';
    } else {
      roamer.style.transform = 'translateY(-100%)';
    }

    // 3. Swap to the static image
    roamer.src = '/images/homer-dead.webp';

    // Broadcast the event
    const caughtEvent = new CustomEvent('roamerCaught');
    document.dispatchEvent(caughtEvent);
  });

  triggerWalk();
})
