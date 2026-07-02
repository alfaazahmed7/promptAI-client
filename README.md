# 🚀 PromptAI - Client

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe" />
  <img src="https://img.shields.io/badge/Role--Based%20Access%20Control-success?style=for-the-badge" />
</p>

<p align="center">
  A modern AI Prompt Marketplace built with <strong>Next.js</strong>, featuring secure authentication, role-based dashboards, premium subscriptions, analytics, prompt management, reviews, bookmarks, and a responsive user experience.
</p>

---

## 📖 Overview

**PromptAI** is a full-stack AI prompt marketplace where users can discover, purchase, bookmark, review, and manage AI prompts while creators can publish and monitor their own prompts through a dedicated dashboard. Administrators have complete control over users, creators, prompts, reports, and platform management.

The client application focuses on delivering a clean, responsive, and scalable user experience using modern React and Next.js practices. The project follows a role-based architecture to provide separate workflows for **Users**, **Creators**, and **Administrators**.

---

## ✨ Key Features

### 👤 Authentication & Authorization

- Secure Firebase Authentication
- Protected routes
- JWT-based authorization with backend integration
- Role-based access control
- Persistent login session
- Separate dashboard access for each user role

### 🎯 User Dashboard

- Browse AI prompts
- Purchase premium prompts
- Bookmark favorite prompts
- Manage purchased prompts
- Submit ratings and reviews
- Report inappropriate content
- View payment history
- Manage personal profile

### 🎨 Creator Dashboard

- Create AI prompts
- Update existing prompts
- Delete prompts
- Upload prompt information
- Monitor prompt performance
- View analytics
- Track earnings and activity
- Manage published content

### 🛡️ Admin Dashboard

- Manage all users
- Manage creators
- Manage prompts
- Review reported content
- Platform analytics
- Monitor overall platform activities
- Administrative controls for the entire system

### 💳 Premium Features

- Stripe payment integration
- Secure checkout flow
- Premium content access
- Subscription-ready architecture

### 📊 Analytics

- Dashboard statistics
- Visual charts
- Prompt insights
- User activity tracking
- Creator performance monitoring

### ⭐ Community Features

- Ratings & Reviews
- Bookmark system
- Reporting system
- Prompt categorization
- Search and filtering

### 🎨 User Experience

- Fully responsive design
- Loading skeletons
- Toast notifications
- Modern UI
- Reusable components
- Optimized navigation
- Clean dashboard layouts

---

# 🏗️ Project Structure

```
app/
├── (authentication)
├── (dashboard)
│   ├── admin
│   ├── creator
│   └── user
├── prompts
├── pricing
├── profile
├── components
├── hooks
├── lib
├── providers
└── utils
```

The application follows the **Next.js App Router** architecture with a modular component structure, making the project scalable and easier to maintain.

---

# 🛠️ Tech Stack

### Frontend

- Next.js 15
- React 19
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI

### Authentication

- Firebase Authentication
- JWT Authentication

### State Management

- React Hooks
- Context API

### Payment

- Stripe

### Charts & Visualization

- Recharts

### Data Fetching

- Axios

### Notifications

- React Hot Toast

### Icons

- React Icons
- Lucide React

### UI Enhancements

- SweetAlert2
- Lottie React
- Swiper.js

---

# 🔐 Role-Based Access

| Role | Permissions |
|------|-------------|
| **User** | Browse prompts, purchase prompts, bookmark, review, report, manage profile |
| **Creator** | Create, update, delete prompts, monitor analytics, manage published content |
| **Admin** | Manage users, creators, prompts, reports, and platform operations |

---

# ⚡ Highlights

- Modern App Router architecture
- Role-based dashboard system
- Protected client routes
- Secure authentication flow
- Stripe payment integration
- Analytics dashboard
- Responsive UI across devices
- Modular and reusable component architecture
- Clean folder organization
- Scalable project structure
- Interactive charts and statistics
- Real-time user feedback with toast notifications

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/alfaazahmed7/promptAI-client
```

## Navigate into the project

```bash
cd promptAI-client
```

## Install dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_API_URL=YOUR_BACKEND_URL

NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

---

# ▶️ Run Locally

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📦 Build for Production

```bash
npm run build
```

```bash
npm start
```

---

# 📂 Important Client Modules

- Authentication System
- Protected Routes
- Role-based Dashboard
- Prompt Marketplace
- Prompt Details
- Payment Integration
- Analytics Dashboard
- Bookmark Management
- Review & Rating System
- Report Management
- Shared UI Components
- Custom Hooks
- Utility Functions
- Responsive Navigation

---

# 🌟 Why PromptAI?

PromptAI is more than a CRUD application. It demonstrates the implementation of several real-world software engineering concepts within a single platform, including:

- Multi-role authentication
- Role-based authorization
- Secure payment workflow
- Dashboard architecture
- Component reusability
- Modular folder organization
- API-driven frontend
- Responsive design
- Scalable project structure
- Production-ready development practices

---

# 🤝 Backend Repository

This repository contains only the **client-side** application.

The backend handles:

- Authentication & JWT
- Database operations
- Prompt APIs
- User management
- Reviews
- Bookmarks
- Reports
- Payment processing
- Analytics

---

# 👨‍💻 Author

**Alfaaz Ahmed**

- GitHub: https://github.com/alfaazahmed7
- Portfolio: https://alfaazdev.vercel.app

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

<p align="center">
  If you found this project interesting, consider giving it a ⭐ on GitHub!
</p>