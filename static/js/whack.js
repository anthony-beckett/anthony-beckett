document.addEventListener("DOMContentLoaded", function() {
  const roamer = document.getElementById('roamer');
  if (!roamer) return;

  // 1. CREATE A FAKE, PHYSICAL CURSOR
  // We create an actual HTML element to act as your mouse
  const fakeCursor = document.createElement('div');
  fakeCursor.style.position = 'fixed';
  fakeCursor.style.pointerEvents = 'none'; // Critical: ensures your real clicks pass through it
  fakeCursor.style.zIndex = '2147483647';
  fakeCursor.style.width = '64px';
  fakeCursor.style.height = '64px';
  fakeCursor.style.backgroundImage = "url('/images/cursors/mallet-up.png')";
  fakeCursor.style.backgroundSize = 'contain';
  fakeCursor.style.backgroundRepeat = 'no-repeat';
  fakeCursor.style.display = 'none'; // Hidden by default
  
  // Shift it so the actual mouse pointer is exactly in the center of the mallet head
  fakeCursor.style.transform = 'translate(-16px, -16px)'; 
  
  document.body.appendChild(fakeCursor);

  // Preload the strike image so there is no delay
  const preloadDown = new Image();
  preloadDown.src = '/images/cursors/mallet-down.png';

  // 2. DISABLE THE REAL CURSOR
  // Tell the browser to hide the system mouse when hovering the character
  roamer.style.cursor = 'none';

  // 3. TAPE THE FAKE CURSOR TO THE MOUSE
  // Every time the mouse moves, move our fake HTML mallet to match it exactly
  document.addEventListener('mousemove', (e) => {
    fakeCursor.style.left = e.clientX + 'px';
    fakeCursor.style.top = e.clientY + 'px';
  });

  // 4. SHOW/HIDE LOGIC
  roamer.addEventListener('mouseenter', () => {
    fakeCursor.style.display = 'block'; // Show fake mallet
  });

  roamer.addEventListener('mouseleave', () => {
    fakeCursor.style.display = 'none'; // Hide fake mallet
  });

  // 5. THE HAMMER STRIKE
  roamer.addEventListener('mousedown', () => {
    fakeCursor.style.backgroundImage = "url('/images/cursors/mallet-down.png')";
  });

  // We put the mouseup event on the document so the mallet doesn't get 
  // stuck "down" if you drag your mouse quickly off the character
  document.addEventListener('mouseup', () => {
    fakeCursor.style.backgroundImage = "url('/images/cursors/mallet-up.png')";
  });
});
