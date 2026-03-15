# React Mini Projects

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A collection of small, focused React projects built with modern tools and best practices. Each project demonstrates different React concepts, APIs, and UI patterns in a self-contained manner.

## 📁 Projects

### 01 - Random Quote Generator
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC.svg)](https://tailwindcss.com/)

A sleek and modern Random Quote Generator built with React, Vite, and Tailwind CSS. This application fetches inspirational quotes from an API and displays them with a clean, responsive design.

**Features:**
- Instant quote generation
- Responsive design
- Modern dark theme UI
- API integration with DummyJSON
- Error handling

**Quick Start:**
```bash
cd 01-random-quote-generator
npm install
npm run dev
```

[View Project README](./01-random-quote-generator/README.md) | [Live Demo](#) (coming soon)

### 02 - Simple Counter Dashboard
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC.svg)](https://tailwindcss.com/)

A lightweight React dashboard that renders three counter cards with action buttons for increment, decrement, and reset interactions.

**Features:**
- Clean card-based counter UI
- Reusable `Counter` component
- Multi-card layout on a single page
- Fast local development with Vite

**Quick Start:**
```bash
cd 02-simple-counter-dashboard
npm install
npm run dev
```

[View Project README](./02-simple-counter-dashboard/README.md) | [Live Demo](#) (coming soon)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Running a Project

1. Navigate to the project directory
   ```bash
   cd <project-folder>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Various APIs** - For data fetching in different projects

## 📚 Learning Objectives

Each mini project focuses on specific React concepts:

- Component lifecycle and state management
- API integration and data fetching
- Responsive design and CSS frameworks
- Error handling and user experience
- Modern React patterns and hooks

## 🤝 Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Add your mini project in a numbered folder (e.g., `02-new-project/`)
4. Update this README with your project details
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React documentation and community
- Vite for the amazing developer experience
- Tailwind CSS for beautiful styling
- Various APIs used in the projects



### l6 - Simple change button theme Using Context api

Global State Management: Uses createContext and useContext to manage theme state.

Tailwind Integration: Smoothly toggles between light and dark modes using Tailwind utility classes.

Persistent UI: Demonstrates how nested components can access and update global state without prop drilling.

Modern UI: Clean, centered layout with a stylized toggle button.

Quick Start:

Bash
cd 03-theme-toggler-context
npm install
npm run dev
View Project README | Live Demo (coming soon)



# 03 Simple Login System (Fake Authentication) – React + Context API
A simple **frontend authentication project** built with **React**, **Context API**, and **Tailwind CSS**.
This project demonstrates how to implement a basic login system using global state management without a backend.

The goal of this project is to practice important React concepts such as **Context API, useState, useContext, form handling, and conditional rendering**.

---

## 🚀 Features

* Simple login form
* Fake authentication (frontend only)
* Global state management using **Context API**
* User information stored in global state
* Conditional rendering (Login / Dashboard)
* Logout functionality
* Styled using **Tailwind CSS**

---

## 🧠 Concepts Practiced

This project helped practice the following React concepts:

* `useState`
* `createContext`
* `useContext`
* Global state management
* Form handling
* Conditional rendering
* Component structure
* Basic authentication logic

---

## 🛠️ Tech Stack

* **React.js**
* **Context API**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── context
│   └── AuthContextProvider.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🔑 Demo Credentials

Since this project uses **fake authentication**, you can log in using:

```
Email: Tayyabkhan09@gmail.com
Password: developer
```

---

## ⚙️ How It Works

1. The login form collects **email and password**.
2. The form checks the credentials against predefined values.
3. If the credentials match:

   * The user is logged in.
   * Global state `user` is updated.
4. The **Dashboard** component is displayed.
5. The user can **logout**, which resets the login state.

---

## 🎨 Styling

The UI is styled using **Tailwind CSS** for a clean and responsive layout.

---

## 📸 Future Improvements

Possible improvements for this project:

* Add **LocalStorage authentication**
* Implement **Protected Routes using React Router**
* Add a **Register page**
* Connect with a **real backend (Node.js / Express / MongoDB)**

---

## 📚 Learning Purpose

This project was created as part of practicing **React interview preparation and MERN stack development**.

---

## 👨‍💻 Author

**Muhammad Tayyab**
Computer Science Student | MERN Stack Developer

---
