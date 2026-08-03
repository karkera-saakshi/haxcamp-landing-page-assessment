# 🎭 Event Production Consultation Booking System

A modern, full-stack web application for scheduling event consultations. Built with a responsive React (Vite) frontend and a Node.js/Express backend, integrated with MongoDB Atlas for persistent storage and Nodemailer for automated email notifications.

---

## 🌟 Key Features

* **Interactive Booking Form:** Intuitive consultation request interface with dynamic state management and client-side validation.
* **Automated Email Notifications:** Dispatches instant confirmation emails to clients and alert emails to administrators via Nodemailer.
* **Database Persistence:** Managed MongoDB Atlas storage with automatic timestamping (`created_at`, `updated_at`).
* **Decoupled Monorepo Architecture:** Clean separation of frontend and backend services for independent scaling and maintenance.
* **Production Deployed:** Deployed as a Web Service and Static Site on Render with environment variable security.

---

## 🛠️ Tech Stack

### Frontend
* **Library/Tooling:** React, Vite
* **HTTP Client:** Axios
* **Styling:** CSS3 (Modern Responsive UI)

### Backend
* **Runtime & Framework:** Node.js, Express.js
* **Database:** MongoDB Atlas (Native MongoDB Driver)
* **Email Service:** Nodemailer (Gmail SMTP / App Passwords)
* **Utilities:** CORS, dotenv

---

## 📁 Repository Structure

```text
.
├── backend/
│   ├── utils/
│   │   └── sendEmail.js      
│   ├── controllers/
│   │   └── bookingController.js         
|   ├── models/
│   │   └── bookingModel.js
|   ├── routes/
│   │   └── bookingRoutes.js 
│   ├── server.js              
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   |      └── CosultationPage.jsx
|   |   |      └── EventPage.jsx
|   |   ├── App.jsx
│   └── package.json
│
└── README.md
