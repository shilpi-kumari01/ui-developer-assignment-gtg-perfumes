# Deployment Guide

This guide explains how to deploy the GTG Perfumes website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are properly placed in `/assets` folder
- [ ] Cart links are updated to actual URLs
- [ ] Contact information is current in footer
- [ ] All links work correctly
- [ ] Website tested across browsers
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] No console errors in DevTools
- [ ] Accessibility requirements met

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

#### Prerequisites
- GitHub account
- Git installed locally

#### Steps

1. **Create a GitHub Repository**
   ```bash
   # Navigate to your project directory
   cd C:\HTMLDEVLOPER
   
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Initial commit
   git commit -m "Initial commit: GTG Perfumes website"
   ```

2. **Push to GitHub**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `gtg-perfumes` (or any name you prefer)
   - DON'T initialize with README (we already have one)
   
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gtg-perfumes.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select `main` branch
   - Click Save
   - Wait 2-3 minutes for deployment

4. **Access Your Site**
   - Your website will be available at: `https://YOUR_USERNAME.github.io/gtg-perfumes`

#### Advantages
- ✅ Free hosting
- ✅ Easy to update (just push to GitHub)
- ✅ Automatic HTTPS
- ✅ Good performance with CDN

#### Custom Domain (Optional)
1. Go to Settings > Pages
2. Under "Custom domain", enter your domain
3. Update DNS records at your domain registrar
4. GitHub will handle HTTPS automatically

---

### Option 2: Vercel (Recommended for Dynamic Content)

#### Prerequisites
- GitHub repository (or Vercel account with email)
- Vercel account (free tier available)

#### Steps

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"

2. **Import Project**
   - Click "Import Project"
   - Select "Import Git Repository"
   - Paste your GitHub repository URL
   - Click "Continue"

3. **Configure Project**
   - Project Name: `gtg-perfumes`
   - Framework: Select "Other"
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: `./`
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy automatically
   - You'll see a live preview URL
   - Copy the URL to share

#### Features
- ✅ Automatic HTTPS
- ✅ Free tier with 100GB bandwidth
- ✅ Preview for pull requests
- ✅ Analytics included
- ✅ Edge functions support

#### Update Website
1. Make changes locally
2. Commit and push to GitHub
3. Vercel automatically redeploys

---

### Option 3: Netlify (Great Alternative)

#### Prerequisites
- GitHub repository
- Netlify account

#### Steps

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up" and choose "GitHub"

2. **Authorize Netlify**
   - Click "Authorize Netlify"
   - Select your GitHub account

3. **Deploy**
   - Click "New site from Git"
   - Select your `gtg-perfumes` repository
   - Leave build settings as default
   - Click "Deploy site"

4. **Configure Domain**
   - Go to "Site settings"
   - Click "Change site name" or add custom domain
   - Your site is now live

#### Advantages
- ✅ Generous free tier
- ✅ Built-in form handling
- ✅ Automatic HTTPS
- ✅ Easy rollback
- ✅ Good CDN performance

---

### Option 4: Traditional Web Hosting

#### Steps

1. **Choose a Host**
   - Popular options: Bluehost, GoDaddy, SiteGround, Hostinger
   - Select a plan that supports static sites

2. **Upload Files**
   - Use FTP/SFTP or file manager
   - Upload all files to `public_html` directory
   - Ensure `index.html` is in root

3. **Configure Domain**
   - Point your domain to the hosting provider
   - Update DNS records
   - Wait for propagation (up to 48 hours)

4. **HTTPS**
   - Most hosts provide free SSL certificates
   - Enable HTTPS in control panel

#### Advantages
- ✅ Full control
- ✅ Affordable
- ✅ Additional storage/bandwidth
- ✅ Email hosting options

---

## 📱 Pre-Deployment Optimization

### Compress Images
Before deployment, optimize images for web:

```bash
# Using ImageMagick (if installed)
convert perfume-main.jpg -quality 85 -resize 1000x1000 perfume-main-optimized.jpg

# Online tools:
# - TinyPNG.com
# - Squoosh.app
# - ImageOptim.com
```

### Minify CSS & JavaScript (Optional)
While not required, minification reduces file size:

```bash
# Using online tools:
# CSS: CSSnano.co
# JS: Minify.tools
```

### Generate Favicons
Add a favicon to make your site recognizable:

```html
<!-- Add to <head> in index.html -->
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
```

---

## 🔍 Post-Deployment Testing

### Performance Testing
```bash
# Use Google PageSpeed Insights
https://pagespeed.web.dev/?url=YOUR_DEPLOYED_URL

# Or GTmetrix
https://gtmetrix.com/
```

### Accessibility Testing
```bash
# Use WAVE
https://wave.webaim.org/

# Or Axe
# Install Axe DevTools Chrome extension
```

### SEO Basics
```html
<!-- Update meta tags in index.html -->
<meta name="description" content="Premium fragrances and perfumes">
<meta name="keywords" content="perfume, fragrance, luxury">
<meta property="og:title" content="GTG Perfumes">
<meta property="og:description" content="Premium fragrances and perfumes">
<meta property="og:image" content="assets/perfume-main.jpg">
```

### Analytics
Add Google Analytics for traffic tracking:

```html
<!-- Add to end of <body> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🛠️ Updating Deployed Site

### With GitHub Pages
```bash
# Make changes locally
# Test thoroughly
git add .
git commit -m "Update: Description of changes"
git push origin main

# Wait 30-60 seconds for automatic deployment
```

### With Vercel or Netlify
- Push to GitHub → Automatic redeploy
- Manual redeploy in dashboard if needed

---

## 🔐 Security Considerations

### Before Going Live

1. **Remove Dummy Data**
   - [ ] Update cart URLs to actual endpoints
   - [ ] Remove placeholder email addresses
   - [ ] Update phone numbers and contact info
   - [ ] Change sample data

2. **Enable HTTPS**
   - [ ] All hosting platforms provide free HTTPS
   - [ ] Enforce HTTPS redirects

3. **Content Security Policy (Optional)**
   ```html
   <!-- Add to <head> -->
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'">
   ```

4. **Robots.txt (Optional)**
   Create `robots.txt` in root:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

---

## 📊 Deployment Comparison

| Feature | GitHub Pages | Vercel | Netlify | Traditional |
|---------|-------------|--------|---------|------------|
| Cost | Free | Free | Free | $5-15/mo |
| Setup Time | 10 min | 5 min | 5 min | 30 min |
| Custom Domain | Yes | Yes | Yes | Yes |
| HTTPS | Free | Free | Free | Free/Paid |
| Bandwidth | Unlimited | 100GB | 100GB | Varies |
| Support | Community | Good | Excellent | Varies |
| Performance | Excellent | Excellent | Excellent | Good |

---

## 🆘 Troubleshooting

### Images Not Loading
- [ ] Check file paths are relative (not absolute)
- [ ] Verify assets folder is uploaded
- [ ] Check file names match exactly (case-sensitive on Linux)

### CSS Not Applied
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Check CSS file is in `/css` folder
- [ ] Verify CSS link path in HTML

### JavaScript Not Working
- [ ] Check console for errors (F12 > Console)
- [ ] Verify JS files are uploaded
- [ ] Check script tags have correct paths
- [ ] Ensure files loaded in correct order

### Mobile Menu Not Working
- [ ] Check viewport meta tag is present
- [ ] Test in mobile device or browser dev tools
- [ ] Verify JavaScript files are loaded

### Site Too Slow
- [ ] Optimize images (compress)
- [ ] Use lazy loading
- [ ] Check network tab for slow requests
- [ ] Consider image CDN

---

## 📈 Post-Launch Optimization

1. **Monitor Performance**
   - Set up Google Analytics
   - Track Core Web Vitals
   - Monitor mobile vs desktop performance

2. **User Feedback**
   - Collect user feedback
   - Fix reported issues
   - Improve based on behavior

3. **SEO**
   - Submit sitemap to Google Search Console
   - Monitor search rankings
   - Improve meta descriptions

4. **Maintenance**
   - Regular updates
   - Security patches
   - Performance monitoring

---

## 🎯 Final Checklist

Before launching:
- [ ] Domain name configured
- [ ] HTTPS working
- [ ] Images optimized and loading
- [ ] All links working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] Analytics setup
- [ ] Monitoring enabled
- [ ] Backup created
- [ ] Documentation updated

---

**Deployment Status**: Ready for Production
**Last Updated**: January 17, 2026
