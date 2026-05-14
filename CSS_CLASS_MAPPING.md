# Vivian Home Website - CSS Class Mapping & Documentation

## Overview
This document maps all CSS classes used in the Vivian Home website to prevent naming conflicts and ensure change-resistant code. Each class is prefixed with its page or component name to ensure uniqueness.

## Naming Convention
- **Page-specific classes:** `{page}-{component}` (e.g., `home-service-card`, `contact-form-group`)
- **Component classes:** `{component}-{element}` (e.g., `header-nav`, `footer-social`)
- **Utility classes:** Prefixed with `util-` (e.g., `util-btn-primary`)

---

## CSS Class Mapping by File

### 1. App.css (Global Styles)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.btn` | `.util-btn` | Base button style | All pages |
| `.btn-primary` | `.util-btn-primary` | Primary button | All pages |
| `.btn-secondary` | `.util-btn-secondary` | Secondary button | All pages |
| `.loading` | `.util-loading` | Loading animation | All pages |
| `.success-message` | `.util-success-message` | Success notification | Contact page |

### 2. index.css (Base Styles)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| Global styles | No changes | Base typography, colors | All pages |

### 3. Header.css (Header Component)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.header` | `.header-container` | Header wrapper | All pages |
| `.header-top` | `.header-top` | Top navigation area | All pages |
| `.header-bottom` | `.header-bottom` | Bottom navigation area | All pages |
| `.header-controls` | `.header-controls` | Language/menu controls | All pages |
| `.logo-section` | `.header-logo-section` | Logo area | All pages |
| `.logo-image` | `.header-logo-image` | Logo image | All pages |
| `.logo-placeholder` | `.header-logo-placeholder` | Logo placeholder | All pages |
| `.nav` | `.header-nav` | Navigation menu | All pages |
| `.nav-link` | `.header-nav-link` | Individual nav link | All pages |
| `.nav-link.active` | `.header-nav-link.active` | Active nav link | All pages |
| `.language-toggle` | `.header-language-toggle` | Language switcher | All pages |
| `.social-buttons` | `.header-social-buttons` | Social media buttons | All pages |
| `.social-btn` | `.header-social-btn` | Individual social button | All pages |

### 4. Footer.css (Footer Component)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.footer` | `.footer-container` | Footer wrapper | All pages |
| `.footer-container` | `.footer-content` | Footer content area | All pages |
| `.footer-section` | `.footer-section` | Footer section (no change needed) | All pages |
| `.footer-social` | `.footer-social-links` | Social links in footer | All pages |
| `.social-links` | `.footer-social-links` | Social links wrapper | All pages |

### 5. HomePage.css (Home Page)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.home-page` | `.home-page` | Page wrapper (no change) | Home page |
| `.hero` | `.home-hero` | Hero section | Home page |
| `.hero-content` | `.home-hero-content` | Hero content | Home page |
| `.hero-image` | `.home-hero-image` | Hero image | Home page |
| `.hero-description` | `.home-hero-description` | Hero description | Home page |
| `.services` | `.home-services` | Services section wrapper | Home page |
| `.services h2` | `.home-services h2` | Services heading | Home page |
| `.services-grid` | `.home-services-grid` | Services grid layout | Home page |
| `.service-card` | `.home-service-card` | Individual service card | Home page |
| `.service-image` | `.home-service-image` | Service image | Home page |
| `.service-content` | `.home-service-content` | Service content area | Home page |
| `.service-header` | `.home-service-header` | Service header | Home page |
| `.service-icon` | `.home-service-icon` | Service icon | Home page |
| `.service-text` | `.home-service-text` | Service text | Home page |
| `.live-feed` | `.home-live-feed` | Live updates section | Home page |
| `.feed-grid` | `.home-feed-grid` | Feed grid layout | Home page |
| `.feed-card` | `.home-feed-card` | Individual feed card | Home page |
| `.feed-image` | `.home-feed-image` | Feed image | Home page |
| `.feed-content` | `.home-feed-content` | Feed content | Home page |
| `.feed-date` | `.home-feed-date` | Feed date | Home page |
| `.feed-source` | `.home-feed-source` | Feed source | Home page |
| `.feed-cta` | `.home-feed-cta` | Feed call-to-action | Home page |
| `.see-all-services-btn` | `.home-see-all-services-btn` | See all services button | Home page |

### 6. StoryPage.css (Story Page)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.story-page` | `.story-page` | Page wrapper (no change) | Story page |
| `.story-container` | `.story-container` | Story content wrapper | Story page |
| `.story-intro` | `.story-intro` | Story introduction | Story page |
| `.story-timeline` | `.story-timeline` | Timeline section | Story page |
| `.timeline-item` | `.story-timeline-item` | Individual timeline item | Story page |
| `.timeline-dot` | `.story-timeline-dot` | Timeline dot marker | Story page |
| `.timeline-line` | `.story-timeline-line` | Timeline connecting line | Story page |
| `.timeline-marker` | `.story-timeline-marker` | Timeline marker | Story page |
| `.timeline-image` | `.story-timeline-image` | Timeline image | Story page |
| `.timeline-content` | `.story-timeline-content` | Timeline content | Story page |
| `.values-section` | `.story-values-section` | Values section | Story page |
| `.values-grid` | `.story-values-grid` | Values grid layout | Story page |
| `.value-card` | `.story-value-card` | Individual value card | Story page |
| `.birth-section` | `.story-birth-section` | Birth section | Story page |
| `.birth-text` | `.story-birth-text` | Birth text | Story page |
| `.connection-section` | `.story-connection-section` | Connection section | Story page |
| `.connection-content` | `.story-connection-content` | Connection content | Story page |
| `.connection-image` | `.story-connection-image` | Connection image | Story page |
| `.connection-buttons` | `.story-connection-buttons` | Connection buttons | Story page |
| `.myinka-connection` | `.story-myinka-connection` | Myinka connection section | Story page |
| `.myinka-gallery-section` | `.story-myinka-gallery-section` | Myinka gallery | Story page |
| `.myinka-showcase-image` | `.story-myinka-showcase-image` | Myinka showcase image | Story page |
| `.myinka-link` | `.story-myinka-link` | Myinka link | Story page |

### 7. PortfolioPage.css (Portfolio Page)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.portfolio-page` | `.portfolio-page` | Page wrapper (no change) | Portfolio page |
| `.portfolio-header` | `.portfolio-header` | Portfolio header | Portfolio page |
| `.portfolio-intro` | `.portfolio-intro` | Portfolio introduction | Portfolio page |
| `.portfolio-cta` | `.portfolio-cta` | Portfolio CTA section | Portfolio page |
| `.category-filter` | `.portfolio-category-filter` | Category filter | Portfolio page |
| `.category-btn` | `.portfolio-category-btn` | Category button | Portfolio page |
| `.projects-gallery` | `.portfolio-projects-gallery` | Projects gallery | Portfolio page |
| `.project-gallery-item` | `.portfolio-project-item` | Individual project | Portfolio page |
| `.project-image-wrapper` | `.portfolio-project-image` | Project image wrapper | Portfolio page |
| `.project-overlay` | `.portfolio-project-overlay` | Project overlay | Portfolio page |
| `.gallery-grid` | `.portfolio-gallery-grid` | Gallery grid | Portfolio page |
| `.gallery-item` | `.portfolio-gallery-item` | Gallery item | Portfolio page |
| `.gallery-image` | `.portfolio-gallery-image` | Gallery image | Portfolio page |
| `.gallery-caption` | `.portfolio-gallery-caption` | Gallery caption | Portfolio page |

### 8. ContactPage.css (Contact Page)
| Old Class | New Class | Purpose | Used In |
|-----------|-----------|---------|---------|
| `.contact-page` | `.contact-page` | Page wrapper (no change) | Contact page |
| `.contact-container` | `.contact-container` | Contact content wrapper | Contact page |
| `.contact-intro` | `.contact-intro` | Contact introduction | Contact page |
| `.contact-content` | `.contact-content` | Contact content area | Contact page |
| `.contact-info` | `.contact-info` | Contact information boxes | Contact page |
| `.info-card` | `.contact-info-card` | Individual info card | Contact page |
| `.contact-form` | `.contact-form` | Contact form wrapper | Contact page |
| `.contact-form-section` | `.contact-form-section` | Form section | Contact page |
| `.form-group` | `.contact-form-group` | Form group (label + input) | Contact page |
| `.services-offered` | `.contact-services-offered` | Services offered section | Contact page |
| `.services-section` | `.contact-services-section` | Services section wrapper | Contact page |
| `.services-grid` | `.contact-services-grid` | Services grid layout | Contact page |
| `.service-card` | `.contact-service-card` | Individual service card | Contact page |
| `.service-image` | `.contact-service-image` | Service image | Contact page |
| `.service-content` | `.contact-service-content` | Service content | Contact page |
| `.service-header` | `.contact-service-header` | Service header | Contact page |
| `.service-icon` | `.contact-service-icon` | Service icon | Contact page |
| `.service-text` | `.contact-service-text` | Service text | Contact page |
| `.submit-btn` | `.contact-submit-btn` | Submit button | Contact page |

---

## Conflict Prevention Rules

1. **Never use generic class names** - Always prefix with page or component name
2. **Test all pages after CSS changes** - Use the testing checklist
3. **Document new classes** - Add to this file before deploying
4. **Use specific selectors** - Avoid overly broad selectors like `div`, `p`, etc.
5. **Avoid !important** - Use proper CSS specificity instead

---

## Testing Checklist (After Any CSS Changes)

- [ ] Home page - Hero section displays correctly
- [ ] Home page - Services grid shows 2x2 layout (4 boxes)
- [ ] Home page - Live feed section displays properly
- [ ] Story page - Timeline displays correctly
- [ ] Story page - Values section shows 3-2 layout (5 boxes)
- [ ] Story page - All sections have proper spacing
- [ ] Portfolio page - Gallery displays correctly
- [ ] Portfolio page - Category filter works
- [ ] Contact page - Form displays correctly
- [ ] Contact page - Services section shows proper layout
- [ ] Contact page - All form inputs are functional
- [ ] Header - Navigation links work on all pages
- [ ] Footer - Social links work on all pages
- [ ] Mobile responsiveness - Check on tablet and mobile
- [ ] Both languages - English and Myanmar text display correctly

---

## How to Update CSS Safely

1. **Identify the component** - Which page/component needs updating?
2. **Find the correct class** - Use this mapping to find the exact class name
3. **Make the change** - Update only that specific class
4. **Update this document** - If adding new classes, add them here
5. **Run the testing checklist** - Verify no other pages are affected
6. **Deploy** - Push the changes to the live server

---

## Contact for Updates

If you need to make CSS changes in the future:
1. Reference this document first
2. Use the exact class names listed here
3. Follow the naming convention for any new classes
4. Run the testing checklist before deploying
5. Update this document with any new classes

