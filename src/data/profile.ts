/**
 * Single source of truth for all portfolio content.
 *
 * Every fact here is taken directly from Ahmad Al-Wattar's two CVs
 * (Full Stack Developer and Network Engineer versions). Wording is polished for
 * the web, but no companies, dates, technologies, projects, metrics or
 * credentials have been invented or embellished.
 */

import { asset } from '../lib/asset';
import type {
  AboutContent,
  Certification,
  ContactChannel,
  CVVariant,
  Education,
  ExperienceItem,
  ExpertiseArea,
  Language,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  TimelinePhase,
} from '../types';

export const profile: Profile = {
  name: 'Ahmad Al-Wattar',
  roles: ['Full Stack Developer', 'Network Engineer'],
  location: 'Bab Touma, Damascus, Syria',
  email: 'ahmedalwattar71@gmail.com',
  phone: '+963 938 932 206',
  phoneHref: '+963938932206',
  tagline: 'Software meets infrastructure.',
  positioning:
    'I build full-stack web applications with Laravel, React and TypeScript — and I engineer the networks they run on. From a RADIUS/AAA server written from scratch in Python to live ISP microwave links in the field, I work across the whole path from the interface to the infrastructure.',
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const about: AboutContent = {
  paragraphs: [
    'I am a Computer and Automation Engineering graduate from Damascus University, finishing in 2026. My work sits deliberately at the intersection of two disciplines that are usually kept apart: software engineering and network infrastructure.',
    'On the software side, I build and ship full-stack applications — Laravel and Python on the backend, React and TypeScript on the frontend, with MySQL and PostgreSQL underneath. My graduation project, a RADIUS authentication server built from scratch with Python’s pyrad library and wired to a React + Laravel management portal, pushed me through backend protocol work, authentication logic, database design and web application development in a single system.',
    'On the infrastructure side, I have spent my professional career inside internet service providers. I have managed an ISP’s outdoor WiFi network, installed and maintained point-to-point microwave links with MikroTik, Mimosa and Ubiquiti hardware, and handled the day-to-day diagnosis of connectivity faults in live environments. I am CCNA-certified.',
    'That combination is the point. I understand how an application authenticates a subscriber, how that request travels across a wireless link, and how the whole system behaves when something breaks. I design software with the network in mind, and I troubleshoot networks with a systems engineer’s instinct.',
  ],
  highlights: [
    { label: 'Base', value: 'Damascus, Syria' },
    { label: 'Focus', value: 'Full-stack + ISP networking' },
    { label: 'Signature build', value: 'RADIUS / AAA server from scratch' },
    { label: 'Field', value: 'Certified CCNA · live ISP experience' },
  ],
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    index: '01',
    title: 'Full Stack Development',
    summary:
      'End-to-end web applications, from data model and API to the interface a user actually touches.',
    points: ['Laravel', 'React', 'TypeScript', 'React Native', 'REST APIs', 'MySQL & PostgreSQL'],
    icon: 'code',
  },
  {
    index: '02',
    title: 'Network Engineering',
    summary:
      'ISP-grade wireless infrastructure — designed, configured, monitored and repaired in production.',
    points: [
      'Outdoor WiFi systems',
      'PTP microwave links',
      'MikroTik · Ubiquiti · Mimosa',
      'Monitoring & troubleshooting',
    ],
    icon: 'network',
  },
  {
    index: '03',
    title: 'RADIUS / AAA Systems',
    summary:
      'Subscriber authentication, authorization and accounting — implemented at the protocol level, not just consumed.',
    points: ['RADIUS server (pyrad)', 'Authentication', 'Authorization', 'Accounting'],
    icon: 'shield',
  },
  {
    index: '04',
    title: 'Backend & Systems',
    summary:
      'The logic layer where software and infrastructure meet: services, databases and integration.',
    points: ['Python', 'Laravel backends', 'Database-driven systems', 'Systems thinking'],
    icon: 'server',
  },
];

export const projects: Project[] = [
  {
    id: 'radius-server',
    title: 'RADIUS Authentication Server',
    category: 'Backend · Networking · ISP Infrastructure',
    tagline: 'An AAA server built from scratch, wired to a full web management portal.',
    overview: [
      'Graduation project. A RADIUS server for internet service providers, implemented from scratch in Python using the pyrad library rather than configuring an existing product.',
      'The server handles the full AAA cycle for network subscribers — Authentication (is this subscriber who they claim to be?), Authorization (what service level are they entitled to?) and Accounting (recording session usage).',
      'It is connected to a management website with a React frontend and a Laravel backend, so an operator can manage subscribers and see account activity through a normal web interface instead of editing config files.',
    ],
    stack: [
      { label: 'Python', note: 'Server implementation language' },
      { label: 'pyrad', note: 'RADIUS protocol library' },
      { label: 'React', note: 'Management portal frontend' },
      { label: 'Laravel', note: 'Management portal backend' },
      { label: 'MySQL / PostgreSQL', note: "From Ahmad's core database stack" },
    ],
    architecture: [
      {
        id: 'subscriber',
        label: 'Subscriber',
        detail: 'An ISP customer device attempting to get online.',
      },
      {
        id: 'nas',
        label: 'Router / Network Access',
        detail: 'The network access server that forwards the access request.',
      },
      {
        id: 'radius',
        label: 'RADIUS Server',
        detail: 'Python + pyrad. Evaluates authentication, authorization and accounting.',
      },
      {
        id: 'backend',
        label: 'Management Backend',
        detail: 'Laravel service layer coordinating subscriber data and account activity.',
      },
      {
        id: 'database',
        label: 'Database',
        detail: 'Persistent store for subscriber records and accounting data.',
      },
      {
        id: 'admin',
        label: 'Admin / Company Interface',
        detail: 'React portal where operators manage subscribers and review usage.',
      },
    ],
    significance: [
      'Backend engineering — a network protocol implemented directly, not wrapped.',
      'Authentication systems — the full AAA model, designed and reasoned about end to end.',
      'Networking — the server sits in the real path between a subscriber and the internet.',
      'Databases — subscriber and accounting data modelled and persisted.',
      'Web applications — a production-shaped React + Laravel management portal.',
      'ISP infrastructure — the whole thing is built for how a real provider operates.',
    ],
    featured: true,
  },
  {
    id: 'door-estimator',
    title: 'Door Installation Cost Estimator',
    category: 'Application · Problem Solving',
    tagline: 'Turning structural measurements into a reliable cost estimate.',
    overview: [
      'An application that calculates the estimated cost of a door installation from structural measurements provided by the user.',
      'The problem is deceptively practical: take real-world inputs, apply consistent measurement-based logic, and return a number a person can act on.',
      'It is a focused piece of application design — clear inputs, a deterministic calculation, and an output that has to be trustworthy.',
    ],
    stack: [
      { label: 'Application logic' },
      { label: 'Measurement-based calculation' },
      { label: 'User input handling' },
    ],
    significance: [
      'Practical problem solving — a tool built for an actual task, not a demo.',
      'Measurement-driven logic — structured inputs converted into a consistent result.',
      'Application design — the flow from input to estimate kept simple and clear.',
    ],
    featured: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'runnet',
    company: 'Runnet',
    companyNote: 'Internet Service Provider',
    role: 'Technical Support Engineer',
    period: 'Mar 2026 – Present',
    contributions: [
      'Installed and maintained point-to-point (PTP) microwave links using MikroTik, Mimosa and Ubiquiti equipment.',
      'Followed up on link performance and resolved connectivity faults in the field.',
    ],
    tags: ['PTP microwave', 'MikroTik', 'Mimosa', 'Ubiquiti', 'Field troubleshooting'],
  },
  {
    id: 'speed3',
    company: 'Speed3',
    companyNote: 'Internet Service Provider',
    role: 'Network Manager',
    period: 'Jul 2025 – Feb 2026',
    contributions: [
      "Monitored and managed the ISP's outdoor WiFi network, keeping service delivery stable.",
      'Diagnosed and resolved technical issues across the outdoor WiFi infrastructure.',
      'Coordinated network operations to minimize downtime and hold service quality.',
    ],
    tags: ['ISP operations', 'Outdoor WiFi', 'Troubleshooting', 'Systems thinking'],
  },
  {
    id: 'view',
    company: 'View',
    companyNote: 'Internet Service Provider',
    role: 'Technical Support Engineer',
    period: 'Feb 2025 – Jun 2025',
    contributions: [
      'Installed, configured and maintained outdoor WiFi service for subscribers.',
      'Provided ongoing technical support and follow-up for network connectivity issues.',
    ],
    tags: ['Installation', 'Configuration', 'Maintenance', 'Subscriber support'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    description: 'Languages and UI frameworks used to build applications.',
    skills: ['TypeScript', 'JavaScript', 'React', 'React Native', 'Python', 'C++', 'Java'],
    icon: 'code',
  },
  {
    category: 'Backend',
    description: 'Server-side frameworks and languages.',
    skills: ['Laravel', 'Python'],
    icon: 'server',
  },
  {
    category: 'Databases',
    description: 'Relational stores for application and subscriber data.',
    skills: ['MySQL', 'PostgreSQL'],
    icon: 'server',
  },
  {
    category: 'Networking',
    description: 'ISP infrastructure, wireless links and operations.',
    skills: [
      'RADIUS / AAA',
      'MikroTik',
      'Ubiquiti',
      'Mimosa',
      'PTP Microwave Links',
      'Outdoor WiFi',
      'Network Monitoring & Troubleshooting',
    ],
    icon: 'network',
  },
];

export const careerTimeline: TimelinePhase[] = [
  {
    period: 'to 2026',
    title: 'Engineering Education',
    description:
      'B.Sc. in Computer and Automation Engineering at Damascus University — the foundation across software and systems.',
  },
  {
    period: 'Feb 2025',
    title: 'Technical Support',
    description:
      'Joined ISP field work at View — installing, configuring and supporting outdoor WiFi for subscribers.',
  },
  {
    period: 'Jul 2025',
    title: 'Network Management',
    description:
      "Stepped up to Network Manager at Speed3, running the ISP's outdoor WiFi network and its day-to-day operations.",
  },
  {
    period: 'Mar 2026',
    title: 'Network Engineering',
    description:
      'Point-to-point microwave links at Runnet with MikroTik, Mimosa and Ubiquiti — link performance and field troubleshooting.',
  },
  {
    period: '2026',
    title: 'Full Stack + Systems',
    description:
      'Web development with Laravel, React and TypeScript, culminating in a RADIUS / AAA server built from scratch — where the software and networking tracks converge.',
  },
];

export const education: Education = {
  degree: 'B.Sc. in Computer and Automation Engineering',
  institution: 'Damascus University',
  timeframe: 'Expected 2026',
};

export const certification: Certification = {
  name: 'CCNA',
  fullName: 'Cisco Certified Network Associate',
  issuer: 'Al-Hadara Institute',
};

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native', scaleStep: 4 },
  { name: 'English', level: 'Intermediate', scaleStep: 3 },
];

export const cvVariants: CVVariant[] = [
  {
    id: 'full-stack',
    label: 'Full Stack Developer CV',
    description: 'Software focus — Laravel, React, TypeScript, Python and the RADIUS build.',
    href: asset('cv/Ahmad-Al-Wattar-Full-Stack-Developer.pdf'),
    filename: 'Ahmad-Al-Wattar-Full-Stack-Developer.pdf',
  },
  {
    id: 'network',
    label: 'Network Engineer CV',
    description: 'Infrastructure focus — ISP networks, PTP microwave, RADIUS/AAA, CCNA.',
    href: asset('cv/Ahmad-Al-Wattar-Network-Engineer.pdf'),
    filename: 'Ahmad-Al-Wattar-Network-Engineer.pdf',
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    label: 'Location',
    value: 'Damascus, Syria',
    href: 'https://www.openstreetmap.org/search?query=Damascus%2C%20Syria',
  },
];
