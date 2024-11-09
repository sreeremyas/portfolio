// Initialize ScrollReveal and set default options
ScrollReveal().reveal('hero,.contact,.experience, .projects, .about,.skills', {
    duration: 1200,         // animation duration in milliseconds
    origin: 'bottom',       // start the animation from the bottom
    distance: '110px',       // how far the element moves during animation
    reset: true             // animation repeats on each scroll
});