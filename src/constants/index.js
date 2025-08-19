export const NAVIGATION = {
  sections: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]
};

export const HEADER = {
  title: 'Karmit Lalani | SDET',
  socialLinks: {
    github: 'https://github.com/Karmit2196',
    linkedin: 'https://www.linkedin.com/in/karmit-lalani-511735147/',
    email: 'karmit12lalani@gmail.com'
  }
};

export const ABOUT = {
  welcome: {
    title: 'Welcome to my portfolio',
    description: 'Explore my work experience, projects, and technical skills in the field of software testing and automation.'
  },
  introduction: {
    greeting: 'Hi, my name is',
    name: 'Karmit.',
    tagline: 'I build quality automation solutions.',
    description: "I'm a Senior Automation Engineer passionate about crafting robust test automation frameworks that ensure software quality and reliability. I specialize in building scalable testing solutions and integrating them seamlessly into development workflows."
  },
  experience: {
    summary: 'With 6+ years of experience driving quality across complex web and mobile ecosystems through robust test automation strategies, I\'m specialized in setting up automation frameworks, tools and methodology to streamline testing processes and assist future users.',
    collaboration: 'Experienced in collaborating with developers and product owners, effectively interacting with front-end, back-end and UI departments regarding software defects and functionality issues. Skilled in creating accurate and efficient test scripts, demonstrating new product features to clients, and completing testing under tight deadlines to meet client demands.',
    expertise: 'My expertise spans across web and mobile application testing, including React and Angular-based applications, as well as native and hybrid Android and iOS apps. I have a strong foundation in both manual and automated testing methodologies, with hands-on experience in tools like JIRA for defect tracking and project management.',
    ai: "I'm also passionate about leveraging AI and emerging technologies to enhance testing practices. I work with AI-powered tools like Cursor, GitHub Copilot, and custom AI agents to accelerate test development, generate test data, and improve exploratory testing. My experience includes prompt engineering for test case generation, AI-assisted test automation, and integrating AI capabilities into existing Cypress and Playwright frameworks.",
    conclusion: 'Passionate about continuous improvement, staying up to date on product offerings and features, and building strong rapport with team members, management and clients to facilitate efficiency and productivity. I believe in the power of automation and AI to transform testing processes and deliver high-quality software solutions.'
  }
};

export const EXPERIENCE = [
  {
    title: 'Senior Automation Engineer',
    company: 'Apexon',
    location: 'Herndon, Virginia',
    period: '06/2022 - Present',
    description: 'Set up automation frameworks, tools and methodology to assist future users and streamline automation. Communicated automation test results to team members and highlighted potential risks. Created concept and control drawings to satisfy client\'s automation requirements. Designed and implemented efficient strategies for converting current applications. Increased product knowledge by staying up to date on product offerings, features and functionality. Handled portfolio of initiatives to support organization\'s goals.',
    tech: ['Automation Frameworks', 'Test Results Analysis', 'Client Requirements', 'Strategy Implementation', 'Product Knowledge']
  },
  {
    title: 'Automation Engineer',
    company: 'Infostretch',
    location: 'Ahmedabad, Gujarat',
    period: '03/2020 - 06/2022',
    description: 'Collaborated with developers and product owners to stay current on product features and intended functionality. Effectively interacted with front-end, back-end and UI departments regarding software defects and functionality issues, working closely to develop innovative solutions. Proposed development and testing improvements to positively impact usability, function and performance. Created accurate and efficient test scripts to manage automated testing of certain products and features. Demonstrated new product features and functionality to clients, managers and team members. Completed testing under tight deadlines to meet client demands and project timelines.',
    tech: ['Cross-functional Collaboration', 'Test Scripts', 'Product Demonstrations', 'Deadline Management', 'Innovation']
  },
  {
    title: 'QA Engineer',
    company: 'Infostretch',
    location: 'Ahmedabad, Gujarat',
    period: '01/2018 - 02/2020',
    description: 'Completed in-depth usability testing, functional testing and integration testing on Websites (Mostly which are implemented with React and Angular). Experienced in testing Android and iOS apps (Native and Hybrid). Wrote and optimized test cases to maximize success of manual software testing with consistent, thorough approaches. Tracked, prioritized and organized defects with JIRA, working with development team to facilitate timely corrections. Built strong rapport with team members, management and clients to facilitate efficiency and productivity.',
    tech: ['React', 'Angular', 'Android Testing', 'iOS Testing', 'JIRA', 'Test Cases', 'Manual Testing']
  }
];

export const PROJECTS = [
  {
    title: 'Cypress + Cucumber Automation Framework',
    description: 'A modern Cypress framework featuring Cucumber (Gherkin) for Behavior-Driven Development (BDD). Includes Page Object Model, data-driven testing, cross-browser testing, and comprehensive CI/CD integration with GitHub Actions.',
    tech: ['Cypress', 'Cucumber', 'TypeScript', 'GitHub Actions', 'Mochawesome', 'BDD'],
    github: 'https://github.com/Karmit2196/cypress-cucumber'
  },
  {
    title: 'Playwright Automation Framework',
    description: 'A robust, industry-standard Playwright testing framework with enterprise-grade practices. Features Page Object Model, data-driven testing, cross-browser testing, comprehensive reporting with Allure, and advanced CI/CD integration.',
    tech: ['Playwright', 'JavaScript', 'GitHub Actions', 'Allure Reports', 'ESLint', 'POM'],
    github: 'https://github.com/Karmit2196/playwright-js'
  },
  {
    title: 'Cypress Automation Framework',
    description: 'A modern Cypress framework with best practices, maintainability, and robust CI/CD integration. Features Page Object Model, custom commands, data-driven testing, and comprehensive reporting.',
    tech: ['Cypress', 'JavaScript', 'GitHub Actions', 'Mochawesome', 'POM', 'CI/CD'],
    github: 'https://github.com/Karmit2196/cypress-framework'
  }
];

export const SKILLS = {
  'Automation Tools': ['Cypress', 'Playwright', 'Selenium'],
  'Automation Design Patterns': ['POM (Page Object Model)', 'Hybrid Framework', 'Modular Framework', 'Data Driven Framework'],
  'API Testing': ['Postman', 'REST Assured'],
  'AI Tech Stack': ['Cursor', 'GitHub Copilot', 'Prompt Engineering', 'AI-assisted Testing', 'OpenAI API', 'ChatGPT/Claude'],
  'Programming': ['JavaScript', 'TypeScript', 'Python', 'Java'],
  'CI/CD & DevOps': ['Git', 'GitHub Actions', 'Jenkins', 'Docker'],
  'Reporting & Quality': ['Mochawesome', 'Allure Reports', 'ESLint', 'Prettier'],
  'Frontend': ['React', 'HTML/CSS', 'Chrome DevTools'],
  'Mobile Testing': ['Android Testing', 'iOS Testing', 'Native Apps', 'Hybrid Apps'],
  'Project Management': ['JIRA', 'Agile/Scrum', 'TestRail', 'Sprint Planning']
};

export const THEME = {
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices (phones, 0px and up)
      sm: 600,    // Small devices (tablets, 600px and up)
      md: 900,    // Medium devices (small laptops, 900px and up)
      lg: 1200,   // Large devices (desktops, 1200px and up)
      xl: 1536,   // Extra large devices (large desktops, 1536px and up)
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#8892b0',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
      fontWeight: 700,
      color: '#ccd6f6',
      lineHeight: { xs: 1.1, sm: 1.15, md: 1.2, lg: 1.2, xl: 1.2 },
      letterSpacing: { xs: '-0.02em', sm: '-0.025em', md: '-0.03em' },
    },
    h2: {
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
      fontWeight: 600,
      color: '#ccd6f6',
      lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3 },
      letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' },
    },
    h3: {
      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem', xl: '1.625rem' },
      fontWeight: 600,
      color: '#64ffda',
      lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.4, xl: 1.4 },
    },
    h4: {
      fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
      fontWeight: 500,
      color: '#ccd6f6',
      lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
    },
    h5: {
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
      fontWeight: 500,
      color: '#8892b0',
      lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
    },
    h6: {
      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem' },
      fontWeight: 500,
      color: '#8892b0',
      lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
    },
    body1: {
      fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
      lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
      color: '#8892b0',
      letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' },
    },
    body2: {
      fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
      lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.55, xl: 1.6 },
      color: '#8892b0',
      letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' },
    },
    caption: {
      fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
      lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 },
      color: '#8892b0',
    },
    button: {
      fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: { xs: '0.02em', sm: '0.025em', md: '0.03em' },
    },
  },
  spacing: (factor) => `${8 * factor}px`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px', lg: '14px 28px' },
          minHeight: { xs: '36px', sm: '40px', md: '44px', lg: '48px' },
          fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(100, 255, 218, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          border: '1px solid #233554',
          transition: 'all 0.3s ease',
          borderRadius: { xs: 8, sm: 10, md: 12, lg: 16 },
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: '#64ffda',
            boxShadow: '0 12px 30px rgba(100, 255, 218, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
          height: { xs: '20px', sm: '22px', md: '24px', lg: '26px', xl: '28px' },
          borderRadius: { xs: 10, sm: 11, md: 12, lg: 13, xl: 14 },
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(100, 255, 218, 0.2)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: { xs: 1, sm: 1.25, md: 1.5, lg: 1.75, xl: 2 },
          minWidth: { xs: '40px', sm: '44px', md: '48px', lg: '52px', xl: '56px' },
          minHeight: { xs: '40px', sm: '44px', md: '48px', lg: '52px', xl: '56px' },
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        },
      },
    },
  },
}; 