# Setup & Installation Guide

Complete guide to set up and run the GTG Perfumes project locally.

## 📦 System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **Text Editor**: VS Code, Sublime Text, or any code editor
- **Optional**: Python 3.x or Node.js for local server

## 🛠️ Quick Start (5 minutes)

### Step 1: Locate Project Files
```
C:\HTMLDEVLOPER\
├── index.html
├── css/
├── js/
├── assets/
├── README.md
└── package.json
```

### Step 2: Add Images
1. Open your Figma file
2. Right-click on each design element
3. Click "Export"
4. Save to `C:\HTMLDEVLOPER\assets\`

Required images:
- `perfume-main.jpg` - Main product image (500×500px)
- `perfume-alt-1.jpg` - Alternative view 1 (500×500px)
- `perfume-alt-2.jpg` - Alternative view 2 (500×500px)
- `perfume-thumb-1.jpg` - Thumbnail 1 (70×70px)
- `perfume-thumb-2.jpg` - Thumbnail 2 (70×70px)
- `perfume-thumb-3.jpg` - Thumbnail 3 (70×70px)

### Step 3: Start Local Server

#### Using Python (Windows)
```bash
# Open Command Prompt in project folder
cd C:\HTMLDEVLOPER

# Python 3.x
python -m http.server 8000

# Or Python 2.x
python -m SimpleHTTPServer 8000
```

#### Using Node.js
```bash
cd C:\HTMLDEVLOPER
npx http-server
```

#### Using VS Code Live Server
1. Install "Live Server" extension (by Ritwick Dey)
2. Right-click `index.html`
3. Select "Open with Live Server"

### Step 4: Open in Browser
```
http://localhost:8000
```

## 📝 Project Structure Explained

```
C:\HTMLDEVLOPER\
│
├── index.html              # Main HTML file - entry point
│
├── css/
│   ├── styles.css         # Main stylesheet (2000+ lines)
│   └── responsive.css     # Mobile & responsive rules
│
├── js/                     # JavaScript functionality
│   ├── gallery.js         # Image gallery navigation
│   ├── radio-handler.js   # Radio buttons & cart links
│   ├── counter.js         # Number counter animations
│   └── mobile-menu.js     # Hamburger menu toggle
│
├── assets/                # Images and media
│   ├── perfume-main.jpg
│   ├── perfume-alt-1.jpg
│   ├── perfume-alt-2.jpg
│   ├── perfume-thumb-1.jpg
│   ├── perfume-thumb-2.jpg
│   └── perfume-thumb-3.jpg
│
├── README.md              # Project overview
├── TESTING.md             # Testing checklist
├── DEPLOYMENT.md          # Deployment guide
├── package.json           # npm configuration
└── .gitignore            # Git ignore rules
```

## 🔧 Configuration

### Update Cart Links
Edit `js/radio-handler.js`:

```javascript
// Line 3-12: Update these URLs
const cartLinkMap = {
    'rose-single': 'YOUR_CART_URL_HERE',
    'rose-single-sub': 'YOUR_CART_URL_HERE',
    // ... etc
};
```

### Update Contact Information
Edit `index.html`:

```html
<!-- Footer section (Line ~450) -->
<p>Email: your-email@example.com</p>
<p>Phone: +1 (555) 123-4567</p>
```

### Update Product Information
Edit `index.html`:

```html
<!-- Product section (Line ~80-100) -->
<h2 class="product-title">YOUR_PRODUCT_NAME</h2>
<p class="product-description">YOUR_DESCRIPTION</p>
<span class="price">$YOUR_PRICE</span>
```

## 📚 File Descriptions

### `index.html` (450+ lines)
- Semantic HTML5 structure
- Accessible form elements
- Meta tags for SEO
- All content and layout

### `css/styles.css` (850+ lines)
- Global styles and variables
- Typography and spacing
- Component styles
- Animations and transitions
- Mobile-first approach

### `css/responsive.css` (600+ lines)
- Breakpoints for different screen sizes
- Tablet optimizations (768px-1024px)
- Mobile layouts (480px-768px)
- Small mobile (320px-480px)
- Print styles
- Accessibility preferences
- Dark mode support

### `js/gallery.js` (100+ lines)
- Image gallery initialization
- Navigation arrow handling
- Dot indicator functionality
- Thumbnail selection
- Keyboard navigation support
- Image transition effects

### `js/radio-handler.js` (100+ lines)
- Radio button event listeners
- Dynamic URL generation (9 combinations)
- Subscription details rendering
- Form state management

### `js/counter.js` (80+ lines)
- Number animation function
- Viewport detection
- Intersection Observer setup
- Scroll event handling
- Animation state tracking

### `js/mobile-menu.js` (50+ lines)
- Hamburger menu toggle
- Mobile menu open/close
- Escape key handling
- Outside click detection
- Body scroll prevention

## 🎯 Customization Guide

### Colors
Edit `:root` variables in `css/styles.css`:

```css
:root {
    --primary-color: #8b5a2b;      /* Change this */
    --secondary-color: #d4af37;    /* Change this */
    --text-dark: #2c2c2c;          /* Change this */
    --text-light: #666;            /* Change this */
    --bg-light: #f9f7f4;           /* Change this */
}
```

### Fonts
Update font in `body` rule:

```css
body {
    font-family: 'Your Font Here', sans-serif;
}
```

### Images
Replace in `js/gallery.js`:

```javascript
const galleryImages = [
    {
        main: 'assets/your-image-1.jpg',
        thumbnail: 'assets/your-thumbnail-1.jpg'
    },
    // ... etc
];
```

### Statistics Numbers
Update in `index.html`:

```html
<div class="stat-number" data-target="YOUR_NUMBER">0</div>
```

### Subscription Details
Update in `js/radio-handler.js`:

```javascript
const subscriptionDetails = {
    'single-sub': {
        title: 'Your Title',
        details: [
            { label: 'Label', value: 'Value' },
        ],
        info: 'Your description'
    }
};
```

## 🔍 Troubleshooting

### Images Not Showing
```bash
# Check file paths
# 1. Images must be in assets/ folder
# 2. File names must match exactly (case-sensitive on Mac/Linux)
# 3. Use relative paths: assets/image.jpg (not /assets/)
```

### Layout Broken on Mobile
```bash
# 1. Check viewport meta tag exists in <head>
# 2. Clear browser cache (Ctrl+Shift+Delete)
# 3. Resize browser window to test
# 4. Open DevTools: F12 > Toggle Device Toolbar (Ctrl+Shift+M)
```

### JavaScript Not Working
```bash
# 1. Open DevTools (F12)
# 2. Go to Console tab
# 3. Look for error messages
# 4. Check script tags have correct paths
# 5. Verify .js files are in /js folder
```

### CSS Not Applying
```bash
# 1. Verify <link> tags in <head>
# 2. Check CSS file paths
# 3. Clear cache: Ctrl+Shift+Delete
# 4. Hard refresh: Ctrl+Shift+R
# 5. Check for typos in class/id names
```

### Mobile Menu Not Appearing
```bash
# 1. Check screen is < 768px wide
# 2. Verify mobile-menu.js is loaded
# 3. Check hamburger-toggle element exists
# 4. Verify CSS for .hamburger-toggle exists
```

## 🚀 Performance Tips

### Optimize Images
```bash
# 1. Compress before adding
# 2. Use modern formats (WebP)
# 3. Resize to actual size needed
# 4. Use tools: TinyPNG, Squoosh, ImageOptim
```

### Lazy Loading
Already implemented with `loading="lazy"` attribute.

### Minify CSS/JS
```bash
# Optional for production
# Tools: CSSNano, Terser, Minify.tools
```

### Caching
Add to your server or CDN for production:
```
Cache-Control: max-age=31536000
```

## 📱 Testing Responsiveness

### Using Browser DevTools
1. Press `F12` to open DevTools
2. Press `Ctrl+Shift+M` to toggle device toolbar
3. Select different devices from dropdown
4. Test all interactive features

### Devices to Test
- iPhone SE (375×667)
- iPhone 12 (390×844)
- iPad (768×1024)
- Desktop (1920×1080)

## ✅ Before Deploying

- [ ] Replace all placeholder images
- [ ] Update cart links
- [ ] Change contact information
- [ ] Test on mobile and desktop
- [ ] Check all links work
- [ ] Test gallery navigation
- [ ] Verify radio buttons work
- [ ] Check counter animation
- [ ] Test hamburger menu
- [ ] Check cross-browser compatibility
- [ ] Run accessibility tests
- [ ] Optimize images
- [ ] Clear cache and reload

## 📞 Support & Resources

### Documentation Files
- [README.md](README.md) - Project overview
- [TESTING.md](TESTING.md) - Testing guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment instructions

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [Accessibility Guide](https://www.w3.org/WAI/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [GitHub Desktop](https://desktop.github.com/) - Version control
- [Visual Studio Code Extensions](https://marketplace.visualstudio.com/)

## 🎓 Next Steps

1. **Customize the design** - Update colors, fonts, text
2. **Add real images** - Replace placeholder images
3. **Set up analytics** - Track visitor behavior
4. **Implement backend** - Add shopping cart functionality
5. **Deploy online** - Use GitHub Pages, Vercel, or Netlify
6. **Monitor performance** - Check Core Web Vitals
7. **Gather feedback** - Improve based on user input
8. **Maintain & update** - Keep content fresh

## 📄 Version Information

- **Project Version**: 1.0.0
- **Created**: January 17, 2026
- **Last Updated**: January 17, 2026
- **Status**: Ready for Production

---

**Need Help?**
1. Check TESTING.md for common issues
2. Review the code comments
3. Check your browser console for errors
4. Verify all files are in correct locations
5. Test with hard refresh (Ctrl+Shift+R)
