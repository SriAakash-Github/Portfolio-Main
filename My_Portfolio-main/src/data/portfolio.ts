import { Project, Skill, Article, SocialLink } from '../types';

export const experiences = [
  {
    id: 'exp-1',
    title: 'AI/Full-Stack Developer',
    company: 'Vibes Technology',
    period: '07/2025 - Present',
    location: 'Qatar',
    description: 'Leading the development of an omnichannel AI-powered customer engagement platform ("Wiral") and building scalable microservices with multi-channel communication integration.',
    technologies: ['Docker', 'React.js', 'PostgreSQL', 'DevOps', 'API Integrations', 'Web Hosting-aaPanel'],
    achievements: [
      'Building scalable microservices on Docker, reducing server response times by 40% and cutting deployment time.',
      'Rebranded Logo and UI/UX by creating a modern design system aligned with enterprise-grade usability. Improved navigation flow, color schemes',
      'Integrating multi-channel communication systems including live chat, email, WhatsApp, and social APIs',
      'Implementing AI-powered features to enhance customer engagement and support automation'
    ]
  },
  {
    id: 'exp-2',
    title: 'AI/ML Full Stack Intern',
    company: 'Mphasis',
    period: '05/2025 - 08/2025',
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
    title: 'web development Intern',
    company: 'Interpe (1month Bootcamp)',
    period: '8/2024 - 09/2024',
    location: 'Remote',
    description: 'Developed responsive web applications ,learned the basics of web development, built clone applications of netlix, uber. Implemented Interactive UI/UX features',
    technologies: ['HTML/CSS', 'JavaScript', 'React.js'],
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
    description: 'A crop disease prediction system built with Teachable Machine, integrated into a Flutter mobile app. It identifies diseases from leaf images for quick, on-the-go diagnosis.',
    technologies: ['Flutter', 'Teachable Machine', 'Edge Impluse', 'CNN','firebase'],
    githubUrl: 'https://github.com/SriAakash-Github/Crop-Disease-Detection-App-main',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-3',
    title: 'Cyber Security Threat Detection',
    description: 'High-performance distributed caching system with consistent hashing and fault tolerance.',
    technologies: ['docker', 'react', 'Hugging Face Transformers', 'flask'],
    githubUrl: 'https://github.com/SriAakash-Github/Cyber-Security-Threat-Detection-New.git',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-4',
    title: 'FlexIT-Smart Fitness Band',
    description: 'A customizable fitness tracker capable of recognizing a wide range of exercises, built using the Arduino Nano 33 BLE Sense and powered by Edge Impulse for machine learning at the edge..',
    technologies: ['Edge Impulse', 'Arduino Nano 33 BLE Sense', 'TensorFlow', 'Firebase'],
    githubUrl: 'https://github.com/SriAakash-Github/Flexit-ML-Model',
    // liveUrl: 'https://block-explorer.demo.com',
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
  { name: 'XGBoost', level: 75, category: 'aiml' },
  { name: 'Hugging Face', level: 78, category: 'aimltech' },
  { name: 'Streamlit', level: 82, category: 'aimltech' },
  { name: 'NLTK', level: 90, category: 'aimltech' }
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