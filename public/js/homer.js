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

  roamer.addEventListener('click', function() {
    if (isCaught) return; 
    isCaught = true;
    
    clearTimeout(timeoutId);

    // Lock position
    const rect = roamer.getBoundingClientRect();
    roamer.style.left = rect.left + 'px';
    roamer.style.top = rect.top + 'px';
    roamer.style.bottom = 'auto'; 
    
    // Stop animation and swap image
    roamer.classList.remove('walk-left', 'walk-right');
    roamer.style.transform = 'none';
    roamer.src = '/images/homer-dead.png';

    // --- NEW: Broadcast a custom event ---
    const caughtEvent = new CustomEvent('roamerCaught');
    document.dispatchEvent(caughtEvent);
  });

  triggerWalk();
});
