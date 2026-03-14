export const siteConfig = {
  name: 'Vinay Kumar',
  title: 'Full-Stack Developer',
  description:
    'I build exceptional digital experiences that live at the intersection of design and technology.',
  url: 'https://alexmorgan.dev',
  email: 'hello@alexmorgan.dev',
  location: 'San Francisco, CA',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const aboutData = {
  description: [
    "I'm a passionate full-stack developer with 5+ years of experience crafting modern web applications. I specialize in building performant, accessible, and visually stunning digital products.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through tech blogs and community talks.",
  ],
  stats: [
    { label: 'Years Experience', value: 5 },
    { label: 'Projects Completed', value: 50 },
    { label: 'Happy Clients', value: 30 },
    { label: 'Open Source Contributions', value: 100 },
  ],
};

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 92 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX Design', level: 82 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Design Systems', level: 80 },
    ],
  },
];

export const projectsData = [
  {
    title: 'CloudSync Pro',
    description:
      'A real-time collaborative workspace platform with file syncing, team chat, and project management features built for modern remote teams.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket', 'AWS S3'],
    image: '/projects/project-1.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'FinTrack AI',
    description:
      'AI-powered personal finance dashboard with predictive analytics, budget optimization, and smart investment recommendations.',
    tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Stripe'],
    image: '/projects/project-2.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'DevConnect Hub',
    description:
      'A developer social platform for sharing code snippets, collaborating on projects, and connecting with other developers worldwide.',
    tags: ['Next.js', 'GraphQL', 'MongoDB', 'Redis', 'Docker'],
    image: '/projects/project-3.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'EcoShop Marketplace',
    description:
      'Sustainable e-commerce platform connecting eco-conscious consumers with verified green businesses and products.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Tailwind'],
    image: '/projects/project-4.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'HealthPulse',
    description:
      'Health monitoring application with wearable device integration, providing personalized insights and wellness recommendations.',
    tags: ['React Native', 'Firebase', 'HealthKit', 'Chart.js'],
    image: '/projects/project-5.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'CodeReview Bot',
    description:
      'An AI-powered GitHub bot that automatically reviews pull requests, suggests improvements, and enforces coding standards.',
    tags: ['Node.js', 'OpenAI', 'GitHub API', 'TypeScript'],
    image: '/projects/project-6.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

export const experienceData = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechNova Inc.',
    period: '2024 – Present',
    description:
      'Leading the frontend architecture team, building scalable web applications with Next.js and TypeScript. Mentoring junior developers and driving best practices adoption.',
    technologies: ['Next.js', 'TypeScript', 'AWS', 'GraphQL'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'DigitalCraft Studio',
    period: '2022 – 2024',
    description:
      'Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 60%.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Frontend Developer',
    company: 'StartupLab',
    period: '2021 – 2022',
    description:
      'Built responsive, accessible web interfaces for early-stage startups. Collaborated closely with designers to deliver pixel-perfect implementations.',
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Figma'],
  },
  {
    role: 'Junior Developer',
    company: 'WebWorks Agency',
    period: '2020 – 2021',
    description:
      'Started my professional journey building WordPress sites and custom web applications. Learned modern frontend frameworks and best practices.',
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP'],
  },
];

export const servicesData = [
  {
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks, optimized for performance and user experience.',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces designed with a focus on usability, accessibility, and modern aesthetics.',
    icon: 'palette',
  },
  {
    title: 'API Development',
    description:
      'Robust and scalable RESTful and GraphQL APIs designed for seamless integration and high performance.',
    icon: 'server',
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications using React Native, delivering native-like experiences on both platforms.',
    icon: 'smartphone',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for reliable, scalable applications.',
    icon: 'cloud',
  },
  {
    title: 'Consulting',
    description:
      'Technical consulting and code audits to help teams improve their development processes and code quality.',
    icon: 'lightbulb',
  },
];

export const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content:
      "Alex transformed our outdated platform into a modern, high-performing web application. The attention to detail and commitment to quality was exceptional. Our user engagement increased by 40% after the redesign.",
    avatar: '/avatars/avatar-1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataFlow Systems',
    content:
      "Working with Alex was a game-changer for our team. The technical expertise combined with excellent communication made the entire project smooth and successful. Highly recommended!",
    avatar: '/avatars/avatar-2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateCo',
    content:
      "Alex doesn't just write code — they solve problems. The solutions delivered were elegant, performant, and exactly what we needed. A true professional who goes above and beyond.",
    avatar: '/avatars/avatar-3.jpg',
  },
  {
    name: 'David Park',
    role: 'Founder, GreenTech Solutions',
    content:
      'From concept to deployment, Alex delivered an outstanding product on time and within budget. The technical skills and creative thinking brought our vision to life perfectly.',
    avatar: '/avatars/avatar-4.jpg',
  },
];
