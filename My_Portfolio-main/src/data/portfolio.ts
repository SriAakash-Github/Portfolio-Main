import { Project, Skill, Article, SocialLink } from '../types';

export const experiences = [
  {
    id: 'exp-1',
    title: 'AI/ML Full Stack Intern',
    company: 'Mphasis',
    period: '05/2025 - Present',
    location: 'DLF SEZ IT Park, Chennai',
    description: 'Worked in the airline operations domain, developing a Flight-Baggage Analytics System that used multiple ML models to address various KPIs, collaborated with business analysts, and built a full-stack ML application.',
    technologies: ['Xgboost', 'React.js', 'AWS', 'Git', 'Streamlit','Flask','EDA','RAG'],
    achievements: [
      'Developed a Flight-Baggage Analytics System using ML models for delay prediction and anomaly detection aligned with key operational KPIs.',
      'Presented solutions in business meetings, translating technical insights into actionable strategies in collaboration with analysts.',
      'Built and integrated multiple ML models addressing airline KPIs into a unified platform.'
    ]
  },
  {
    id: 'exp-2',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    location: 'San Francisco, CA',
    description: 'Developed responsive web applications and mobile-first designs. Collaborated with UX/UI teams to create intuitive user experiences.',
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase'],
    achievements: [
      'Built 15+ responsive web applications',
      'Improved user engagement by 40%',
      'Established component library used across 10+ projects'
    ]
  },
  {
    id: 'exp-3',
    title: 'Freelance | Technical Content Writer & Manager',
    company: 'Articulate – Web Dev & Content Writing Agency',
    period: '03/2023 - 08/2023',
    location: 'Remote',
    description: 'combined technical writing expertise with leadership and project management. I created quality educational content and led teams of writers delivering consistent results for major platforms like GFG and TutorialsPoint.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    achievements: [
      'detailed tutorials and articles on Python, JavaScript, and web development topics.',
      'Reviewed SEO guidelines and analytics to optimize reach and readability.',
      'Recruited and managed a team of content writers via LinkedIn to ensure timely and high-quality content delivery.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Airline Operations ML System',
    description: 'Developed a Flight and Baggage Delay Prediction System Using Multiple ML Models tailored to the Airline industry KPIs.',
    technologies: ['Xgboost', 'JavaScript', 'Streamlit', 'Flask','EDA','AWS Sagemaker'],
    githubUrl: 'https://github.com/SriAakash-Github/FlightOps_MLsolution.git',
    // liveUrl: 'https://neural-viz.demo.com',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-2',
    title: 'Crop Disease Detection',
    description: 'Cross-platform terminal-based file manager with vim-like keybindings and plugin support.',
    technologies: ['Flutter', 'Teachable Machine', 'Edge Impluse', 'CNN'],
    githubUrl: 'https://github.com/username/term-fm',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-3',
    title: 'Distributed Cache System',
    description: 'High-performance distributed caching system with consistent hashing and fault tolerance.',
    technologies: ['Go', 'Redis', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/username/dist-cache',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-4',
    title: 'Blockchain Explorer',
    description: 'Real-time blockchain explorer with advanced analytics and transaction visualization.',
    technologies: ['Vue.js', 'Node.js', 'GraphQL', 'MongoDB'],
    githubUrl: 'https://github.com/username/blockchain-explorer',
    liveUrl: 'https://block-explorer.demo.com',
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 95, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js + Express.js ', level: 70, category: 'backend' },
  { name: 'Python/Flask', level: 82, category: 'backend' },
  { name: '.Net', level: 78, category: 'backend' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'AWS', level: 80, category: 'devops' },
  { name: 'Linux/Shell', level: 92, category: 'tools' },
  { name: 'Git', level: 88, category: 'tools' },
  { name: 'Scikit-learn', level: 80, category: 'aiml' },
  { name: 'PyTorch', level: 70, category: 'aiml' },
  { name: 'ML Algorithms', level: 75, category: 'aiml' },
  { name: 'Hugging Face', level: 78, category: 'aimltech' },
  { name: 'Streamlit', level: 82, category: 'aimltech' },
  { name: 'Cursor IDE', level: 90, category: 'aimltech' }
];

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Building Performant 3D Web Applications with Three.js',
    summary: 'Deep dive into optimization techniques for complex 3D scenes in the browser.',
    date: '2024-01-15',
    readTime: '12 min',
    url: 'https://blog.example.com/threejs-performance'
  },
  {
    id: 'article-2',
    title: 'Mastering Linux System Administration',
    summary: 'Comprehensive guide to advanced Linux administration techniques and automation.',
    date: '2024-01-08',
    readTime: '18 min',
    url: 'https://blog.example.com/linux-administration'
  },
  {
    id: 'article-3',
    title: 'Modern Web Security Practices',
    summary: 'Essential security measures for contemporary web applications and APIs.',
    date: '2023-12-22',
    readTime: '15 min',
    url: 'https://blog.example.com/web-security'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SriAakash-Github',
    icon: 'github',
    command: 'git clone github.com/SriAakash-Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sri-aakash-/',
    icon: 'linkedin',
    command: 'curl -X GET linkedin.com/in/sri-aakash-/'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/wrathfps/',
    icon: 'instagram',
    command: 'open instagram.com/wrathfps'
  },
  {
    name: 'Email',
    url: 'mailto:sriaakashsriaakash@gmail.com',
    icon: 'mail',
    command: 'mail -s "Hello" sriaakashsriaakash@gmail.com'
  }
];

export const education = [
  {
    id: 'edu-1',
    institution: 'S.R.M Institute of Science and Technology',
    degree: 'B.Tech Electronics and Communication Engineering',
    period: '2023 - 2027',
    grade: '9.4 CGPA',
    location: 'Chennai, Tamil Nadu',
    description: 'Specialized in Electronics and Communication Engineering with focus on digital systems, signal processing, IOT and embedded systems. Active participant in technical clubs and coding competitions.',
    achievements: [
      'Maintained consistent academic performance with 9.4 CGPA',
      'Led technical team in inter-college competitions',
      // 'Published research paper on IoT applications',
      'Shortlisted for Smart India Hackathon 2024 '
    ],
    courses: ['Digital Signal Processing', 'Artificial Intelligence',"Machine Learning", 'Embedded Systems', 'VLSI Design', 'Communication Systems', 'Microprocessors / Microcontrollers']
  },
  {
    id: 'edu-2',
    institution: 'Velammal Vidhyashram Surapet',
    degree: 'Higher Secondary (HSC)',
    period: '2020 - 2021',
    grade: '87%',
    location: 'Chennai, Tamil Nadu',
    description: 'Completed Higher Secondary education with Mathematics, Physics, Chemistry, and Computer Science. Developed strong foundation in analytical thinking and problem-solving.',
    achievements: [
      'Scored 87% in HSC examinations',
      'Project on  Hospital Management System Using python and MySQL',
      'Active member of Science Club',
      'Participated in state-level science exhibitions and Olympiads'
    ],
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
  },
  {
    id: 'edu-3',
    institution: 'Velammal Vidhyashram Surapet',
    degree: 'Senior Secondary (SSC)',
    period: '2018 - 2019',
    grade: '91%',
    location: 'Chennai, Tamil Nadu',
    description: 'Completed Senior Secondary education with excellent academic performance. Built strong fundamentals in core subjects and developed interest in technology.',
    achievements: [
      'Achieved 91% in SSC examinations',
      'Top Scorer In NTSE 2019',
      'Won district-level mathematics olympiad (Srinivasan Ramanujan Maths Olympiad)'
    ],
    courses: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi']
  }
];