# Aivie Landing Page

Landing page resmi untuk Aivie — AI Interview Assistant & Communication Coach.

Project ini dibuat untuk menampilkan visi produk, fitur utama, pricing, dan mengumpulkan user beta sebelum peluncuran resmi.

---

## 🚀 Tech Stack

### Frontend
- React
- React Router DOM
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
├── client/                     # React App (Frontend)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Home, Pricing, FAQ, Contact
│   │   ├── routes/             # Route configuration
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/                     # Node Backend
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ✨ Features

- Modern responsive landing page
- Multi-section layout (Hero, Features, Pricing, FAQ)
- Client-side routing with React Router DOM
- Backend API for:
  - Waitlist registration
  - Contact form
  - Newsletter subscription
- Clean and scalable structure

---

## 🔧 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/aivie-landing.git
cd aivie-landing
```

---

## ▶️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## ▶️ Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 🌐 Frontend Routing

React Router DOM digunakan untuk navigasi halaman:

| Route        | Page        |
|--------------|------------|
| `/`          | Home       |
| `/pricing`   | Pricing    |
| `/faq`       | FAQ        |
| `/contact`   | Contact    |

---

## 🔌 Backend API Endpoints

Example API routes:

```
POST /api/waitlist
POST /api/contact
GET  /api/health
```

---

## 🔐 Environment Variables

Buat file `.env` di dalam folder `server/`

```
PORT=5000
MONGO_URI=your_database_url
```

(Optional jika menggunakan database)

---

## 🎯 Project Goal

Landing page ini dibuat untuk:

- Memperkenalkan Aivie ke publik
- Validasi market
- Mengumpulkan early users
- Mempersiapkan product launch

---

## 📈 Future Improvements

- Integrasi Stripe payment
- Analytics tracking
- Authentication system
- Connect ke main Aivie platform
- SEO optimization

---

## 🧠 About Aivie

Aivie adalah AI-powered interview assistant yang menyediakan:

- Real-time transcription
- Live bilingual translation
- AI coaching & tone feedback
- Coding interview support
- Post-interview analytics
- Privacy-first processing

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built with passion for real skills and real confidence.