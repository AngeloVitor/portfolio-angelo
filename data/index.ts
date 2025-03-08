import { Github, Linkedin } from 'lucide-react';

const data = {
  home: {
    name: 'Ângelo Lemaire',
    description: 'The #Front_End developer who builds things for #The_Web.',
    cvLink: 'asdf',
  },
  sidebar: {
    links: [
      {
        name: 'git hub',
        link: 'https://github.com/AngeloVitor',
        icon: Github,
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/angelolemaire/',
        icon: Linkedin,
      },
    ],
  },
  about: {
    description:
      'My name is Ângelo Lemaire and I love building front-end applications. As a Computer Science graduate, I am passionate about creating innovative web solutions. In my free time, I enjoy exploring new technologies and keeping up with the latest trends in web development. Additionally, I like to contribute to team projects and share my knowledge through collaborative development.',
    image: '/imgs/about-image.png',
    numbers: [
      { name: 'PROJECTS-COMPLETED', number: 8 },
      { name: 'TOTAL-CONTRIBUTIONS', number: 108 },
      { name: 'CURRENT-YEAR-CONTRIBUTIONS', number: 71 },
    ],
  },
  projects: {
    description: 'Projects that have recently been completed.',
    projects: [
      {
        id: 1,
        title: 'Social Media App',
        description:
          'A platform that allows users to connect, share, and interact with others. It provides a space for posting updates and engaging with content from friends, family, and communities around the world.',
        image: '/projects-imgs/social.png',
        githubLink: 'https://github.com/mo-hassann/social-app',
        previewLink: 'https://social-m-app.vercel.app',
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: 'html',
        src: '/skills/html.svg',
        link: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        id: 2,
        name: 'css',
        src: '/skills/css.svg',
        link: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        id: 3,
        name: 'javascript',
        src: '/skills/javascript.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
      },
      {
        id: 4,
        name: 'typescript',
        src: '/skills/typescript.svg',
        link: 'https://en.wikipedia.org/wiki/TypeScript',
      },
      {
        id: 5,
        name: 'react',
        src: '/skills/react.svg',
        link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
      },
      {
        id: 6,
        name: 'tailwind',
        src: '/skills/tailwind.svg',
        link: 'https://en.wikipedia.org/wiki/Tailwind_CSS',
      },
      {
        id: 7,
        name: 'nextJS',
        src: '/skills/nextJS.svg',
        link: 'https://en.wikipedia.org/wiki/Next.js',
      },
      {
        id: 8,
        name: 'postgresql',
        src: '/skills/postgresql.svg',
        link: 'https://en.wikipedia.org/wiki/PostgreSQL',
      },
      {
        id: 9,
        name: 'vitejs',
        src: '/skills/vitejs.svg',
        link: 'https://en.wikipedia.org/wiki/Vite_(software)',
      },
      {
        id: 10,
        name: 'git',
        src: '/skills/git.svg',
        link: 'https://en.wikipedia.org/wiki/Git',
      },
      {
        id: 11,
        name: 'docker',
        src: '/skills/docker.svg',
        link: 'https://en.wikipedia.org/wiki/Docker_(software)',
      },
      {
        id: 12,
        name: 'figma',
        src: '/skills/figma.svg',
        link: 'https://en.wikipedia.org/wiki/Figma',
      },
      {
        id: 13,
        name: 'firebase',
        src: '/skills/firebase.svg',
        link: 'https://en.wikipedia.org/wiki/Firebase',
      },
      {
        id: 14,
        name: 'markdown',
        src: '/skills/markdown.svg',
        link: 'https://en.wikipedia.org/wiki/Markdown',
      },
      {
        id: 15,
        name: 'mongoDB',
        src: '/skills/mongoDB.svg',
        link: 'https://en.wikipedia.org/wiki/MongoDB',
      },
    ],
  },
  contact: {
    email: 'mohamed.hassan.bu@gmail.com',
  },
};

export default data;
