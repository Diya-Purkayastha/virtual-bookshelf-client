# 📚 Virtual Bookshelf – Client

A responsive, animation-rich frontend React application that allows users to create and manage a personal digital bookshelf. This includes reading progress, reviews, filtering, and search — all integrated with Firebase authentication and MongoDB-backed API.

## 🔗 Live Site

👉 [https://vrbookshelf.netlify.app/](https://vrbookshelf.netlify.app/)

## 📸 Screenshot
![image](https://github.com/user-attachments/assets/accd5b72-f842-42ea-b10b-4b88bf8094ba)
![image](https://github.com/user-attachments/assets/b2f2cd70-ec75-4c58-9535-6c7a553a419c)
![image](https://github.com/user-attachments/assets/beaba56e-ed95-4219-902e-213325e7a13f)
![image](https://github.com/user-attachments/assets/262a86ac-bc5e-4156-adce-77b528453535)
![image](https://github.com/user-attachments/assets/261bb601-80e8-437b-87d0-10599f1f177a)

## 🚀 Tech Stack

- React
- Tailwind CSS
- DaisyUI
- React Router DOM
- Express
- Firebase Authentication (Google + Email/Password)
- Axios
- Framer Motion
- React Toastify
- SweetAlert2
- Swiper.js (slider)
- Lottie-react
- Recharts
- React Icons

## 🔐 Features

- 🔐 Firebase Authentication (Google & Email/Password)
- 📚 Add, update, delete books (with reading status)
- ✨ Animation-enhanced UI with Framer Motion and Lottie
- 🎨 Dark mode friendly with DaisyUI themes
- 📊 Profile dashboard with charts (Recharts)
- 🔍 Book filtering by title, author & reading status
- 💬 Reviews system (add/edit/delete per user)
- ⏫ Upvote system to highlight popular books
- 📱 Fully responsive for mobile, tablet, and desktop
- 🌈 Modern design inspired by Goodreads/LibraryThing
-  🔍 Advanced bookshelf with search, dropdown filters, and responsive tables
- 🧭 Route-based layouts with nested routes (MainLayout, AuthLayout, DashboardLayout)
- 🛡️ Firebase token verification on protected API endpoints (Add/Update/Delete)

## 📄 Pages & Routes

- `/` – Home (slider, popular books, featured categories, extras)
- `/bookshelf` – Public book list with filters
- `/books/:id` – Book details (upvote + reviews + reading tracker)
- `/add-book` 🔒 – Add a new book (private)
- `/my-books` 🔒 – View and manage own books (update/delete)
- `/update-book/:id` 🔒 – Update specific book
- `/profile` 🔒 – Personal dashboard with stats
- `/login`, `/register` – Auth pages
- `*` – 404 not found

## 💻 Local Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Diya-Purkayastha/virtual-bookshelf-client.git
   cd virtual-bookshelf-client
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

4. **Visit the App:**
   Open your browser and go to `http://localhost:5173`

---

## 🙌 Thank You for Visiting the Project!

I hope you enjoyed exploring this project. If you found it useful or inspiring, feel free to give it a ⭐ on GitHub. Your feedback is always welcome!

---

Happy Coding 🚀
