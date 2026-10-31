# Yonas Kelem | Portfolio

A modern, animated portfolio for **Yonas Kelem**, a backend developer from Addis Ababa, Ethiopia. Dark mode by default, with a light mode toggle and a working contact form.

**Live site:** https://yk-portfolio-azure.vercel.app

## Built with

React, TypeScript, Tailwind CSS v4, Vite, Motion, Lenis and EmailJS. Hosted on Vercel.

## Features

- Responsive design with dark and light themes
- Animated night-sky background, loading screen and scroll animations
- Flip project cards (hover on desktop, tap on phones)
- Contact form that sends real emails with EmailJS

## Run it locally

Requires Node.js 20.19 or newer.

```bash
git clone https://github.com/yonaskelem-dev/yk-portfolio.git
cd yk-portfolio
npm install
npm run dev
```

## Contact form setup

Create a `.env.local` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should use `{{name}}`, `{{email}}` and `{{message}}`. Restart `npm run dev` after changing the file.

## Project structure

```
src/
|-- components/   reusable pieces
|-- sections/     Hero, Skills, About, Projects, Education, Contact, Footer
|-- data/         all content (profile, projects, skills, education)
|-- hooks/        custom hooks
`-- types/        TypeScript types
```

To change text or add a project, edit the files in `src/data`.

## Contact

- Email: yonaskelem789@gmail.com
- GitHub: [@yonaskelem-dev](https://github.com/yonaskelem-dev)
- LinkedIn: [Yonas Kelem](https://www.linkedin.com/in/yonnas-kelem-a64008361/)