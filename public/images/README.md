# Image Organization for Tress Theory

Place your images in the following structure:

## Logos
- `logo.png` - Main logo for navigation header
- `logo-footer.png` - Footer version (if different)

## Gallery (Showcase your work)
- `gallery/haircut-1.jpg`
- `gallery/haircut-2.jpg` 
- `gallery/color-work-1.jpg`
- `gallery/styling-1.jpg`
- etc.

## Team Photos
- `team/stylist-name.jpg`
- `team/owner.jpg`
- etc.

## Backgrounds
- `hero-background.jpg` - Main hero section background
- `salon-interior.jpg` - Interior shots for about section

## Usage in Components:
```jsx
<img src="/images/logo.png" alt="Tress Theory Logo" />
<img src="/images/gallery/haircut-1.jpg" alt="Stylish haircut" />
```

## Usage in CSS:
```css
.hero {
  background-image: url('/images/hero-background.jpg');
}
```
