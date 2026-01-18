/* ============================================
   Counter Animation for Statistics (Professional Easing)
   ============================================ */

/**
 * Easing Functions for Professional Animation
 */
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
const easeOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

/**
 * Animate number from 0 to target value with easing
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = Date.now();

    const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        // Use cubic easing for more professional feel
        const easeProgress = easeOutCubic(progress);
        const current = Math.floor(start + (target - start) * easeProgress);
        
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Trigger counters when stats section is visible
 */
function triggerCounters() {
    const statsSection = document.getElementById('stats');
    
    if (!statsSection) return;

    if (isElementInViewport(statsSection)) {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(element => {
            // Only animate if not already animated
            if (element.dataset.animated !== 'true') {
                const target = parseInt(element.getAttribute('data-target'));
                animateCounter(element, target, 2000);
                element.dataset.animated = 'true';
            }
        });

        // Remove scroll listener once triggered
        window.removeEventListener('scroll', handleScroll);
    }
}

/**
 * Debounced scroll handler
 */
let scrollTimeout;
function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        triggerCounters();
    }, 100);
}

/**
 * Initialize counter functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check on page load in case stats section is visible
    triggerCounters();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also trigger on resize in case viewport changes
    window.addEventListener('resize', () => {
        triggerCounters();
    }, { passive: true });
});

// Intersection Observer as alternative (more efficient)
if ('IntersectionObserver' in window) {
    const statsSection = document.getElementById('stats');
    
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triggerCounters();
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        observer.observe(statsSection);
    }
}
