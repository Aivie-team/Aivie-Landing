# Aivie Landing Page

Official landing page for Aivie AI Interview Assistant & Communication Coach.

This project is built to present Aivie’s product vision, core features, pricing, and to collect early beta users before the official launch.

---

##  Tech Stack

### Frontend
- React
- React Router DOM
- FramerMotion
- tailwindcss
- react-icons
- CSS / TailwindCSS (optional)

### Backend
- Node.js
- Express.js

### Tooling
- Vite (recommended) / Create React App
- ESLint
- Prettier
- Nodemon

---

## 📁 Project Structure

```
aivie-landing/
│
├── frontend/                    
│   ├── src/
│   │   ├── components/        
│   │   ├── pages/             
│   │   ├── ui/            
│   │   ├── App.jsx
|   |   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
│
└── README.md
```

---

##  Features

- Modern responsive landing page
- Multi-section layout (Hero, Features, Pricing, FAQ)
- Client-side routing with React Router DOM
- Backend API for:
  - Waitlist registration
  - Contact form
  - Newsletter subscription
- Clean and scalable structure

---

##  Installation & Setup

### 1️ Clone Repository

```bash
git clone https://github.com/Aivie-team/Aivie-Landing.git
cd aivie-landing
```

---

##  Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:3013
```

---

##  Frontend Routing

React Router DOM digunakan untuk navigasi halaman:

| Route        | Page        |
|--------------|------------|
| `/`          | Home       |
| `/pricing`   | Pricing    |
| `/faq`       | FAQ        |
| `/contact`   | Contact    |

---

## Backend API Endpoints

Example API routes:

```
POST /api/waitlist
POST /api/contact
GET  /api/health
```

##  Future Improvements

- Integrasi Stripe payment
- Analytics tracking
- Authentication system
- Connect ke main Aivie platform
- SEO optimization

---

##  About Aivie

Aivie adalah AI-powered interview assistant yang menyediakan:

- Real-time transcription
- Live bilingual translation
- AI coaching & tone feedback
- Coding interview support
- Post-interview analytics
- Privacy-first processing

---

## Author

Built with passion for real skills and real confidence.
built with love ❤️