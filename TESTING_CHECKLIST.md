# Vivian Home Website - Testing Checklist & Update Guide

## Purpose
This document provides a step-by-step testing checklist to verify that all website pages work correctly after any CSS or code changes. This prevents accidental side effects from breaking other pages.

---

## Pre-Update Checklist

Before making ANY changes to the website:

- [ ] Read the CSS_CLASS_MAPPING.md file to understand the class structure
- [ ] Identify which page/component you're modifying
- [ ] Find the correct CSS class names in the mapping document
- [ ] Make ONLY the necessary changes to that specific class
- [ ] Do NOT modify generic class names without the page prefix

---

## Post-Update Testing Checklist

After making changes, test ALL pages in BOTH languages (English & Myanmar):

### 1. HOME PAGE (http://localhost:4173/)

#### English Version
- [ ] Hero section displays correctly with image and text
- [ ] Hero button ("Get Started" or similar) is visible and clickable
- [ ] **Services section shows exactly 4 boxes in 2x2 grid (2 columns, 2 rows)**
- [ ] Service cards display with image, title, and description
- [ ] Service cards have proper spacing and are not squeezed
- [ ] "See All Services" button is visible and clickable
- [ ] Live Updates section displays correctly
- [ ] Feed cards display with images and dates
- [ ] Social media buttons (Facebook, YouTube, TikTok) are visible
- [ ] Myinka Connection section displays with image and link
- [ ] Footer displays correctly with all links

#### Myanmar Version (http://localhost:4173/my/)
- [ ] All sections display correctly in Myanmar language
- [ ] **Services section shows exactly 4 boxes in 2x2 grid**
- [ ] Myanmar text displays properly without overflow
- [ ] All buttons and links are functional
- [ ] Footer displays correctly

---

### 2. STORY PAGE (http://localhost:4173/story)

#### English Version
- [ ] Page title "Our Story" displays correctly
- [ ] Timeline section displays with all timeline items
- [ ] Timeline items have proper alignment and spacing
- [ ] **Values section shows exactly 5 boxes in 3-2 layout (3 boxes top, 2 centered bottom)**
- [ ] Value box titles and descriptions display correctly
- [ ] 5th value box ("Integrity, Humility, Collaboration") displays without description
- [ ] Birth section displays correctly
- [ ] Connection section displays with image and buttons
- [ ] Myinka Gallery section displays properly
- [ ] All sections have proper spacing

#### Myanmar Version (http://localhost:4173/my/story)
- [ ] All sections display correctly in Myanmar language
- [ ] **Values section shows exactly 5 boxes in 3-2 layout**
- [ ] Myanmar text displays properly without overflow
- [ ] Timeline displays correctly
- [ ] All sections have proper spacing

---

### 3. PORTFOLIO PAGE (http://localhost:4173/portfolio)

#### English Version
- [ ] Page title displays correctly
- [ ] Category filter buttons are visible and clickable
- [ ] Project gallery displays with images
- [ ] Gallery items have proper hover effects
- [ ] Gallery captions display correctly
- [ ] CTA section displays at the bottom
- [ ] All spacing and alignment look correct

#### Myanmar Version (http://localhost:4173/my/portfolio)
- [ ] All sections display correctly in Myanmar language
- [ ] Category filter works properly
- [ ] Gallery displays correctly
- [ ] Myanmar text displays without overflow

---

### 4. CONTACT PAGE (http://localhost:4173/contact)

#### English Version
- [ ] Page title "Contact Us" displays correctly
- [ ] Contact introduction text displays properly
- [ ] Contact information boxes display with phone and email
- [ ] Contact form displays with all fields:
  - [ ] Name field
  - [ ] Email field
  - [ ] Project Type dropdown (shows all 6 services)
  - [ ] Message textarea with placeholder text
  - [ ] Submit button
- [ ] Form fields have proper styling and spacing
- [ ] **Services section shows proper layout with good spacing**
- [ ] Service boxes are NOT squeezed or too narrow
- [ ] Service titles and descriptions display clearly
- [ ] "Services We Offer" heading is properly separated from boxes
- [ ] All spacing looks balanced

#### Myanmar Version (http://localhost:4173/my/contact)

**CRITICAL: This is where we made many changes. Test carefully!**

- [ ] Page title "ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ရန်" displays correctly
- [ ] Contact intro text displays: "စိတ်ကူးထဲက အိမ်လေးကို အကောင်အထည်ဖော်ဖို့ အဆင်သင့်ဖြစ်ပြီလား? ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ပြီး အကောင်းဆုံးသော ဖန်တီးမှုတွေကို အတူတူ ဖော်ဆောင်လိုက်ပါ။"
- [ ] Phone box displays with Myanmar text
- [ ] Phone description shows: "သိရှိလိုသည်များ ချက်ချင်းအကြောင်းပြန်နိုင်ရန် လုပ်ငန်းအချိန်အတွင်း ဖုန်းဆက်သွယ်မေးမြန်းနိုင်ပါသည်။"
- [ ] Email box displays with Myanmar text
- [ ] Email description shows: "အီးမေးလ်လည်းရေးသားနိုင်ပါသည်။"
- [ ] Contact form displays with all fields
- [ ] Project Type dropdown shows all 6 services in Myanmar:
  - [ ] အိမ်တွင်းအလှဆင်ခြင်း အကြံပေးဝန်ဆောင်မှု
  - [ ] ပရိဘောဂ ရွေးချယ်ခြင်းနှင့် စိတ်ကြိုက်ဖန်တီးပေးခြင်း
  - [ ] အရောင်နှင့် စတိုင်လ် ရွေးချယ်မှု အကြံပေးခြင်း
  - [ ] Home Staging
  - [ ] Project Management
  - [ ] မီးဖိုချောင်နှင့် ရေချိုးခန်း ဒီဇိုင်းဖန်တီးခြင်း
- [ ] Message textarea shows placeholder: "လူကြီးမင်းတို့ ဖန်တီးလိုသည့် အိမ်/နေရာအကြောင်း ပြောပြပေးပါ"
- [ ] Message placeholder text does NOT wrap to multiple lines (fits in one line)
- [ ] **Services section shows proper layout with good spacing**
- [ ] Service boxes are NOT squeezed
- [ ] "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ" heading is properly separated from boxes (NOT touching)
- [ ] Service titles and descriptions display clearly
- [ ] All Myanmar text displays without overflow
- [ ] All spacing looks balanced

---

### 5. HEADER & NAVIGATION (All Pages)

- [ ] Logo displays correctly on all pages
- [ ] Navigation menu displays all links
- [ ] Language toggle (EN/Myanmar) works on all pages
- [ ] Active page is highlighted in navigation
- [ ] Navigation links navigate to correct pages
- [ ] Social media buttons in header are visible

---

### 6. FOOTER (All Pages)

- [ ] Footer displays on all pages
- [ ] Footer text displays correctly
- [ ] Social media links are visible and clickable
- [ ] Footer spacing is consistent across all pages

---

### 7. RESPONSIVE DESIGN

Test on different screen sizes:

#### Tablet (768px width)
- [ ] All sections stack properly
- [ ] Text remains readable
- [ ] Images scale correctly
- [ ] Buttons are clickable
- [ ] No horizontal scrolling

#### Mobile (480px width)
- [ ] All sections stack in single column
- [ ] Text remains readable
- [ ] Images scale correctly
- [ ] Buttons are large enough to tap
- [ ] No horizontal scrolling
- [ ] Form fields are properly sized

---

### 8. CROSS-BROWSER TESTING

Test in multiple browsers:

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge (if available)

---

## Common Issues & Solutions

### Issue: Services section shows 3 boxes in top row, 1 box in bottom row

**Solution:** The `.home-services-grid` class needs `grid-template-columns: repeat(2, 1fr) !important;`

Check: `HomePage.css` line 115

---

### Issue: Contact page services section is squeezed

**Solution:** The `.contact-services-grid` class needs proper spacing

Check: `ContactPage.css` - verify the grid layout and padding

---

### Issue: Myanmar text overflows from boxes

**Solution:** Reduce font size or increase padding

Check: The specific class in the CSS file and adjust `font-size` or `padding`

---

### Issue: Values section shows wrong number of boxes

**Solution:** Check the translations file for the correct number of values

Check: `src/translations/content.js` - count the values in the array

---

## How to Report Issues

If you find an issue during testing:

1. **Note the exact issue** - What's wrong? What page? English or Myanmar?
2. **Take a screenshot** - Visual proof of the issue
3. **Check the CSS** - Use the CSS_CLASS_MAPPING.md to find the relevant class
4. **Document the fix** - Update this checklist with the solution

---

## After-Update Verification

Once you've completed all tests:

- [ ] All 4 pages load without errors
- [ ] All sections display correctly
- [ ] All text displays properly (English & Myanmar)
- [ ] All buttons and links work
- [ ] No unintended changes to other pages
- [ ] Responsive design works on all screen sizes
- [ ] No console errors in browser developer tools

---

## Deployment Checklist

Before deploying to production:

- [ ] All testing checklist items completed
- [ ] No console errors
- [ ] All changes documented in CSS_CLASS_MAPPING.md
- [ ] Create a backup/checkpoint of the current state
- [ ] Deploy changes
- [ ] Verify production website works correctly

---

## Emergency Rollback

If something breaks after deployment:

1. **Stop the server** - Kill the running process
2. **Revert the changes** - Go back to the last known good version
3. **Restart the server** - Bring the website back online
4. **Investigate** - Figure out what went wrong
5. **Test thoroughly** - Before deploying again

---

## Contact for Help

If you encounter issues or need clarification:

1. Reference the CSS_CLASS_MAPPING.md file
2. Check the detailed comments in the CSS files
3. Review this testing checklist
4. Contact the development team with:
   - Exact issue description
   - Screenshots
   - Browser and device information
   - Steps to reproduce

