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
        projects: 'Projects',
        education: 'Education',
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
      title: 'Daniil Hora | Full-Stack Developer',
      metaTitle: 'Full-Stack Developer | Daniil Hora',
      description:
        'Daniil Hora is a Full-Stack Developer building fast, scalable and modern web applications. Open to freelance, contract and remote roles.',
      ogDescription:
        'Full-Stack Developer building scalable web applications. Open for freelance and remote opportunities.',
      twitterDescription:
        'Full-Stack Developer available for remote work, freelance and contract projects.',
      locale: 'en_US',
      language: 'English',
    },
    hero: {
      status: 'Open to work',
      location: '📍 Ukraine · Remote',
      role: 'Full-Stack Developer',
      intro:
        '2.5+ years delivering production sites, e-commerce products and scalable web apps — from UI to backend and cloud deploys.',
      workModes: ['Remote', 'Full-time', 'Part-time', 'Freelance', 'Office'],
      primaryCta: 'Projects',
      secondaryCta: 'Contact',
      cvCta: '↓ CV',
      photoAlt: 'Daniil Hora — Full-Stack Developer',
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
        'I am a Full-Stack Developer with 2.5+ years of commercial experience across freelance work and product teams. I build production-ready websites and web apps with a focus on clean architecture, speed and real business value.',
        'My core strength is full-cycle web development: UI/UX, frontend implementation, backend services, databases, deployment and support. I mainly work with TypeScript, React and NestJS.',
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
          title: 'Digital Shop & E-Commerce Platform',
          description:
            'Production-ready digital store with authentication, profiles, catalog, cart, order tracking and an admin dashboard with analytics.',
        },
        cryptoExchange: {
          title: 'Cryptocurrency Exchange Platform',
          description:
            'Web platform for a crypto exchange with JWT auth, user profiles and an admin panel. Docker deployment keeps it secure, fast and scalable.',
        },
        twinMedical: {
          title: 'Twin Medical Website',
          description:
            'Web platform for medical devices and healthcare products with structured catalogs, category navigation and an admin interface for content management.',
        },
        fintechWebsites: {
          title: 'FinTech & Banking Websites',
          description:
            'FinTech and banking websites for international clients with secure auth, admin panels and scalable frontend architecture for enterprise use.',
        },
        topRange: {
          title: 'TopRange — Corporate Landing',
          description:
            'High-converting landing page for an international partner network with polished UI, smooth motion, strategic CTA blocks and a responsive layout.',
        },
        ndaProjects: {
          title: 'Various Commercial Projects (NDA)',
          description:
            'Contributed to NDA projects across fintech, e-commerce, healthcare and marketing, shipping features, integrations, dashboards and scalable web apps.',
        },
        emailOutreach: {
          title: 'Email Outreach Dashboard Application',
          description:
            'Full-stack outreach platform with an admin panel for recipients, templates and campaigns, plus Gmail API, bulk sending, tracking and delivery logs.',
        },
        calendarApp: {
          title: 'Calendar Productivity Application',
          description:
            'Full-stack calendar app with task management, drag-and-drop scheduling, search and holiday integration for smoother daily planning.',
        },
        videoMaker: {
          title: 'Video Maker Factory Tool',
          description:
            'Desktop-only GUI tool for automated video creation with templates, music and assets, including editing, cutting and speed control.',
        },
        scientificPortfolio: {
          title: 'Scientific Portfolio Website',
          description:
            'Personal portfolio site for a Ukrainian museum researcher, presenting publications, scientific work and professional background in a clear format.',
        },
      },
    },
    projectCard: {
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
      tagline: 'Full-Stack Developer · Ukraine',
      navigationLabel: 'Navigation',
      socialLabel: 'Find me on',
      copyrightSuffix: 'All rights reserved.',
      status: 'Open to new opportunities',
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
        projects: 'Проєкти',
        education: 'Освіта',
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
      title: 'Данііл Гора | Фулстек-розробник',
      metaTitle: 'Фулстек-розробник | Данііл Гора',
      description:
        'Данііл Гора — фулстек-розробник. Створюю швидкі, масштабовані й сучасні вебзастосунки. Відкритий до фрилансу, контракту й віддаленої роботи.',
      ogDescription:
        'Фулстек-розробник, що створює масштабовані вебзастосунки. Відкритий до фрилансу та віддаленої співпраці.',
      twitterDescription:
        'Фулстек-розробник для фрилансу, контрактів і віддалених проєктів.',
      locale: 'uk_UA',
      language: 'Ukrainian',
    },
    hero: {
      status: 'Готовий до роботи',
      location: '📍 Україна · віддалено',
      role: 'Фулстек-розробник',
      intro:
        '2.5+ роки створюю продакшн-сайти, електронну комерцію та вебзастосунки — від UI до бекенду й деплою.',
      workModes: ['Віддалено', 'Фултайм', 'Парттайм', 'Фриланс', 'Офіс'],
      primaryCta: 'Проєкти',
      secondaryCta: 'Контакт',
      cvCta: '↓ CV',
      photoAlt: 'Данііл Гора — фулстек-розробник',
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
        'Я фулстек-розробник з 2.5+ роками комерційного досвіду у фрилансі та командах. Роблю готові до продакшну сайти й вебзастосунки з фокусом на архітектуру, швидкість і бізнес-цінність.',
        'Моя сильна сторона — повний цикл веброзробки: UI/UX, фронтенд, бекенд-сервіси, бази даних, деплой і підтримка. Основний стек: TypeScript, React і NestJS.',
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
          title: 'Digital Shop та E-Commerce платформа',
          description:
            'Готовий e-commerce магазин з авторизацією, профілями, каталогом, кошиком, трекінгом замовлень і адмінкою з аналітикою.',
        },
        cryptoExchange: {
          title: 'Crypto exchange платформа',
          description:
            'Платформа для crypto exchange з JWT-авторизацією, профілями користувачів і адмінпанеллю. Docker-деплой дає швидкість, безпеку та масштаб.',
        },
        twinMedical: {
          title: 'Сайт Twin Medical',
          description:
            'Платформа для медтехніки й медичних продуктів з каталогом, категоріями та адмінкою для керування контентом і позиціями.',
        },
        fintechWebsites: {
          title: 'FinTech та банківські сайти',
          description:
            'FinTech та банківські сайти для міжнародних клієнтів: безпечна авторизація, адмінпанелі й масштабований фронтенд для enterprise-сегменту.',
        },
        topRange: {
          title: 'TopRange — корпоративний лендінг',
          description:
            'Корпоративний лендінг для міжнародної партнерської мережі: сучасний інтерфейс, плавні анімації, сильні CTA та адаптивна верстка.',
        },
        ndaProjects: {
          title: 'Комерційні проєкти (NDA)',
          description:
            'Участь у NDA-проєктах у фінтеху, e-commerce, медичній сфері та маркетингу: фулстек-фічі, інтеграції, адмінки й продакшн-застосунки.',
        },
        emailOutreach: {
          title: 'Дашборд email outreach',
          description:
            'Email outreach платформа з адмінкою для одержувачів, шаблонів і кампаній. Є Gmail API, масові відправки, трекінг і логи доставки.',
        },
        calendarApp: {
          title: 'Календарний застосунок',
          description:
            'Фулстек-календар із задачами, плануванням перетягуванням, пошуком і святами для щоденної організації роботи.',
        },
        videoMaker: {
          title: 'Інструмент Video Maker Factory',
          description:
            'Десктопний GUI-інструмент для автоматичного створення відео з шаблонів, музики та ресурсів. Є монтаж, нарізка й контроль швидкості.',
        },
        scientificPortfolio: {
          title: 'Науковий сайт-портфоліо',
          description:
            'Персональний сайт-портфоліо для української музейної дослідниці з науковими роботами, публікаціями та професійним профілем.',
        },
      },
    },
    projectCard: {
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
      tagline: 'Фулстек-розробник · Україна',
      navigationLabel: 'Навігація',
      socialLabel: 'Я тут',
      copyrightSuffix: 'Усі права захищено.',
      status: 'Відкритий до нових проєктів',
    },
    telegramButton: {
      ariaLabel: 'Написати в Telegram',
    },
  },
} as const;

export type Translation = (typeof translations)['en'];