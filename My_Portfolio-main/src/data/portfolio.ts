import { Project, Skill, Article, SocialLink } from '../types';

export const experiences = [
  {
    id: 'exp-1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and architected microservices infrastructure.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led team of 5 developers on critical client projects',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
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
    title: 'Junior Developer',
    company: 'WebDev Agency',
    period: '2019 - 2020',
    location: 'New York, NY',
    description: 'Started career building websites for small businesses. Gained experience in full-stack development and client communication.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    achievements: [
      'Delivered 25+ client websites on time',
      'Maintained 98% client satisfaction rate',
      'Learned modern development practices and tools'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures with real-time training data.',
    technologies: ['React', 'Three.js', 'WebGL', 'TensorFlow.js'],
    githubUrl: 'https://github.com/username/neural-viz',
    liveUrl: 'https://neural-viz.demo.com',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-2',
    title: 'Terminal File Manager',
    description: 'Cross-platform terminal-based file manager with vim-like keybindings and plugin support.',
    technologies: ['Rust', 'TUI', 'tokio', 'crossterm'],
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
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Python/Flask', level: 82, category: 'backend' },
  { name: 'Java', level: 78, category: 'backend' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'AWS', level: 80, category: 'devops' },
  { name: 'Linux/Shell', level: 92, category: 'tools' },
  { name: 'Git', level: 88, category: 'tools' },
  { name: 'Scikit-learn', level: 80, category: 'aiml' },
  { name: 'PyTorch', level: 70, category: 'aiml' },
  { name: 'ML Algorithms', level: 75, category: 'aiml' },
  { name: 'Hugging Face', level: 78, category: 'aimltech' },
  { name: 'Streamlit', level: 82, category: 'aimltech' },
  { name: 'Cursor IDE', level: 70, category: 'aimltech' }
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