// ─── All portfolio data in one place ───────────────────────────────────────

export const personal = {
  name: "Ziad Ayman",
  role: "Flutter Developer",
  tagline: "Building high-performance cross-platform mobile experiences.",
  bio: [
    "Flutter Developer with 2+ years of experience building high-performance mobile applications using Flutter and Dart.",
    "Specialized in Clean Architecture, API integration, and scalable solutions — with a strong focus on code quality, performance, and collaboration.",
    "Also an active Flutter instructor at the National Telecommunication Institute, mentoring the next generation of mobile developers.",
  ],
  location: "Giza, Egypt",
  email: "eng.ziad.software@gmail.com",
  phone: "+20 109 968 2110",
  dob: "2002-06-08",
};

export const links = {
  personal: {
    linkedin: "https://www.linkedin.com/in/ziad-ayman-b776b91ba/",
    github: "https://github.com/losziad3",
  },
  projects: {
    urbnlanes_app: "https://play.google.com/store/apps/details?id=com.marketeerurbnlanes&hl=en",
    amanx_app: "https://play.google.com/store/apps/details?id=com.amanx.aman_x",
    urbnlanes_fm: "https://play.google.com/store/apps/details?id=com.estatemaster.fm_urbanlanes&hl=en",
    al_alfy_driver: "https://play.google.com/store/apps/details?id=com.absai.al_alfy_driver&hl=en",
    eve_nav: "https://play.google.com/store/apps/details?id=com.estatemaster.evi_nav&hl=en",
  },
};

export const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "5+", label: "Apps on Play Store" },
  { number: "3+", label: "Companies" },
  { number: "100+", label: "Students Taught" },
];

export const experience = [
  {
    role: "Mid-Level Flutter Developer",
    company: "Wazin",
    companyUrl: "https://www.linkedin.com/company/wazinapp/posts/?feedView=all",
    period: "02/2026 – Present",
    location: "Saudi Arabia",
    points: [
      "Developed and maintained cross-platform mobile apps using Flutter with responsive UI.",
      "Implemented state management using BLoC, Cubit, and Provider.",
      "Integrated RESTful APIs and ensured seamless data flow across architecture layers.",
      "Set up and maintained CI/CD pipelines for faster and reliable deployments.",
      "Collaborated with product and design teams to deliver scalable, performant features.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Estate Master",
    companyUrl: "https://www.linkedin.com/company/estatemaster/posts/?feedView=all",
    period: "2025",
    location: "Egypt",
    points: [
      "Developed cross-platform mobile applications using Flutter and Dart.",
      "Collaborated with UI/UX designers and backend teams for high-performance apps.",
      "Implemented best practices in state management and API integration.",
    ],
  },
  {
    role: "Flutter Developer & Web Scraping",
    company: "AZcare",
    companyUrl: "https://www.linkedin.com/company/azcareai/posts/?feedView=all",
    period: "11/2023 – 04/2024",
    location: "USA (Remote)",
    points: [
      "Developed cross-platform mobile applications ensuring optimal performance and UX.",
      "Utilized Selenium for web scraping to support business intelligence initiatives.",
      "Integrated scraped data into internal systems to facilitate decision-making.",
    ],
  },
  {
    role: "Flutter Instructor",
    company: "National Telecommunication Institute",
    companyUrl: "https://www.nti.sci.eg/",
    period: "12/2024 – Present",
    location: "Cairo, Egypt",
    points: [
      "Conducted hands-on training sessions on Flutter and Dart.",
      "Developed course materials, workshops, and real-world projects.",
      "Guided students in building production-ready applications.",
    ],
  },
  {
    role: "Coding Instructor",
    company: "iSchool",
    companyUrl: "https://www.linkedin.com/company/ischooltech/posts/?feedView=all",
    period: "07/2024 – 03/2026",
    location: "Egypt",
    points: [
      "Taught programming fundamentals and computational thinking to students.",
    ],
  },
];

export const skills = [
  { category: "Languages & Frameworks", icon: "⚡", items: ["Flutter", "Dart", "Node.js", "JavaScript"] },
  { category: "Architecture", icon: "🏛️", items: ["Clean Architecture", "OOP", "SOLID", "DDD"] },
  { category: "State Management", icon: "🔄", items: ["BLoC", "Cubit", "Provider", "Riverpod"] },
  { category: "Backend & APIs", icon: "🔥", items: ["Firebase", "RESTful APIs", "gRPC", "WebSockets"] },
  { category: "DevOps & Tools", icon: "🛠️", items: ["Git", "GitHub", "Azure DevOps", "CI/CD"] },
  { category: "Integrations", icon: "🔌", items: ["Google Maps", "Payment Gateways", "Push Notifications", "Selenium"] },
  { category: "Project Management", icon: "📋", items: ["Jira", "Notion", "Trello", "Agile/Scrum"] },
  { category: "Languages", icon: "🌐", items: ["Arabic (Native)", "English (Professional)", "German (Basic)"] },
];

export const projects = [
  {
    id: "01",
    name: "Urbnlanes",
    category: "Real Estate Platform",
    description: "A white-labeled smart real estate platform featuring real-time payment & installment tracking, secure in-app customer support chat, unit exploration & reservation, and service request management.",
    tags: ["Flutter", "BLoC", "Firebase", "Real-time Chat"],
    link: "https://play.google.com/store/apps/details?id=com.marketeerurbnlanes&hl=en",
    accent: "#4fc3f7",
    bg: "#0a1929",
    icon: "🏙️",
    screens: ["Payment Tracking", "Unit Explorer", "Support Chat", "Service Requests"],
  },
  {
    id: "02",
    name: "amanX",
    category: "Digital Security",
    description: "An innovative digital security platform for managing security operations with real-time tracking, task scheduling, instant reporting, AI-powered analytics, and enhanced communication between management and field teams.",
    tags: ["Flutter", "AI", "Google Maps", "Real-time"],
    link: "https://play.google.com/store/apps/details?id=com.amanx.aman_x",
    accent: "#ff6b6b",
    bg: "#1f0a0a",
    icon: "🛡️",
    screens: ["Live Tracking", "Task Scheduler", "Instant Reports", "Analytics"],
  },
  {
    id: "03",
    name: "Urbnlanes FM",
    category: "Facility Management",
    description: "Real-time project management covering maintenance, housekeeping, security personnel, gates, loading bays, plus supervisor and department manager dashboards with monitoring and evaluation features.",
    tags: ["Flutter", "Dart", "REST API", "CI/CD"],
    link: "https://play.google.com/store/apps/details?id=com.estatemaster.fm_urbanlanes&hl=en",
    accent: "#a78bfa",
    bg: "#160d29",
    icon: "🏗️",
    screens: ["Dashboard", "Maintenance", "Personnel", "Evaluation"],
  },
  {
    id: "04",
    name: "Al Alfy Driver",
    category: "Transport & Logistics",
    description: "Dedicated driver app for Al Alfy — Egypt's leading transport company — enabling trip management, real-time GPS tracking, financial reporting, trip history, and secure location-based coordination.",
    tags: ["Flutter", "Google Maps", "Location", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.absai.al_alfy_driver&hl=en",
    accent: "#34d399",
    bg: "#0a1f16",
    icon: "🚗",
    screens: ["Trip Offers", "GPS Tracking", "Financials", "Trip History"],
  },
  {
    id: "05",
    name: "Eve Nav",
    category: "Event Management",
    description: "An all-in-one event management solution — create events, invite attendees, assign ticket types, and manage guest lists for conferences, concerts, workshops, and social gatherings.",
    tags: ["Flutter", "BLoC", "REST API", "Dart"],
    link: "https://play.google.com/store/apps/details?id=com.estatemaster.evi_nav&hl=en",
    accent: "#f59e0b",
    bg: "#1f160a",
    icon: "🎪",
    screens: ["Create Event", "Invitations", "Ticket Types", "Guest List"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  faculty: "Faculty of Computers and Artificial Intelligence",
  university: "Cairo University",
  period: "10/2020 – 06/2024",
  location: "Giza, Egypt",
  universityUrl: "https://cu.edu.eg/Home",
  facultyUrl: "https://fci.cu.edu.eg/",
};
