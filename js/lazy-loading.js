/* ============================================
   Lazy Loading Handler
   ============================================ */

/**
 * Lazy load images using Intersection Observer
 * - Loads images when they become visible in viewport
 * - Improves page performance
 * - Production ready code
 */

document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img.lazy");

    // Create Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load real image from data-src
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                }
                
                // Remove lazy class and stop observing
                img.classList.remove("lazy");
                observer.unobserve(img);
                
                // Add fade-in animation
                img.classList.add("loaded");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "50px"
    });

    // Observe all lazy images
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
