// ============================================================================
// Jashan.exe – Portfolio OS Content Data File
// ============================================================================
// Single source of truth for all content across the portfolio website.
// To customize, edit the values below. All placeholder items are marked with TODO.
// ============================================================================

export const CONFIG = {
  // Set to true to open dock links in new browser tabs instead of the OS window view
  OPEN_IN_NEW_BROWSER_TAB: false,
};

export interface Profile {
  name: string;
  nickname: string;
  title: string;
  subtitle: string;
  shortBio: string;
  fullBio: string;
  email: string;
  resumeUrl: string;
  githubUrl: string; // TODO: Replace with your actual GitHub URL
  linkedinUrl: string; // TODO: Replace with your actual LinkedIn URL
  institution: string;
  cgpa: string;
}

export const profile: Profile = {
  name: 'Jashanpreet Kaur',
  nickname: 'Jashan',
  title: "Hey, I'm Jashan! ♡",
  subtitle: 'AI & Machine Learning Engineer | Developer | Creative Problem Solver',
  shortBio:
    'A CSE (AIML) undergrad who loves building real-world solutions with AI, exploring new technologies and turning ideas into impact. ♡',
  fullBio:
    "I'm Jashanpreet Kaur, a CSE (AIML) undergrad at CEC who loves building real-world solutions with AI. I enjoy exploring new technologies, solving problems and turning ideas into impact. When I'm not coding, I'm probably with a cup of coffee and a cat.",
  email: 'jashanpreet.kaur.inn@gmail.com',
  resumeUrl: './resume.pdf',
  githubUrl: 'https://github.com/jashan-26',
  linkedinUrl: 'https://linkedin.com', // TODO: Add personal LinkedIn profile link
  institution: 'CEC (Chandigarh Engineering College)',
  cgpa: '8.8',
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: 'code' | 'trophy' | 'calendar';
}

export const stats: StatItem[] = [
  { id: 'projects', value: '4+', label: 'Projects', icon: 'code' },
  { id: 'achievements', value: '5+', label: 'Achievements', icon: 'trophy' },
  { id: 'events', value: '2+', label: 'Major Events', icon: 'calendar' },
];

export const aboutPoints: string[] = [
  'B.Tech AIML @ CEC',
  'CGPA: 8.8',
  'Problem Solver',
  'AI Enthusiast',
  'Cat Person ♡',
];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  isPlaceholder?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'cyclone-classifier',
    title: 'Cyclone Intensity Classifier',
    description:
      'AI/ML system to classify and predict tropical cyclone intensity using satellite data.',
    tags: ['PyTorch', 'ML', 'Satellite Data'],
    image: './assets/cyclone.webp',
    github: 'https://github.com/jashan-26/portfolio',
    demo: '#', // TODO: Add live demo link if available
    isPlaceholder: false,
  },
  {
    id: 'project-two-todo',
    title: 'TODO: Intelligent Healthcare Diagnostics Assistant',
    description:
      'Computer vision and LLM powered clinical triage tool for automated medical report summarization.',
    tags: ['Python', 'OpenCV', 'LLMs', 'FastAPI'],
    image: './assets/album-art.webp',
    github: 'https://github.com/jashan-26', // TODO: Replace with Project 2 repository
    demo: '#', // TODO: Replace with Project 2 demo link
    isPlaceholder: true,
  },
  {
    id: 'project-three-todo',
    title: 'TODO: Autonomous Multi-Agent Research System',
    description:
      'Multi-agent workflow orchestrating web research, document cross-referencing, and synthesis.',
    tags: ['LangChain', 'Python', 'Vector DB'],
    image: './assets/cat-astronaut.webp',
    github: 'https://github.com/jashan-26', // TODO: Replace with Project 3 repository
    demo: '#', // TODO: Replace with Project 3 demo link
    isPlaceholder: true,
  },
  {
    id: 'project-four-todo',
    title: 'TODO: Real-Time Edge Video Analytics',
    description:
      'Lightweight YOLO-based object detection and tracking optimized for edge computing devices.',
    tags: ['PyTorch', 'TensorRT', 'Edge AI'],
    image: './assets/hero-girl.webp',
    github: 'https://github.com/jashan-26', // TODO: Replace with Project 4 repository
    demo: '#', // TODO: Replace with Project 4 demo link
    isPlaceholder: true,
  },
];

export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

export const currentlyExploring: ChecklistItem[] = [
  { id: 'dl', label: 'Deep Learning', checked: true },
  { id: 'genai', label: 'Generative AI', checked: true },
  { id: 'sysdesign', label: 'System Design', checked: false },
  { id: 'dsa', label: 'DSA', checked: false },
  { id: 'coolproj', label: 'Building Cool Projects ♡', checked: true },
];

export interface ActivityItem {
  id: string;
  label: string;
  percent: number;
}

export const activityLogs: ActivityItem[] = [
  { id: 'act-learn', label: 'Learning', percent: 80 },
  { id: 'act-build', label: 'Building', percent: 90 },
  { id: 'act-explore', label: 'Exploring', percent: 75 },
  { id: 'act-coffee', label: 'Coffee', percent: 100 },
  { id: 'act-sleep', label: 'Sleep', percent: 60 },
];

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: 'heart' | 'trophy' | 'code' | 'mic';
  iconColor: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 'shefi',
    title: 'SheFi Scholar Season 16',
    description: 'Selected as a global scholar for Web3, frontier tech, and fintech development.',
    icon: 'heart',
    iconColor: '#E8559A',
  },
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    description: 'Competed with high-impact automated AI solution addressing real-world civic challenges.',
    icon: 'trophy',
    iconColor: '#F2B632',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Participant',
    description: 'Active builder participating in nationwide technical hackathons and ideathons.',
    icon: 'code',
    iconColor: '#9C6ADE',
  },
  {
    id: 'anchor',
    title: 'Event Anchor',
    description: 'Anchored and coordinated flagship institutional technical fests and speaker sessions.',
    icon: 'mic',
    iconColor: '#4A90E2',
  },
];

export const todoList: ChecklistItem[] = [
  { id: 'todo-1', label: 'Finalize next project', checked: true },
  { id: 'todo-2', label: 'DSA practice', checked: true },
  { id: 'todo-3', label: 'Update portfolio', checked: false },
  { id: 'todo-4', label: 'Explore research internship', checked: false },
];

export interface NavItem {
  id: string;
  name: string;
  path: string;
  iconName: string;
  windowTitle: string;
}

export const navItems: NavItem[] = [
  { id: 'home', name: 'Home', path: '/', iconName: 'Monitor', windowTitle: 'Welcome.exe' },
  { id: 'about', name: 'About Me', path: '/about', iconName: 'Cat', windowTitle: 'About_Me.exe' },
  { id: 'experience', name: 'Experience', path: '/experience', iconName: 'Briefcase', windowTitle: 'Experience.exe' },
  { id: 'projects', name: 'Projects', path: '/projects', iconName: 'Code2', windowTitle: 'Projects.exe' },
  { id: 'achievements', name: 'Achievements', path: '/achievements', iconName: 'Trophy', windowTitle: 'Achievements.exe' },
  { id: 'skills', name: 'Skills', path: '/skills', iconName: 'Settings', windowTitle: 'Skills.exe' },
  { id: 'education', name: 'Education', path: '/education', iconName: 'GraduationCap', windowTitle: 'Education.exe' },
  { id: 'certifications', name: 'Certifications', path: '/certifications', iconName: 'Award', windowTitle: 'Certifications.exe' },
  { id: 'resume', name: 'Resume', path: '/resume', iconName: 'FileText', windowTitle: 'Resume.exe' },
  { id: 'contact', name: 'Contact', path: '/contact', iconName: 'Mail', windowTitle: 'Contact.exe' },
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  skills: string[];
  isPlaceholder?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'AI / ML Student Researcher', // TODO: Update with real role or internship
    organization: 'Chandigarh Engineering College (CEC)',
    period: '2024 – Present',
    description: [
      'Conducting research and hands-on experiments on satellite imagery analysis and predictive atmospheric modeling.',
      'Developing PyTorch computer vision pipelines and benchmarking convolutional and transformer architectures.',
      'Collaborating with peers on technical hackathons and frontier tech initiatives.',
    ],
    skills: ['PyTorch', 'Python', 'Machine Learning', 'Computer Vision'],
    isPlaceholder: false,
  },
  {
    id: 'exp-2-todo',
    role: 'TODO: Software Development / Research Intern',
    organization: 'TODO: Organization / Lab Name',
    period: 'TODO: Summer 2025',
    description: [
      'TODO: Describe responsibilities, project scope, and system design contributions.',
      'TODO: Highlight quantifiable performance improvements, accuracy boosts, or deployment metrics.',
    ],
    skills: ['Python', 'Deep Learning', 'System Design'],
    isPlaceholder: true,
  },
];

export interface SkillCategory {
  category: string;
  items: { name: string; level?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'SQL' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'PyTorch' },
      { name: 'TensorFlow / Keras' },
      { name: 'Scikit-Learn' },
      { name: 'OpenCV' },
      { name: 'Pandas & NumPy' },
      { name: 'Deep Learning' },
      { name: 'Generative AI' },
      { name: 'LLM Fine-tuning' }, // TODO: Confirm or customize
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebooks' },
      { name: 'Google Colab' },
      { name: 'Docker' }, // TODO: Confirm or customize
      { name: 'Linux / Bash' },
    ],
  },
  {
    category: 'Soft Skills & Leadership',
    items: [
      { name: 'Problem Solving' },
      { name: 'Public Speaking & Event Anchoring' },
      { name: 'Team Collaboration' },
      { name: 'Rapid Prototyping' },
      { name: 'Technical Writing' },
    ],
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  currentStatus: string;
  cgpa: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (AI & Machine Learning)',
    institution: 'Chandigarh Engineering College (CEC), Landran',
    duration: '2023 – 2027',
    currentStatus: '5th Semester Undergraduate',
    cgpa: '8.8 / 10.0',
    highlights: [
      'Consistent academic excellence with a current cumulative CGPA of 8.8',
      'Focus areas: Artificial Intelligence, Deep Learning, Data Structures & Algorithms, Computer Networks',
      'Active participant in technical symposiums, hackathons, and student coding bodies',
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export const certifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'SheFi Web3 & Tech Fellowship Season 16',
    issuer: 'SheFi Global',
    date: '2024',
    credentialUrl: '#',
    isPlaceholder: false,
  },
  {
    id: 'cert-2-todo',
    title: 'TODO: Deep Learning Specialization / Machine Learning Certificate',
    issuer: 'TODO: Coursera / DeepLearning.AI',
    date: 'TODO: 2024',
    credentialUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'cert-3-todo',
    title: 'TODO: Data Structures and Algorithms Mastery',
    issuer: 'TODO: LeetCode / HackerRank / NPTEL',
    date: 'TODO: 2024',
    credentialUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'cert-4-todo',
    title: 'TODO: Cloud Computing or MLOps Fundamentals',
    issuer: 'TODO: AWS / Google Cloud',
    date: 'TODO: 2025',
    credentialUrl: '#',
    isPlaceholder: true,
  },
];

export interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  durationSeconds: number;
  initialTimeSeconds: number;
}

export const currentTrack: TrackInfo = {
  title: 'Coding in Space ♡',
  artist: 'Jashan Lo-Fi Sessions',
  album: 'Cosmic Beats Vol. 1',
  durationSeconds: 236, // 3:56
  initialTimeSeconds: 84, // 1:24
};
