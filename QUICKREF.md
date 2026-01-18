# Quick Reference Guide

Fast lookup for common tasks and code snippets.

## 🚀 Quick Commands

### Start Local Server
```bash
# Windows Command Prompt
python -m http.server 8000

# Then open: http://localhost:8000
```

### Test Responsiveness
- Press `F12` (Open DevTools)
- Press `Ctrl+Shift+M` (Toggle Device Toolbar)
- Select device from dropdown

### View Page Source
- Right-click > Inspect (or `Ctrl+Shift+I`)

### Clear Cache
- `Ctrl+Shift+Delete` (Windows)
- `Cmd+Shift+Delete` (Mac)

## 📝 File Locations

| Feature | File | Line |
|---------|------|------|
| Navigation | index.html | 10-30 |
| Hero Section | index.html | 31-46 |
| Product Gallery | index.html | 48-100 |
| Radio Buttons | index.html | 108-145 |
| Stats Section | index.html | 165-195 |
| Table | index.html | 198-235 |
| Footer | index.html | 237-260 |
| CSS Variables | css/styles.css | 14-27 |
| Mobile Breakpoints | css/responsive.css | 35-120 |
| Gallery Function | js/gallery.js | All |
| Radio Handler | js/radio-handler.js | All |
| Counter Animation | js/counter.js | All |
| Mobile Menu | js/mobile-menu.js | All |

## 🎨 CSS Variables

```css
--primary-color: #8b5a2b;       /* Brown/Main color */
--secondary-color: #d4af37;     /* Gold/Accent color */
--text-dark: #2c2c2c;           /* Dark text */
--text-light: #666;             /* Light text */
--bg-light: #f9f7f4;            /* Light background */
--border-color: #e0e0e0;        /* Border color */
--shadow: 0 2px 10px rgba(...)  /* Default shadow */
--shadow-hover: 0 8px 20px(...) /* Hover shadow */
--transition: all 0.3s ease;    /* Default transition */
```

## 🎯 Cart Link Combinations

All 9 possible cart URL combinations:

```javascript
// Format: fragrance-purchaseType
rose-single              // Rose, one-time
rose-single-sub          // Rose, monthly
rose-double-sub          // Rose, 2x monthly
vanilla-single           // Vanilla, one-time
vanilla-single-sub       // Vanilla, monthly
vanilla-double-sub       // Vanilla, 2x monthly
ocean-single             // Ocean, one-time
ocean-single-sub         // Ocean, monthly
ocean-double-sub         // Ocean, 2x monthly
```

## 📱 Responsive Breakpoints

```css
Desktop:     1024px and up
Tablet:      768px - 1024px
Mobile:      480px - 768px
Small Mob:   320px - 480px
```

## 🔑 Key CSS Classes

```css
.header              /* Top navigation */
.nav-menu           /* Desktop menu */
.mobile-menu        /* Mobile menu */
.hamburger-toggle   /* Menu button */
.hero               /* Hero section */
.product-container  /* Product grid */
.gallery-column     /* Left product column */
.product-info-column /* Right product column */
.radio-group        /* Radio button group */
.stats-section      /* Statistics section */
.stat-number        /* Animated numbers */
.comparison-table   /* Product table */
.footer             /* Footer */
```

## 🔑 Key JavaScript IDs

```javascript
// Gallery
#main-image
#dots-container
#thumbnails-container
#prev-btn
#next-btn

// Radio buttons
input[name="fragrance"]
input[name="purchase-type"]
#add-to-cart-btn

// Navigation
#hamburger-toggle
#mobile-menu

// Stats
#stats
.stat-number
```

## 🎨 Updating Colors

### Primary Color (Brown)
```css
/* Find & Replace */
--primary-color: #8b5a2b;
→ --primary-color: #YOUR_COLOR;
```

### Secondary Color (Gold)
```css
--secondary-color: #d4af37;
→ --secondary-color: #YOUR_COLOR;
```

### Text Colors
```css
--text-dark: #2c2c2c;
--text-light: #666;
```

## 🖼️ Image Paths

```javascript
// Gallery images (js/gallery.js, Line ~8-19)
'assets/perfume-main.jpg'
'assets/perfume-alt-1.jpg'
'assets/perfume-alt-2.jpg'
'assets/perfume-thumb-1.jpg'
'assets/perfume-thumb-2.jpg'
'assets/perfume-thumb-3.jpg'
```

## 🔄 Common Code Changes

### Change Product Title
```html
<!-- index.html, Line ~77 -->
<h2 class="product-title">NEW_TITLE</h2>
```

### Change Product Price
```html
<!-- index.html, Line ~93 -->
<span class="price">$NEW_PRICE</span>
```

### Update Email
```html
<!-- index.html, Line ~250 -->
<p>Email: new-email@example.com</p>
```

### Update Phone
```html
<!-- index.html, Line ~251 -->
<p>Phone: +1 (555) NEW-PHONE</p>
```

### Change Counter Numbers
```html
<!-- index.html, Lines ~175-188 -->
<div class="stat-number" data-target="NEW_NUMBER">0</div>
```

### Update Cart Links
```javascript
// js/radio-handler.js, Line ~3-12
const cartLinkMap = {
    'rose-single': 'https://NEW_CART_URL',
    // ...
};
```

## 🧪 Testing Checklist

### Desktop
- [ ] Menu visible
- [ ] Gallery works with arrows
- [ ] Gallery works with dots
- [ ] Radio buttons functional
- [ ] Counter animates
- [ ] Table displays correctly

### Tablet (< 1024px)
- [ ] Hamburger appears
- [ ] Layout responsive
- [ ] Touch targets adequate
- [ ] All features work

### Mobile (< 768px)
- [ ] Hamburger menu works
- [ ] Single column layout
- [ ] Images scale properly
- [ ] Text readable
- [ ] No horizontal scroll

### Cross-Browser
- [ ] Chrome - OK
- [ ] Firefox - OK
- [ ] Safari - OK
- [ ] Edge - OK

## 🐛 Quick Fixes

### Images Not Showing
1. Check file names in `assets/` folder
2. Verify paths in gallery.js
3. Check file extensions match

### Layout Broken
1. Check viewport meta tag
2. Clear cache (Ctrl+Shift+R)
3. Check responsive.css is loaded

### JavaScript Errors
1. Open DevTools (F12)
2. Check Console tab
3. Look for red error messages

### Mobile Menu Not Working
1. Check hamburger-toggle exists
2. Verify mobile-menu.js loaded
3. Test with device toolbar

## 📊 Project Stats

```
HTML:        ~450 lines
CSS:         ~1450 lines
JavaScript:  ~400 lines
Total:       ~2300 lines

Images:      6 required
Breakpoints: 5
JS Functions: 20+
CSS Classes: 50+
```

## 🔐 Security Notes

- Cart links are dummy URLs - update before launch
- No sensitive data stored
- No backend integration in this version
- HTTPS recommended for production

## 📱 Mobile Testing Sizes

```
iPhone SE:     375 × 667
iPhone 12:     390 × 844
iPhone 14:     390 × 844
iPad:          768 × 1024
iPad Pro:      1024 × 1366
```

## 🎯 Performance Targets

- Page Load: < 3 seconds
- Lighthouse Score: > 90
- Mobile Score: > 85
- Image Optimization: WebP or JPEG 85%
- CSS Size: < 100KB
- JS Size: < 50KB

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Overview & features |
| SETUP.md | Installation guide |
| TESTING.md | Testing checklist |
| DEPLOYMENT.md | Deploy instructions |
| This file | Quick reference |

## 🚀 Deployment Quick Links

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)

## 💡 Pro Tips

1. Use browser DevTools to inspect elements
2. Test with keyboard navigation (Tab, Enter, Arrow)
3. Use Lighthouse for performance scores
4. Check accessibility with WAVE extension
5. Monitor with Google Search Console
6. Use image compression tools before uploading
7. Clear cache often during development
8. Test on actual mobile devices, not just DevTools

## 🔗 Useful Links

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Flexbox Reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid Reference](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://www.w3schools.com/css/css_rwd_intro.asp)
- [Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Support

For issues, check:
1. SETUP.md - Installation problems
2. TESTING.md - Feature testing
3. DEPLOYMENT.md - Launch issues
4. Browser console (F12) - Error messages

---

**Last Updated**: January 17, 2026
