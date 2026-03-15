# Simple Login System (Fake Authentication) – React + Context API

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
