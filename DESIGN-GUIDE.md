# Clarity Cosmetics - Website Design Guide

**Generated:** 2025-11-12  
**Website:** https://claritycosmetics.co.uk

---

## Overview

Clarity Cosmetics presents a sophisticated, calming aesthetic that combines medical professionalism with a luxurious spa-like feel. The design emphasizes natural beauty, trust, and expertise in aesthetic medicine.

---

## Design Style

- **Overall Style:** Modern Medical Aesthetic / Luxury Wellness
- **Design Approach:** Clean, minimal, professional with soft feminine touches
- **Mood:** Calming, trustworthy, elegant, sophisticated
- **Visual Language:** Soft color palette, generous whitespace, professional photography, subtle animations

---

## Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Dusty Rose** | `#E5B0A4` | rgb(229, 176, 164) | Primary brand color, accent sections |
| **Sage Green** | `#588068` | rgb(88, 128, 104) | Secondary accent, testimonials section |
| **Warm Taupe** | `#E4D4C8` | rgb(228, 212, 200) | Background sections, neutral accent |
| **Mauve Brown** | `#9D8A76` | rgb(157, 138, 118) | Footer background, earth tone |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Soft Pink** | `#E1999F` | rgb(225, 153, 159) | Accent elements |
| **Off White** | `#F5F3F5` | rgb(245, 243, 245) | Background sections |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Main background, text on dark |
| **Light Gray** | `#F8F8F8` | rgb(248, 248, 248) | Subtle backgrounds |

### Text Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Charcoal** | `#333333` | rgb(51, 51, 51) | Primary text, links |
| **Dark Gray** | `#4A4A4A` | rgb(74, 74, 74) | Body text |
| **Near Black** | `#101010` | rgb(16, 16, 16) | Headings |
| **Slate Gray** | `#54595F` | rgb(84, 89, 95) | Secondary text |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds |
| **Pure Black** | `#000000` | rgb(0, 0, 0) | Strong contrast elements |

---

## Typography

### Font Families

**Primary Font (Headings):**
```css
font-family: 'Montserrat', sans-serif;
```

**Secondary Font (Body):**
```css
font-family: 'Open Sans', sans-serif;
```

### Font Specifications

#### Headings

**H1 (Main Hero Title)**
- Font: Montserrat
- Size: 45px
- Weight: 500 (Medium)
- Color: White (#FFFFFF) on hero, varies by section
- Style: Clean, professional, impactful

**H2-H4 (Section Headings)**
- Font: Montserrat
- Weight: 500-600
- Color: #333333 or contextual

#### Body Text

**Paragraphs**
- Font: Open Sans
- Color: #4A4A4A
- Style: Clean, readable, professional

**Buttons**
- Font: Montserrat
- Style: Uppercase or normal case
- Weight: Medium to Semi-bold

---

## Logo Information

### Logo Files

**Primary Logo:**
- URL: `https://claritycosmetics.co.uk/wp-content/uploads/2025/06/cqc-logo.png`
- Format: PNG with transparency
- Usage: Hero section, homepage

**Favicon:**
- URL: `https://claritycosmetics.co.uk/wp-content/uploads/2021/01/cropped-logo-fav-32x32.png`
- Size: 32x32px
- Format: PNG

**Apple Touch Icon:**
- URL: `https://claritycosmetics.co.uk/wp-content/uploads/2021/01/cropped-logo-fav-270x270.png`
- Size: 270x270px

### Logo Description

The Clarity Cosmetics logo features the CQC (Care Quality Commission) registered badge, emphasizing medical credibility and regulatory compliance. The logo uses purple/plum branding from the CQC certification, establishing trust and professional authority.

### Logo Variations

- **Standard:** Full color on light backgrounds
- **Usage Context:** Appears prominently in hero section to establish credibility immediately

---

## Button & CTA Styles

### Primary Buttons

**Style:**
```css
background-color: transparent / rgba(82, 37, 37, 0);
color: #FFFFFF;
border: 1px solid #FFFFFF;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase or normal;
padding: small to medium;
border-radius: slight or sharp edges;
```

**States:**
- Default: Outlined white text on transparent
- Hover: Likely filled background with animation
- Active: Similar to hover

**Button Text Examples:**
- "ABOUT US"
- "VIEW TREATMENT"
- "VIEW SKINCARE"
- "BOOK AN APPOINTMENT"
- "book online" (lowercase variation)

### Button Patterns

1. **Outlined White Buttons:** Used on hero/dark sections
2. **Solid Buttons:** Used in forms and CTAs
3. **Text Links:** Simple underlined or clean links for secondary actions

---

## Layout Patterns

### Grid System

**Built with:** Elementor page builder for WordPress
- Responsive column layouts
- Typical patterns: 50/50 splits, 4-column grids, single column sections
- Mobile-first responsive design

### Section Types

#### 1. Hero Section
- Full-width image background
- Overlay text (left-aligned)
- Large heading + subheading
- Primary CTA button
- CQC logo badge

#### 2. Welcome/Intro Section
- Light background (#F5F3F5)
- Centered or left-aligned text
- Multiple paragraphs
- Clean typography hierarchy

#### 3. Treatment Grid
- 4-column layout (responsive)
- Flip card interactions
- Hover reveals "VIEW TREATMENT" buttons
- Background images for each treatment

#### 4. Testimonials Section
- Sage green background (#588068)
- Carousel/slider implementation
- White text
- Progress bar pagination
- Auto-rotation

#### 5. About/Bio Section
- 50/50 split layout
- Professional photo on one side
- Biography text on other side
- Alternating layouts for visual interest

#### 6. Features/Benefits List
- Inline icon list
- Chevron icons
- Key points: Independent Prescriber, Natural Looking Results, Medical Aesthetics, Free Consultations

#### 7. Contact Form Section
- Form fields with minimal styling
- Inline layout for compact forms
- Placeholder text styling
- Icon buttons for submission

#### 8. Footer
- Warm taupe/brown background (#9D8A76)
- 3-4 column layout
- Contact information
- Site links
- Treatment links
- Social media icons
- Copyright information

---

## Image Inventory

### Hero Images

**Homepage Hero:**
- Collage style with multiple images
- Professional photos of practitioner (Claire)
- Treatment room images
- Client interaction images
- Professional medical aesthetic setting

**Key Image URLs:**

1. **Practitioner Photos (Claire):**
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/06/Headshots-5-683x1024.jpg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/06/Headshots-resized-for-web-12-683x1024.jpg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/06/Headshots-resized-for-web-13-683x1024.jpg`
   - Dimensions: 683x1024px
   - Style: Professional, approachable, medical scrubs

2. **Treatment/Clinic Images:**
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/05/image4-768x1024.jpeg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/05/image5-768x1024.jpeg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2024/05/image3-781x1024.jpeg`
   - Style: Clean, professional clinic environment

3. **Treatment Page Images:**
   - `https://claritycosmetics.co.uk/wp-content/uploads/2021/01/Homepage_-_cosmetic_insurance-1024x682.jpg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-18-at-21.27.40-3.jpeg`
   - `https://claritycosmetics.co.uk/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-18-at-21.27.40-1.jpeg`

4. **CQC Logo Badge:**
   - `https://claritycosmetics.co.uk/wp-content/uploads/2025/06/cqc-logo.png`
   - Dimensions: 714x375px
   - Prominent display for credibility

### Image Treatment Style

- **Professional Photography:** High-quality, well-lit professional photos
- **Color Grading:** Natural, warm tones that complement brand palette
- **Composition:** Clean, uncluttered, focused on subject
- **Style:** Medical professional meets approachable aesthetic

---

## Spacing & Visual Hierarchy

### Spacing System

**Whitespace Usage:**
- Generous padding between sections
- Clean breathing room around content blocks
- Balanced negative space in layouts

**Section Padding:**
- Typical vertical padding: Medium to large
- Horizontal padding: Contained width with margins

### Visual Hierarchy

1. **Primary:** Hero heading and main CTAs
2. **Secondary:** Section headings and subheadings
3. **Tertiary:** Body text and supporting information
4. **Accent:** Icons, buttons, and interactive elements

---

## Design Elements & Patterns

### Icons

**Icon Library:** Font Awesome
- Chevron circle right (feature lists)
- Syringe icon (treatment type)
- Calendar icon (results duration)
- Clock icon (treatment time)
- Heart icon (downtime)
- Pound sign (pricing)
- Phone, envelope (contact)
- Social media icons (Instagram, Facebook, TikTok)

### Interactive Elements

**Flip Cards:**
- Used for treatment showcase
- Hover effect reveals content
- Smooth animation transitions
- Background images on card front

**Carousels/Sliders:**
- Testimonials section uses Swiper.js
- Progress bar indicator
- Auto-play with pause on hover
- Touch/swipe enabled

**Animations:**
- Fade in effects
- Slide in from directions
- Float animations on hover
- Smooth transitions

### Forms

**Style:**
- Minimal border styling
- Placeholder text for labels
- Inline layout where appropriate
- Clean, modern input fields
- Submit buttons with icons

---

## Content Patterns

### Key Messaging Points

1. **Independent Prescriber** - Medical authority
2. **Natural Looking Results** - Subtle enhancements
3. **Medical Aesthetics** - Professional approach
4. **Free Consultations** - Low barrier to entry

### Tone of Voice

- Professional yet approachable
- Warm and reassuring
- Expert but not intimidating
- Focus on patient care and safety
- Emphasis on natural results

### Content Structure

**Treatment Pages:**
- Hero banner with treatment name
- Feature list badges
- Treatment information grid (type, results, time, downtime, price)
- "What is..." explanation section
- Treatment areas list
- Results description
- Before/after or process images
- Testimonials
- Contact form

---

## Technical Implementation

### Platform
- **CMS:** WordPress
- **Page Builder:** Elementor
- **Theme:** OceanWP
- **Version:** WordPress 6.8.3, Elementor 3.33.0

### Responsive Breakpoints
- Desktop: Default
- Tablet: Elementor standard breakpoints
- Mobile: Mobile-optimized layouts

### Performance
- Image optimization with lazy loading
- CDN delivery for assets
- Caching enabled

---

## Brand Keywords

- Non-surgical
- Medical aesthetics
- Regenerative treatments
- Women's intimate health
- Natural-looking enhancements
- Independent prescriber
- Bedford aesthetic clinic
- Professional
- Safe
- Trusted

---

## Social Media & External Links

### Social Platforms
- **Instagram:** [@claritybyclaire](https://www.instagram.com/claritybyclaire/)
- **Facebook:** [/claritybyclaire](https://www.facebook.com/claritybyclaire)
- **TikTok:** [@clarity.cosmetics](https://www.tiktok.com/@clarity.cosmetics)

### Booking Platform
- **Phorest:** https://phorest.com/book/salons/claritycosmeticsltd

---

## Contact Information

**Phone:** 07929 802094  
**Email:** info@claritycosmetics.co.uk  
**Address:** Conway Crescent, Bedford, MK41 7BW

---

## Design Best Practices (Based on Current Site)

1. **Maintain soft, calming color palette** - Don't introduce harsh or overly vibrant colors
2. **Use professional photography** - High-quality images of practitioner and clinic
3. **Emphasize credentials** - CQC registration, qualifications visible
4. **Natural aesthetic focus** - Copy and design should emphasize subtle, natural results
5. **Trust indicators** - Testimonials, certifications, professional imagery
6. **Clear CTAs** - Multiple booking opportunities throughout site
7. **Mobile optimization** - Ensure all layouts work on mobile devices
8. **Generous whitespace** - Don't overcrowd sections
9. **Consistent typography** - Stick to Montserrat and Open Sans
10. **Professional tone** - Balance medical expertise with approachability

---

## Website Structure

### Main Navigation
- About
- Face (dropdown menu)
- Body (dropdown menu)
- Intimate (dropdown menu)
- Memberships
- Contact

### Key Pages
- Home
- About
- Gallery
- Contact
- Individual treatment pages (Anti-wrinkle, Dermal Fillers, Lip Enhancements, etc.)
- Terms and Conditions
- Privacy Policy
- Wheelchair Access Statement

---

## Competitor Differentiation

**What Makes Clarity Cosmetics Stand Out:**
1. CQC registered facility
2. Independent prescriber qualification
3. Registered midwife background
4. Focus on women's intimate health
5. Natural-looking results philosophy
6. Medical professional rather than beautician approach

---

*This design guide should be used as a reference for maintaining brand consistency across all digital and print materials for Clarity Cosmetics.*
