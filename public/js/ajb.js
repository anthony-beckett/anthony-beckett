(function() {
    window.addEventListener('DOMContentLoaded', () => {
        const target = document.getElementById('marquee-content');
        if (!target) return;

        const baseString = "AJB/"; // Your original string
        
        // 1. Calculate how many repeats are needed to fill the screen width
        const testSpan = document.createElement('span');
        testSpan.style.visibility = 'hidden';
        testSpan.style.fontFamily = "'Sixtyfour Convergence', sans-serif";
        testSpan.innerText = baseString;
        document.body.appendChild(testSpan);
        
        const stringWidth = testSpan.offsetWidth;
        const repeatsNeeded = Math.ceil(window.innerWidth / stringWidth) + 1;
        document.body.removeChild(testSpan);

        // 2. Create the "Block" that fills the screen
        const fullBlock = baseString.repeat(repeatsNeeded);

        // 3. Set the HTML to that block TWICE (for the 50% loop)
        target.innerText = fullBlock + fullBlock;
    });
})();
