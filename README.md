# Nishanth Reddy Palugula - Portfolio

A modern, responsive portfolio website showcasing my work as a Data Scientist and AI Engineer. This portfolio highlights my expertise in machine learning, artificial intelligence, and data analytics across various industries including healthcare, finance, and business intelligence.

## About This Portfolio

This portfolio website is built with React and features a clean, professional design that effectively presents my technical skills, professional experience, and project portfolio. The site is fully responsive and optimized for all devices.

## Key Features

- **Professional Design**: Clean, modern interface with glass-morphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Experience Timeline**: Comprehensive professional experience section
- **Skills Overview**: Organized display of technical competencies
- **Certification Verification**: Direct links to Microsoft Learn credentials

## Sections Included

- **About**: Personal introduction and professional summary
- **Experience**: Detailed work history with achievements and skills
- **Projects**: Featured projects with live demos and source code
- **Skills**: Technical skills organized by category
- **Certifications**: Microsoft certifications with verification links
- **Resume**: Download link for detailed CV
- **Contact**: Professional contact information and social links

## Technical Stack

- **Frontend**: React 18
- **Styling**: Custom CSS with modern design patterns
- **Build Tool**: Create React App
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nishanth2501/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project" and import your repository
5. Vercel will automatically detect the React app and deploy it
6. Your site will be available at a Vercel URL

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Sign in with GitHub and create a new site
4. Connect your repository
5. Set build command to `npm run build` and publish directory to `build`
6. Deploy your site

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://nishanth2501.github.io/Portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Run `npm run deploy`

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in `src/App.js`
2. **Projects**: Modify the projects array with your own projects
3. **Experience**: Update the experience data with your work history
4. **Skills**: Customize the skills section with your technical abilities
5. **Styling**: Modify `src/App.css` to change colors, fonts, and layout
6. **Contact**: Update contact information and social media links

## Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   ├── Resume.js
│   │   └── Skills.js
│   ├── data/
│   │   ├── certs.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Contributing

This is a personal portfolio project. If you'd like to use this as a template for your own portfolio, feel free to fork the repository and customize it according to your needs.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: palugulanishanthreddy@gmail.com
- **LinkedIn**: [nishanth-reddy-palugula-a06739328](https://linkedin.com/in/nishanth-reddy-palugula-a06739328)
- **GitHub**: [Nishanth2501](https://github.com/Nishanth2501)
- **Portfolio**: [nishanthreddy-portfolio.vercel.app](https://nishanthreddy-portfolio.vercel.app)

---

Thank you for visiting my portfolio. I'm always interested in new opportunities and collaborations in the field of data science and artificial intelligence.
