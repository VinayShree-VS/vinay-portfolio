# Vinay Kumar — Developer Portfolio

A modern, animated developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)

## ✨ Features

- **Dark / Light Mode** with smooth toggle
- **Framer Motion** animations throughout
- **Glassmorphism** and gradient UI effects
- **Responsive** design (mobile → desktop)
- **Scroll progress indicator**
- **Animated particle background** with mouse interaction
- **Floating gradient blobs**
- **Hover glow effects** on cards
- **Animated skill bars**
- **Timeline** with alternating layout
- **Contact form** UI
- **Resume download** button
- **Social media links**

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main portfolio page
├── components/
│   ├── Navbar.tsx         # Sticky navbar with blur + mobile menu
│   ├── Hero.tsx           # Hero section with particles
│   ├── About.tsx          # About me with stats
│   ├── Skills.tsx         # Animated skill bars
│   ├── Projects.tsx       # Project cards with hover effects
│   ├── Timeline.tsx       # Experience timeline
│   ├── Services.tsx       # Services grid
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form + info
│   ├── Footer.tsx         # Footer with socials
│   ├── ThemeProvider.tsx  # Dark/Light mode provider
│   └── ui/
│       ├── AnimatedBackground.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ScrollProgress.tsx
│       └── SectionTitle.tsx
├── hooks/
│   └── use-scroll.ts     # Scroll hooks
├── lib/
│   ├── data.ts           # All portfolio content
│   └── utils.ts          # cn() utility
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎨 Customization

Edit `src/lib/data.ts` to update:
- Your name, title, and description
- Social media links
- About section text and stats
- Skills and proficiency levels
- Projects (title, description, tags, links)
- Work experience timeline
- Services offered
- Client testimonials

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations |
| react-icons | Icon library |
| clsx + tailwind-merge | Class utilities |

## 📝 Notes

- Place your resume at `public/resume.pdf` for the download button
- Project images go in `public/projects/`
- The contact form is UI-only — connect it to your backend or service (e.g., Resend, EmailJS)
- Avatar placeholders use initials; replace with real images as needed

## 📜 License

MIT
