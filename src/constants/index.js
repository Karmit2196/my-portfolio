export const NAVIGATION = {
  sections: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]
};

export const HEADER = {
  title: 'Karmit Lalani | Senior SDET',
  socialLinks: {
    github: 'https://github.com/Karmit2196',
    linkedin: 'https://www.linkedin.com/in/karmit-lalani-511735147/'
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
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#ccd6f6',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#ccd6f6',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#64ffda',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#8892b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          border: '1px solid #233554',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: '#64ffda',
          },
        },
      },
    },
  },
}; 