window.addEventListener('load', () => {
    const img = document.getElementById('dvd-gif');
    if (!img) return;

    let x = Math.random() * (window.innerWidth - 100); // Start at random spot
    let y = Math.random() * (window.innerHeight - 100);
    let dirX = 1;
    let dirY = 1;
    const speed = 2;

    function animate() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const imgWidth = img.clientWidth;
        const imgHeight = img.clientHeight;

        // Boundary Check: If it hits a wall, flip the direction
        if (x + imgWidth >= screenWidth) {
            dirX = -1;
            x = screenWidth - imgWidth; // Snap to edge to prevent getting stuck
        } else if (x <= 0) {
            dirX = 1;
            x = 0;
        }

        if (y + imgHeight >= screenHeight) {
            dirY = -1;
            y = screenHeight - imgHeight;
        } else if (y <= 0) {
            dirY = 1;
            y = 0;
        }

        x += speed * dirX;
        y += speed * dirY;

        img.style.left = x + 'px';
        img.style.top = y + 'px';

        requestAnimationFrame(animate);
    }

    animate();
});
