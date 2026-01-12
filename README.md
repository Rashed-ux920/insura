# Insura Landing Page

A modern, responsive SaaS landing page for Insura - a web-based insurance platform that automates workflows, eliminates manual forms, and streamlines insurance agency operations.

## Features

- 🎨 Modern, clean design inspired by Spotify and Stripe
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React and Tailwind CSS
- 🎯 Smooth animations and hover effects
- ♿ Accessible and semantic HTML
- 🚀 Production-ready code structure

## Tech Stack

- **React 18** - Functional components with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Color Palette

- **Deep Black**: `#0B0B0B` - Background
- **Spotify Green**: `#1DB954` - Primary color (CTAs, highlights)
- **Soft Green**: `#1ed760` - Hover states
- **White**: Text and UI elements
- **Gray shades**: Secondary text and borders

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Features grid
│   ├── HowItWorks.jsx      # Step-by-step process
│   ├── TechnicalHighlights.jsx  # Technical capabilities
│   ├── DashboardPreview.jsx     # Mock dashboard
│   ├── CTA.jsx             # Call to action section
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Sections

1. **Header** - Fixed navigation with logo and menu
2. **Hero** - Main headline and CTAs
3. **Features** - Four key platform features
4. **How It Works** - Four-step process explanation
5. **Technical Highlights** - Enterprise features
6. **Dashboard Preview** - Mock dashboard interface
7. **CTA** - Final conversion section
8. **Footer** - Links and copyright

## Customization

All colors are defined in `tailwind.config.js`. Modify the color values to match your brand:

```js
colors: {
  'spotify-green': '#1DB954',
  'deep-black': '#0B0B0B',
  'soft-green': '#1ed760',
}
```

## License

This project is created for demonstration purposes.
