/* League Consultancy - Component Loader */

$(function () {
    // Check for local file protocol and show helpful developer tip
    if (window.location.protocol === 'file:') {
        console.warn(
            '%cLeague Consultancy Developer Tip:\n' +
            '%cBrowser security settings block AJAX requests (like $.load and $.getJSON) when pages are loaded directly over file:// protocol.\n' +
            'To view the website correctly with header, footer, and dynamic data, please run a local web server.\n' +
            'Examples:\n' +
            ' - Node.js: npx http-server\n' +
            ' - Python: python -m http.server\n' +
            ' - VS Code: Live Server extension',
            'font-weight: bold; color: #ffb703; font-size: 14px;',
            'color: var(--theme-text, #333); font-size: 12px;'
        );
    }

    // Determine the relative path prefix
    // If the URL contains '/divisions/', we need to go up one level
    const path = window.location.pathname;
    const isSubpage = path.includes('/divisions/') || path.includes('/projects/');
    const prefix = isSubpage ? '../' : '';

    // Load Header
    $('header').load(prefix + 'header.html', function () {
        console.log('Header loaded');
        fixPaths($(this), prefix);
        if (typeof window.setupThemeToggle === 'function') {
            window.setupThemeToggle();
        }
        if (typeof window.setupMobileNav === 'function') {
            window.setupMobileNav();
        }
    });

    // Load Footer
    $('footer').load(prefix + 'footer.html', function () {
        console.log('Footer loaded');
        fixPaths($(this), prefix);
    });

    /**
     * Adjusts relative paths for links and images based on page depth
     */
    function fixPaths($container, prefix) {
        if (!prefix) return; // No prefix needed for root pages

        $container.find('a').each(function () {
            const href = $(this).attr('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                // Special case for links that already start with ../ (e.g. if I copied them)
                if (!href.startsWith('../')) {
                    $(this).attr('href', prefix + href);
                }
            }
        });

        $container.find('img').each(function () {
            const src = $(this).attr('src');
            if (src && !src.startsWith('http')) {
                if (!src.startsWith('../')) {
                    $(this).attr('src', prefix + src);
                }
            }
        });
    }
});
