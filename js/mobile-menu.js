/* ============================================
   Mobile Menu Toggle
   ============================================ */

const hamburgerToggle = document.getElementById('hamburger-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    hamburgerToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Close mobile menu when a link is clicked
 */
function closeMobileMenu() {
    hamburgerToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Event listeners
 */
hamburgerToggle.addEventListener('click', toggleMobileMenu);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

/**
 * Close menu when clicking outside
 */
document.addEventListener('click', (event) => {
    if (!event.target.closest('.header') && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

/**
 * Close menu on window resize (when transitioning to desktop)
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

/**
 * Keyboard navigation - close menu on Escape
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});
