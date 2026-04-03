# WEB101 Practical Assignment 1 – React Web Page Recreation

## 📌 Project Title

Instagram Web Page Recreation using React

---

## 📖 Introduction

This project is developed as part of WEB101 Practical Assignment 1. The objective is to recreate a webpage from an existing web application using React’s component-based architecture.

For this assignment, an Instagram-like interface was selected and recreated to demonstrate understanding of modern front-end development concepts.

---

## 🎯 Objectives

* To understand React component-based architecture
* To break down a webpage into reusable components
* To implement responsive design for different devices
* To apply the single responsibility principle in component design
* To create a functional and interactive user interface

---

## 🧩 Component Structure

The application is divided into the following components:

* **App**

  * Navbar
  * Stories Section

    * Story Component
  * Posts Section

    * PostCard Component

      * PostHeader
      * PostContent
      * PostActions

Each component is designed to perform a single function, making the code reusable and maintainable.

---

## ⚙️ Implementation Details

### 1. Development Environment

* React.js using Vite
* JavaScript (ES6)
* CSS for styling

### 2. Component Development

The webpage was broken into smaller components such as Navbar, Story, and PostCard.
Reusable components were created to maintain consistency across the application.

### 3. Data Handling

Static data was used for posts and stories through separate files:

* `posts.js`
* `stories.js`

### 4. Interactivity

React hooks (`useState`) were used to:

* Implement like functionality
* Dynamically update UI elements

### 5. Responsive Design

CSS media queries were used to ensure the application works across:

* Mobile devices
* Tablets
* Desktop screens

---

## 📱 Responsive Design

The application adapts to different screen sizes:

* **Mobile (≤ 600px):**

  * Compact layout
  * Reduced padding and font size

* **Tablet (601px – 1024px):**

  * Medium layout width

* **Desktop (> 1024px):**

  * Centered content with fixed width

---

## 🔄 Features

* Instagram-style user interface
* Stories section with horizontal scrolling
* Display of posts with images and captions
* Like button with interactive functionality
* Reusable and modular components
* Responsive design for all devices

---

## 🧠 Implementation Approach

The project was developed using the following steps:

1. Selected an existing webpage (Instagram UI)
2. Analyzed and broke down the UI into components
3. Created a static version of the layout
4. Added interactivity using React hooks
5. Applied styling and responsive design
6. Tested the application across different screen sizes

---

## ✅ Functionality

The application allows users to:

* View stories and posts
* Interact with posts using the like button
* Scroll through stories
* Experience a responsive layout across devices

---

## 🚀 How to Run the Project

1. Install dependencies:

```
npm install
```

2. Run the development server:

```
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## 📌 Conclusion

This project successfully demonstrates the use of React to recreate a modern web interface. It highlights the importance of component-based design, reusable code, and responsive UI development.

---

## 📎 Repository Naming Format


02250390_WEB101_PA1
https://github.com/02250390cst-jpg/02250390_WEB101_PA1.git