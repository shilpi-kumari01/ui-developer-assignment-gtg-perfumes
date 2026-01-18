/* ============================================
   Radio Button Handler & Dynamic Product Selection
   Clean, Maintainable Code Structure
   ============================================ */

/**
 * Configuration Objects (Mapping Pattern)
 * Professional approach: separate data from logic
 */
const FRAGRANCE_MAP = {
    rose: 'Rose Elegance',
    vanilla: 'Vanilla Sunset',
    ocean: 'Ocean Breeze'
};

const PURCHASE_TYPE_MAP = {
    single: 'Single Purchase',
    'single-sub': 'Single Subscription',
    'double-sub': '2 bottles every month'
};

const CART_LINKS = {
    'rose-single': 'https://example.com/cart/rose-elegance-single',
    'rose-single-sub': 'https://example.com/cart/rose-elegance-single-subscription',
    'rose-double-sub': 'https://example.com/cart/rose-elegance-double-subscription',
    'vanilla-single': 'https://example.com/cart/vanilla-sunset-single',
    'vanilla-single-sub': 'https://example.com/cart/vanilla-sunset-single-subscription',
    'vanilla-double-sub': 'https://example.com/cart/vanilla-sunset-double-subscription',
    'ocean-single': 'https://example.com/cart/ocean-breeze-single',
    'ocean-single-sub': 'https://example.com/cart/ocean-breeze-single-subscription',
    'ocean-double-sub': 'https://example.com/cart/ocean-breeze-double-subscription'
};

const SUBSCRIPTION_DETAILS = {
    single: {
        title: 'Single Purchase',
        details: [
            { label: 'Price', value: '$89.99' },
            { label: 'Delivery', value: 'One-time delivery' },
            { label: 'Refund Policy', value: '30-day money back guarantee' }
        ],
        info: 'Pay once and receive your order'
    },
    'single-sub': {
        title: 'Single Subscription',
        details: [
            { label: 'Price', value: '$71.99/month' },
            { label: 'Savings', value: '20% discount' },
            { label: 'Delivery', value: 'Monthly auto-delivery' },
            { label: 'Cancel Anytime', value: 'No long-term commitment' }
        ],
        info: 'Get 20% off and receive a fresh bottle every month'
    },
    'double-sub': {
        title: '2 Bottles Every Month',
        details: [
            { label: 'Total Price', value: '$125.99/month (2 bottles)' },
            { label: 'Per Bottle', value: '$62.99 each' },
            { label: 'Savings', value: '30% discount on two bottles' },
            { label: 'Delivery', value: 'Monthly auto-delivery' },
            { label: 'Cancel Anytime', value: 'No long-term commitment' }
        ],
        info: 'Get 30% off and receive two bottles every month - best value'
    }
};

/**
 * DOM Elements Cache
 * Cache DOM queries for better performance
 */
const DOM = {
    fragranceRadios: document.querySelectorAll('input[name="fragrance"]'),
    purchaseTypeRadios: document.querySelectorAll('input[name="purchase-type"]'),
    addToCartBtn: document.getElementById('add-to-cart-btn'),
    subscriptionDetailsContainer: document.getElementById('subscription-details'),
    selectedFragranceDiv: document.getElementById('selected-fragrance')
};

/**
 * Get current user selections
 * @returns {Object} { fragrance, purchaseType }
 */
function getSelections() {
    const fragrance = document.querySelector('input[name="fragrance"]:checked')?.value;
    const purchaseType = document.querySelector('input[name="purchase-type"]:checked')?.value;
    return { fragrance, purchaseType };
}

/**
 * Generate cart link key from selections
 * @param {string} fragrance - Selected fragrance
 * @param {string} purchaseType - Selected purchase type
 * @returns {string} Cart link key
 */
function getCartLinkKey(fragrance, purchaseType) {
    return `${fragrance}-${purchaseType}`;
}

/**
 * Update Add to Cart button with smooth animation
 * Professional: immediate visual feedback
 */
function updateCartLink() {
    const { fragrance, purchaseType } = getSelections();
    const linkKey = getCartLinkKey(fragrance, purchaseType);
    const newLink = CART_LINKS[linkKey];

    if (newLink && DOM.addToCartBtn) {
        DOM.addToCartBtn.href = newLink;
        // Micro-interaction: button pulse animation
        DOM.addToCartBtn.classList.add('animate');
        setTimeout(() => DOM.addToCartBtn.classList.remove('animate'), 400);
    }
}

/**
 * Update selected fragrance display with animation
 * Shows user's current selections clearly
 */
function updateFragranceDisplay() {
    const { fragrance, purchaseType } = getSelections();
    const fragranceName = FRAGRANCE_MAP[fragrance] || fragrance;
    const purchaseTypeName = PURCHASE_TYPE_MAP[purchaseType] || purchaseType;

    if (DOM.selectedFragranceDiv) {
        DOM.selectedFragranceDiv.textContent = `Selected: ${fragranceName} + ${purchaseTypeName}`;
        // Restart animation for visual feedback
        DOM.selectedFragranceDiv.style.animation = 'none';
        void DOM.selectedFragranceDiv.offsetWidth; // Trigger reflow
        DOM.selectedFragranceDiv.style.animation = '';
    }
}

/**
 * Render subscription details based on purchase type
 * Smooth max-height animation (0.4s)
 */
function updateSubscriptionDisplay() {
    const { purchaseType } = getSelections();
    
    if (!DOM.subscriptionDetailsContainer) return;

    // Reset details for single purchase
    if (purchaseType === 'single') {
        DOM.subscriptionDetailsContainer.innerHTML = '';
        DOM.subscriptionDetailsContainer.classList.add('collapsed');
        return;
    }

    const details = SUBSCRIPTION_DETAILS[purchaseType];
    if (!details) return;

    // Build subscription details HTML
    const detailsHTML = `
        <h3 style="margin-bottom: 1rem; color: var(--primary); font-size: 1.1rem; font-weight: 600;">
            ${details.title}
        </h3>
        ${details.details
            .map(item => `
                <div class="subscription-detail-item">
                    <span class="subscription-detail-label">${item.label}</span>
                    <span class="subscription-detail-value">${item.value}</span>
                </div>
            `)
            .join('')}
        <div class="subscription-discount-info">
            ✓ ${details.info}
        </div>
    `;

    DOM.subscriptionDetailsContainer.innerHTML = detailsHTML;
    DOM.subscriptionDetailsContainer.classList.remove('collapsed');
}

/**
 * Handle all updates when selection changes
 * Consolidates all update operations
 */
function handleSelectionChange() {
    updateCartLink();
    updateFragranceDisplay();
    updateSubscriptionDisplay();
}

/**
 * Initialize event listeners
 * Attach change handlers to all radio buttons
 */
function initializeEventListeners() {
    DOM.fragranceRadios.forEach(radio => {
        radio.addEventListener('change', handleSelectionChange);
    });

    DOM.purchaseTypeRadios.forEach(radio => {
        radio.addEventListener('change', handleSelectionChange);
    });
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    handleSelectionChange();
});
