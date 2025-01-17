# Library Prot1

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Deployment](#deployment)
7. [Credits](#credits)
8. [Demo](#demo)

---

## Overview

**Library Prot1** is a project built using **Next.js**, **Prismic CMS**, **Three.js**, and **GSAP**. It leverages modern web technologies to deliver a dynamic and interactive user experience. The project also includes **Slice Machine** for efficient content modeling and management, alongside **TailwindCSS** for rapid UI design.


---

## Features

- **Dynamic Content**: Content managed using Prismic CMS and Slice Machine.
- **3D Animations**: Created using Three.js for immersive visuals.
- **Interactive Animations**: Smooth transitions and effects with GSAP.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **Fast Development**: Next.js ensures server-side rendering and fast builds.

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **Prismic CMS**: Headless CMS for managing content.
- **Slice Machine**: Tool for creating and managing Prismic slices.
- **Three.js**: Library for creating 3D graphics.
- **GSAP**: Animation library for creating smooth transitions.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Icons**: Collection of popular icons for React projects.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kangetheee/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
customTypes
|
├───homepage
├───merch
├───navigation
├───page
└───projects
Src
|
├───app
│   ├───api
│   │   ├───exit-preview
│   │   ├───preview
│   │   └───revalidate
│   ├───merch
│   │   └───[uid]
│   ├───project
│   │   └───[uid]
│   ├───slice-simulator
│   └───[uid]
├───components
└───slices
    ├───Bio
    ├───ContentType
    ├───Experience
    ├───Hero
    ├───ImageBlock
    ├───TechList
    └───TextBlock
```

---

## Deployment

1. Build the project for production:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm run start
   ```

3. Deploy to your hosting platform (e.g., Vercel, Netlify, or AWS).

---

## Credits

- **Tutorial**: JavaScript Mastery
- **Libraries and Frameworks**: Next.js, Prismic CMS, Three.js, GSAP

---

### Video Preview

[![Watch the video](https://github.com/user-attachments/assets/99b4e238-ffd8-495d-9957-b7cdf7ef2f2b)



