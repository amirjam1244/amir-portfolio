# Amirhossein Jamshidi Portfolio

Modern personal portfolio built with Next.js and Tailwind CSS.

A dark, minimal developer portfolio showcasing projects, skills, and contact information with smooth animations and responsive design.

## Features

- **Hero** — Full-screen introduction with name, role, and call-to-action buttons
- **Projects** — Responsive project grid with tech stack, GitHub, and live demo links
- **About** — Professional bio and skills showcase
- **Contact** — Clean contact form with client-side validation

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Inter](https://fonts.google.com/specimen/Inter) & [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) fonts

## How to Run Locally

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or bun

### Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd amir-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build   # Create a production build
npm run start   # Run the production server locally
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout and metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and typography
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── AnimatedButton.tsx
│   └── FadeIn.tsx
└── lib/
    └── motion.ts       # Shared Framer Motion variants
```

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push this project to GitHub, GitLab, or Bitbucket
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js — click **Deploy**

No environment variables are required for the current setup.

## License

Private project — all rights reserved.
