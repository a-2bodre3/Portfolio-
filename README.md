# 🌐 My Angular Portfolio

A modern, responsive personal portfolio built with **Angular** and styled with **pure CSS**.  
Supports multiple themes: **Light Mode**, **Dark Mode**, and a special **Hacker Mode** with a matrix-style background and terminal-like design.

## 🚀 Features
- **Responsive Design** – Works on all devices (desktop, tablet, mobile).
- **Theme Toggle** – Switch between Light, Dark, and Hacker mode.
- **Reusable Components** – Modular design for easy maintenance and scalability.
- **Firebase Integration** – Hosting & optional contact form storage.
- **Clean UI/UX** – Minimal yet visually appealing.

## 🛠 Tech Stack
- **Framework:** Angular 19
- **Styling:** CSS (no external UI frameworks, fully custom)
- **Backend / Hosting:** Firebase
- **Version Control:** Git & GitHub

## 📂 Components Structure
- `HeaderComponent` – Navigation bar and theme toggle button.
- `FooterComponent` – Contact info & footer links.
- `HomeComponent` – Landing page with introduction.
- `SkillsComponent` – List of skills with animated progress bars.
- `ProjectsComponent` – Portfolio projects displayed using reusable **CardComponent**.
- `ContactUsComponent` – Contact form integrated with Firebase.
- `HackerComponent` – Special hacker-themed UI mode.
- `ThemeToggleComponent` – Standalone theme switcher (Light/Dark/Hacker).
- `CardComponent` – Reusable card for projects, skills, or certifications.
- `SectionTitleComponent` – Styled section headings.
- `MatrixBackgroundComponent` – Animated matrix background for hacker mode.

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/username/my-angular-portfolio.git

# Navigate to the project folder
cd Portfolio

# Install dependencies
npm install

# Start the development server
ng serve
