# CodeFit Folder Structure

codefit/
├── public/                     # Static files (favicon, images, etc.)
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   ├── assets/                 # Images, icons, fonts
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   │
│   ├── sections/               # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   │
│   ├── pages/                  # Full pages (future: Dashboard, Auth, Blog)
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── layouts/                # Layout wrappers
│   │   └── MainLayout.jsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useAuth.js
│   │
│   ├── context/                # Context API (Auth, Theme, etc.)
│   │   └── AuthContext.jsx
│   │
│   ├── utils/                  # Utility functions (validators, API calls)
│   │   ├── api.js
│   │   └── helpers.js
│   │
│   ├── styles/                 # Global styles or Tailwind configs
│   │   └── globals.css
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point (Vite) or index.js (CRA)
│   └── routes.jsx              # Centralized routes for react-router
│
├── package.json
└── tailwind.config.js


Why this structure?

components/ → Reusable building blocks (e.g., Button, Card, Navbar).

sections/ → Large, page-specific sections like Hero, About, Services (keeps pages clean).

pages/ → For full-page views (Home, Auth, Dashboard, Blog).

layouts/ → Wrap pages with a layout (e.g., MainLayout for navbar/footer).

context/ → For global state like Auth, Theme, User.

hooks/ → Custom logic (e.g., useAuth, useFetch).

utils/ → Helpers, API calls, constants.