# Testing Guide

This document outlines how to test all features of the GTG Perfumes webpage.

## 🧪 Feature Testing Checklist

### 1. Responsive Design Testing

#### Desktop (1024px and above)
- [ ] Navigation menu is visible horizontally
- [ ] Header layout is not compressed
- [ ] Product section shows gallery and info side-by-side
- [ ] Stats section displays 4 columns
- [ ] Table displays all columns properly

#### Tablet (768px - 1024px)
- [ ] Navigation menu transitions to hamburger for sizes < 768px
- [ ] Layout remains mostly 2-column
- [ ] Hamburger menu appears at 768px and below
- [ ] Mobile menu is hidden by default
- [ ] Content is readable without horizontal scrolling

#### Mobile (480px - 768px)
- [ ] Hamburger menu is visible and functional
- [ ] Layout switches to single column
- [ ] Product gallery and info stack vertically
- [ ] Stats section shows 2 columns
- [ ] Table is responsive without overflow
- [ ] Images scale appropriately
- [ ] Touch targets (buttons) are at least 44px × 44px

#### Small Mobile (320px - 480px)
- [ ] All content is accessible without horizontal scrolling
- [ ] Font sizes are readable
- [ ] Spacing is appropriate for small screens
- [ ] Images don't overflow
- [ ] Buttons are easily tappable

### 2. Navigation & Header Testing

#### Desktop Navigation
- [ ] Header is sticky (stays at top while scrolling)
- [ ] All nav links work correctly
- [ ] Hover effect shows underline animation
- [ ] Links are in correct order: Home, Products, About, Contact

#### Mobile/Hamburger Menu
- [ ] Hamburger button appears on mobile
- [ ] Clicking hamburger opens menu
- [ ] Menu slides down and displays all links
- [ ] Clicking a menu link closes the menu
- [ ] Clicking outside menu closes it
- [ ] Pressing Escape key closes menu
- [ ] Menu disables body scroll when open
- [ ] Hamburger icon animates (X animation)

### 3. Product Gallery Testing

#### Image Navigation (Arrows)
- [ ] Previous button shows previous image
- [ ] Next button shows next image
- [ ] Clicking prev on first image shows last image
- [ ] Clicking next on last image shows first image
- [ ] Images transition smoothly with fade effect

#### Dot Navigation
- [ ] All dots are visible and clickable
- [ ] Active dot is highlighted (different color/size)
- [ ] Clicking a dot navigates to that image
- [ ] Active dot updates when using arrows

#### Thumbnail Navigation
- [ ] All thumbnails are visible
- [ ] Clicking a thumbnail shows the corresponding main image
- [ ] Active thumbnail has border/highlight
- [ ] Thumbnails update when using arrows or dots

#### Keyboard Navigation
- [ ] Left arrow key goes to previous image
- [ ] Right arrow key goes to next image
- [ ] Navigation loops (wraps around at ends)

#### Image Loading
- [ ] Main image loads and displays
- [ ] Thumbnails load with `loading="lazy"` attribute
- [ ] No broken image icons appear

### 4. Radio Button Selection Testing

#### Fragrance Selection (Single Subscription)
- [ ] Rose Elegance is selected by default
- [ ] Can switch to Vanilla Sunset
- [ ] Can switch to Ocean Breeze
- [ ] Only one fragrance can be selected at a time
- [ ] Selection persists when changing purchase type

#### Fragrance Selection (Purchase Type)
- [ ] Single Purchase is selected by default
- [ ] Can switch to Single Subscription
- [ ] Can switch to Double Subscription
- [ ] Only one purchase type can be selected at a time
- [ ] Selection persists when changing fragrance

#### Visual Feedback
- [ ] Radio buttons have proper styling
- [ ] Hover state shows on radio labels
- [ ] Selected radio has checkmark/filled circle
- [ ] Contrast is sufficient for readability

### 5. Add to Cart Dynamic Link Testing

Test all 9 combinations:

**With Rose Elegance:**
- [ ] Single Purchase → `..cart/rose-elegance-single`
- [ ] Single Subscription → `..cart/rose-elegance-single-subscription`
- [ ] Double Subscription → `..cart/rose-elegance-double-subscription`

**With Vanilla Sunset:**
- [ ] Single Purchase → `..cart/vanilla-sunset-single`
- [ ] Single Subscription → `..cart/vanilla-sunset-single-subscription`
- [ ] Double Subscription → `..cart/vanilla-sunset-double-subscription`

**With Ocean Breeze:**
- [ ] Single Purchase → `..cart/ocean-breeze-single`
- [ ] Single Subscription → `..cart/ocean-breeze-single-subscription`
- [ ] Double Subscription → `..cart/ocean-breeze-double-subscription`

**Verification Method:**
1. Open browser DevTools (F12)
2. Go to Elements/Inspector tab
3. Right-click Add to Cart button > Inspect
4. Check the `href` attribute matches expected URL
5. Or hover over button to see the link preview

### 6. Subscription Details Testing

#### Single Purchase (Default)
- [ ] No subscription details section displayed
- [ ] Clean product information layout

#### Single Subscription Selected
- [ ] Details section appears
- [ ] Shows title "Single Subscription"
- [ ] Displays price as "$71.99/month"
- [ ] Shows 20% discount savings
- [ ] Monthly auto-delivery text visible
- [ ] "No long-term commitment" visible
- [ ] Information box shows subscription benefits
- [ ] Section animates smoothly

#### Double Subscription Selected
- [ ] Details section appears with different content
- [ ] Shows title "Double Subscription"
- [ ] Displays price as "$125.99/month"
- [ ] Shows 30% discount savings
- [ ] Two bottles mentioned
- [ ] Monthly auto-delivery visible
- [ ] "No long-term commitment" visible
- [ ] Information box shows correct benefits

#### Switching Between Types
- [ ] Switching from Single Sub → Double Sub updates details
- [ ] Switching from Double Sub → Single Purchase removes details
- [ ] Smooth transitions with no layout shift

### 7. Statistics Counter Animation Testing

#### Visibility Trigger
- [ ] Numbers start at 0 when page loads (if visible)
- [ ] Numbers animate when stats section scrolls into view
- [ ] Animation doesn't restart on re-scroll (only once)
- [ ] Numbers reach target values: 84%, 78%, 92%, 88%

#### Animation Quality
- [ ] Counter increments smoothly (not jerky)
- [ ] Animation takes approximately 2 seconds
- [ ] Easing function creates natural acceleration/deceleration
- [ ] Numbers don't overshoot target values

#### Different Scroll Scenarios
- [ ] Stats visible on initial page load → animates immediately
- [ ] Stats below fold → animates when scrolled into view
- [ ] Scrolling past and back up → doesn't re-animate
- [ ] Soft refresh → animation triggers again

### 8. Product Comparison Table Testing

#### Table Structure
- [ ] Table header row is visible
- [ ] Column headers: Feature, Rose Elegance, Vanilla Sunset, Ocean Breeze
- [ ] All 5 data rows display correctly:
  - [ ] Longevity
  - [ ] Projection
  - [ ] Best For
  - [ ] Bottle Size
  - [ ] Price
- [ ] Table has proper borders and spacing

#### Desktop Display
- [ ] All columns are visible without scrolling
- [ ] Text is readable and not truncated
- [ ] Hover effect on rows changes background color
- [ ] Even rows have background shading for readability

#### Mobile Display (Responsive)
- [ ] Table doesn't overflow screen width
- [ ] Content remains readable
- [ ] Font sizes are appropriate
- [ ] Possible implementations:
  - [ ] Horizontal scroll (if needed)
  - [ ] Vertical list layout
  - [ ] Responsive design adapts

### 9. Cross-Browser Testing

#### Chrome
- [ ] All features work correctly
- [ ] Styling appears as intended
- [ ] Animations are smooth
- [ ] Images load properly

#### Firefox
- [ ] All features work correctly
- [ ] Styling appears as intended
- [ ] Animations are smooth
- [ ] Images load properly
- [ ] No console errors

#### Safari
- [ ] All features work correctly
- [ ] Styling appears as intended
- [ ] Animations are smooth (may need -webkit prefix check)
- [ ] Images load properly
- [ ] Sticky header works

#### Edge
- [ ] All features work correctly
- [ ] Styling appears as intended
- [ ] Animations are smooth
- [ ] Images load properly

### 10. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Focus indicator is visible on all focusable elements
- [ ] Enter/Space activates buttons and radio buttons
- [ ] Escape closes mobile menu
- [ ] Arrow keys navigate gallery images
- [ ] Tab order is logical

#### Screen Reader Testing
- [ ] Header navigation is announced properly
- [ ] Radio buttons are announced with labels
- [ ] Images have alt text (or aria-label)
- [ ] Button purposes are clear
- [ ] Form labels are associated with inputs

#### Color & Contrast
- [ ] Text meets WCAG AA contrast ratio (4.5:1 for normal text)
- [ ] Links are distinguishable (not color alone)
- [ ] Color is not the only indicator of state

#### Mobile Accessibility
- [ ] Touch targets are at least 44×44 pixels
- [ ] Buttons have adequate spacing
- [ ] Text is readable without zooming
- [ ] Content adjusts for text resizing

### 11. Performance Testing

#### Image Loading
- [ ] Images load with lazy loading attribute
- [ ] No unnecessary image files downloaded on initial load
- [ ] Images load when they come into viewport
- [ ] Image quality is acceptable

#### Page Performance
- [ ] Page loads in under 3 seconds on decent connection
- [ ] No layout shift (CLS) when images load
- [ ] Smooth scrolling (60fps target)
- [ ] Animations don't cause stuttering

#### CSS & JavaScript Optimization
- [ ] No unused CSS rules
- [ ] JavaScript files are minified (optional)
- [ ] Event listeners are cleaned up properly
- [ ] No memory leaks on page interaction

### 12. Form Elements Testing

#### Input Interactions
- [ ] Radio buttons toggle properly
- [ ] Clicking label also selects radio
- [ ] Multiple selections are prevented
- [ ] Visual states are clear (checked/unchecked)

#### Buttons
- [ ] All buttons have hover states
- [ ] Buttons provide visual feedback on click
- [ ] Links inside buttons work correctly
- [ ] Button text is clear and descriptive

## 🔧 Testing Tools

### Browser DevTools
```javascript
// Test responsive design
// Press F12 → Toggle device toolbar (Ctrl+Shift+M)
```

### Testing Commands
```bash
# Start local server
python -m http.server 8000

# Or use Node
npx http-server

# Then visit
http://localhost:8000
```

### Accessibility Testing
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Performance Testing
- Chrome DevTools > Performance tab
- Chrome DevTools > Network tab
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 📋 Test Report Template

```
Date: ___________
Tester: ___________
Browser: ___________
Device: ___________

Feature: ___________
Status: ☐ Passed ☐ Failed
Notes: ___________

Bugs Found:
1. ___________
   Severity: ☐ Critical ☐ High ☐ Medium ☐ Low
   
Screenshots: ___________
```

## 🐛 Known Issues & Limitations

- Placeholder images need to be replaced with actual Figma exports
- Cart links are dummy URLs (need to be updated)
- Email addresses are placeholder values
- No backend integration for actual cart functionality

## ✅ Sign-off

- [ ] All tests passed
- [ ] No critical bugs found
- [ ] Code quality is acceptable
- [ ] Ready for production deployment
