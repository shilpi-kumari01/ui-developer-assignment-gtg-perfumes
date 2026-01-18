<<<<<<< HEAD
# ui-developer-assignment-gtg-perfumes
Pixel-perfect, fully responsive UI built from Figma using HTML, CSS, and Vanilla JavaScript.  Includes interactive product gallery, dynamic cart logic, animations, and accessibility support.
=======
# GTG Perfumes - Responsive Webpage

A pixel-perfect, fully responsive webpage built from a Figma design using vanilla HTML, CSS, and JavaScript. This project demonstrates professional front-end development skills with clean, maintainable code.

## 📁 Project Structure

```
/GTG-Perfumes
├── index.html                 # Main HTML file
├── /css
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Responsive design breakpoints
├── /js
│   ├── gallery.js            # Image gallery functionality
│   ├── radio-handler.js      # Radio button & cart link logic
│   ├── counter.js            # Number counter animation
│   └── mobile-menu.js        # Mobile navigation toggle
├── /assets
│   ├── perfume-main.jpg      # Main product image
│   ├── perfume-alt-1.jpg     # Alternative product view 1
│   ├── perfume-alt-2.jpg     # Alternative product view 2
│   ├── perfume-thumb-1.jpg   # Gallery thumbnail 1
│   ├── perfume-thumb-2.jpg   # Gallery thumbnail 2
│   └── perfume-thumb-3.jpg   # Gallery thumbnail 3
├── README.md                  # This file
└── .gitignore                # Git ignore rules

```

## ✨ Features Implemented

### 1. **Responsive Design**
- ✅ Hamburger menu for tablet and mobile devices (< 768px)
- ✅ Breakpoints: Desktop (1024px+), Tablet (768px-1024px), Mobile (480px-768px), Small Mobile (320px-480px)
- ✅ Mobile-first approach with progressive enhancement
- ✅ Flexbox and Grid layouts for optimal responsiveness

### 2. **Product Gallery (Functional)**
- ✅ Main image display with smooth fade transitions
- ✅ Previous/Next arrow buttons for navigation
- ✅ Dot navigation indicators (clickable)
- ✅ Clickable thumbnail navigation
- ✅ Keyboard support (Arrow Left/Right keys)
- ✅ Lazy loading for images
- ✅ Smooth animations and hover effects

### 3. **Radio Button Selection**
- ✅ Two radio groups: Fragrances (3 options) and Purchase Type (3 options)
- ✅ Dynamic "Add to Cart" button with 9 different URL variations
- ✅ Real-time link updates based on selections
- ✅ Accessible radio buttons with proper labeling

### 4. **Subscription Details**
- ✅ Dynamic expandable sections based on purchase type selection
- ✅ Single Purchase - simple one-time option
- ✅ Single Subscription - 20% discount with monthly delivery
- ✅ Double Subscription - 30% discount on two bottles monthly
- ✅ Detailed information display for each option
- ✅ Smooth animations for section appearance

### 5. **Statistics Section with Counter Animation**
- ✅ Animated number counter (0 to target value)
- ✅ Triggered when section enters viewport
- ✅ Smooth easing function for professional appearance
- ✅ Intersection Observer for efficient performance
- ✅ Fallback scroll listener for older browsers

### 6. **Product Comparison Table**
- ✅ Semantic HTML `<table>` element
- ✅ Responsive table design
- ✅ Zebra striping for better readability
- ✅ Hover effects on rows
- ✅ Fully responsive on mobile devices

### 7. **Navigation & Header**
- ✅ Sticky header with shadow effect
- ✅ Desktop navigation menu with hover underline animation
- ✅ Mobile hamburger menu with smooth animations
- ✅ Mobile menu closes on link click
- ✅ Menu closes on outside click
- ✅ Menu closes on Escape key press

### 8. **Performance & Optimization**
- ✅ Lazy loading on images
- ✅ Optimized CSS with no unnecessary rules
- ✅ Efficient JavaScript with event delegation
- ✅ Debounced scroll listeners
- ✅ CSS animations instead of JavaScript where possible
- ✅ Optimized media queries

### 9. **Accessibility & Cross-Browser**
- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast compliance
- ✅ Works on Chrome, Firefox, Edge, Safari

### 10. **Code Quality**
- ✅ Clean, well-organized code structure
- ✅ Comprehensive comments and documentation
- ✅ Consistent naming conventions
- ✅ Modular JavaScript files
- ✅ DRY (Don't Repeat Yourself) principles
- ✅ Mobile-first CSS approach

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #8b5a2b (Warm Brown)
- **Secondary Color**: #d4af37 (Gold)
- **Text Dark**: #2c2c2c
- **Text Light**: #666
- **Background Light**: #f9f7f4

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes that scale with viewport
- Proper line heights for readability

### Animations
- Smooth page transitions
- Fade effects on image changes
- Pulse animation for loading states
- Hover animations on buttons and links
- Number counter animation with easing
- Hamburger menu animation

## 📱 Responsive Breakpoints

| Device | Width Range | Features |
|--------|------------|----------|
| Desktop | 1024px+ | Full navigation menu, 2-column product layout |
| Tablet | 768px - 1024px | Hamburger menu, 2-column layout still available |
| Mobile | 480px - 768px | Full hamburger menu, single column layout |
| Small Mobile | 320px - 480px | Optimized spacing and font sizes |

## 🚀 How to Use

### Setup
1. Clone or download the project folder
2. Replace placeholder images in `/assets` with actual Figma exports
3. Update image paths in `js/gallery.js` if needed
4. Update cart links in `js/radio-handler.js` with actual URLs

### File Export from Figma
1. Right-click on any image/component in Figma
2. Select "Export"
3. Choose PNG or JPG format
4. Set the resolution and size
5. Download and place in `/assets` folder

### Running Locally
```bash
# Option 1: Use Python's built-in server
python -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Option 3: Use VS Code Live Server extension
# Right-click index.html and select "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

## 🔧 JavaScript Functions

### gallery.js
- `initializeGallery()` - Initialize dots and thumbnails
- `goToImage(index)` - Navigate to specific image
- `updateImage()` - Update main image and indicators

### radio-handler.js
- `getSelections()` - Get current radio selections
- `buildCartLinkKey()` - Build cart link identifier
- `updateAddToCartLink()` - Update button href
- `updateSubscriptionDetails()` - Render subscription info
- `handleRadioChange()` - Handle radio button changes

### counter.js
- `animateCounter(element, target, duration)` - Animate number
- `isElementInViewport(el)` - Check if element is visible
- `triggerCounters()` - Trigger animation when visible
- `handleScroll()` - Debounced scroll handler

### mobile-menu.js
- `toggleMobileMenu()` - Toggle menu visibility
- `closeMobileMenu()` - Close mobile menu
- Event listeners for menu interactions

## 🎯 Cart Link Mapping

The Add to Cart button generates dynamic links based on selections:

```
Fragrance Options:
- Rose Elegance
- Vanilla Sunset
- Ocean Breeze

Purchase Type Options:
- Single Purchase (no subscription)
- Single Subscription (20% off)
- Double Subscription (30% off)

Total Combinations: 3 × 3 = 9 unique links
```

Example: `https://example.com/cart/rose-elegance-single-subscription`

## 📊 Statistics Section

Numbers animate from 0 to their target when scrolled into view:
- Customer Satisfaction: 84%
- Premium Ingredients: 78%
- Repeat Customers: 92%
- Quality Assurance: 88%

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| IE 11 | N/A | ❌ Not Supported |

## 🎓 Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<table>`)
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Arrow keys, Escape)
- Focus states for keyboard users
- Color contrast ratios meet WCAG AA standards
- Proper heading hierarchy
- Alt text on images

## 🔒 Security Considerations

- No sensitive data stored locally
- Cart links are dummy URLs (update with actual endpoints)
- Form inputs are properly sanitized
- Cross-origin requests use CORS if needed

## 📈 Performance Metrics

- Lazy loading for images
- Efficient CSS selectors
- Debounced event listeners
- Intersection Observer for viewport detection
- Minimal repaints and reflows
- Optimized animations (using transforms and opacity)

## 🎨 Bonus Features Included

1. **Dark Mode Support** - Detects `prefers-color-scheme` media query
2. **Reduced Motion Support** - Respects `prefers-reduced-motion` preference
3. **Print Styles** - Optimized CSS for printing
4. **High DPI Support** - Image rendering optimizations for Retina displays
5. **Landscape Mode** - Special handling for mobile landscape orientation

## 📝 Notes

- Replace `https://example.com/cart/` with actual cart URLs
- Update email and contact info in footer
- Add actual product images from Figma
- Consider implementing a backend for cart functionality
- Add form validation for any form fields if added
- Consider adding product reviews or ratings section
- Implement analytics tracking if needed

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push the project to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be available at `https://username.github.io/repo-name`

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Set publish directory: `.`
4. Deploy

## 📚 Resources Used

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

## 📄 License

This project is provided as-is for educational purposes.

---

**Last Updated**: January 17, 2026
**Version**: 1.0.0
>>>>>>> 7be2592 (Initial UI implementation from Figma)
