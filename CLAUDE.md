# DR. Moghazy — Hair Restoration & Cosmetic Surgery Website

## Tech Stack
- React 19 + Vite 8
- Custom CSS3 (no Tailwind)
- Google Fonts (Inter)

## Project Structure
```
src/
  components/   Header, Hero, Stats, Services, Testimonials, CTA, Footer
  styles/       variables.css, global.css, per-component CSS
```

## Commands
- `npm run dev`     Start dev server
- `npm run build`   Production build
- `npm run preview` Preview production build

## Design System
- Navy: #1e3a5f  |  Sky: #4da6d6  |  Lime: #c4e538
- Font: Inter 400/600/700/800
- Parallax on Hero via scroll event + transform translateY
- Animations via IntersectionObserver + .fade-in / .visible CSS classes
- Count-up numbers in Stats on scroll

## Key Features
- Parallax hero background
- Animated count-up stats
- Responsive (mobile / tablet / desktop)
- Testimonials carousel with dots
- Smooth scroll navigation
