# Portfolio & Social Media Manager

A modern, responsive, and dynamic portfolio website built for a Social Media Manager. This project is designed to showcase professional experience, client testimonials, services, and high-quality portfolio assets.

## Features

- **Modern UI/UX**: Clean layout using Tailwind CSS for rapid and beautiful styling.
- **Smooth Animations**: Integrated with Framer Motion to provide engaging scroll and hover effects.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Modular Components**: Reusable React components (Hero, Services, Showcase, Clients, Testimonials, Experience, Contact).
- **Fast Performance**: Powered by Vite for lightning-fast hot module replacement (HMR) and optimized production builds.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```
├── public/                 # Static assets (images, favicon, etc.)
│   └── assets/portfolio/   # Client work and showcase imagery
├── src/
│   ├── components/         # Reusable UI sections (Hero, Nav, Services, etc.)
│   ├── data/               # Local data files (e.g., portfolioData.js)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global stylesheet & Tailwind directives
│   └── main.jsx            # Entry point
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## How to Use as a Template

Want to build your own portfolio using this design? Feel free to clone or fork this repository! It is designed to be easily customizable.

### 1. Clone & Install
```bash
git clone https://github.com/farajarshad01/Portfolio-Social-Media-Manager.git my-portfolio
cd my-portfolio
npm install
```

### 2. Customize Your Data
All of the content (text, services, experiences, testimonials) is modular. Open the code and head over to:
- `src/data/portfolioData.js` (if you are keeping a central data file) or just edit the text directly within the `src/components/` files to match your own experience!

### 3. Swap Your Assets
Replace the images in `public/assets/portfolio/` and `public/` (like your profile picture, favicon, and project screenshots) with your own images. Make sure to keep the filenames the same, or update the paths in the code!

### 4. Run Locally
```bash
npm run dev
```
Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

## Deployment

Once you've customized everything, you can build your site for production:
```bash
npm run build
```
This will generate a `dist` directory containing the optimized production files. You can easily deploy this folder for free on platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or GitHub Pages.

## License

This project is open-source and available under the [MIT License](LICENSE).
