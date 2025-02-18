import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

import dynamic from 'next/dynamic'
const Icons = {
  FaHtml5: dynamic(() => import('react-icons/fa').then(mod => mod.FaHtml5), { ssr: false }),
  FaCss3: dynamic(() => import('react-icons/fa').then(mod => mod.FaCss3), { ssr: false }),
  FaJs: dynamic(() => import('react-icons/fa').then(mod => mod.FaJs), { ssr: false }),
  FaReact: dynamic(() => import('react-icons/fa').then(mod => mod.FaReact), { ssr: false }),
  FaFigma: dynamic(() => import('react-icons/fa').then(mod => mod.FaFigma), { ssr: false }),
  FaLaravel: dynamic(() => import('react-icons/fa').then(mod => mod.FaLaravel), { ssr: false }),
  FaPhp: dynamic(() => import('react-icons/fa').then(mod => mod.FaPhp), { ssr: false }),
  FaBootstrap: dynamic(() => import('react-icons/fa').then(mod => mod.FaBootstrap), { ssr: false }),
  SiNextdotjs: dynamic(() => import('react-icons/si').then(mod => mod.SiNextdotjs), { ssr: false }),
  SiMysql: dynamic(() => import('react-icons/si').then(mod => mod.SiMysql), { ssr: false }),
  FaPhoneAlt: dynamic(() => import('react-icons/fa').then(mod => mod.FaPhoneAlt), { ssr: false }),
  FaEnvelope: dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false }),
  FaMapMarkerAlt: dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: false })
};



export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



// personal data
export const LINKS = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]


// about
export const ABOUT = {
  title: "About me",
  description: "I love turning ideas into beautiful, seamless web experiences — always learning and adapting fast!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yu-Wen, Huang (Ilene)"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+886)0926-555-726"
    },

    {
      fieldName: "Email",
      fieldValue: "ileneh8899@gmail.com"
    },
    {
      fieldName: "line",
      fieldValue: "ileneh889"
    },
    {
      fieldName: "whatsApp",
      fieldValue: "(+886)0926-555-726"
    },
    {
      fieldName: "language",
      fieldValue: "English, Mandarin"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Taiwan(R.O.C)"
    },
  ]
};

// experience
export const EXPERIENCE = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "With 6 years of diplomatic experience in the Middle East and 7 years of hosting events and receiving foreign dignitaries, I have developed strong cross-cultural communication skills.",
  items: [
    {
      company: "Taipei Economic And Cultural Office (TECO)",
      position: "Overseas Assignee",
      duration: "AUG 2018 - FEB 2024"
    },
    {
      company: "Presidential Office ",
      position: "Project Coordinator",
      duration: "FEB 2014 - AUG 2018"
    },
    {
      company: "Taipei Veterans General Hospital ",
      position: "Assistant Project Coordinator",
      duration: "OCT 2011 - FEB 2014"
    },
  ]
};

// education
export const EDUCATION = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      company: "ISpan International Front-End developer Bootcamp",
      position: "Front-End developer",
      duration: "MAR 2024 - AUG 2024"
    },
    {
      company: "National Taipei University of Education",
      position: "Department of Arts and Design",
      duration: "SEP 2006 - JUL 2010"
    },
  ]
};

// skills
export const SKILLS = {
  title: "My skills",
  description: "Skilled in React, JavaScript, Node.js and more, with a focus on scalable web development.",
  skillList: [
    {
      icon: Icons.FaHtml5,
      name: "html 5"
    },
    {
      icon: Icons.FaCss3,
      name: "Css 3"
    },
    {
      icon: Icons.FaJs,
      name: "JavaScript"
    },
    {
      icon: Icons.FaReact,
      name: "React"
    },
    {
      icon: Icons.FaBootstrap,
      name: "Bootstrap"
    },
    {
      icon: Icons.FaFigma,
      name: "Figma"
    },
    {
      icon: Icons.SiNextdotjs,
      name: "NextJS"
    },
    {
      icon: Icons.SiMysql,
      name: "MySQL"
    },
    {
      icon: Icons.FaLaravel,
      name: "Laravel"
    },
    {
      icon: Icons.FaPhp,
      name: "Php"
    },

  ]
};


// work
export const PROJECTS = [
  {
    num: "01",
    category: "fullstack",
    title: "Dracarys Online Game Official Website",
    description:
      "Using React with Next.js and Node.js with express to set up the front-end and back-end of an official online game website ",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Node.js" }, { name: "MySQL" }],
    image: '/assets/work/game_scr.png',
    live: '',
    github: 'https://github.com/ileneh889/e_game_website',
  },
  {
    num: "02",
    category: "frontend",
    title: "https://github.com/ileneh889/pastries_website",
    description:
      "Utilized Bootstrap along with integrated HTML and CSS to create a seamless and responsive user experience across various devices",
    stack: [{ name: "Bootstrap" }, { name: "Html 5" }, { name: "Css 3" }],
    image: '/assets/work/pastry_scr.png',
    live: 'https://ileneh889.github.io/pastries_website/',
    github: 'https://github.com/ileneh889/pastries_website',
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "A word assembly game that build with React and Vite.",
    stack: [{ name: "React" }],
    image: '/assets/work/hangman.png',
    live: 'https://hangman-assembly.netlify.app/',
    github: 'https://github.com/ileneh889/hangman_game?tab=readme-ov-file',
  },
];


// contact info
export const INFO = [
  {
    icon: Icons.FaPhoneAlt,
    title: "Phone",
    description: "(+886) 0926-555-726",
  },
  {
    icon: Icons.FaEnvelope,
    title: "Email",
    description: "ileneh8899@gmail.com",
  },
  {
    icon: Icons.FaMapMarkerAlt,
    title: "line",
    description: "ileneh889",
  },
]

