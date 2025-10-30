# AutoDrive - Modern Automotive Landing Page

A modern, responsive landing page for AutoDrive, a fictional electric vehicle brand showcasing performance, sustainability, and cutting-edge technology.

## Overview

This project is a single-page marketing website built with Next.js and Tailwind CSS, featuring a stunning hero section, vehicle showcase, specifications comparison, technology highlights, and customer testimonials.

## Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Hero Section**: Full-viewport hero with compelling headline and call-to-action buttons
- **Features Grid**: Showcasing 4 key benefits with icons and hover effects
- **Vehicle Showcase**: 3 vehicle models with detailed specifications and pricing
- **Interactive Specs Table**: Tab-based comparison table for different models
- **Technology Section**: Split-screen layout highlighting cutting-edge features
- **Testimonials**: Customer reviews with 5-star ratings
- **Sticky Navigation**: Fixed navigation bar with smooth scrolling
- **Modern Animations**: Subtle hover effects and transitions throughout

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (inline with @theme)
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Node.js host

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd automotive-demo
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:3000
```

The page will automatically reload when you make changes.

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and brand colors
├── public/               # Static assets
├── package.json          # Dependencies
└── README.md            # This file
```

## Key Sections

### 1. Hero Section
- Full-viewport height with background image
- Compelling headline: "Experience the Future of Driving"
- Two primary CTAs: Configure and Schedule Test Drive
- Smooth scroll indicator

### 2. Features Section
- **Lightning Fast**: 0-100 km/h in 3.2 seconds
- **Extended Range**: Up to 600km on single charge
- **Smart Technology**: AI-powered driving assistance
- **Sustainable**: 100% renewable energy compatible

### 3. Vehicle Lineup
- **AutoDrive Sport**: Performance focused ($79,990)
- **AutoDrive Luxury**: Premium comfort ($94,990)
- **AutoDrive Urban**: City-friendly compact ($54,990)

### 4. Technical Specifications
Interactive comparison table with tabs for:
- Battery capacity
- Range (EPA estimated)
- Top speed
- Acceleration
- Charging time
- Seating capacity
- Cargo space
- Warranty details

### 5. Technology Highlights
- Autopilot & Safety Features
- Premium Infotainment System
- Over-the-Air Updates
- Mobile App Integration

### 6. Customer Testimonials
Three featured reviews from satisfied customers with 5-star ratings

### 7. Call-to-Action
Final conversion section with vehicle delivery count and action buttons

### 8. Footer
Complete footer with:
- Navigation links
- Social media icons
- Copyright information
- Privacy policy and terms links

## Brand Colors

- **Primary**: Electric Blue (#0066FF)
- **Secondary**: Deep Black (#0A0A0A)
- **Accent**: Bright White (#FFFFFF)
- **Success**: Electric Green (#00FF88)
- **Neutral**: Soft Gray (#F5F5F5)

## Customization

### Changing Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #0066ff;
  --secondary: #0a0a0a;
  --success: #00ff88;
  /* Add more custom colors */
}
```

### Updating Content
All content is inline in `app/page.tsx` for easy editing:
- Vehicle models and specifications
- Feature descriptions
- Testimonials
- Pricing information

### Adding Images
Replace Unsplash placeholder URLs with your own images:
1. Add images to the `public/` folder
2. Update image URLs in `page.tsx`
3. Use Next.js `Image` component for optimization

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in Vercel
3. Set the root directory to `frontend`
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for below-the-fold content
- CSS-in-JS with Tailwind for minimal bundle size
- Fast page loads with Next.js App Router
- Automatic code splitting

## Accessibility

- Semantic HTML5 elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Alt text for all images (when replacing placeholders)
- Responsive touch targets (44x44px minimum)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Future Enhancements

Potential features for future versions:
- Vehicle configurator tool
- Test drive booking system
- Live chat support
- 360° vehicle viewer
- Charging station locator
- Financing calculator
- Blog/news section

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue.

## License

This is a demo project for educational and portfolio purposes.

## Contact

For questions or feedback about this project, please reach out through the repository issues.

---

Built with Next.js and Tailwind CSS | © 2025 AutoDrive Demo
