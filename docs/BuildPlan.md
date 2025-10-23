CodeFit Website Structure
1. Landing / Hero Section

Name + tagline: “Code Your Body. Fit Your Life.”

Call-to-action buttons: Join Now, Explore Plans

Background: A sleek mix of coding + fitness theme (maybe a dumbbell made of { } brackets 😅)

2. About Section

Why CodeFit?

Your personal journey / vision statement.

3. Services / Training Plans

Beginner, Intermediate, Advanced training

Online Coaching / Personal Plans

4. Blog / Knowledge Hub

Articles on exercise, nutrition, habits

5. Contact Section

Form: Name, Email, Goal/Message

6. Authentication (Phase 2 🚀)

Register/Login with JWT + PostgreSQL + Express

Secure protected routes for personalized dashboards

7. Dashboard (Phase 3 💪)

User can track workouts

Customized plans

Progress reports

Phase 1 (MVP) – Static Site

✅ Hero, About, Services, Contact
✅ Deploy to codefit.in

Phase 2 – Authentication

✅ Login/Register
✅ User dashboard basics

Phase 3 – Workout Tracking System

✅ Workout plans per user
✅ Weekly progress tracking

Phase 4 – Add-ons

✅ Blog with fitness + coding twist
✅ Payment integration for premium coaching

⚡ Example Flow

When a user visits codefit.in:

1. main.jsx mounts <App />

2. App.jsx uses <MainLayout> → loads <Home />

3. <Home /> uses <Hero />, <About />, <Services />, <Contact />

4. <Navbar /> and <Footer /> come from /components

5. Data fetching/logic flows through /hooks, /context, /utils