export const personal = {
  name: "Ziad Ayman",
  fullName: "Ziad Ayman Mohamed",
  role: "Software Engineer",
  focus: "Mobile, Backend & Systems Integration",
  tagline: "Flutter clients, the APIs behind them, and the pipelines that release them.",
  bio: [
    "Software engineer with nearly 3 years shipping production systems end to end: Flutter and Dart clients, plus the APIs, integrations, and delivery pipelines behind them.",
    "Five apps are live on Google Play, covering real-time tracking, payment processing, role-based operations, and fleet logistics. The work spans REST APIs, Firebase, Node.js, data automation, and Azure DevOps CI/CD.",
  ],
  location: "Giza, Egypt",
  email: "eng.ziad.software@gmail.com",
  phone: "+20 109 968 2110",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/ziad-ayman-b776b91ba/",
  github: "https://github.com/losziad3",
  leetcode: "https://leetcode.com/u/losziad20189",
};

export const highlights = [
  { value: "5", label: "Apps live" },
  { value: "1,000+", label: "Installs" },
  { value: "~3", label: "Years shipping" },
];

export const chips = [
  "Real-time tracking",
  "Payment gateways",
  "Role-based ops",
  "Fleet logistics",
];

export const proof = [
  { value: "5", label: "apps on Google Play" },
  { value: "1,000+", label: "combined installs" },
  { value: "30→5 min", label: "release time after CI/CD" },
  { value: "70%+", label: "unit coverage on business logic" },
];

export const layers = [
  {
    tone: "green",
    title: "Mobile clients",
    text: "Flutter and Dart, from specification to a Play Store release. BLoC, Cubit, Provider, and Riverpod, with maps, push, and payment gateways.",
    points: ["Flutter & Dart", "BLoC / Cubit / Riverpod", "Google Play Console"],
  },
  {
    tone: "sand",
    title: "The system underneath",
    text: "REST contracts, Firebase, and Node.js services. Auth, pagination, caching, and failure handling across the flows the apps depend on.",
    points: ["REST & Firebase", "Node.js", "Caching & failure handling"],
  },
  {
    tone: "yellow",
    title: "Delivery & teaching",
    text: "Azure DevOps pipelines that cut a release from about 30 minutes to about 5. Curricula and hands-on training for 50+ learners, plus CS instruction for 100+ students.",
    points: ["Azure DevOps CI/CD", "NTI instructor", "iSchool instructor"],
  },
];

export const experience = [
  {
    role: "Software Engineer (Mid-Level)",
    company: "Raqeem",
    companyUrl: "https://www.linkedin.com/company/wazinapp/posts/?feedView=all",
    period: "02/2026 – Present",
    location: "Saudi Arabia",
    stack: ["Flutter", "Dart", "BLoC/Cubit", "Provider", "REST", "Firebase", "Azure DevOps"],
    points: [
      "Own features end to end, client and service.",
      "Cut redundant API calls ~35% with caching and pagination.",
      "CI/CD on Azure DevOps: releases from ~30 to ~5 min.",
      "70%+ unit-test coverage on business logic.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pilot Estate",
    companyUrl: "https://www.linkedin.com/company/pilotestate/posts/?feedView=all",
    period: "05/2024 – 02/2026",
    location: "Egypt",
    stack: ["Flutter", "Dart", "REST", "Firebase", "Provider", "BLoC", "Figma"],
    points: [
      "Shipped 5 apps to Google Play, 1,000+ installs.",
      "Integrated 30+ endpoints: tracking, payments, multi-role access.",
      "One white-labeled codebase serving multiple brands.",
    ],
  },
  {
    role: "Software Engineer — Mobile & Data Automation",
    company: "AZcare",
    companyUrl: "https://www.linkedin.com/company/azcareai/posts/?feedView=all",
    period: "11/2023 – 06/2024",
    location: "United States (Remote)",
    stack: ["Flutter", "Dart", "Selenium", "Python", "JSON pipelines"],
    points: [
      "Automated 10K+ records a week from 5+ sources with Selenium.",
      "Saved ~15 hours a week of manual data work.",
      "Built Flutter apps alongside the automation.",
    ],
  },
  {
    role: "Flutter & Software Engineering Instructor",
    company: "National Telecommunication Institute",
    companyUrl: "https://www.nti.sci.eg/",
    period: "12/2024 – 04/2025",
    location: "Cairo, Egypt",
    stack: ["Flutter", "Dart", "Curriculum"],
    points: [
      "Taught Flutter and Dart to 50+ learners through real projects.",
    ],
  },
  {
    role: "Computer Science Instructor",
    company: "iSchool",
    companyUrl: "https://www.linkedin.com/company/ischooltech/posts/?feedView=all",
    period: "07/2024 – 03/2026",
    location: "Egypt",
    stack: ["CS fundamentals", "Algorithms"],
    points: [
      "Taught programming and algorithms to 100+ students.",
    ],
  },
];

export const quotes = {
  craft: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  shipping: {
    text: "Real artists ship.",
    author: "Steve Jobs",
  },
  problem: {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["Dart", "Python", "JavaScript", "C++", "Java", "C#", "SQL"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "BLoC / Cubit", "Provider", "Riverpod", "Hive", "SQLite", "FCM", "Google Maps", "Payment gateways"],
  },
  {
    category: "Backend & APIs",
    items: ["REST", "gRPC", "Node.js", "Django", "Firebase", "Dio", "Webhooks", "Postman"],
  },
  {
    category: "Data & architecture",
    items: ["Clean Architecture", "SOLID", "Repository pattern", "MySQL", "SQL Server", "Firestore", "Selenium", "pandas"],
  },
  {
    category: "DevOps",
    items: ["Azure DevOps", "CI/CD pipelines", "Git", "GitHub"],
  },
  {
    category: "Delivery",
    items: ["Jira", "Figma", "Agile", "Play Console"],
  },
];

export const projects = [
  {
    id: "01",
    name: "Livo Light",
    category: "Real estate",
    description:
      "Multi-tenant real estate platform with real-time payment and installment tracking, payment gateway integration, in-app chat, and unit reservation.",
    tags: ["Flutter", "Payments", "Realtime", "Chat"],
    link: "https://play.google.com/store/apps/details?id=com.estateMaster.livoEstateCompany&hl=en",
    images: [
      "/projects/livo-light/1.png",
      "/projects/livo-light/2.png",
      "/projects/livo-light/3.png",
      "/projects/livo-light/4.png",
    ],
  },
  {
    id: "02",
    name: "amanX",
    category: "Security operations",
    description:
      "Security operations platform for field teams: real-time GPS tracking, task scheduling, incident reporting, and analytics.",
    tags: ["Flutter", "GPS", "Scheduling", "Reporting"],
    link: "https://play.google.com/store/apps/details?id=com.amanx.aman_x&pcampaignid=web_share",
    appStore: "https://apps.apple.com/sa/app/amanx/id6761360499",
    images: [
      "/projects/amanx/1.png",
      "/projects/amanx/2.png",
      "/projects/amanx/3.png",
    ],
  },
  {
    id: "03",
    name: "Livo FM",
    category: "Facility management",
    description:
      "Facility management across maintenance, housekeeping, security, gates, and loading bays, with role-based access for supervisors, managers, and field staff.",
    tags: ["Flutter", "Roles", "Operations", "REST"],
    link: "https://play.google.com/store/apps/details?id=com.estatemaster.FMlivo&hl=en",
    images: [
      "/projects/livo-fm/1.png",
      "/projects/livo-fm/2.png",
      "/projects/livo-fm/3.png",
      "/projects/livo-fm/4.png",
    ],
  },
  {
    id: "04",
    name: "Al Alfy Driver",
    category: "Fleet logistics",
    description:
      "Fleet logistics for a leading Egyptian transport company: trip dispatch, real-time tracking, financial reporting, and location-verified login.",
    tags: ["Flutter", "Maps", "Dispatch", "Tracking"],
    link: "https://play.google.com/store/apps/details?id=com.absai.al_alfy_driver&hl=en",
    appStore: "https://apps.apple.com/eg/app/al-alfy-driver/id6748659769",
    images: [
      "/projects/alfy/1.png",
      "/projects/alfy/2.png",
      "/projects/alfy/3.png",
    ],
  },
  {
    id: "05",
    name: "Eve Nav",
    category: "Events",
    description:
      "Event management platform with event creation, attendee invitations, ticket assignment, and guest list management.",
    tags: ["Flutter", "Invites", "Tickets", "Guests"],
    link: "https://play.google.com/store/apps/details?id=com.estatemaster.evi_nav&hl=en",
    images: [
      "/projects/evenav/1.png",
      "/projects/evenav/2.png",
      "/projects/evenav/3.png",
      "/projects/evenav/4.png",
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  faculty: "Faculty of Computers and Artificial Intelligence",
  university: "Cairo University",
  period: "10/2020 – 06/2024",
  location: "Giza, Egypt",
  universityUrl: "https://cu.edu.eg/Home",
  facultyUrl: "https://fci.cu.edu.eg/",
};
