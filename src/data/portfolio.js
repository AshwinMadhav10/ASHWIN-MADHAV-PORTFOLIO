import {
  FaBrain,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPython,
  FaRobot,
  FaServer,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import {
  SiFastapi,
  SiFlask,
  SiHuggingface,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiTensorflow,
} from "react-icons/si";
import { TbApi, TbBrandOpenai, TbVectorTriangle, TbWebhook } from "react-icons/tb";

export const resumeUrl = "/Ashwin-Madhav-AI-Resume.pdf";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashwin-madhav",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/AshwinMadhav10",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:ashwinmadhavambadi2003@gmail.com",
    icon: FaEnvelope,
  },
];

export const infoCards = [
  { label: "Location", value: "Palakkad, Kerala", icon: FaMapMarkerAlt },
  { label: "Education", value: "Master of Computer Applications", icon: FaGraduationCap },
  { label: "Primary Focus", value: "AI, Machine Learning and Python", icon: FaBrain },
  { label: "Availability", value: "Open to AI/ML and Python opportunities", icon: FaUsers },
];

export const experiences = [
  {
    role: "AI-ML Intern",
    company: "GJ Global IT Ventures",
    mode: "Onsite",
    period: "September 2025 - April 2026",
    points: [
      "Applied LLMs, NLP techniques, and scalable backend architectures to build real-world AI workflows.",
      "Worked on production-oriented AI systems, including a RAG-based PDF study assistant.",
      "Contributed to an AI-powered journalism platform and recruitment management system.",
      "Integrated AI models, APIs, databases, and backend services into complete applications.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Acmegrade",
    mode: "Remote",
    period: "September 2023 - November 2023",
    points: [
      "Applied data preprocessing and exploratory data analysis using Python.",
      "Implemented machine learning algorithms using real-world datasets.",
      "Gained hands-on experience with foundational data science workflows and tools.",
    ],
  },
];

export const projects = [
  {
    title: "RAG Study Assistant",
    subtitle: "AI-Powered PDF Learning Platform",
    category: "RAG",
    description:
      "Processes PDF documents and provides contextual question answering through a Retrieval-Augmented Generation pipeline.",
    technologies: ["Python", "FastAPI", "Hugging Face", "ChromaDB", "Groq LLM", "RAG", "Vector Search"],
    features: [
      "PDF document ingestion",
      "Content extraction",
      "Semantic search",
      "Context-aware question answering",
      "Subject-based document management",
      "Real-time AI responses",
    ],
    github: "https://github.com/AshwinMadhav10",
    demo: "",
    caseStudy: "#contact",
  },
  {
    title: "AI Recruitment Management System",
    subtitle: "Automated Resume Screening Platform",
    category: "Automation",
    description:
      "Receives resumes through email, extracts candidate information, matches applicants with job requirements, and automates ranking.",
    technologies: ["Python", "NLP", "PostgreSQL", "IMAP", "Resume Parsing", "FastAPI", "AI Ranking"],
    features: [
      "Automatic resume collection",
      "Candidate profile parsing",
      "Job matching",
      "Automated screening",
      "Candidate scoring",
      "Recruitment analytics",
    ],
    github: "https://github.com/AshwinMadhav10",
    demo: "",
    caseStudy: "#contact",
  },
  {
    title: "CRM Lead Management and AI Demo Booking Automation",
    subtitle: "AI Sales Workflow Automation",
    category: "Automation",
    description:
      "Automates Zoho CRM lead qualification, WhatsApp interactions, calendar availability checks, and demo booking confirmations.",
    technologies: ["Zoho CRM", "WhatsApp AI Chatbot", "Google Calendar", "PostgreSQL", "REST APIs", "Webhooks", "LLM"],
    features: [
      "AI-based lead qualification",
      "Structured lead-data collection",
      "Calendar availability checking",
      "Automatic demo booking",
      "Customer and sales-team confirmations",
      "CRM and API integration",
    ],
    github: "https://github.com/AshwinMadhav10",
    demo: "",
    caseStudy: "#contact",
  },
  {
    title: "EduAssist",
    subtitle: "AI-Powered Educational Management System",
    category: "Education",
    description:
      "Supports assignment evaluation, automated scoring, personalised feedback, quiz generation, and interactive learning assistance.",
    technologies: ["FastAPI", "SQLite", "ChromaDB", "OCR", "Groq LLM", "Python", "RAG"],
    features: [
      "Answer-sheet analysis",
      "Automated assignment evaluation",
      "AI-generated scores and feedback",
      "Quiz generation",
      "Flashcard creation",
      "Student doubt-clearing assistant",
    ],
    github: "https://github.com/AshwinMadhav10",
    demo: "",
    caseStudy: "#contact",
  },
  {
    title: "Quick Serve",
    subtitle: "Local Service Booking Platform",
    category: "Web App",
    description:
      "A PHP and MySQL application that helps users find and book local service workers such as plumbers and electricians.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: ["Service search", "Worker booking", "User-friendly listings", "Database-backed requests"],
    github: "https://github.com/AshwinMadhav10",
    demo: "",
    caseStudy: "#contact",
  },
];

export const skillGroups = [
  { title: "Programming", icon: FaPython, skills: ["Python"] },
  { title: "Backend Development", icon: FaServer, skills: ["FastAPI", "Flask", "REST APIs", "Webhooks", "API Integration"] },
  {
    title: "Artificial Intelligence and Machine Learning",
    icon: FaRobot,
    skills: [
      "Machine Learning",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Natural Language Processing",
      "Prompt Engineering",
      "OCR",
      "Semantic Search",
      "Computer Vision",
    ],
  },
  {
    title: "Libraries and Frameworks",
    icon: TbBrandOpenai,
    skills: ["LangChain", "Hugging Face", "OpenAI API", "Groq", "spaCy", "OpenCV", "TensorFlow Lite", "YOLOv8", "Scikit-learn"],
  },
  { title: "Databases", icon: FaDatabase, skills: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB"] },
  { title: "Automation Tools", icon: FaTools, skills: ["n8n", "Zapier", "Make.com", "Zoho CRM", "Google Calendar Integration"] },
  { title: "Professional Skills", icon: FaUsers, skills: ["Communication", "Leadership", "Collaboration", "Time Management", "Adaptability", "Flexibility"] },
];

export const techIcons = [
  { name: "Python", icon: FaPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "ChromaDB", icon: TbVectorTriangle },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "OpenAI API", icon: TbBrandOpenai },
  { name: "TensorFlow Lite", icon: SiTensorflow },
  { name: "React", icon: SiReact },
  { name: "REST APIs", icon: TbApi },
  { name: "Webhooks", icon: TbWebhook },
  { name: "Vector Search", icon: TbVectorTriangle },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Lead College of Management, University of Calicut",
    period: "2024 - Present",
    highlights: ["Python", "React", "Java", "Generative AI", "NLP", "Prompt Engineering"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Calicut",
    period: "2021 - 2024",
    highlights: ["Developed the Quick Serve service-booking platform.", "Served as an NCC Senior Division Leader."],
  },
];

export const certifications = [
  { name: "Android App Development Using Flutter", issuer: "Srishti Innovative", credential: "Credential link can be added" },
  { name: "Python Programming", issuer: "Kaggle", credential: "Credential link can be added" },
  { name: "Claude 101 Certification", issuer: "Anthropic learning track", credential: "Credential ID can be added" },
  { name: "NCC 'C' Certificate", issuer: "Senior Division, National Cadet Corps", credential: "Certificate record can be added" },
];

export const contact = {
  email: "ashwinmadhavambadi2003@gmail.com",
  location: "Palakkad, Kerala",
  linkedin: "linkedin.com/in/ashwin-madhav",
  github: "github.com/AshwinMadhav10",
};

export const timelineStats = [
  { value: "5+", label: "AI and web projects" },
  { value: "2", label: "Internship roles" },
  { value: "10+", label: "AI/backend tools" },
  { value: "2026", label: "MCA in progress" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const projectCategories = ["All", ...new Set(projects.map((project) => project.category))];
