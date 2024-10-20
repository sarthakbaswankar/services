document.querySelectorAll('.service-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
        // Rotate and scale the box on hover without misalignment
        anime({
            targets: box,
            rotate: '1turn',  // Rotate 360 degrees
            scale: 1.1,       // Scale up to 110%
            duration: 1000,   // 1 second duration
            easing: 'easeInOutQuad'
        });
    });

    box.addEventListener('mouseleave', () => {
        // Reset the position and rotation when hover ends
        anime({
            targets: box,
            rotate: '0turn',  // Reset rotation
            scale: 1,         // Reset the scale
            duration: 500,    // Slightly faster for reset
            easing: 'easeOutQuad'
        });
    });
});
