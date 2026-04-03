document.addEventListener("DOMContentLoaded", function() {
  const roamer = document.getElementById('roamer');

  // 1. Set the default hover cursor while it's walking
  roamer.style.cursor = "url('/images/cursors/mallet-up.png'), pointer";

  // 2. Listen for the exact moment the main script says it was clicked
  document.addEventListener('roamerCaught', function() {
    
    // 3. Swap the cursor to the post-click version
    roamer.style.cursor = "url('/images/cursors/mallet-down.png'), auto";
    
  });
});
