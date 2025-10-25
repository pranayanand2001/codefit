# CodeFit 🏋️‍♂️

**CodeFit** is a modern fitness web platform designed for people who sit and work for long hours.  
Built with React and Firebase, it promotes **calisthenics-based workouts** that require minimal equipment — making fitness accessible to anyone, anywhere.

## 🚀 Live Demo
👉 [https://codefit-henna.vercel.app](https://codefit-henna.vercel.app/)

## Features ✨

- **Workout Plans** — Calisthenics-based training programs designed for desk workers  
- **Blog System** — Create and publish articles using a rich text editor (React Quill)  
- **Authentication** — Firebase Email/Password login for admins  
- **Firebase Integration** — Firestore for storing blog posts and user data  
- **Responsive UI** — Built with React + Tailwind CSS  
- **Deployed on Vercel** — Fast, reliable, and globally distributed  
- **Protected Routes** - Secure access to user-specific content
- **Contact System** - Rate-limited contact form with EmailJS integration

## Tech Stack 🧩
- **Frontend Framework:** React with Vite
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **Email Service:** EmailJS
- **Routing:** React Router v6
- **Animation:** Framer Motion
- **Form Handling:** Custom hooks
- **State Management:** React Context
- **Deployment:** Vercel

## Getting Started 🌟

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/codefit.git
cd codefit
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase and EmailJS credentials
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## Project Structure 📁

```
codefit/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts
│   ├── firebase/        # Firebase configuration
│   ├── hooks/          # Custom hooks
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── sections/       # Page sections
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── public/            # Public assets
└── docs/             # Documentation
```
## Key Features in Detail 📝

### Authentication
- Email/Password authentication
- Google Sign-in
- Protected routes
- Persistent auth state

### Blog System
- Dynamic content loading
- Markdown support
- Categories and tags
- Admin dashboard for content management

### Contact System
- Rate-limited form submission
- Email integration
- Spam protection
- Success/Error notifications

## Security Features 🔒

- Rate limiting on authentication attempts
- Protected API endpoints
- Form submission limits
- Firebase security rules
- Input validation and sanitization

## Performance Optimizations ⚡

- Code splitting with React Router
- Lazy loading of components
- Image optimization
- Caching strategies
- Efficient re-renders

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [EmailJS](https://www.emailjs.com/)
- [Framer Motion](https://www.framer.com/motion/)


## Contact

Creator: Pranay Anand

Email: pranayanand.sm@gmail.com

LinkedIn: linkedin.com/in/pranayanand18


**Train smart. Stay strong. Build consistency — one rep at a time**
