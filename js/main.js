/* League Consultancy - Main Logic */

// Initialize and apply theme mode from localStorage immediately
const savedMode = localStorage.getItem('theme-mode') || 'light';
if (document.body) {
    document.body.setAttribute('data-theme-mode', savedMode);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.setAttribute('data-theme-mode', savedMode);
    });
}

// Setup reveal observer globally
window.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            window.revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

window.applyScrollReveal = function () {
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    revealElements.forEach(el => window.revealObserver.observe(el));
};

// Helper to update logos based on theme mode
window.updateLogos = function() {
    const currentMode = document.body.getAttribute('data-theme-mode') || 'light';
    const logos = document.querySelectorAll('.logo img');
    logos.forEach(img => {
        const src = img.getAttribute('src');
        if (!src) return;
        
        if (currentMode === 'dark') {
            if (src.includes('League_Logo.svg')) {
                img.setAttribute('src', src.replace('League_Logo.svg', 'League Consultancy (Logo) Removed BG White.png'));
            }
        } else {
            if (src.includes('League Consultancy (Logo) Removed BG White.png')) {
                img.setAttribute('src', src.replace('League Consultancy (Logo) Removed BG White.png', 'League_Logo.svg'));
            }
        }
    });
};

// Setup theme toggle callback
window.setupThemeToggle = function() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const currentMode = document.body.getAttribute('data-theme-mode') || 'light';
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme-mode', newMode);
        localStorage.setItem('theme-mode', newMode);
        window.updateLogos();
    });
};

// Setup mobile drawer navigation toggle
window.setupMobileNav = function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navToggle || !navLinks) return;
    
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Re-verify theme state on DOMContentLoaded
    const currentMode = localStorage.getItem('theme-mode') || 'light';
    document.body.setAttribute('data-theme-mode', currentMode);
    window.updateLogos();

    // Initialize reveal for static items
    window.applyScrollReveal();

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
