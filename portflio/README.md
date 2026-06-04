# 🌐 Sayan Nandi — Portfolio Website

A personal portfolio website built with **React** and **Vite**, featuring a clean **morphic glass UI** design with smooth animations, dark theme, and fully responsive layout.

---

## ✨ Features

- **Glassmorphism UI** — frosted glass cards, ambient orbs, and layered depth
- **Animated Hero** — typed.js role switcher, spinning gradient image ring, live badge
- **Responsive Design** — mobile-first, works across all screen sizes
- **React Router** — multi-page SPA with active link detection
- **Scroll Animations** — intersection observer–triggered card reveals on the About page
- **Projects Showcase** — card grid with tech tags, live & code links
- **Contact Section** — structured info panel + styled contact form
- **Custom Design System** — CSS variables for glass, blur, glow, and color tokens

---

## 🛠 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 19, React Router DOM v7     |
| Build Tool | Vite 8                            |
| Styling    | Pure CSS (no UI library)          |
| Fonts      | Space Grotesk · DM Sans · JetBrains Mono |
| Animation  | CSS keyframes + Typed.js          |
| Deployment | Render                            |

---

## 📁 Project Structure

```
portflio/
├── index.html                  # Vite entry HTML
├── vite.config.js              # Vite config with React plugin
├── package.json
└── src/
    ├── App.jsx                 # Routes setup
    ├── index.jsx               # React DOM entry
    ├── index.css               # Global design system (CSS vars, glass utilities)
    ├── pages/
    │   ├── Home.jsx            # Hero + experience section
    │   ├── About.jsx           # Timeline cards + skills
    │   ├── Projects.jsx        # Project grid cards
    │   ├── Contact.jsx         # Info panel + contact form
    │   └── css/
    │       ├── Home.css
    │       ├── About.css
    │       ├── Project.css
    │       └── Contact.css
    └── Components/
        ├── Navbar/             # Sticky glass navbar
        ├── PastExp/            # Internship experience card
        ├── Footer/             # Footer with links
        └── Assets/             # Images and logos
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ (v20 recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sayan234-py/Portfolio.git

# Navigate into the project folder
cd Portfolio/portflio

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## 📄 Pages

| Page       | Route       | Description                              |
|------------|-------------|------------------------------------------|
| Home       | `/`         | Hero section with typed animation + internship experience |
| About      | `/about`    | Bio, education, skills, and interests    |
| Projects   | `/projects` | Showcase of MERN stack projects          |
| Contact    | `/contact`  | Contact info + message form              |

---

## 📬 Contact

**Sayan Nandi**
- 📧 [nsayan520@gmail.com](mailto:nsayan520@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/sayan-nandi-152581359)
- 🐙 [GitHub](https://github.com/sayan234-py)
- 📍 Durgapur, West Bengal, India

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with 💙 by Sayan Nandi — BCA Student & MERN Stack Developer
