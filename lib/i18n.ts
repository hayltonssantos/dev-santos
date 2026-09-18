export type Language = 'pt' | 'en' | 'es'

export const languages = {
  pt: { name: 'Português', flag: '🇵🇹' },
  en: { name: 'English', flag: '🇬🇧' },
  es: { name: 'Español', flag: '🇪🇸' },
}

export const translations = {
  pt: {
    common: {
      name: 'Haylton Santos',
      title: 'Junior Fullstack Developer',
      download_cv: 'Download CV',
      view_projects: 'Ver Projetos',
    },
    nav: {
      home: 'Home',
      projects: 'Projetos',
      stack: 'Stack',
      about: 'Sobre',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      subtitle:
        'Desenvolvedor web focado em criar aplicações modernas, responsivas e funcionais, com experiência em Frontend e conhecimentos em Backend.',
      cta_projects: 'Ver projetos',
      cta_cv: 'Download CV',
      social_github: 'GitHub',
      social_linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Projetos',
      ponto_pro: {
        name: 'Ponto Pro',
        description: 'Aplicação web para controle de ponto e gestão de colaboradores/projetos',
        problem: 'Gerenciamento simplificado de presença e atribuição de projetos',
        tech: ['React', 'JavaScript', 'Firebase', 'Firestore', 'GPS'],
        view: 'Ver Projeto',
        github: 'GitHub',
      },
      marca_ja: {
        name: 'Marca Já',
        description: 'Aplicação web para gestão e agendamento de barbearias',
        problem: 'Organização de horários e gestão de serviços',
        tech: ['React', 'JavaScript', 'Firebase', 'CSS'],
        view: 'Ver Projeto',
        github: 'GitHub',
      },
      sistema_licencas: {
        name: 'Sistema de Licenças',
        description: 'Aplicação web para gerenciamento de licenças',
        problem: 'Controle centralizado de licenças e suas validações',
        tech: ['React', 'JavaScript', 'Firebase', 'APIs'],
        view: 'Ver Projeto',
        github: 'GitHub',
      },
    },
    stack: {
      title: 'Tech Stack',
      frontend: {
        title: 'Frontend',
        html: 'Construção de estruturas semânticas, acessíveis e organizadas para aplicações web.',
        css: 'Criação de interfaces responsivas, estilização e organização visual de aplicações.',
        flexbox: 'Construção de layouts flexíveis e responsivos.',
        grid: 'Criação de estruturas de layout complexas e responsivas.',
        javascript: 'Desenvolvimento da lógica, interações e funcionalidades das aplicações web.',
        react: 'Construção de interfaces componentizadas e aplicações web interativas.',
        tailwind: 'Desenvolvimento rápido de interfaces modernas e responsivas utilizando utility classes.',
        nextjs: 'Desenvolvimento de aplicações React modernas com routing, otimização e recursos de renderização.',
      },
      backend: {
        title: 'Backend & Services',
        nodejs: 'Desenvolvimento de serviços e aplicações backend utilizando JavaScript no servidor.',
        typescript: 'Desenvolvimento de aplicações mais seguras e previsíveis através de tipagem estática.',
        apis: 'Integração entre aplicações e serviços através de APIs.',
        firebase: 'Autenticação, Firestore, hosting e serviços backend para aplicações web.',
      },
      database: {
        title: 'Database',
        mysql: 'Trabalho com bancos de dados relacionais e estruturas SQL.',
        mongodb: 'Conhecimentos em bancos de dados NoSQL orientados a documentos.',
        prisma: 'ORM para interação tipada e organizada com bancos de dados.',
      },
      tools: {
        title: 'Tools & DevOps',
        git: 'Versionamento de código e organização do desenvolvimento.',
        docker: 'Utilização de containers para padronizar ambientes de desenvolvimento e execução.',
      },
    },
    about: {
      title: 'Sobre mim',
      text: 'Minha trajetória na tecnologia começou na área de suporte de TI, onde desenvolvi experiência com suporte técnico, hardware, software, manutenção de computadores e resolução de problemas.\n\nCom o tempo, passei a direcionar minha carreira para o desenvolvimento de software, aprofundando meus conhecimentos em desenvolvimento web e construindo aplicações utilizando tecnologias como JavaScript, React, Firebase e outras ferramentas modernas do ecossistema web.\n\nAtualmente, meu foco está no desenvolvimento Fullstack, com especial atenção à criação de interfaces modernas, responsivas e funcionais, enquanto continuo expandindo meus conhecimentos em Backend, bancos de dados, APIs, TypeScript, Node.js e arquitetura de aplicações.\n\nGosto de transformar problemas em soluções simples, funcionais e bem estruturadas, e estou sempre buscando aprender novas tecnologias através de projetos práticos.',
    },
    experience: {
      title: 'Experiência',
      it_support: {
        role: 'Técnico de Informática / IT Support',
        description: 'Suporte técnico, atendimento a utilizadores, hardware, software, manutenção de computadores, resolução de problemas, suporte remoto e presencial.',
      },
      web_dev: {
        role: 'Desenvolvimento Web / Fullstack',
        description: 'React, JavaScript, Firebase, desenvolvimento de aplicações, APIs, Git, desenvolvimento de interfaces responsivas.',
      },
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Estou aberto a novas oportunidades na área de desenvolvimento web.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'Download CV',
    },
  },
  en: {
    common: {
      name: 'Haylton Santos',
      title: 'Junior Fullstack Developer',
      download_cv: 'Download CV',
      view_projects: 'View Projects',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Stack',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      subtitle:
        'Web developer focused on building modern, responsive and functional applications, with experience in Frontend and knowledge in Backend.',
      cta_projects: 'View projects',
      cta_cv: 'Download CV',
      social_github: 'GitHub',
      social_linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Projects',
      ponto_pro: {
        name: 'Ponto Pro',
        description: 'Web application for time tracking and employee/project management',
        problem: 'Simplified management of attendance and project assignment',
        tech: ['React', 'JavaScript', 'Firebase', 'Firestore', 'GPS'],
        view: 'View Project',
        github: 'GitHub',
      },
      marca_ja: {
        name: 'Marca Já',
        description: 'Web application for barbershop management and scheduling',
        problem: 'Organization of schedules and service management',
        tech: ['React', 'JavaScript', 'Firebase', 'CSS'],
        view: 'View Project',
        github: 'GitHub',
      },
      sistema_licencas: {
        name: 'License System',
        description: 'Web application for license management',
        problem: 'Centralized control of licenses and their validations',
        tech: ['React', 'JavaScript', 'Firebase', 'APIs'],
        view: 'View Project',
        github: 'GitHub',
      },
    },
    stack: {
      title: 'Tech Stack',
      frontend: {
        title: 'Frontend',
        html: 'Building semantic, accessible and organized structures for web applications.',
        css: 'Creating responsive interfaces, styling and visual organization of applications.',
        flexbox: 'Building flexible and responsive layouts.',
        grid: 'Creating complex and responsive layout structures.',
        javascript: 'Developing logic, interactions and functionality of web applications.',
        react: 'Building componentized interfaces and interactive web applications.',
        tailwind: 'Rapid development of modern and responsive interfaces using utility classes.',
        nextjs: 'Developing modern React applications with routing, optimization and rendering features.',
      },
      backend: {
        title: 'Backend & Services',
        nodejs: 'Developing backend services and applications using JavaScript on the server.',
        typescript: 'Developing safer and more predictable applications through static typing.',
        apis: 'Integration between applications and services through APIs.',
        firebase: 'Authentication, Firestore, hosting and backend services for web applications.',
      },
      database: {
        title: 'Database',
        mysql: 'Working with relational databases and SQL structures.',
        mongodb: 'Knowledge in NoSQL document-oriented databases.',
        prisma: 'ORM for typed and organized interaction with databases.',
      },
      tools: {
        title: 'Tools & DevOps',
        git: 'Code versioning and development organization.',
        docker: 'Using containers to standardize development and execution environments.',
      },
    },
    about: {
      title: 'About me',
      text: 'My journey in technology started in the IT support area, where I developed experience with technical support, hardware, software, computer maintenance and problem solving.\n\nOver time, I directed my career towards software development, deepening my knowledge in web development and building applications using technologies like JavaScript, React, Firebase and other modern tools in the web ecosystem.\n\nCurrently, my focus is on Fullstack development, with special attention to creating modern, responsive and functional interfaces, while continuing to expand my knowledge in Backend, databases, APIs, TypeScript, Node.js and application architecture.\n\nI enjoy transforming problems into simple, functional and well-structured solutions, and I\'m always seeking to learn new technologies through practical projects.',
    },
    experience: {
      title: 'Experience',
      it_support: {
        role: 'IT Technician / IT Support',
        description: 'Technical support, user assistance, hardware, software, computer maintenance, troubleshooting, remote and on-site support.',
      },
      web_dev: {
        role: 'Web Development / Fullstack',
        description: 'React, JavaScript, Firebase, application development, APIs, Git, responsive interface development.',
      },
    },
    contact: {
      title: 'Let\'s connect',
      subtitle: 'I\'m open to new opportunities in web development.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'Download CV',
    },
  },
  es: {
    common: {
      name: 'Haylton Santos',
      title: 'Desarrollador Junior Fullstack',
      download_cv: 'Descargar CV',
      view_projects: 'Ver Proyectos',
    },
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      stack: 'Stack',
      about: 'Acerca de',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      subtitle:
        'Desarrollador web enfocado en construir aplicaciones modernas, responsivas y funcionales, con experiencia en Frontend y conocimientos en Backend.',
      cta_projects: 'Ver proyectos',
      cta_cv: 'Descargar CV',
      social_github: 'GitHub',
      social_linkedin: 'LinkedIn',
    },
    projects: {
      title: 'Proyectos',
      ponto_pro: {
        name: 'Ponto Pro',
        description: 'Aplicación web para control de asistencia y gestión de empleados/proyectos',
        problem: 'Gestión simplificada de asistencia y asignación de proyectos',
        tech: ['React', 'JavaScript', 'Firebase', 'Firestore', 'GPS'],
        view: 'Ver Proyecto',
        github: 'GitHub',
      },
      marca_ja: {
        name: 'Marca Já',
        description: 'Aplicación web para gestión y programación de barberías',
        problem: 'Organización de horarios y gestión de servicios',
        tech: ['React', 'JavaScript', 'Firebase', 'CSS'],
        view: 'Ver Proyecto',
        github: 'GitHub',
      },
      sistema_licencas: {
        name: 'Sistema de Licencias',
        description: 'Aplicación web para gestión de licencias',
        problem: 'Control centralizado de licencias y sus validaciones',
        tech: ['React', 'JavaScript', 'Firebase', 'APIs'],
        view: 'Ver Proyecto',
        github: 'GitHub',
      },
    },
    stack: {
      title: 'Tech Stack',
      frontend: {
        title: 'Frontend',
        html: 'Construcción de estructuras semánticas, accesibles y organizadas para aplicaciones web.',
        css: 'Creación de interfaces responsivas, estilos y organización visual de aplicaciones.',
        flexbox: 'Construcción de layouts flexibles y responsivos.',
        grid: 'Creación de estructuras de layout complejas y responsivas.',
        javascript: 'Desarrollo de lógica, interacciones y funcionalidades de aplicaciones web.',
        react: 'Construcción de interfaces componentizadas y aplicaciones web interactivas.',
        tailwind: 'Desarrollo rápido de interfaces modernas y responsivas utilizando utility classes.',
        nextjs: 'Desarrollo de aplicaciones React modernas con routing, optimización y características de renderización.',
      },
      backend: {
        title: 'Backend & Services',
        nodejs: 'Desarrollo de servicios y aplicaciones backend utilizando JavaScript en el servidor.',
        typescript: 'Desarrollo de aplicaciones más seguras y predecibles mediante tipado estático.',
        apis: 'Integración entre aplicaciones y servicios a través de APIs.',
        firebase: 'Autenticación, Firestore, hosting y servicios backend para aplicaciones web.',
      },
      database: {
        title: 'Database',
        mysql: 'Trabajo con bases de datos relacionales y estructuras SQL.',
        mongodb: 'Conocimiento en bases de datos NoSQL orientadas a documentos.',
        prisma: 'ORM para interacción tipada y organizada con bases de datos.',
      },
      tools: {
        title: 'Tools & DevOps',
        git: 'Versionamiento de código y organización del desarrollo.',
        docker: 'Uso de contenedores para estandarizar entornos de desarrollo y ejecución.',
      },
    },
    about: {
      title: 'Acerca de mí',
      text: 'Mi trayectoria en tecnología comenzó en el área de soporte de TI, donde desarrollé experiencia en soporte técnico, hardware, software, mantenimiento de computadoras y resolución de problemas.\n\nCon el tiempo, dirigí mi carrera hacia el desarrollo de software, profundizando mis conocimientos en desarrollo web y construyendo aplicaciones utilizando tecnologías como JavaScript, React, Firebase y otras herramientas modernas del ecosistema web.\n\nActualmente, mi enfoque está en el desarrollo Fullstack, con especial atención a la creación de interfaces modernas, responsivas y funcionales, mientras continúo expandiendo mis conocimientos en Backend, bases de datos, APIs, TypeScript, Node.js y arquitectura de aplicaciones.\n\nMe gusta transformar problemas en soluciones simples, funcionales y bien estructuradas, y siempre estoy buscando aprender nuevas tecnologías a través de proyectos prácticos.',
    },
    experience: {
      title: 'Experiencia',
      it_support: {
        role: 'Técnico de Informática / Soporte de TI',
        description: 'Soporte técnico, asistencia a usuarios, hardware, software, mantenimiento de computadoras, resolución de problemas, soporte remoto y presencial.',
      },
      web_dev: {
        role: 'Desarrollo Web / Fullstack',
        description: 'React, JavaScript, Firebase, desarrollo de aplicaciones, APIs, Git, desarrollo de interfaces responsivas.',
      },
    },
    contact: {
      title: 'Conectemos',
      subtitle: 'Estoy abierto a nuevas oportunidades en desarrollo web.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      cv: 'Descargar CV',
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang] || translations.pt
}
