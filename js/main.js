/* League Consultancy - Main Logic */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[data-theme-trigger]');
    const body = document.body;

    const themeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme-trigger');
                body.setAttribute('data-theme', theme);
            }
        });
    }, {
        threshold: 0.6 // Higher threshold for snapping precision
    });

    sections.forEach(section => {
        themeObserver.observe(section);
    });

    // Reset to home theme if hero is in view
    const hero = document.querySelector('#hero');
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            body.setAttribute('data-theme', 'home');
        }
    }, { threshold: 0.5 });
    
    if (hero) heroObserver.observe(hero);

});
