/* ============================================
   Gallery Functionality
   ============================================ */

// Gallery images from local assets
const galleryImages = [
    {
        main: 'assets/Main-Image.avif',
        thumbnail: 'assets/img1.jpg',
        title: 'Rose Elegance'
    },
    {
        main: 'assets/img2.jpg',
        thumbnail: 'assets/img2.jpg',
        title: 'Vanilla Sunset'
    },
    {
        main: 'assets/img3.jpg',
        thumbnail: 'assets/img3.jpg',
        title: 'Ocean Breeze'
    },
    {
        main: 'assets/img4.jpeg',
        thumbnail: 'assets/img4.jpeg',
        title: 'Luxury Essence'
    }
];

let currentImageIndex = 0;
const galleryMain = document.querySelector('.gallery-main');
const mainImage = galleryMain ? galleryMain.querySelector('img') : document.getElementById('main-image');
const dotsContainer = document.getElementById('dots-container');
const thumbnailsContainer = document.getElementById('thumbnails-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

/**
 * Initialize the gallery with dots and thumbnails
 */
function initializeGallery() {
    // Clear existing dots (if any)
    dotsContainer.innerHTML = '';
    
    // Create dots
    galleryImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => goToImage(index));
        dotsContainer.appendChild(dot);
    });

    // Update existing thumbnails (they are direct img elements, not wrappers)
    const thumbnails = thumbnailsContainer.querySelectorAll('img.thumbnail');
    console.log('Found thumbnails:', thumbnails.length);
    
    thumbnails.forEach((thumbnail, index) => {
        if (index < galleryImages.length) {
            console.log(`Updating thumbnail ${index} with:`, galleryImages[index].thumbnail);
            
            // Update thumbnail image source directly
            thumbnail.src = galleryImages[index].thumbnail;
            thumbnail.alt = `${galleryImages[index].title} - Thumbnail`;
            
            thumbnail.setAttribute('data-index', index);
            thumbnail.addEventListener('click', () => {
                console.log('Clicked thumbnail', index);
                goToImage(index);
            });
            
            // Set active class if it's the first one
            if (index === 0) {
                thumbnail.classList.add('active');
            }
        }
    });
}

/**
 * Navigate to a specific image
 */
function goToImage(index) {
    if (index >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else {
        currentImageIndex = index;
    }

    updateImage();
}

/**
 * Update the main image and indicators
 */
function updateImage() {
    const image = galleryImages[currentImageIndex];
    
    if (!mainImage) {
        console.error('Main image element not found');
        return;
    }
    
    // Fade out effect
    mainImage.classList.add('fade-out');
    
    setTimeout(() => {
        // Update main image with new URL
        mainImage.src = image.main;
        mainImage.alt = `GTG Perfumes - ${image.title}`;
        
        // Force image reload
        mainImage.style.opacity = '0';
        mainImage.onload = function() {
            mainImage.style.opacity = '1';
        };
        
        // Fallback if image doesn't load
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 500);
        
        mainImage.classList.remove('fade-out');
        mainImage.classList.add('fade-in');
        
        setTimeout(() => {
            mainImage.classList.remove('fade-in');
        }, 300);
    }, 150);

    // Update all dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Event listeners for navigation buttons
 */
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        goToImage(currentImageIndex - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        goToImage(currentImageIndex + 1);
    });
}

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        goToImage(currentImageIndex - 1);
    } else if (event.key === 'ArrowRight') {
        goToImage(currentImageIndex + 1);
    }
});

/**
 * Initialize gallery on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all elements are loaded
    setTimeout(() => {
        console.log('Initializing gallery...');
        
        // Verify main image element exists
        if (!mainImage) {
            console.error('Main image not found!');
            return;
        }
        
        // Set first image
        if (mainImage && galleryImages.length > 0) {
            mainImage.src = galleryImages[0].main;
            mainImage.alt = `GTG Perfumes - ${galleryImages[0].title}`;
        }
        
        // Initialize gallery controls
        initializeGallery();
        
        // Initialize image selector dropdown
        initializeImageSelector();
        
        console.log('Gallery initialized successfully');
    }, 100);
});

/**
 * Initialize image selector dropdown
 */
function initializeImageSelector() {
    const imageSelect = document.getElementById('image-select');
    
    if (imageSelect) {
        imageSelect.addEventListener('change', (event) => {
            const selectedIndex = parseInt(event.target.value);
            goToImage(selectedIndex);
        });
    }
}
