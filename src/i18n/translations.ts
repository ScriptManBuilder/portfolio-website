export const availableLanguages = ['en', 'uk'] as const;

export type Language = (typeof availableLanguages)[number];

export const translations = {
  en: {
    common: {
      profile: {
        firstName: 'Daniil',
        lastName: 'Hora',
        fullName: 'Daniil Hora',
      },
      navigation: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
    header: {
      contactCta: 'Contact',
      menuLabel: 'Toggle menu',
      languageSwitcherLabel: 'Choose site language',
      mobileLanguageLabel: 'Language',
      switchToEnglish: 'Switch to English',
      switchToUkrainian: 'Switch to Ukrainian',
    },
    seo: {
      title: 'Daniil Hora | Full-Stack Engineer',
      metaTitle: 'Full-Stack Engineer | Daniil Hora',
      description:
        'Daniil Hora is a Full-Stack Engineer building fast, scalable and modern web applications. Open to freelance, contract and remote roles.',
      ogDescription:
        'Full-Stack Engineer building scalable web applications. Open for freelance and remote opportunities.',
      twitterDescription:
        'Full-Stack Engineer available for remote work, freelance and contract projects.',
      locale: 'en_US',
      language: 'English',
    },
    hero: {
      status: 'Currently working',
      location: '📍 Ukraine · Remote',
      role: 'Full-Stack Engineer',
      intro:
        '2.5+ years delivering production sites, e-commerce products and scalable web apps — from UI to backend and cloud deploys.',
      workModes: ['Remote', 'Full-time', 'Part-time', 'Freelance', 'Office'],
      primaryCta: 'Projects',
      secondaryCta: 'Contact',
      cvCta: '↓ CV',
      photoAlt: 'Daniil Hora — Full-Stack Engineer',
      stats: {
        experience: 'Years exp.',
        projects: 'Projects',
        technologies: 'Technologies',
      },
      scrollHint: 'scroll',
    },
    about: {
      sectionLabel: 'About',
      titleLead: 'Building ',
      titleAccent: 'digital products',
      titleTail: ' that matter',
      paragraphs: [
        'I am a Full-Stack Engineer with 2.5+ years of commercial experience across freelance work and product teams. I build production-ready websites and web apps with a focus on clean architecture, speed and real business value.',
        'My core strength is full-cycle web development: UI/UX, frontend implementation, backend services, databases, deployment and support. I mainly work with TypeScript, React, C# and NestJS.',
        'I care about scalability, maintainability, security and performance so the final product is ready for real production use.',
      ],
      expertise: [
        '🌍 Remote-first',
        '🇬🇧 English B2',
        '🚀 Open to work',
        '🤝 Team player',
        '🎯 Result-driven',
        '🔒 Security-minded',
        '📐 Clean code',
      ],
      stats: [
        ['Years of commercial', 'development experience'],
        ['Production projects', 'delivered to clients'],
        ['Technologies', 'in active use'],
        ['Focus on clean code', '& best practices'],
      ],
    },
    skills: {
      sectionLabel: 'Tech Stack',
      titleLead: 'Built with ',
      titleAccent: 'purpose',
      totalLabel: 'technologies',
      skillCountLabel: 'skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        devops: 'DevOps & Tools',
      },
      shimmerText: 'always learning · always shipping',
    },
    projects: {
      sectionLabel: 'Portfolio',
      titleLead: 'Featured ',
      titleAccent: 'projects',
      previousAria: 'Previous projects',
      nextAria: 'Next projects',
      pageAria: 'Page',
      items: {
        digitalShop: {
          title: 'Digital Shop & E-Commerce',
          description:
            'Production-ready digital store with authentication, profiles, catalog, cart, order tracking and an admin dashboard with analytics.',
          details: `Digital Shop is a full-stack e-commerce platform I built as a production-oriented product, not just a demo. The goal was to create a clean shopping experience for customers and a practical admin workflow for daily business operations.

On the customer side, the app includes authentication, user profiles, a structured catalog, product pages, cart and checkout, plus order history and status tracking. Navigation is simple, the UI is readable, and the overall flow is focused on helping users find products and complete purchases quickly.

On the admin side, the system provides full control over products, users, and orders. Orders move through the full lifecycle (Processing -> Accepted -> Shipped -> Delivered), while the dashboard gives quick visibility into core metrics such as users, orders, and revenue.

What I implemented
- Product catalog with clear structure and detailed pages
- Fast cart and checkout flow
- Real-time order status handling
- Admin panel for content and operational management
- Analytics overview for business monitoring

Stack and deployment
- React (TypeScript, Vite), Styled Components
- NestJS, PostgreSQL, Prisma
- Vercel (frontend), Render (backend)`,
        },
        cryptoExchange: {
          title: 'Cryptocurrency Exchange Site',
          description:
            'Web platform for a crypto exchange with JWT auth, user profiles and an admin panel. Docker deployment keeps it secure, fast and scalable.',
          details: `This project is a web platform for a cryptocurrency exchange built with a full-stack architecture and a production-focused approach. The platform combines secure authentication, user account features, and admin controls in a single system designed for stability and scale.

Alongside the core exchange dashboard experience, I implemented a price alert mechanism for risk monitoring: users can define a time window and percentage threshold, and the system notifies when the asset price drops by the configured amount within that period.

What I implemented
- JWT authentication and protected user flows
- User profiles and account-level interactions
- Admin panel for operational control
- Configurable price-drop alerts (time window + percent threshold)
- Dockerized deployment setup for consistent environments

Stack and deployment
- TypeScript, React, Styled Components
- NestJS, PostgreSQL, Prisma
- Docker`,
        },
        auctionPlatform: {
          title: 'Auction Management System',
          description:
            'Modern online auction platform featuring user accounts, dynamic auction management, real-time bidding interactions, and an administrative panel for moderation and full control over auction workflows.',
          details: `BidFlow is a full-stack online auction platform built as a production-oriented project with a focus on real-world business logic, user roles, and real-time bidding workflows. The main goal was to combine a clean user experience with reliable backend architecture and practical moderation tools for administrators.

On the user side, the platform includes authentication, user profiles, auction browsing, bidding, and interaction through comments and reactions. Live bidding is supported in real time: users place bids while the platform updates the current price and tracks the highest bidder instantly.

On the administration side, the system provides moderation tools for users and comments, plus full auction management. To keep bidding safe under simultaneous requests, the backend uses optimistic concurrency control.

What I implemented
- JWT authentication and role-based access
- Auction system with statuses and live bidding flow
- Comment moderation workflow
- Like/Dislike interaction system
- Admin dashboard for content and user management
- Concurrency handling for safe bid processing

Stack and deployment
- React (TypeScript, Vite), Tailwind CSS
- ASP.NET Core Web API, Entity Framework Core
- PostgreSQL
- Vercel (frontend), VPS/Docker (backend)`,
        },
        twinMedical: {
          title: 'Twin Medical Website',
          description:
            'Web platform for medical devices and healthcare products with structured catalogs, category navigation and an admin interface for content management.',
          details: `Twin Medical is a healthcare product platform focused on trust, clarity, and easy navigation. I designed it to present medical equipment in a professional way while keeping the experience straightforward for both potential clients and administrators.

The public side includes a structured catalog with categories and filtering, detailed product pages with specifications, and clear communication points through contact/inquiry forms. Additional trust sections (partners, positioning, credibility blocks) help the site feel solid and business-ready.

From the management side, the project includes admin functionality for updating product and content data, so the team can keep the catalog актуальним without technical friction.

What I implemented
- Category-based catalog and filtering
- Detailed product pages with key specifications
- Contact and inquiry forms for lead capture
- Trust-oriented sections for stronger credibility
- Admin tools for product/content management

Stack and deployment
- React, TypeScript, Tailwind CSS
- NestJS, PostgreSQL
- Vercel (frontend), Render (backend)`,
        },
        fintechWebsites: {
          title: 'FinTech & Banking Websites',
          description:
            'FinTech and banking websites for international clients with secure auth, admin panels and scalable frontend architecture for enterprise use.',
          details: `This case covers a group of FinTech and banking web products built for international clients. The main focus was reliability, security, and clear information architecture suitable for regulated and enterprise-oriented environments.

The solutions were designed to balance business presentation with practical product functionality: secure authentication flows, structured admin areas, and frontend architecture that remains scalable as product scope grows.

What I delivered
- Secure authentication and access flows
- Admin panels for content and operational management
- Scalable frontend structure for enterprise growth
- Clear UX and content hierarchy for financial services
- Production-ready full-stack delivery

Core stack
- TypeScript
- React
- NestJS
- PostgreSQL
- Prisma
- Docker`,
        },
        topRange: {
          title: 'TopRange — Corporate Landing',
          description:
            'High-converting landing page for an international partner network with polished UI, smooth motion, strategic CTA blocks and a responsive layout.',
          details: `TopRange is a high-quality corporate landing page built to present the brand in a clear, confident, and conversion-focused way. The project is designed to balance visual polish with practical business goals: clear messaging, strong content structure, and smooth user flow from first screen to CTA.

I built the interface with React, TypeScript, and Styled Components, focusing on consistency, clean spacing, and responsive behavior across desktop, tablet, and mobile. Motion was used carefully to support the experience without distracting from content.

What I implemented
- Responsive layout for all major screen sizes
- Polished UI with a consistent visual system
- Smooth, lightweight animations for better flow
- Structured content blocks for easier reading and engagement
- CTA-focused sections to support conversion goals

Stack
- React
- TypeScript
- Styled Components
- Telegram API integration`,
        },
        ndaProjects: {
          title: 'Commercial Projects (NDA)',
          description:
            'Contributed to NDA projects across fintech, e-commerce, healthcare and marketing, shipping features, integrations, dashboards and scalable web apps.',
          details: `This section represents commercial projects delivered under NDA for international clients. While product names and internal details cannot be disclosed, the work covers real production systems across fintech, e-commerce, healthcare, and marketing domains.

My contribution typically included full-stack feature delivery, third-party integrations, admin/dashboard functionality, and architecture improvements focused on scalability, maintainability, and release reliability.

Scope of contribution
- Full-stack feature development from UI to backend logic
- Integration of external services and business APIs
- Admin panels, dashboards, and internal operational tools
- Performance, maintainability, and production-readiness improvements
- Collaboration in delivery-focused product teams with real deadlines

Core stack
- TypeScript, React, NestJS
- PostgreSQL, MongoDB
- .NET (in selected projects)
- Railway and modern deployment tooling`,
        },
        emailOutreach: {
          title: 'Email Outreach Dashboard App',
          description:
            'Full-stack outreach platform with an admin panel for recipients, templates and campaigns, plus Gmail API, bulk sending, tracking and delivery logs.',
          details: `Gmail Sender is a full-stack email outreach and campaign management platform built for real operational use. The product includes a custom admin panel where teams can manage recipients, templates, campaigns, and delivery workflows through a clean, practical interface.

The system uses Google OAuth 2.0 and Gmail API for secure, compliant sending through authorized accounts. It supports both single-send and bulk campaign scenarios, with delivery tracking, retry handling, and visibility into send performance.

What I implemented
- Gmail API integration with OAuth 2.0 authentication
- Recipient management (CRUD, filtering, import/export)
- Template management (plain text + HTML with variables)
- Campaign workflow with statuses (draft / sending / completed)
- Bulk sending with delays and rate limits
- Email logs with delivery status, retries, and error tracking
- Real-time dashboard metrics (sent, failed, campaigns)
- React Admin interface for operations

Technical highlights
- OAuth 2.0 flow with token persistence in PostgreSQL
- Queue-like backend behavior for scalable sending
- Rate limiting and throttling to protect sender reputation
- Relational data design for campaigns and logs

Stack
- React, TypeScript, React Admin, Vite
- NestJS, PostgreSQL, Prisma
- Gmail API, Google OAuth 2.0`,
        },
        calendarApp: {
          title: 'Calendar Productivity App',
          description:
            'Full-stack calendar app with task management, drag-and-drop scheduling, search and holiday integration for smoother daily planning.',
          details: `This project is a full-stack calendar application designed for everyday planning with a fast and clean UX. I built it to combine practical task management with a clear month view and fluid interactions, so users can organize work day by day without friction.

The interface supports creating, editing, and deleting tasks directly inside calendar cells. Tasks can be reordered with drag-and-drop or moved between dates, while real-time search helps quickly find records across the whole calendar.

To make the app more useful globally, I integrated public holidays by country using Nager.Date API. The selected country is persisted in localStorage and restored automatically on the next visit. The layout is fully responsive and works smoothly on desktop, tablet, and mobile.

What I implemented
- Monthly calendar navigation (Previous / Next / Today)
- Task CRUD inside day cells
- Color labels for quick visual grouping
- Drag-and-drop for reordering and moving tasks
- Real-time global search across tasks
- Country-based public holidays integration
- Persistent country preference via localStorage

Backend/API
- REST API for monthly task queries, task creation, partial updates, batch reorder/move, and deletion
- Task schema includes title, date, order, and optional color labels
- Route design avoids collisions (reorder endpoint registered before id-based update route)

Stack and tooling
- React 19, TypeScript, styled-components, Vite
- Node.js API
- MongoDB
- ESLint + typescript-eslint
- Vercel (frontend)`,
        },
        cryptoLanding: {
          title: 'Crypto Product Landing Page',
          description:
            'High-converting crypto product landing page built as a design and frontend showcase, with premium visual presentation and smooth responsive UX.',
          details: `This project was created as a technical and design showcase, demonstrating the ability to build modern, high-converting product websites with premium visual presentation, responsive UX, scalable frontend architecture, and production-quality implementation.

Portfolio notice: this is a non-commercial, educational project built purely for training and demonstration purposes, styled to look like an official product presentation. The website is intended for portfolio and demonstration purposes only and does not represent an actively marketed commercial business. All data on the site is test data — the contact/lead forms are not functional.

What I implemented
- Premium landing page layout with strong visual hierarchy
- Responsive, mobile-first UX across all breakpoints
- Scalable, reusable component architecture
- Smooth scroll-based animations and interactions

Stack
- React, TypeScript, Three.js, Vite
- Styled Components`,
        },
        videoMaker: {
          title: 'Video Maker Factory Tool',
          description:
            'Desktop-only GUI tool for automated video creation with templates, music and assets, including editing, cutting and speed control.',
          details: `Video Factory GUI is a desktop tool built to simplify and accelerate custom video production. The app is designed for content creators and marketing workflows where speed, repeatability, and consistent output quality are important.

It provides a user-friendly interface for combining templates, fonts, music, and visual assets into ready-to-export videos. The workflow is focused on automation of repetitive production steps rather than manual editing-heavy pipelines.

What I implemented
- Desktop GUI for template-driven video generation
- Font management with easy custom font addition (.ttf/.otf)
- Music integration with categorized tracks and custom import
- Reusable JSON templates for hooks and animation scenarios
- Automation scripts for concatenation, rendering, and pipeline tasks
- Live preview updates for fonts, music, and templates

Usage focus
- Fast content production
- Workflow optimization for repeatable tasks
- Desktop-only experience (no mobile support)

Stack
- TypeScript, Node.js
- HTML, CSS
- FFmpeg`,
        },
        scientificPortfolio: {
          title: 'Scientific Portfolio Website',
          description:
            'Personal portfolio site for a Ukrainian museum researcher, presenting publications, scientific work and professional background in a clear format.',
          details: `This is a portfolio website for a Ukrainian client from the scientific/museum domain. The project goal was to present publications, research work, and professional profile in a clean and trustworthy format with simple navigation.

A key requirement from the client was to keep the implementation lightweight and framework-free. Because of that, the project was built with pure HTML, CSS, and vanilla JavaScript (clean JavaScript without frontend frameworks).

What I implemented
- Multi-section portfolio structure for academic/professional content
- Clean responsive layout focused on readability
- Lightweight frontend with no framework overhead
- Telegram API contact integration
- Simple content management-friendly page architecture

Stack
- HTML
- CSS
- Vanilla JavaScript
- Telegram API
- Vercel`,
        },
        algorithmicTradingBot: {
          title: 'Algorithmic Trading Bot for Binance Futures',
          description:
            'Desktop trading bot for Binance Futures built with Python, Tkinter, WebSocket and SQLite. Supports automated signal detection, risk management, trade execution logic and local trade history tracking.',
          details: `A custom-engineered desktop trading bot for Binance USD-M Futures, built for speed, control, and adaptability in volatile markets. The application receives live market data via WebSocket, analyzes conditions using a momentum-short strategy, and executes automated decision logic with risk controls.

The system calculates position size, stop-loss, and take-profit parameters per setup, tracks executions, and stores local history for analysis. Trading activity is visualized in a Tkinter GUI for real-time monitoring and manual supervision.

What I implemented
- Real-time market stream processing via WebSocket
- Strategy engine with automated signal detection
- Position sizing and risk management logic
- Stop-loss / take-profit calculation workflow
- Trade execution logic and event tracking
- Desktop GUI for monitoring and controls
- Local persistence of trade history in SQLite

Stack
- Python
- Tkinter
- WebSocket
- Binance Futures API
- SQLite`,
        },
      },
    },
    projectCard: {
      detailsBadge: 'Details',
      detailsBadgeLabels: ['Details', 'Open Story'],
      detailsBadgeAria: 'Open full project description',
      detailsModalLabel: 'Project overview',
      closeDetailsAria: 'Close project description',
      detailsContactQuote: 'Have an idea in mind? Let us discuss your project.',
      detailsContactCta: 'Contact me →',
      githubLabel: 'GitHub →',
      repoLabels: {
        client: 'Client',
        server: 'Server',
      },
      liveDemoLabels: ['Live Demo →', 'Open site ↗'],
      states: {
        unavailable: ['Unavailable'],
        private: ['Private demo', 'Ask for access'],
        nda: ['NDA', 'Under NDA'],
        confidential: ['Confidential', 'Private repos'],
      },
    },
    education: {
      sectionLabel: 'Education',
      titleLead: 'Academic ',
      titleAccent: 'background',
      downloadDiploma: 'Diploma',
      details: 'Details',
      hide: 'Hide',
      items: {
        bachelor: {
          degree: "Bachelor's in Computer Science",
          institution: 'Odesa I.I. Mechnikov National University',
          period: '2021 — 2025',
          type: 'University',
          highlights: [
            'Built full-stack applications and system design projects',
            'Focused on algorithms, databases and scalable architecture',
            "Bachelor's thesis: production-ready web platform",
            'Worked in teams with Git and modern dev workflows',
          ],
        },
        lyceum: {
          degree: 'Secondary Education in Computer Science',
          institution: 'Kherson Academic Lyceum',
          period: '2019 — 2021',
          type: 'Lyceum',
          highlights: [
            'Participant in programming olympiads and IT contests',
            'Strong base in algorithms, logic and problem-solving',
            'Started software development practice early',
          ],
        },
        course: {
          degree: 'Professional Course in Web Development',
          institution: 'IT STEP Academy',
          period: '2018 — 2019',
          type: 'Course',
          highlights: [
            'Built first full-stack web projects',
            'Learned HTML, CSS and JavaScript fundamentals',
            'Gained hands-on experience with real dev basics',
          ],
        },
      },
    },
    workExperience: {
      sectionLabel: 'Experience',
      titleLead: 'Work ',
      titleAccent: 'experience',
      details: 'Details',
      hide: 'Hide',
      items: {
        current: {
          role: 'Full-Stack Developer',
          company: 'LuckyWare Pro',
          period: 'Since Jun 2026',
          location: 'Ukraine · Remote',
          type: 'Full-time',
          summary: 'Full-stack development on NDA projects.',
          highlights: [],
          stack: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Docker', 'AWS'],
          sourceLabel: 'Company website',
          sourceUrl: 'https://www.luckywarepro.com/',
        },
        moun: {
          role: 'Full-stack Developer',
          company: 'Digital Agency Moun',
          period: 'Sep 2025 – May 2026',
          location: 'Kyiv, Ukraine · Remote',
          type: 'Full-time',
          summary:
            'Built custom websites and scalable web platforms for clients across Europe, the USA, and Ukraine.',
          highlights: [
            'Handled the full cycle: discovery, client communication, UI/UX, development, deployment, and maintenance',
            'Built responsive React interfaces with a strong focus on quality, accessibility, and performance',
            'Developed APIs with Node.js, NestJS, PostgreSQL, NoSQL databases, auth flows, and CI/CD pipelines',
          ],
          stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
          sourceLabel: 'Company website',
          sourceUrl: 'https://mounweb.com/',
        },
        fireGroup: {
          role: 'Full Stack Developer',
          company: 'Fire-Group',
          period: 'Mar 2025 – Sep 2025',
          location: 'Odessa, Ukraine · On-site',
          type: 'Full-time',
          summary:
            'Built and maintained a cryptocurrency exchange website using TypeScript across the stack.',
          highlights: [
            'Created the admin panel, blog system, CRUD flows, and user profile pages',
            'Worked with React, Styled Components, Bootstrap, NestJS, PostgreSQL, MongoDB, and JWT auth',
            'Focused on responsive UI, API optimization, and product stability under load',
          ],
          stack: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT'],
        },
        freelance: {
          role: 'Freelance Full-Stack Developer',
          company: 'Freelance · International Clients',
          period: 'Sep 2023 – Feb 2025',
          location: 'Remote',
          type: 'Freelance',
          summary:
            'Delivered full-stack web applications and marketing sites for small and mid-sized businesses worldwide.',
          highlights: [
            'Built e-commerce systems with secure authentication, cart functionality, order management, and admin dashboards',
            'Created responsive marketing websites with modern UI/UX, increasing user interaction by 35%',
            'Managed production deployments using Docker, VPS, Vercel, Render, and CI/CD',
          ],
                   stack: ['JavaScript', 'Node.js','React', 'HTML&CSS', 'PostgreSQL', 'Docker', 'Vercel'],

        },
      },
    },
    contact: {
      sectionLabel: 'Contact',
      titleLead: "Let's ",
      titleAccent: 'work together',
      subtitle:
        'Have a project, a role or just want to talk? I am open to freelance, part-time and full-time work.',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      notice:
        'Prefer fast replies? Telegram is the quickest way to reach me. I usually answer within a few hours.',
    },
    contactForm: {
      successTitle: 'Message sent!',
      successBody: "Thanks for reaching out. I'll get back to you soon.",
      errorBody: 'Failed to send. Try email or Telegram instead.',
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        message: 'What can I help with?',
      },
      send: 'Send Message',
      sending: 'Sending...',
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        invalidEmail: 'Invalid email',
        messageRequired: 'Message is required',
        maxCharacters: (max: number) => `Max ${max} characters`,
      },
    },
    footer: {
      tagline: 'Full-Stack Engineer · Ukraine',
      navigationLabel: 'Navigation',
      socialLabel: 'Find me on',
      copyrightSuffix: 'All rights reserved.',
    },
    telegramButton: {
      ariaLabel: 'Contact me on Telegram',
    },
  },
  uk: {
    common: {
      profile: {
        firstName: 'Данііл',
        lastName: 'Гора',
        fullName: 'Данііл Гора',
      },
      navigation: {
        home: 'Старт',
        about: 'Про',
        skills: 'Стек',
        education: 'Освіта',
        experience: 'Досвід',
        projects: 'Проєкти',
        contact: "Зв'язок",
      },
    },
    header: {
      contactCta: 'Контакт',
      menuLabel: 'Відкрити меню',
      languageSwitcherLabel: 'Оберіть мову сайту',
      mobileLanguageLabel: 'Мова',
      switchToEnglish: 'Перемкнути на англійську',
      switchToUkrainian: 'Перемкнути на українську',
    },
    seo: {
      title: 'Данііл Гора | Фулстек-інженер',
      metaTitle: 'Фулстек-інженер | Данііл Гора',
      description:
        'Данііл Гора — фулстек-інженер. Створюю швидкі, масштабовані й сучасні вебзастосунки. Відкритий до фрилансу, контракту й віддаленої роботи.',
      ogDescription:
        'Фулстек-інженер, що створює масштабовані вебзастосунки. Відкритий до фрилансу та віддаленої співпраці.',
      twitterDescription:
        'Фулстек-інженер для фрилансу, контрактів і віддалених проєктів.',
      locale: 'uk_UA',
      language: 'Ukrainian',
    },
    hero: {
      status: 'Працюю',
      location: '📍 Україна · віддалено',
      role: 'Фулстек-інженер',
      intro:
        '2.5+ роки створюю продакшн-сайти, електронну комерцію та вебзастосунки — від UI до бекенду й деплою.',
      workModes: ['Віддалено', 'Фултайм', 'Парттайм', 'Фриланс', 'Офіс'],
      primaryCta: 'Проєкти',
      secondaryCta: 'Контакт',
      cvCta: '↓ CV',
      photoAlt: 'Данііл Гора — фулстек-інженер',
      stats: {
        experience: 'Досвід',
        projects: 'Проєкти',
        technologies: 'Технології',
      },
      scrollHint: 'далі',
    },
    about: {
      sectionLabel: 'Про мене',
      titleLead: 'Створюю ',
      titleAccent: 'цифрові продукти',
      titleTail: ' з сенсом',
      paragraphs: [
        'Я фулстек-інженер з 2.5+ роками комерційного досвіду у фрилансі та командах. Роблю готові до продакшну сайти й вебзастосунки з фокусом на архітектуру, швидкість і бізнес-цінність.',
        'Моя сильна сторона — повний цикл веброзробки: UI/UX, фронтенд, бекенд-сервіси, бази даних, деплой і підтримка. Основний стек: TypeScript, React, C# і NestJS.',
        'Фокусуюся на масштабованості, підтримуваності, безпеці та продуктивності, щоб продукт був готовий до реального продакшну.',
      ],
      expertise: [
        '🌍 Віддалено',
        '🇬🇧 Англ. B2',
        '🚀 До роботи',
        '🤝 Команда',
        '🎯 На результат',
        '🔒 Безпека',
        '📐 Чистий код',
      ],
      stats: [
        ['Років комерційної', 'розробки'],
        ['Проєктів у', 'продакшні'],
        ['Технологій', 'у роботі'],
        ['Фокус на чистому коді', 'та практиках'],
      ],
    },
    skills: {
      sectionLabel: 'Стек',
      titleLead: 'Стек зі ',
      titleAccent: 'змістом',
      totalLabel: 'технологій',
      skillCountLabel: 'навичок',
      categories: {
        frontend: 'Фронтенд',
        backend: 'Бекенд',
        databases: 'Бази даних',
        devops: 'DevOps та інстр.',
      },
      shimmerText: 'вчуся · запускаю',
    },
    projects: {
      sectionLabel: 'Портфоліо',
      titleLead: 'Вибрані ',
      titleAccent: 'проєкти',
      previousAria: 'Попередні проєкти',
      nextAria: 'Наступні проєкти',
      pageAria: 'Сторінка',
      items: {
        digitalShop: {
          title: 'Digital Shop та E-Commerce',
          description:
            'Готовий e-commerce магазин з авторизацією, профілями, каталогом, кошиком, трекінгом замовлень і адмінкою з аналітикою.',
          details: `Digital Shop - це full-stack e-commerce платформа, яку я робив як продакшн-рішення, а не просто навчальний pet-проєкт. Ідея була проста: дати клієнту швидкий і зрозумілий шопінг-флоу, а бізнесу - зручну адмінпанель для щоденної роботи.

На клієнтській стороні реалізовано авторизацію, профілі користувачів, структурований каталог, сторінки товарів, кошик і checkout, а також відстеження замовлень. Навігація й подача контенту побудовані так, щоб користувач швидко знаходив потрібне і без зайвих кроків доходив до покупки.

На стороні адміністрування система покриває повний операційний цикл: керування товарами, користувачами й замовленнями, включно зі статусами Processing -> Accepted -> Shipped -> Delivered. Додатково є дашборд з ключовими метриками для контролю стану продукту.

Що реалізовано
- Каталог товарів із логічною структурою та детальними сторінками
- Повний cart/checkout флоу
- Трекінг замовлень у реальному часі
- Адмінпанель для керування контентом та операціями
- Аналітичний огляд по користувачах, замовленнях і доходу

Стек і деплой
- React (TypeScript, Vite), Styled Components
- NestJS, PostgreSQL, Prisma
- Vercel (frontend), Render (backend)`,
        },        
        cryptoExchange: {
          title: 'Крипто обмін сайт',
          description:
            'Платформа для крипто обміну з JWT-авторизацією, профілями користувачів і адмінпанеллю. Docker-деплой дає швидкість, безпеку та масштаб.',
          details: `Це full-stack платформа для криптообміну, побудована з продакшн-підходом до безпеки, стабільності та масштабування. У проєкті поєднано захищену авторизацію, користувацькі профілі та адміністративну частину для операційного контролю.

Окремо реалізовано механіку цінових алертів: користувач задає часовий проміжок і поріг у відсотках, а система сповіщає, якщо ціна активу впала на вказане значення в межах цього інтервалу.

Що реалізовано
- JWT-авторизація та захищені користувацькі флоу
- Профілі користувачів та account-взаємодія
- Адмінпанель для операційного керування
- Алерти на падіння ціни (часове вікно + відсотковий поріг)
- Dockerized деплой для стабільних середовищ

Стек і деплой
- TypeScript, React, Styled Components
- NestJS, PostgreSQL, Prisma
- Docker`,
        },

        
        auctionPlatform: {
          title: 'Система управління аукціонами',
          description:
            'Сучасна онлайн-аукціонна платформа з обліковими записами користувачів, керуванням аукціонами, взаємодією в реальному часі під час ставок та адміністративною панеллю для модерації й повного контролю аукціону.',
          details: `BidFlow - full-stack платформа онлайн-аукціонів, створена як production-oriented проєкт із фокусом на реальний бізнес-флоу, ролі користувачів і систему ставок у реальному часі. Основна ідея - поєднати зручний інтерфейс для користувачів із надійною серверною логікою та інструментами модерації для адміністраторів.

На стороні користувача реалізовано авторизацію, профілі, перегляд аукціонів, систему ставок і взаємодію з лотами через коментарі та реакції. Платформа підтримує live bidding flow: користувачі роблять ставки в реальному часі, а система автоматично оновлює поточну ціну та відстежує найвищу ставку.

Адміністративна частина покриває модерацію користувачів, коментарів і керування аукціонами. Для безпечної обробки одночасних bid-запитів реалізовано optimistic concurrency control.

Що реалізовано
- JWT authentication та role-based access
- Система аукціонів зі статусами та live bidding
- Коментарі з модерацією
- Like/Dislike система
- Адмінпанель для керування користувачами й контентом
- Concurrency handling для безпечної роботи ставок

Стек і деплой
- React (TypeScript, Vite), Tailwind CSS
- ASP.NET Core Web API, Entity Framework Core
- PostgreSQL
- Vercel (frontend), VPS/Docker (backend)`,
        },



        twinMedical: {
          title: 'Сайт Twin Medical',
          description:
            'Платформа для медтехніки й медичних продуктів з каталогом, категоріями та адмінкою для керування контентом і позиціями.',
          details: `Twin Medical - вебплатформа для презентації медичних товарів і обладнання, де основний фокус зроблено на довірі, зрозумілій навігації та професійній подачі контенту.

Публічна частина проєкту включає структурований каталог із категоріями та фільтрацією, детальні сторінки продуктів із характеристиками, а також контактні форми для швидкої комунікації з потенційними клієнтами. Окремі блоки довіри (партнери, позиціонування, акценти на якості) допомагають підсилити відчуття надійності бренду.

З боку керування передбачена адмін-функціональність для оновлення товарів і контенту, щоб команда могла підтримувати актуальність каталогу без складних технічних дій.

Що реалізовано
- Категорійний каталог і фільтрація
- Детальні сторінки товарів з ключовими характеристиками
- Контактні та inquiry-форми для збору заявок
- Trust-блоки для підвищення довіри
- Адмін-інструменти для керування продуктами й контентом

Стек і деплой
- React, TypeScript, Tailwind CSS
- NestJS, PostgreSQL
- Vercel (frontend), Render (backend)`,
        },
        fintechWebsites: {
          title: 'Фінтех та банківські сайти',
          description:
            'FinTech та банківські сайти для міжнародних клієнтів: безпечна авторизація, адмінпанелі й масштабований фронтенд для enterprise-сегменту.',
          details: `Цей кейс охоплює групу FinTech і банківських вебпродуктів для міжнародних клієнтів. Основний акцент зроблено на надійності, безпеці та зрозумілій інформаційній архітектурі, що відповідає вимогам enterprise і фінансового домену.

Рішення поєднують бізнес-презентацію з практичною продуктовою частиною: безпечні auth-flow, структуровані адмінзони та масштабована фронтенд-архітектура, яка стабільно працює при зростанні функціоналу.

Що реалізовано
- Безпечна авторизація та контроль доступу
- Адмінпанелі для контенту й операційних задач
- Масштабована frontend-структура для enterprise-навантажень
- Чіткий UX і контент-ієрархія для фінансових сервісів
- Продакшн-готовий full-stack delivery

Основний стек
- TypeScript
- React
- NestJS
- PostgreSQL
- Prisma
- Docker`,
        },
        topRange: {
          title: 'TopRange корпоративний лендінг',
          description:
            'Корпоративний лендінг для міжнародної партнерської мережі: сучасний інтерфейс, плавні анімації, сильні CTA та адаптивна верстка.',
          details: `TopRange - це якісний корпоративний лендінг, створений для чіткої, впевненої та конверсійної презентації бренду. У проєкті зроблено акцент на балансі між візуальною якістю та бізнес-задачами: зрозумілий меседж, добре структурований контент і плавний шлях користувача від першого екрана до цільової дії.

Інтерфейс реалізовано на React, TypeScript і Styled Components з фокусом на консистентність, чисті відступи та стабільну адаптивність для desktop, tablet і mobile. Анімації використані акуратно, щоб підсилювати UX, а не перевантажувати сторінку.

Що реалізовано
- Адаптивний layout для основних розмірів екрана
- Акуратний, polished UI з єдиною візуальною системою
- Плавні, легкі анімації для природного flow
- Структуровані контент-блоки для кращого сприйняття
- CTA-орієнтовані секції для підсилення конверсії

Стек
- React
- TypeScript
- Styled Components
- Інтеграція з Telegram API`,
        },
        ndaProjects: {
          title: 'Комерційні проєкти (NDA)',
          description:
            'Участь у NDA-проєктах у фінтеху, e-commerce, медичній сфері та маркетингу: фулстек-фічі, інтеграції, адмінки й продакшн-застосунки.',
          details: `Цей блок охоплює комерційні проєкти, виконані під NDA для міжнародних клієнтів. Через умови конфіденційності назви продуктів і внутрішні деталі не розкриваються, але це реальні production-системи у фінтеху, e-commerce, healthcare та маркетингу.

Моя роль зазвичай включала full-stack delivery: від UI та бізнес-логіки до інтеграцій, адмінпанелей і технічних поліпшень, спрямованих на масштабованість, підтримуваність і стабільні релізи.

Що входило в роботу
- Розробка фіч по всьому стеку (frontend + backend)
- Інтеграції зі сторонніми сервісами та API
- Адмінпанелі, дашборди й внутрішні операційні інструменти
- Оптимізація продуктивності та production-ready покращення
- Робота в delivery-командах із реальними дедлайнами

Основний стек
- TypeScript, React, NestJS
- PostgreSQL, MongoDB
- .NET (у вибраних проєктах)
- Railway та сучасний deployment tooling`,
        },
        emailOutreach: {
          title: 'Дашборд email outreach',
          description:
            'Email outreach платформа з адмінкою для одержувачів, шаблонів і кампаній. Є Gmail API, масові відправки, трекінг і логи доставки.',
          details: `Gmail Sender - full-stack платформа для email outreach та керування кампаніями, створена для реального операційного використання. Продукт має власну адмінпанель для керування одержувачами, шаблонами, кампаніями та процесом доставки листів у зручному інтерфейсі.

Система використовує Google OAuth 2.0 та Gmail API для безпечної і комплаєнтної відправки через авторизовані акаунти. Підтримуються як одиночні відправки, так і bulk-кампанії з трекінгом, retry-логікою та контролем якості доставки.

Що реалізовано
- Інтеграція Gmail API з OAuth 2.0
- Керування одержувачами (CRUD, фільтрація, import/export)
- Шаблони листів (plain text + HTML зі змінними)
- Кампанії зі статусами (draft / sending / completed)
- Масові відправки з delay та rate limiting
- Логи доставки, retries та error tracking
- Дашборд з live-метриками (sent, failed, campaigns)
- Чиста операційна адмінка на React Admin

Технічні акценти
- OAuth 2.0 flow зі збереженням токенів у PostgreSQL
- Queue-like поведінка бекенду для масштабованої відправки
- Throttling і обмеження для безпеки sender reputation
- Реляційна модель даних для кампаній і логів

Стек
- React, TypeScript, React Admin, Vite
- NestJS, PostgreSQL, Prisma
- Gmail API, Google OAuth 2.0`,
        },
        calendarApp: {
          title: 'Календарний застосунок',
          description:
            'Фулстек-календар із задачами, плануванням перетягуванням, пошуком і святами для щоденної організації роботи.',
          details: `Це full-stack календарний застосунок для щоденного планування з акцентом на швидкий, чистий і зрозумілий UX. Я робив його як практичний інструмент, де користувач може керувати задачами прямо в календарі без зайвих кроків.

У кожній даті доступні створення, редагування та видалення задач. Задачі можна перетягувати між днями або змінювати порядок drag-and-drop, а глобальний пошук допомагає миттєво знайти потрібний запис у всьому календарі.

Щоб застосунок був корисний для різних країн, інтегровано публічні свята через Nager.Date API. Обрана країна зберігається в localStorage і автоматично відновлюється при наступному відкритті. Інтерфейс адаптивний і комфортно працює на desktop, tablet та mobile.

Що реалізовано
- Місячна навігація календаря (Previous / Next / Today)
- CRUD задач прямо в клітинках дня
- Кольорові лейбли для швидкого візуального групування
- Drag-and-drop для зміни порядку і перенесення задач
- Пошук у реальному часі по всьому календарю
- Інтеграція свят за вибраною країною
- Збереження країни в localStorage

Бекенд/API
- REST API для вибірки задач по місяцю, створення, часткового оновлення, batch reorder/move і видалення
- Схема задачі: title, date, order, optional labels
- Роути організовані без конфліктів (reorder endpoint оголошений перед id-based update)

Стек і тулінг
- React 19, TypeScript, styled-components, Vite
- Node.js API
- MongoDB
- ESLint + typescript-eslint
- Vercel (frontend)`,
        },
        cryptoLanding: {
          title: 'Лендинг крипто-продукту',
          description:
            'Конверсійний лендинг для крипто-продукту, зроблений як демонстрація дизайну та фронтенд-навичок — преміальна візуальна подача та плавний адаптивний UX.',
          details: `Цей проєкт створений як технічна та дизайнерська демонстрація, яка показує вміння робити сучасні, конверсійні сайти-продукти з преміальною візуальною подачею, адаптивним UX, масштабованою фронтенд-архітектурою та якістю реалізації на рівні продакшну.

Важливе застереження: це некомерційний, навчальний проєкт, зроблений виключно з метою тренування та демонстрації, оформлений як офіційна презентація продукту. Сайт призначений лише для портфоліо й демонстрації та не представляє реально діючий комерційний бізнес. Усі дані на сайті тестові — форми зв'язку/заявок не працюють.

Що реалізовано
- Преміальна структура лендингу з чіткою візуальною ієрархією
- Адаптивний, mobile-first UX на всіх роздільностях
- Масштабована, перевикористовувана компонентна архітектура
- Плавні анімації та взаємодії на основі скролу

Стек
- React, TypeScript, Three.js, Vite
- Styled Components`,
        },
        videoMaker: {
          title: 'Інструмент Video Maker Factory',
          description:
            'Десктопний GUI-інструмент для автоматичного створення відео з шаблонів, музики та ресурсів. Є монтаж, нарізка й контроль швидкості.',
          details: `Video Factory GUI - desktop-інструмент, створений для швидкого й зручного автоматизованого виробництва відео. Основний фокус - спростити повторювані задачі та дати стабільний пайплайн для створення контенту без зайвих ручних кроків.

Інтерфейс дозволяє комбінувати шаблони, шрифти, музику та інші assets у готові відео. Рішення орієнтоване на контент-кріейторів і маркетингові сценарії, де важливі швидкість, повторюваність і передбачувана якість результату.

Що реалізовано
- Desktop GUI для template-driven генерації відео
- Керування шрифтами з додаванням власних .ttf/.otf
- Інтеграція музики з категоріями та custom import
- Готові JSON-шаблони для hooks і анімаційних сцен
- Automation scripts для concatenation, rendering і pipeline-задач
- Live preview для шрифтів, музики та шаблонів

Фокус використання
- Швидке виробництво контенту
- Оптимізація повторюваних workflow
- Лише desktop-сценарій (без mobile)

Стек
- TypeScript, Node.js
- HTML, CSS
- FFmpeg`,
        },
        scientificPortfolio: {
          title: 'Науковий сайт-портфоліо',
          description:
            'Персональний сайт-портфоліо для українського музейного дослідника з науковими роботами, публікаціями та професійним профілем.',
          details: `Це портфоліо-сайт для українського клієнта з науково-музейної сфери. Завданням було подати публікації, дослідницькі матеріали та професійний профіль у чистому, структурованому форматі з простою навігацією.

Ключова вимога клієнта - реалізація без фреймворків. Саме тому проєкт побудовано на чистому стеку: vanilla JavaScript (чистий JavaScript), HTML і CSS.

Що реалізовано
- Структурований багатосекційний сайт для наукового контенту
- Читабельний адаптивний інтерфейс
- Легкий frontend без framework-overhead
- Інтеграція Telegram API для контактної взаємодії
- Проста архітектура сторінки для подальшого оновлення контенту

Стек
- HTML
- CSS
- Vanilla JavaScript
- Telegram API
- Vercel`,
        },
        algorithmicTradingBot: {
          title: 'Алгоритмічний торговий бот для Binance Futures',
          description:
            'Desktop trading bot for Binance Futures built with Python, Tkinter, WebSocket and SQLite. Supports automated signal detection, risk management, trade execution logic and local trade history tracking.',
          details: `Кастомно спроєктований desktop-бот для автоматичної торгівлі на Binance USD-M Futures, орієнтований на швидкість реакції, контроль ризиків і стабільну роботу в динамічному ринку. Додаток отримує ринкові дані через WebSocket, аналізує умови за momentum-short логікою та запускає automated decision flow.

Система розраховує розмір позиції, stop-loss і take-profit, виконує торгову логіку, зберігає історію угод локально та показує торгову активність у GUI на Tkinter для моніторингу в реальному часі.

Що реалізовано
- Обробка live-ринкових даних через WebSocket
- Strategy engine з automated signal detection
- Position sizing і risk management логіка
- Розрахунок і застосування stop-loss / take-profit
- Trade execution logic та журналювання подій
- GUI-інтерфейс для контролю торгової активності
- Локальне збереження історії угод у SQLite

Стек
- Python
- Tkinter
- WebSocket
- Binance Futures API
- SQLite`,
        },
      },
    },
    projectCard: {
      detailsBadge: 'Опис',
      detailsBadgeLabels: ['Опис', 'Деталі'],
      detailsBadgeAria: 'Відкрити повний опис проєкту',
      detailsModalLabel: 'Огляд проєкту',
      closeDetailsAria: 'Закрити опис проєкту',
      detailsContactQuote: 'Є ідея чи проєкт? Напишіть мені, обговоримо.',
      detailsContactCta: 'Звʼязатися →',
      githubLabel: 'GitHub →',
      repoLabels: {
        client: 'Клієнт',
        server: 'Сервер',
      },
      liveDemoLabels: ['Демо →', 'Відкрити ↗'],
      states: {
        unavailable: ['Недоступно'],
        private: ['Закрите демо', 'Напишіть'],
        nda: ['NDA', 'Під NDA'],
        confidential: ['Конфіденц.', 'Приватні репо'],
      },
    },
    education: {
      sectionLabel: 'Освіта',
      titleLead: 'Освітній ',
      titleAccent: 'шлях',
      downloadDiploma: 'Диплом',
      details: 'Деталі',
      hide: 'Сховати',
      items: {
        bachelor: {
          degree: "Бакалавр комп'ютерних наук",
          institution: 'ОНУ ім. І. І. Мечникова',
          period: '2021 — 2025',
          type: 'ВНЗ',
          highlights: [
            'Створював фулстек-застосунки та проєкти системного дизайну',
            'Фокусувався на алгоритмах, БД і масштабованій архітектурі',
            'Тема бакалавра: готова до продакшну вебплатформа',
            'Працював у команді з Git і сучасними процесами розробки',
          ],
        },
        lyceum: {
          degree: 'Середня освіта з інформатики',
          institution: 'Херсонський академічний ліцей',
          period: '2019 — 2021',
          type: 'Ліцей',
          highlights: [
            'Учасник олімпіад з програмування та IT-конкурсів',
            'Сильна база в алгоритмах, логіці та розвʼязанні задач',
            'Рано почав практикувати розробку ПЗ',
          ],
        },
        course: {
          degree: 'Курс з веброзробки',
          institution: 'IT STEP Academy',
          period: '2018 — 2019',
          type: 'Курс',
          highlights: [
            'Зробив перші фулстек вебпроєкти',
            'Вивчив HTML, CSS та основи JavaScript',
            'Отримав практичний досвід реальної розробки',
          ],
        },
      },
    },
    workExperience: {
      sectionLabel: 'Досвід',
      titleLead: 'Досвід ',
      titleAccent: 'роботи',
      details: 'Деталі',
      hide: 'Сховати',
      items: {
        current: {
          role: 'Фулстек-розробник',
          company: 'LuckyWare Pro',
          period: 'З червня 2026',
          location: 'Україна · Віддалено',
          type: 'Повний день',
          summary: 'Фулстек-розробка NDA-проєктів.',
          highlights: [],
          stack: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Docker', 'AWS'],
          sourceLabel: 'Сайт компанії',
          sourceUrl: 'https://www.luckywarepro.com/',
        },
        moun: {
          role: 'Фулстек-розробник',
          company: 'Digital Agency Moun',
          period: 'вер. 2025 р. – трав. 2026 р.',
          location: 'Київ, Україна · Віддалено',
          type: 'Повний день',
          summary:
            'Створював кастомні сайти та масштабовані вебплатформи для клієнтів із Європи, США та України.',
          highlights: [
            'Вів повний цикл: від discovery та комунікації з клієнтом до UI/UX, розробки, деплою і підтримки',
            'Будував адаптивні React-інтерфейси з фокусом на якість, доступність і продуктивність',
            'Робив API на Node.js і NestJS, працював з PostgreSQL, NoSQL, auth flows і CI/CD',
          ],
          stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
          sourceLabel: 'Сайт компанії',
          sourceUrl: 'https://mounweb.com/',
        },
        fireGroup: {
          role: 'Full Stack Developer',
          company: 'Fire-Group',
          period: 'бер. 2025 р. – вер. 2025 р.',
          location: 'Одеса, Україна · Офіс',
          type: 'Повний день',
          summary:
            'Розробляв і підтримував сайт криптовалютної біржі на TypeScript по всьому стеку.',
          highlights: [
            'Зробив адмін-панель, блог, CRUD-операції та профілі користувачів',
            'Працював з React, Styled Components, Bootstrap, NestJS, PostgreSQL, MongoDB та JWT-аутентифікацією',
            'Зосереджувався на адаптивному UI, оптимізації API та стабільності під навантаженням',
          ],
          stack: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT'],
        },
        freelance: {
          role: 'Фриланс Full-Stack розробник',
          company: 'Фриланс · Міжнародні клієнти',
          period: 'вер. 2023 р. – лют. 2025 р.',
          location: 'Віддалено',
          type: 'Фриланс',
          summary:
            'Розробляв фулстек вебзастосунки та маркетингові сайти для малого й середнього бізнесу по всьому світу.',
          highlights: [
            'Будував e-commerce системи з безпечною автентифікацією, кошиком, керуванням замовленнями та адмінпанеллю',
            'Створював адаптивні маркетингові сайти з сучасним UI/UX, що підвищило залученість користувачів на 35%',
            'Керував продакшн-деплоями через Docker, VPS, Vercel, Render та CI/CD',
          ],
          stack: ['JavaScript', 'Node.js','React', 'HTML&CSS', 'PostgreSQL', 'Docker', 'Vercel'],
        },
      },
    },
    contact: {
      sectionLabel: "Зв'язок",
      titleLead: 'Працюймо ',
      titleAccent: 'разом',
      subtitle:
        'Є проєкт, роль чи ідея? Відкритий до фрилансу, часткової та повної зайнятості.',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      notice: 'Найшвидше відповідаю в Telegram. Зазвичай протягом кількох годин.',
    },
    contactForm: {
      successTitle: 'Повідомлення надіслано!',
      successBody: 'Дякую за звернення. Відповім найближчим часом.',
      errorBody: 'Не вдалося надіслати. Напишіть на email або в Telegram.',
      labels: {
        name: "Ім'я",
        email: 'Email',
        message: 'Повідомлення',
      },
      placeholders: {
        name: "Ваше ім'я",
        email: 'your@email.com',
        message: 'Чим можу допомогти?',
      },
      send: 'Надіслати',
      sending: 'Надсилаю...',
      validation: {
        nameRequired: "Вкажіть ім'я",
        emailRequired: 'Вкажіть email',
        invalidEmail: 'Некоректний email',
        messageRequired: 'Напишіть повідомлення',
        maxCharacters: (max: number) => `До ${max} символів`,
      },
    },
    footer: {
      tagline: 'Фулстек-інженер · Україна',
      navigationLabel: 'Навігація',
      socialLabel: 'Я тут',
      copyrightSuffix: 'Усі права захищено.',
    },
    telegramButton: {
      ariaLabel: 'Написати в Telegram',
    },
  },
} as const;

export type Translation = (typeof translations)['en'];