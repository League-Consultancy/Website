/* League Consultancy - Component Loader */

$(function () {
    // Determine the relative path prefix
    // If the URL contains '/divisions/', we need to go up one level
    const path = window.location.pathname;
    const isSubpage = path.includes('/divisions/') || path.includes('/projects/');
    const prefix = isSubpage ? '../' : '';

    // Load Header
    $('header').load(prefix + 'header.html', function () {
        console.log('Header loaded');
        fixPaths($(this), prefix);
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
