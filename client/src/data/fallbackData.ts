import { ServiceItem, ProductItem, InternshipItem, TeamMemberItem, CareerItem, SiteSettings } from '../types';

export const fallbackServices: ServiceItem[] = [
  {
    _id: 'srv-1',
    name: 'Custom Software Development',
    category: 'Software Development',
    iconName: 'Code',
    summary: 'Tailored web, mobile, and enterprise application engineering built with modern frameworks.',
    description: 'We architect, design, and engineer custom enterprise software solutions, SaaS applications, and scalable backend platforms using cutting-edge technologies. Process-oriented and ISO 9001:2015 compliant.',
    keyBenefits: ['Scalable Cloud Architecture', 'High Security & ISO Standards', 'Custom Workflows & APIs', 'Dedicated Maintenance Support'],
    process: ['Requirement Analysis', 'Architecture & Design', 'Agile Engineering', 'Quality Assurance', 'Deployment & Support'],
    displayOrder: 1
  },
  {
    _id: 'srv-2',
    name: 'Full Stack Web Applications',
    category: 'Software Development',
    iconName: 'Globe',
    summary: 'High-performance React, Next.js, and Node.js web applications with modern UI/UX.',
    description: 'Build fast, responsive, SEO-optimized, and secure web applications tailored to your business goals. Designed with rich user interfaces and robust microservices backend.',
    keyBenefits: ['Lightning Fast Performance', 'Responsive Across All Devices', 'SEO & Analytics Integration', 'Secure Payment & Data Pipelines'],
    process: ['UI/UX Wireframing', 'Frontend & Backend Dev', 'Performance Optimization', 'Security Audits', 'Go-Live'],
    displayOrder: 2
  },
  {
    _id: 'srv-3',
    name: 'Digital Advertising & Brand Strategy',
    category: 'Digital Advertising',
    iconName: 'Megaphone',
    summary: 'Data-driven marketing campaigns, social media growth, and brand visibility management.',
    description: 'Elevate your brand with targeted digital advertising campaigns, SEO optimization, social media marketing, content creation, and lead generation strategies.',
    keyBenefits: ['Targeted Audience Reach', 'Measurable ROI & Analytics', 'Multi-channel Campaign Management', 'Brand Identity Enhancement'],
    process: ['Market Research', 'Campaign Strategy', 'Creative Design & Copy', 'Multi-Platform Ad Launch', 'Analytics & Optimization'],
    displayOrder: 3
  },
  {
    _id: 'srv-4',
    name: 'Software Testing & Quality Assurance',
    category: 'Software Development',
    iconName: 'CheckCircle',
    summary: 'Comprehensive manual and automated software testing for defect-free applications.',
    description: 'Ensure software reliability, functional accuracy, performance, and security through rigorous manual and automated test suites.',
    keyBenefits: ['Zero Critical Bugs in Production', 'Automated Regression Suites', 'Cross-browser & Mobile Testing', 'ISO Compliant QA Reports'],
    process: ['Test Planning', 'Test Case Design', 'Automated & Manual Execution', 'Bug Tracking & Verification', 'Sign-Off Report'],
    displayOrder: 4
  },
  {
    _id: 'srv-5',
    name: 'Industry-Oriented IT Internships',
    category: 'IT Training & Internships',
    iconName: 'GraduationCap',
    summary: 'Practical live-project internships in Full Stack, QA Testing, Python, and Web Tech.',
    description: 'Empowering engineering and IT graduates with real-world project exposure, mentorship by senior developers, and ISO certified internship credentials.',
    keyBenefits: ['Hands-on Live Client Projects', 'Senior Developer Mentorship', 'ISO 9001:2015 Verified Certificate', 'Resume & Career Coaching'],
    process: ['Domain Selection', 'Core Technical Training', 'Live Project Execution', 'Code Reviews & Evaluation', 'Certification & Career Guidance'],
    displayOrder: 5
  },
  {
    _id: 'srv-6',
    name: 'Business Technology Solutions',
    category: 'Business Solutions',
    iconName: 'Briefcase',
    summary: 'Digital transformation, CRM/ERP integration, and cloud migration for businesses.',
    description: 'Streamline business operations, automate manual workflows, and implement integrated management tools to boost efficiency and growth.',
    keyBenefits: ['Automated Operations', 'Integrated Data Dashboards', 'Reduced Operational Costs', 'Seamless System Integration'],
    process: ['Business Process Mapping', 'Solution Architecture', 'Tool Selection & Customization', 'Staff Training', 'Continuous Optimization'],
    displayOrder: 6
  }
];

export const fallbackProducts: ProductItem[] = [
  {
    _id: 'prod-1',
    name: 'EduSmart Academy ERP',
    category: 'Education Technology',
    description: 'Complete cloud-based institute management software for student admissions, attendance, fees, batch scheduling, certificate generation, and performance tracking.',
    features: ['Student Lifecycle Management', 'Automated Fee Receipts & Reminders', 'Batch & Attendance Tracker', 'ISO Compliant Certificate Generator', 'WhatsApp & SMS Notifications'],
    benefits: ['Saves 80% Administrative Time', 'Zero Errors in Fee Auditing', 'Enhanced Parent-Student Communication'],
    price: 'Contact for Custom Quote',
    displayOrder: 1
  },
  {
    _id: 'prod-2',
    name: 'KrupaSindhu CRM Suite',
    category: 'Business Automation',
    description: 'Powerful customer relationship management platform tailored for software, advertising, and training agencies to manage leads, clients, invoices, and campaigns.',
    features: ['Multi-channel Lead Capture', 'Automated Follow-up Workflows', 'Quotation & Invoice Builder', 'Client Project Portal', 'Real-time Analytics Dashboard'],
    benefits: ['Higher Lead Conversion Rates', 'Centralized Team Communication', 'Automated Billing & Collections'],
    price: 'Contact for Enterprise Plan',
    displayOrder: 2
  },
  {
    _id: 'prod-3',
    name: 'AdVibe Digital Ad Manager',
    category: 'Advertising & Marketing',
    description: 'Integrated digital advertising management software to track social media ad spend, lead quality, conversion metrics, and multi-campaign performance.',
    features: ['Multi-platform Ad Tracker', 'ROI & Cost-per-Lead Calculator', 'Automated Campaign Reporting', 'Creative Asset Vault'],
    benefits: ['Maximize Marketing ROI', 'Data-driven Budget Allocation', 'Instant Client Reports'],
    price: 'Contact for Custom Quote',
    displayOrder: 3
  }
];

export const fallbackInternships: InternshipItem[] = [
  {
    _id: 'int-1',
    courseName: 'Web Development',
    slug: 'web-development',
    shortSummary: 'Build modern, responsive websites and web applications using industry-standard frontend and backend technologies.',
    description: 'Gain hands-on experience in full-cycle web development — from structuring pages with HTML & CSS, adding interactivity with JavaScript, building dynamic UIs with React.js, and powering backends with Node.js. Work on live client projects under senior developer mentorship.',
    syllabus: [
      { moduleTitle: 'Frontend Foundations', topics: ['HTML5 & Semantic Markup', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'DOM Manipulation'] },
      { moduleTitle: 'React.js & UI Development', topics: ['React Components & Hooks', 'State Management', 'Routing', 'Responsive Design'] },
      { moduleTitle: 'Backend with Node.js', topics: ['Node.js Core', 'Express.js Framework', 'REST API Design', 'MongoDB Integration', 'Deployment Basics'] }
    ],
    duration: '2 Months / 3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma or Any Tech Aspirant',
    mode: 'Hybrid',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    certificate: 'ISO 9001:2015 Verified Web Development Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 1
  },
  {
    _id: 'int-2',
    courseName: 'Python Programming',
    slug: 'python-programming',
    shortSummary: 'Learn Python from fundamentals to real-world applications including automation, scripting, and data handling.',
    description: 'Master Python programming with a focus on practical applications. Covers Python syntax, OOP concepts, file handling, automation scripts, and introductory data analysis using Python libraries. Suitable for beginners and intermediate learners.',
    syllabus: [
      { moduleTitle: 'Python Fundamentals', topics: ['Data Types & Variables', 'Control Flow', 'Functions', 'Modules & Packages'] },
      { moduleTitle: 'Object-Oriented Python', topics: ['Classes & Objects', 'Inheritance', 'Exception Handling', 'File I/O'] },
      { moduleTitle: 'Python in Practice', topics: ['Automation Scripts', 'Working with APIs', 'Introduction to Pandas', 'Mini Project'] }
    ],
    duration: '2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma or Any Aspiring Developer',
    mode: 'Hybrid',
    skills: ['Python', 'OOP', 'Automation', 'Pandas', 'Scripting'],
    certificate: 'ISO 9001:2015 Verified Python Programming Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 2
  },
  {
    _id: 'int-3',
    courseName: 'Java Full Stack Development',
    slug: 'java-full-stack-development',
    shortSummary: 'Master Java programming and full-stack development with Spring Boot backend and modern frontend integration.',
    description: 'Comprehensive Java full-stack internship covering Core Java, OOP concepts, Spring Boot REST APIs, Hibernate ORM, and integration with frontend technologies. Work on real enterprise-level projects.',
    syllabus: [
      { moduleTitle: 'Core Java', topics: ['Java OOP', 'Collections Framework', 'Exception Handling', 'Multithreading'] },
      { moduleTitle: 'Spring Boot & APIs', topics: ['Spring Boot Setup', 'REST API Development', 'Hibernate & JPA', 'MySQL Integration'] },
      { moduleTitle: 'Full Stack Integration', topics: ['Frontend Basics', 'Connecting React with Java APIs', 'Project Architecture', 'Deployment'] }
    ],
    duration: '3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'MySQL', 'OOP'],
    certificate: 'ISO 9001:2015 Verified Java Full Stack Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 3
  },
  {
    _id: 'int-4',
    courseName: '.NET Full Stack Development',
    slug: 'dotnet-full-stack-development',
    shortSummary: 'Build enterprise-grade applications using the .NET ecosystem with C#, ASP.NET Core, and modern UI frameworks.',
    description: 'Learn to build robust, scalable applications using C# and ASP.NET Core. Covers backend API development, database management with Entity Framework, and frontend integration. Ideal for students targeting Microsoft technology stacks.',
    syllabus: [
      { moduleTitle: 'C# & .NET Core', topics: ['C# Fundamentals', 'OOP in C#', '.NET Core Architecture', 'LINQ'] },
      { moduleTitle: 'ASP.NET Core APIs', topics: ['REST API with ASP.NET Core', 'Entity Framework Core', 'SQL Server Integration', 'Authentication & Authorization'] },
      { moduleTitle: 'Full Stack Project', topics: ['Frontend with Razor/React', 'Full Stack Integration', 'Deployment on Azure/IIS', 'Code Review'] }
    ],
    duration: '3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', '.NET'],
    certificate: 'ISO 9001:2015 Verified .NET Full Stack Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 4
  },
  {
    _id: 'int-5',
    courseName: 'Android App Development',
    slug: 'android-app-development',
    shortSummary: 'Design and build native Android mobile applications using Kotlin and Android Studio.',
    description: 'Learn Android app development from UI design to backend integration. Covers Kotlin programming, Android Studio, layouts, navigation, API consumption, and publishing to the Google Play Store. Build real apps during the internship.',
    syllabus: [
      { moduleTitle: 'Android Fundamentals', topics: ['Kotlin Basics', 'Android Studio Setup', 'Activities & Layouts', 'UI Components'] },
      { moduleTitle: 'App Development', topics: ['Navigation & Fragments', 'RecyclerView', 'API Integration with Retrofit', 'Local Database with Room'] },
      { moduleTitle: 'Live App Project', topics: ['App Architecture', 'Testing & Debugging', 'Play Store Publishing Basics', 'Final Project'] }
    ],
    duration: '2 Months / 3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['Kotlin', 'Android Studio', 'Android SDK', 'REST APIs', 'SQLite/Room'],
    certificate: 'ISO 9001:2015 Verified Android App Development Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 5
  },
  {
    _id: 'int-6',
    courseName: 'Software Testing',
    slug: 'software-testing',
    shortSummary: 'Master Manual and Automation testing techniques to ensure software quality across projects.',
    description: 'Practical QA internship covering the complete software testing lifecycle — from manual test case design and bug tracking to Selenium automation, API testing, and regression testing. Work on live project quality assurance tasks.',
    syllabus: [
      { moduleTitle: 'Manual Testing', topics: ['SDLC & STLC', 'Test Case Writing', 'Bug Life Cycle', 'Jira Defect Management', 'Regression & Smoke Testing'] },
      { moduleTitle: 'API & Database Testing', topics: ['Postman API Testing', 'JSON/XML Validation', 'SQL Queries for QA', 'Performance Basics'] },
      { moduleTitle: 'Automation Testing', topics: ['Selenium WebDriver with Java', 'TestNG Framework', 'Page Object Model (POM)', 'CI/CD Basics'] }
    ],
    duration: '3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['Manual Testing', 'Selenium WebDriver', 'Java', 'Postman', 'Jira', 'SQL', 'TestNG'],
    certificate: 'ISO 9001:2015 Verified Software Testing Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 6
  },
  {
    _id: 'int-7',
    courseName: 'Database Management',
    slug: 'database-management',
    shortSummary: 'Learn relational and NoSQL database design, querying, and management using MySQL and MongoDB.',
    description: 'Gain practical experience in database design, SQL query writing, stored procedures, indexing, and NoSQL document management with MongoDB. Covers both backend integration and standalone database administration skills.',
    syllabus: [
      { moduleTitle: 'MySQL Fundamentals', topics: ['Database Design & ERD', 'SQL Queries (SELECT, JOIN, GROUP BY)', 'Stored Procedures', 'Indexing & Optimization'] },
      { moduleTitle: 'MongoDB & NoSQL', topics: ['Document-Oriented Design', 'CRUD with MongoDB', 'Aggregation Pipeline', 'Mongoose ORM'] },
      { moduleTitle: 'Database in Projects', topics: ['Integrating DB with Backend APIs', 'Database Security Basics', 'Backup & Restore', 'Project Work'] }
    ],
    duration: '2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['MySQL', 'MongoDB', 'SQL', 'NoSQL', 'Database Design', 'Mongoose'],
    certificate: 'ISO 9001:2015 Verified Database Management Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 7
  },
  {
    _id: 'int-8',
    courseName: 'Cloud Computing Basics',
    slug: 'cloud-computing-basics',
    shortSummary: 'Understand cloud services and infrastructure using AWS and Microsoft Azure platforms.',
    description: 'Introduction to cloud computing concepts including IaaS, PaaS, and SaaS. Hands-on experience deploying applications and managing infrastructure on AWS and Azure. Ideal for students targeting cloud-based roles.',
    syllabus: [
      { moduleTitle: 'Cloud Fundamentals', topics: ['Cloud Models (IaaS/PaaS/SaaS)', 'Cloud Architecture Basics', 'Virtualization Concepts'] },
      { moduleTitle: 'AWS Essentials', topics: ['AWS EC2, S3, RDS', 'IAM & Security Groups', 'Lambda Basics', 'Deploying a Web App on AWS'] },
      { moduleTitle: 'Microsoft Azure Basics', topics: ['Azure Portal Overview', 'Virtual Machines on Azure', 'Azure Storage', 'Azure App Service Deployment'] }
    ],
    duration: '2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['AWS', 'Microsoft Azure', 'Cloud Architecture', 'EC2', 'S3', 'Azure VMs'],
    certificate: 'ISO 9001:2015 Verified Cloud Computing Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 8
  },
  {
    _id: 'int-9',
    courseName: 'Cybersecurity Fundamentals',
    slug: 'cybersecurity-fundamentals',
    shortSummary: 'Learn the foundations of cybersecurity and ethical hacking to protect digital systems.',
    description: 'Introductory cybersecurity internship covering network security, common attack vectors, vulnerability assessment, and the basics of ethical hacking. Learn to think like an attacker to better defend systems.',
    syllabus: [
      { moduleTitle: 'Cybersecurity Basics', topics: ['CIA Triad', 'Types of Cyber Threats', 'Network Security Fundamentals', 'Firewalls & IDS/IPS'] },
      { moduleTitle: 'Ethical Hacking Basics', topics: ['Penetration Testing Concepts', 'Kali Linux Introduction', 'Reconnaissance Techniques', 'Vulnerability Scanning'] },
      { moduleTitle: 'Security Best Practices', topics: ['OWASP Top 10', 'Password Security', 'Secure Coding Practices', 'Incident Response Basics'] }
    ],
    duration: '2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma Graduates',
    mode: 'Hybrid',
    skills: ['Network Security', 'Ethical Hacking', 'Kali Linux', 'Vulnerability Assessment', 'OWASP'],
    certificate: 'ISO 9001:2015 Verified Cybersecurity Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 9
  },
  {
    _id: 'int-10',
    courseName: 'Artificial Intelligence (AI) Fundamentals',
    slug: 'artificial-intelligence-fundamentals',
    shortSummary: 'Understand the core concepts, techniques, and real-world applications of Artificial Intelligence.',
    description: 'Introductory AI internship covering the foundations of artificial intelligence — search algorithms, knowledge representation, natural language processing basics, and overview of AI in industry applications.',
    syllabus: [
      { moduleTitle: 'Introduction to AI', topics: ['History & Evolution of AI', 'Types of AI (Narrow, General)', 'AI Problem Solving Approaches', 'Search Algorithms'] },
      { moduleTitle: 'AI Concepts', topics: ['Knowledge Representation', 'Expert Systems', 'NLP Fundamentals', 'Computer Vision Basics'] },
      { moduleTitle: 'AI in Practice', topics: ['AI Tools Overview', 'AI Use Cases in Industry', 'Ethical AI', 'Hands-on AI Mini Project'] }
    ],
    duration: '2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT, Diploma or Any Aspiring Learner',
    mode: 'Hybrid',
    skills: ['AI Fundamentals', 'NLP Basics', 'Python', 'Search Algorithms', 'AI Tools'],
    certificate: 'ISO 9001:2015 Verified AI Fundamentals Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 10
  },
  {
    _id: 'int-11',
    courseName: 'Machine Learning (ML) Basics',
    slug: 'machine-learning-basics',
    shortSummary: 'Learn the fundamentals of Machine Learning algorithms and build predictive models with Python.',
    description: 'Hands-on Machine Learning internship covering supervised and unsupervised learning, model training, evaluation, and deployment basics. Work with real datasets using Python libraries like scikit-learn, Pandas, and NumPy.',
    syllabus: [
      { moduleTitle: 'ML Foundations', topics: ['Types of ML (Supervised/Unsupervised)', 'Data Preprocessing', 'Train-Test Split', 'Feature Engineering'] },
      { moduleTitle: 'ML Algorithms', topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forest', 'KNN & SVM', 'Clustering Algorithms'] },
      { moduleTitle: 'Model Evaluation & Project', topics: ['Accuracy Metrics', 'Cross-Validation', 'Model Deployment Basics', 'ML Project Work'] }
    ],
    duration: '2 Months / 3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'BE/BTech, BCA, MCA, BSc CS/IT with basic Python knowledge',
    mode: 'Hybrid',
    skills: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'ML Algorithms', 'Data Analysis'],
    certificate: 'ISO 9001:2015 Verified Machine Learning Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 11
  },
  {
    _id: 'int-12',
    courseName: 'Generative AI Tools & Prompt Engineering',
    slug: 'generative-ai-prompt-engineering',
    shortSummary: 'Explore Generative AI tools and master the art of Prompt Engineering for productivity and innovation.',
    description: 'Practical training on Generative AI tools including ChatGPT, Google Gemini, Midjourney, and others. Learn how to write effective prompts for text, code, image generation, and automation — boosting professional productivity.',
    syllabus: [
      { moduleTitle: 'Generative AI Overview', topics: ['What is Generative AI?', 'Large Language Models (LLMs)', 'Text, Image & Code Generation', 'AI Tools Landscape'] },
      { moduleTitle: 'Prompt Engineering', topics: ['Prompt Design Principles', 'Zero-shot & Few-shot Prompting', 'Chain-of-Thought Prompting', 'System Prompts & Context'] },
      { moduleTitle: 'Applied GenAI', topics: ['AI in Content Creation', 'AI-powered Coding Assistants', 'AI for Business Workflows', 'Ethics & Responsible AI Use'] }
    ],
    duration: '1 Month / 2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'Any Graduate, Student or Working Professional',
    mode: 'Hybrid',
    skills: ['ChatGPT', 'Google Gemini', 'Prompt Engineering', 'Generative AI', 'AI Tools'],
    certificate: 'ISO 9001:2015 Verified Generative AI & Prompt Engineering Certificate',
    enrollmentEnabled: true,
    displayOrder: 12
  },
  {
    _id: 'int-13',
    courseName: 'Digital Marketing with AI Tools',
    slug: 'digital-marketing-ai-tools',
    shortSummary: 'Master digital marketing strategies enhanced with AI-powered tools for SEO, content, and paid campaigns.',
    description: 'Comprehensive digital marketing internship covering SEO, Meta Ads, Google Ads, social media marketing, and content strategy — enhanced with modern AI tools for research, content creation, and performance optimization.',
    syllabus: [
      { moduleTitle: 'SEO & Content Strategy', topics: ['On-page & Off-page SEO', 'Keyword Research', 'Technical SEO', 'AI Tools for Content Writing'] },
      { moduleTitle: 'Paid Campaigns', topics: ['Google Search Ads', 'Meta (Facebook/Instagram) Ads', 'Targeting & Retargeting', 'Analytics & Reporting'] },
      { moduleTitle: 'AI in Digital Marketing', topics: ['AI Tools for Social Media', 'Canva & AI Design Tools', 'Chatbot Marketing', 'Campaign Optimization with AI'] }
    ],
    duration: '2 Months / 3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'Any Graduate, Student, or Marketing Professional',
    mode: 'Hybrid',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Canva', 'AI Marketing Tools'],
    certificate: 'ISO 9001:2015 Verified Digital Marketing Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 13
  },
  {
    _id: 'int-14',
    courseName: 'Git & GitHub Version Control',
    slug: 'git-github-version-control',
    shortSummary: 'Learn Git and GitHub for professional version control, collaboration, and open-source contribution.',
    description: 'Essential version control training for any developer. Covers Git workflow, branching strategies, merging, conflict resolution, GitHub collaboration, pull requests, and CI/CD basics — skills required in every software team.',
    syllabus: [
      { moduleTitle: 'Git Fundamentals', topics: ['Git Init & Configuration', 'Staging & Commits', 'Branching & Merging', 'Resolving Merge Conflicts'] },
      { moduleTitle: 'GitHub Collaboration', topics: ['GitHub Repositories', 'Pull Requests & Code Review', 'Forking & Contributing', 'GitHub Actions Basics'] },
      { moduleTitle: 'Professional Workflows', topics: ['Git Flow Strategy', 'Team Collaboration Best Practices', 'Tagging & Releases', 'Version Control in Projects'] }
    ],
    duration: '1 Month',
    fees: 'Contact for Batch Fees',
    eligibility: 'Any IT Student or Developer Learning Version Control',
    mode: 'Hybrid',
    skills: ['Git', 'GitHub', 'Version Control', 'Branching', 'Pull Requests', 'CI/CD Basics'],
    certificate: 'ISO 9001:2015 Verified Git & GitHub Version Control Certificate',
    enrollmentEnabled: true,
    displayOrder: 14
  },
  {
    _id: 'int-15',
    courseName: 'REST APIs & Backend Integration',
    slug: 'rest-apis-backend-integration',
    shortSummary: 'Learn to design, build, and consume REST APIs for robust backend and full-stack application development.',
    description: 'Practical internship focused on REST API design principles, building APIs with Node.js/Express, consuming APIs from frontend applications, API testing with Postman, and authentication techniques like JWT.',
    syllabus: [
      { moduleTitle: 'REST API Fundamentals', topics: ['HTTP Methods & Status Codes', 'RESTful Design Principles', 'JSON Data Format', 'Postman API Testing'] },
      { moduleTitle: 'Building APIs', topics: ['Express.js API Development', 'Route Handlers & Middleware', 'Database Integration with APIs', 'JWT Authentication'] },
      { moduleTitle: 'API Integration', topics: ['Consuming APIs from Frontend', 'Error Handling & Validation', 'API Documentation with Swagger', 'Security Best Practices'] }
    ],
    duration: '1 Month / 2 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'IT Students with basic programming knowledge',
    mode: 'Hybrid',
    skills: ['REST APIs', 'Node.js', 'Express.js', 'Postman', 'JWT', 'JSON', 'API Design'],
    certificate: 'ISO 9001:2015 Verified REST APIs & Backend Integration Certificate',
    enrollmentEnabled: true,
    displayOrder: 15
  },
  {
    _id: 'int-16',
    courseName: 'Live Industry Projects & Case Studies',
    slug: 'live-industry-projects-case-studies',
    shortSummary: 'Work directly on real-world client projects and industry case studies for authentic professional experience.',
    description: 'Immersive internship where students contribute to actual live client projects under senior developer supervision. Gain experience in requirement analysis, Agile workflows, code reviews, deployment, and client communication.',
    syllabus: [
      { moduleTitle: 'Project Foundations', topics: ['Requirement Analysis', 'Agile & Scrum Methodology', 'Git-based Team Workflow', 'Project Planning'] },
      { moduleTitle: 'Live Project Execution', topics: ['Task Assignment & Sprint Planning', 'Code Development & Review', 'Testing & QA on Real Projects', 'Client Feedback Cycle'] },
      { moduleTitle: 'Case Studies', topics: ['Industry Case Study Analysis', 'Problem-Solving Sessions', 'Presentation of Solutions', 'Portfolio Building'] }
    ],
    duration: '2 Months / 3 Months',
    fees: 'Contact for Batch Fees',
    eligibility: 'Students with prior technical domain knowledge (any technology)',
    mode: 'Hybrid',
    skills: ['Project Management', 'Agile', 'Git', 'Real Client Projects', 'Code Review', 'Team Collaboration'],
    certificate: 'ISO 9001:2015 Verified Live Industry Project Internship Certificate',
    enrollmentEnabled: true,
    displayOrder: 16
  },
  {
    _id: 'int-17',
    courseName: 'Resume Building & LinkedIn Profile Optimization',
    slug: 'resume-building-linkedin-optimization',
    shortSummary: 'Craft an impactful resume and LinkedIn profile that gets noticed by recruiters in the IT industry.',
    description: 'Career-focused program helping students and freshers build ATS-friendly resumes, optimize their LinkedIn presence, prepare for technical interviews, and position themselves for IT job opportunities.',
    syllabus: [
      { moduleTitle: 'Resume Crafting', topics: ['Resume Structure & Formatting', 'ATS-friendly Resume Tips', 'Writing Strong Project Descriptions', 'Highlighting Technical Skills'] },
      { moduleTitle: 'LinkedIn Optimization', topics: ['Profile Setup & About Section', 'Skills & Endorsements', 'LinkedIn Networking Strategies', 'Applying for Jobs on LinkedIn'] },
      { moduleTitle: 'Career Readiness', topics: ['Interview Preparation Tips', 'Technical Interview Basics', 'Soft Skills for IT Roles', 'Portfolio & GitHub Profile'] }
    ],
    duration: '2 Weeks / 1 Month',
    fees: 'Contact for Batch Fees',
    eligibility: 'Any Student, Graduate, or IT Professional Seeking Career Guidance',
    mode: 'Hybrid',
    skills: ['Resume Writing', 'LinkedIn', 'ATS Optimization', 'Job Search Strategy', 'Interview Preparation'],
    certificate: 'ISO 9001:2015 Verified Career Development Certificate',
    enrollmentEnabled: true,
    displayOrder: 17
  }
];

export const fallbackTeam: TeamMemberItem[] = [
  {
    _id: 'tm-1',
    fullName: 'Pratiksha Gawande',
    designation: 'AI & ML Trainer',
    department: 'Artificial Intelligence & ML',
    photoUrl: '/assets/team_pratiksha.jpg',
    bio: 'Specialist in Artificial Intelligence, Machine Learning algorithms, neural networks, and Python data science mentorship with 05+ years of practical coaching experience.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Science', 'Deep Learning'],
    experience: '05+ Year Experience',
    displayOrder: 1
  },
  {
    _id: 'tm-2',
    fullName: 'Pranita Sontakke',
    designation: 'Web Developer & Trainer',
    department: 'Software Engineering & Web Dev',
    photoUrl: '/assets/team_pranita.jpg',
    bio: 'Senior full-stack web developer and lead instructor with 10+ years of enterprise software engineering, React, Node.js, and web application architecture experience.',
    skills: ['Web Development', 'React.js', 'Node.js', 'JavaScript', 'HTML5/CSS3', 'Mentorship'],
    experience: '10+ Year Experience',
    displayOrder: 2
  },
  {
    _id: 'tm-3',
    fullName: 'Gayatri Londhe',
    designation: 'Trainer (Java)',
    department: 'Java Enterprise Technologies',
    photoUrl: '/assets/team_gayatri.jpg',
    bio: 'Experienced Java technology specialist focusing on Core Java, Advanced Java, Spring Boot, Hibernate, and Object-Oriented Software Design.',
    skills: ['Java', 'Spring Boot', 'OOPs', 'Hibernate', 'RESTful Services', 'SQL'],
    experience: '05+ Year Experience',
    displayOrder: 3
  },
  {
    _id: 'tm-4',
    fullName: 'Sonali Jadhav',
    designation: 'Digital Trainer',
    department: 'Digital Advertising & Marketing',
    photoUrl: '/assets/team_sonali.jpg',
    bio: 'Digital marketing and advertising trainer leading SEO optimization, performance marketing, Google & Meta Ads, content strategy, and brand development.',
    skills: ['Digital Marketing', 'SEO', 'Meta Ads', 'Google Ads', 'Social Media', 'Analytics'],
    experience: '05+ Year Experience',
    displayOrder: 4
  },
  {
    _id: 'tm-5',
    fullName: 'Shrushti Shinde',
    designation: 'Student Co-Ordinator',
    department: 'Student Academic Operations',
    photoUrl: '/assets/team_shrushti.jpg',
    bio: 'Managing student admissions, internship batch scheduling, academic counseling, ISO compliance tracking, and candidate placement support.',
    skills: ['Academic Counseling', 'Batch Management', 'Student Operations', 'Placement Guidance'],
    experience: '03+ Year Experience',
    displayOrder: 5
  },
  {
    _id: 'tm-6',
    fullName: 'Shruti Shingare',
    designation: 'HR',
    department: 'Human Resources',
    photoUrl: '/assets/team_shruti_shingare.jpg',
    bio: 'Dedicated HR professional managing employee relations, recruitment, onboarding, and organizational development at Krupa Sindhu Advertising & Software Pvt. Ltd.',
    skills: ['Recruitment', 'Employee Relations', 'Onboarding', 'HR Operations', 'Team Coordination'],
    experience: '02+ Year Experience',
    displayOrder: 6
  },
  {
    _id: 'tm-7',
    fullName: 'Kedar Galande',
    designation: 'Power BI Trainer',
    department: 'Data Analytics & Power BI',
    photoUrl: '/assets/team_kedar.jpg',
    bio: 'Data analytics expert specializing in Microsoft Power BI dashboard development, SQL queries, business intelligence, and data transformation.',
    skills: ['Power BI', 'SQL', 'Data Analytics', 'Business Intelligence', 'DAX', 'Data Visualization'],
    experience: '05+ Year Experience',
    displayOrder: 7
  },
  {
    _id: 'tm-8',
    fullName: 'Maisha Salunke',
    designation: 'Trainer (Python)',
    department: 'Python & Data Science',
    photoUrl: '/assets/team_maisha.jpg',
    bio: 'Python programming specialist training students in core Python syntax, Pandas, NumPy, backend web development with Django/Flask, and automation.',
    skills: ['Python', 'Pandas', 'NumPy', 'Django', 'Data Analysis', 'Automation'],
    experience: '07+ Year Experience',
    displayOrder: 8
  }
];

export const fallbackCareers: CareerItem[] = [
  {
    _id: 'car-1',
    title: 'Senior Full Stack Developer (Node.js & React)',
    department: 'Software Engineering',
    location: 'Nanded / Hybrid',
    employmentType: 'Full-time',
    experienceRequired: '2-4 Years',
    description: 'Looking for a skilled Senior Full Stack Engineer to lead web product development, mentor interns, design microservices, and deliver scalable enterprise software solutions.',
    requirements: [
      'Strong proficiency in React, Node.js, Express.js, and MongoDB/PostgreSQL',
      'Experience in RESTful API design, state management, and Git workflows',
      'Solid understanding of frontend performance and cloud deployment',
      'Excellent leadership, communication, and code reviewing capabilities'
    ],
    responsibilities: [
      'Architect and build full-stack web products',
      'Review codebase and ensure ISO quality standards',
      'Guide software development interns and junior engineers'
    ],
    skills: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'System Design']
  },
  {
    _id: 'car-2',
    title: 'Software Testing & Quality Assurance Trainer / Lead',
    department: 'Quality Assurance & Training',
    location: 'Nanded / On-site',
    employmentType: 'Full-time',
    experienceRequired: '1-3 Years',
    description: 'Join us as a QA Lead and Trainer to conduct manual and automated testing on client products and mentor internship students.',
    requirements: [
      'Strong knowledge of SDLC, STLC, test plan design, and defect management',
      'Experience with Selenium WebDriver, Java/Python, Postman, and SQL',
      'Passion for teaching, practical mentoring, and team collaboration'
    ],
    responsibilities: [
      'Perform functional and API testing on internal & client software',
      'Train and guide QA interns through practical testing projects'
    ],
    skills: ['Manual Testing', 'Selenium', 'Java', 'Postman', 'SQL', 'Jira']
  },
  {
    _id: 'car-3',
    title: 'Digital Advertising & Marketing Specialist',
    department: 'Digital Marketing',
    location: 'Nanded / Remote',
    employmentType: 'Full-time',
    experienceRequired: '1-2 Years',
    description: 'Manage online advertising campaigns, lead generation strategies, SEO optimization, and brand marketing across social channels.',
    requirements: [
      'Proven experience running Meta Ads, Google Ads, and managing brand accounts',
      'Strong grasp of SEO techniques, keyword research, and Google Analytics',
      'Creative mindset for content and graphics'
    ],
    responsibilities: [
      'Develop multi-channel ad campaigns',
      'Optimize landing pages and manage SEO audits'
    ],
    skills: ['SEO', 'Meta Ads', 'Google Ads', 'Content Strategy', 'Social Media']
  }
];

export const fallbackSettings: SiteSettings = {
  companyName: 'Krupa Sindhu Advertising & Software Pvt. Ltd.',
  establishedYear: 2018,
  directorName: 'Vivek Dange',
  certification: 'ISO 9001:2015 Certified Organization',
  email: 'admin@krupasindhu.org.in',
  phone: '+91 7350570999',
  whatsapp: '+91 7350570999',
  heroHeadline: 'Building Skills. Delivering Technology. Creating Opportunities.',
  heroSubheadline: 'Process-driven software engineering, performance digital advertising, and ISO certified IT training in Maharashtra.'
};
