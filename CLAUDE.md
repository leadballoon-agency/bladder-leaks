# CO2 Laser Landing Page - Claude Instructions

## Project Overview
CO2 laser treatment landing page built with Next.js 15, TypeScript, and Tailwind CSS. This is a template that can be duplicated and customized for different aesthetic clinics.

## Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Development Commands
```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## MCP Server Configurations
Available MCP servers for this project:
- **Notion**: For documentation and process management
- **Playwright**: For automated testing and screenshots
- **Context7**: For context management
- **Firecrawl**: For web scraping and content extraction

## Project Structure
```
/app
  ├── layout.tsx          # Root layout with SEO metadata
  ├── page.tsx           # Main page wrapper
  ├── globals.css        # Global styles
  └── api/contact/       # Contact form API endpoint
/components
  ├── PageWrapper.tsx    # Main page component orchestrator
  ├── Navigation.tsx     # Header navigation with booking
  ├── PremiumHero.tsx    # Hero section
  ├── AboutSection.tsx   # About the clinic
  ├── TeamSection.tsx    # Team/practitioner info
  ├── AssessmentTool.tsx # Skin assessment questionnaire
  ├── PremiumTreatments.tsx # Treatment options
  ├── ResultsGallery.tsx # Before/after gallery
  ├── ProcessSection.tsx # Treatment process
  ├── FAQ.tsx           # Frequently asked questions
  ├── CTASection.tsx    # Call to action
  ├── Footer.tsx        # Footer with contact info
  └── BookingModal.tsx  # Booking form modal
/public/images/
  ├── logo.png          # Main logo (navigation)
  ├── footer.png        # Footer logo
  ├── home1.jpg         # Hero image
  ├── beforeafter*.jpg  # Results gallery images
  └── treatment.jpg     # Treatment images
```

## Customization Checklist
When creating a new clinic version:

### 1. Branding & Images
- [ ] Replace logo.png with new clinic logo
- [ ] Replace footer.png with new footer logo
- [ ] Update hero images (home1.jpg, home2.jpg)
- [ ] Replace before/after gallery images
- [ ] Update treatment images

### 2. Contact Information
- [ ] components/Footer.tsx - Contact details, address
- [ ] components/Navigation.tsx - Any contact links
- [ ] README.md - Contact information
- [ ] app/layout.tsx - SEO metadata

### 3. SEO & Metadata
- [ ] app/layout.tsx - title, description, keywords
- [ ] Update business name throughout
- [ ] Location-specific keywords

### 4. Content Customization
- [ ] Business name and description
- [ ] Team/practitioner information
- [ ] Location and address
- [ ] Phone and email
- [ ] Treatment descriptions
- [ ] Pricing (if applicable)
- [ ] FAQ answers

### 5. Testing
- [ ] npm run build (ensure builds successfully)
- [ ] npm run lint (fix any linting issues)
- [ ] Test all forms and modals
- [ ] Verify responsive design
- [ ] Check all links and navigation

## Key Files to Customize

### High Priority (Must Change)
1. `components/Footer.tsx` - Contact info, business name, logo
2. `app/layout.tsx` - SEO metadata, business name
3. `README.md` - Project description, contact info
4. `/public/images/logo.png` - Main navigation logo
5. `/public/images/footer.png` - Footer logo

### Medium Priority (Should Change)
1. `components/PremiumHero.tsx` - Hero copy and messaging
2. `components/AboutSection.tsx` - Business description
3. `components/TeamSection.tsx` - Practitioner information
4. Hero and gallery images in `/public/images/`

### Low Priority (Optional)
1. Color scheme in Tailwind config
2. Component styling adjustments
3. Additional content sections

## Domain Setup
- Update package.json name field
- Configure Vercel deployment for new domain
- Update any hardcoded URLs

## Notes
- All components use TypeScript strict mode
- Responsive design mobile-first
- Uses Tailwind CSS custom color palette
- Form submissions go to /api/contact endpoint
- Booking modal integrates with assessment tool