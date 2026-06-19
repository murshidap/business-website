# GeekTech Business Website

## Project Overview
This project is a complete responsive business website created for the Week 4 internship project. It represents **GeekTech**, a fictional professional technology services company that offers web development, app development, and UI/UX design solutions.

## Project Objective
The main goal of this project is to demonstrate:
- Responsive web design
- Multi-page website architecture
- Interactive JavaScript features
- Accessibility improvements
- Deployment readiness

## Features
- Multi-page website
- Responsive layout
- Mobile navigation
- Contact form validation
- Dark mode
- Scroll animations
- Interactive service cards
- Responsive design
- Accessibility improvements
- Smooth scrolling
- Hover effects

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- LocalStorage

## Folder Structure
```text
week4/
|-- index.html
|-- about.html
|-- services.html
|-- contact.html
|-- README.md
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
`-- images/
    |-- hero.jpg
    |-- about.jpg
    |-- service1.jpg
    |-- service2.jpg
    |-- service3.jpg
    `-- logo.jpg
```

## Design Decisions
### Color palette
The website uses a technology-inspired palette with cyan, blue, and soft mint accents against light and dark surfaces. This creates a modern business feel while maintaining readable contrast.

### Typography choices
`Space Grotesk` is used for headings to create a modern, confident tone, while `Manrope` is used for body text to keep content clean and easy to read.

### Layout system
The layout uses reusable containers, card patterns, Flexbox, and CSS Grid so sections remain consistent across all pages.

### Responsive strategy
The design follows a mobile-first approach. Navigation collapses on smaller screens, content stacks vertically, and layouts expand into columns for larger devices.

### Accessibility choices
Semantic HTML, skip links, focus-visible styles, proper labels, ARIA attributes, readable contrast, and alt text are included to make the interface more inclusive.

## JavaScript Features
- **Form validation:** Validates name, email, subject, and message fields with reusable helper functions.
- **Event listeners:** Used for navigation toggling, button interactions, theme switching, scroll handling, and form behavior.
- **DOM manipulation:** Updates active navigation links, validation messages, service card states, and typing text.
- **LocalStorage:** Saves the dark mode preference and restores it when the page reloads.
- **Scroll animations:** Uses Intersection Observer for reveal-on-scroll effects.
- **Mobile navigation:** Supports a keyboard-friendly hamburger menu for smaller screens.

## Responsive Design Approach
- Mobile-first strategy
- Media queries for tablet and desktop breakpoints
- Flexible grids and reusable cards
- Responsive typography using `clamp()`

## Accessibility Features
- Semantic HTML structure
- Alt text for all images
- Skip-to-content link
- Focus states for keyboard navigation
- Form labels and error feedback
- ARIA attributes for navigation, form status, and interactive controls
- Color contrast-conscious design

## Setup Instructions
1. Download or clone the repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser.
4. Test responsiveness using browser DevTools.

## Deployment Instructions
### GitHub Pages
1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the main branch and root folder.
6. Save the settings and wait for the deployment link to appear.

### Netlify
1. Log in to Netlify.
2. Choose **Add new site**.
3. Drag and drop the project folder, or connect the Git repository.
4. If using drag and drop, deploy the folder directly.
5. If using Git, set the publish directory to the project root and deploy.

## Testing Evidence
- Navigation works correctly across all pages.
- Form validation shows errors and success feedback.
- Mobile menu opens and closes correctly.
- Dark mode preference saves using LocalStorage.
- The website layout adjusts for mobile, tablet, and desktop screens.
- Accessibility checks were considered with semantic markup and focus styling.
- Cross-browser testing should be performed in Chrome, Edge, and Firefox before final submission.

## Screenshots
Add screenshots here before submission:
- Homepage
- About page
- Services page
- Contact page
- Mobile view
- Dark mode
- Form validation
- Deployment screenshot

## Author
GeekTech
