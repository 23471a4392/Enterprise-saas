import { Candidate, Company, Job, Application, Interview, Offer, AnalyticsMetric } from '../types';

export const mockCompanies: Company[] = [
  {
    id: 'comp-1',
    name: 'Nexus AI Labs',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop&crop=faces',
    industry: 'Artificial Intelligence & Machine Learning',
    companySize: '51-200',
    location: 'San Francisco, CA (Hybrid)',
    description: 'Nexus AI Labs builds next-generation generative AI infrastructure and autonomous agent systems powering Fortune 500 enterprises.',
    website: 'https://nexus-ai-example.com',
    cultureValues: ['Innovation First', 'Autonomous Execution', 'Radical Transparency', 'Continuous Mastery'],
    rating: 4.9,
    openJobsCount: 8,
    benefits: ['$180k-$260k Base', '0.25%-0.5% Equity', 'Unlimited PTO', 'Full Health/Dental/Vision', '$3,000 Tech Stipend', '401(k) 6% Match'],
    teamMembers: [
      { id: 'tm-1', name: 'Elena Rostova', role: 'VP of Engineering', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces', email: 'elena@nexus-ai.com', department: 'Engineering' },
      { id: 'tm-2', name: 'Marcus Vance', role: 'Head of Talent', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', email: 'marcus@nexus-ai.com', department: 'Recruiting' },
      { id: 'tm-3', name: 'Sarah Chen', role: 'Lead Architect', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces', email: 'sarah@nexus-ai.com', department: 'Architecture' }
    ],
    subscriptionTier: 'Enterprise Talent Pool',
    foundedYear: 2021,
    totalFunding: '$48M Series B'
  },
  {
    id: 'comp-2',
    name: 'CloudScale Systems',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop&crop=faces',
    industry: 'Cloud Infrastructure & DevOps',
    companySize: '201-1000',
    location: 'Seattle, WA / Remote',
    description: 'Empowering enterprise software engineers to deploy distributed microservice mesh with zero zero-day vulnerabilities and 99.999% SLA availability.',
    website: 'https://cloudscale-example.com',
    cultureValues: ['Reliability at Scale', 'Developer Joy', 'Zero Friction', 'Data Driven'],
    rating: 4.7,
    openJobsCount: 12,
    benefits: ['100% Remote Option', 'Home Office Allowance', 'Flexible Hours', 'Annual Retreats', 'Wellness Fund'],
    teamMembers: [
      { id: 'tm-4', name: 'Devon Miller', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', email: 'devon@cloudscale.com', department: 'Executive' },
      { id: 'tm-5', name: 'Aisha Patel', role: 'Senior Recruiter', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces', email: 'aisha@cloudscale.com', department: 'Recruiting' }
    ],
    subscriptionTier: 'Pro Recruiting',
    foundedYear: 2018,
    totalFunding: '$120M Series C'
  },
  {
    id: 'comp-3',
    name: 'FinTech Pulse',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&h=150&fit=crop&crop=faces',
    industry: 'Financial Technology & Payments',
    companySize: '201-1000',
    location: 'New York, NY',
    description: 'Reimagining global cross-border payments, high-frequency trading APIs, and real-time liquidity routing for modern banking.',
    website: 'https://fintechpulse-example.com',
    cultureValues: ['Security First', 'Speed with Precision', 'Financial Inclusion'],
    rating: 4.6,
    openJobsCount: 5,
    benefits: ['Competitive Bonus Structure', 'Commuter Stipend', 'On-site Chef', 'Learning Allowance'],
    teamMembers: [
      { id: 'tm-6', name: 'David Kim', role: 'Managing Director', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces', email: 'david@fintechpulse.com', department: 'Leadership' }
    ],
    subscriptionTier: 'Enterprise Talent Pool',
    foundedYear: 2017,
    totalFunding: '$85M Series B'
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: 'cand-1',
    name: 'Alexandre Mercer',
    title: 'Principal Full-Stack & AI Engineer',
    email: 'alex.mercer@devpulse.io',
    phone: '+1 (555) 382-9102',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years scaling TypeScript, React 19, Node.js microservices, and LLM orchestration (LangChain, PyTorch). Built data pipelines handling 50M+ daily active events.',
    yearsOfExperience: 8,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['hybrid', 'remote'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.8, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python / PyTorch', category: 'AI/ML', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.8, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Docker / Kubernetes', category: 'Cloud/DevOps', rating: 8.2, yearsExperience: 4, lastUsedYear: 2025 }
    ],
    education: [
      {
        id: 'edu-1',
        institution: 'UC Berkeley',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Systems & AI',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-1', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-05' }
    ],
    workHistory: [
      {
        id: 'work-1',
        company: 'Vercel Ecosystem Labs',
        role: 'Senior Staff Engineer',
        location: 'San Francisco, CA',
        startDate: '2022-01',
        endDate: 'Present',
        description: 'Led core frontend performance squad, improving SSR hydration latency by 42%.',
        achievements: [
          'Architected serverless streaming pipelines for AI chat interfaces.',
          'Mentored 6 junior engineers and authored company-wide TypeScript style guidelines.'
        ],
        techStackUsed: ['React', 'TypeScript', 'Next.js', 'Node.js']
      },
      {
        id: 'work-2',
        company: 'Stripe Payments',
        role: 'Full Stack Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2018-06',
        endDate: '2021-12',
        description: 'Engineered dashboard interfaces and Webhooks API gateway.',
        achievements: [
          'Reduced checkout API p99 latency from 180ms to 45ms.',
          'Built multi-currency tax calculation UI component library.'
        ],
        techStackUsed: ['TypeScript', 'Ruby', 'PostgreSQL']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub Profile', url: 'https://github.com/example-alex' },
      { label: 'Technical Blog', url: 'https://alexmercer.dev' }
    ],
    resumeUrl: 'https://example.com/resumes/alex-mercer-2026.pdf',
    resumeText: `Alexandre Mercer - Principal Full-Stack & AI Engineer
San Francisco, CA | alex.mercer@devpulse.io | +1 (555) 382-9102

SUMMARY:
Passionate Software Architect with 8+ years experience developing high-scale web applications, cloud-native backend services, and generative AI integrations. Expertise in TypeScript, React, Node.js, Python, PostgreSQL, and distributed infrastructure.

SKILLS:
- Languages: TypeScript, JavaScript, Python, SQL, HTML5/CSS3
- Frontend: React 19, Next.js, Redux/Zustand, Tailwind CSS, WebSockets, Web Workers
- Backend & Cloud: Node.js, Python FastAPI, PostgreSQL, Redis, Docker, Kubernetes, AWS Lambda, GraphQL
- AI & ML: LLM Prompt Tuning, LangChain, RAG architectures, Vector Databases (Pinecone/Weaviate)

EXPERIENCE:
Vercel Ecosystem Labs — Senior Staff Engineer (2022 – Present)
- Designed streaming React server components handling 5M+ daily requests.
- Decreased bundle payload sizes by 35% through dynamic code splitting and tree shaking.

Stripe — Full Stack Engineer (2018 – 2021)
- Developed merchant analytics dashboards with real-time financial reporting charts.
- Collaborated with product design to build accessible ARIA-compliant component kits.

EDUCATION:
UC Berkeley — B.S. Computer Science (2014 – 2018)`
  },
  {
    id: 'cand-2',
    name: 'Priya Sharma',
    title: 'Lead DevOps & Cloud Platform Engineer',
    email: 'priya.sharma@cloudcraft.net',
    phone: '+1 (555) 829-1039',
    location: 'Austin, TX (Remote)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
    bio: 'AWS Certified Solutions Architect & Kubernetes Specialist with 7 years managing zero-downtime CI/CD pipelines, Terraform infra-as-code, and Prometheus/Grafana observability.',
    yearsOfExperience: 7,
    expectedSalary: 195000,
    isVerified: true,
    willingToRelocate: false,
    preferredWorkType: ['remote'],
    status: 'open_to_offers',
    skills: [
      { name: 'Kubernetes / Helm', category: 'Cloud/DevOps', rating: 9.7, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'AWS / GCP', category: 'Cloud/DevOps', rating: 9.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Terraform', category: 'Cloud/DevOps', rating: 9.3, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python / Go', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Prometheus & Grafana', category: 'Cloud/DevOps', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-2',
        institution: 'UT Austin',
        degree: 'M.S. in Electrical & Computer Engineering',
        fieldOfStudy: 'Cloud Infrastructure',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-2', title: 'CKA - Certified Kubernetes Administrator', issuer: 'CNCF', issueDate: '2022-09' }
    ],
    workHistory: [
      {
        id: 'work-3',
        company: 'Datadog Partner Network',
        role: 'Lead Cloud Infrastructure Engineer',
        location: 'Austin, TX',
        startDate: '2020-03',
        endDate: 'Present',
        description: 'Managed 400+ EKS clusters and automated incident response runbooks.',
        achievements: [
          'Achieved 99.999% SLA across multi-region AWS deployments.',
          'Cut annual cloud spending by $320,000 using automated spot instance scheduling.'
        ],
        techStackUsed: ['Kubernetes', 'AWS', 'Terraform', 'Prometheus']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub DevOps Kit', url: 'https://github.com/example-priya' }
    ],
    resumeUrl: 'https://example.com/resumes/priya-sharma.pdf',
    resumeText: `Priya Sharma - Lead DevOps & Cloud Platform Engineer
Austin, TX | priya.sharma@cloudcraft.net

SUMMARY:
7+ years experience in Cloud Platform Operations, Kubernetes administration, Site Reliability Engineering, and Infrastructure as Code. Specialist in AWS, Terraform, Docker, Go, and GitOps workflows.`
  },
  {
    id: 'cand-3',
    name: 'Jordan Vance',
    title: 'Senior UX Architect & Design Systems Lead',
    email: 'jordan.vance@designops.org',
    phone: '+1 (555) 948-2710',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    bio: 'Product Designer & Design Technologist bridging Figma components and React code. Focused on accessible, human-centric enterprise tools.',
    yearsOfExperience: 6,
    expectedSalary: 175000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['onsite', 'hybrid'],
    status: 'active',
    skills: [
      { name: 'Figma & Design Systems', category: 'Design', rating: 9.9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'UI/UX Research', category: 'Design', rating: 9.4, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'HTML/CSS & Tailwind', category: 'Frontend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Framer Motion', category: 'Frontend', rating: 8.6, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-3',
        institution: 'Rhode Island School of Design',
        degree: 'B.F.A. Graphic & Interactive Design',
        fieldOfStudy: 'User Experience',
        graduationYear: 2020
      }
    ],
    certifications: [],
    workHistory: [
      {
        id: 'work-4',
        company: 'Figma Cloud Plugins',
        role: 'Senior Product Designer',
        location: 'Seattle, WA',
        startDate: '2021-04',
        endDate: 'Present',
        description: 'Led design system adopted by 120+ internal engineers.',
        achievements: ['Published WCAG 2.1 AA compliant design tokens.'],
        techStackUsed: ['Figma', 'CSS', 'Tailwind']
      }
    ],
    portfolioUrls: [
      { label: 'Dribbble Portfolio', url: 'https://dribbble.com/example-jordan' }
    ],
    resumeUrl: 'https://example.com/resumes/jordan-vance.pdf',
    resumeText: `Jordan Vance - UX Architect & Design Systems Lead
Seattle, WA | jordan.vance@designops.org`
  }
];

export const mockJobs: Job[] = [
  {
    id: 'job-1',
    companyId: 'comp-1',
    companyName: 'Nexus AI Labs',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop&crop=faces',
    title: 'Senior Full Stack AI Application Engineer',
    department: 'Core Product Engineering',
    location: 'San Francisco, CA (Hybrid)',
    workType: 'hybrid',
    employmentType: 'full-time',
    experienceLevel: 'Senior',
    salaryMin: 180000,
    salaryMax: 230000,
    currency: 'USD',
    description: 'We are seeking an extraordinary Senior Full Stack Engineer to spearhead our AI Agent workspace. You will build high-frequency real-time web applications, integrate custom LLM endpoints, and create silky smooth UI workflows for thousands of enterprise users.',
    requirements: [
      '6+ years experience with React, TypeScript, and modern state management.',
      'Proven background building Python or Node.js microservices with PostgreSQL/Redis.',
      'Familiarity with vector search databases (Pinecone, Qdrant) and LLM APIs.',
      'Experience with WebSockets, SSR performance tuning, and Tailwind CSS.'
    ],
    requiredSkills: ['React / Next.js', 'TypeScript', 'Node.js / Express', 'Python / PyTorch', 'PostgreSQL'],
    niceToHaveSkills: ['Docker / Kubernetes', 'GraphQL', 'Vector Databases'],
    customQuestions: [
      {
        id: 'q-1',
        question: 'How many years of hands-on experience do you have building React & TypeScript applications in production?',
        type: 'text',
        required: true
      },
      {
        id: 'q-2',
        question: 'Are you comfortable working in a hybrid model (2 days on-site in SF)?',
        type: 'yes_no',
        required: true
      }
    ],
    postedDate: '2026-08-20',
    status: 'active',
    applicantsCount: 14,
    hiringManager: 'Elena Rostova'
  },
  {
    id: 'job-2',
    companyId: 'comp-2',
    companyName: 'CloudScale Systems',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop&crop=faces',
    title: 'Principal DevOps & Site Reliability Engineer',
    department: 'Platform Infrastructure',
    location: 'Seattle, WA / Remote',
    workType: 'remote',
    employmentType: 'full-time',
    experienceLevel: 'Lead',
    salaryMin: 190000,
    salaryMax: 245000,
    currency: 'USD',
    description: 'Drive the next phase of CloudScale’s global Kubernetes control plane. You will automate infrastructure provisioning using Terraform, optimize Prometheus telemetry, and ensure fault-tolerant multi-region failover.',
    requirements: [
      '7+ years experience in SRE or DevOps environment.',
      'Expertise in Kubernetes cluster federation and Helm chart management.',
      'Advanced skills in Terraform, AWS/GCP, and Bash/Python automation.'
    ],
    requiredSkills: ['Kubernetes / Helm', 'AWS / GCP', 'Terraform', 'Prometheus & Grafana'],
    niceToHaveSkills: ['Python / Go', 'Istio Service Mesh'],
    customQuestions: [
      {
        id: 'q-3',
        question: 'Describe a time you mitigated a major multi-region cloud outage.',
        type: 'text',
        required: true
      }
    ],
    postedDate: '2026-08-22',
    status: 'active',
    applicantsCount: 9,
    hiringManager: 'Devon Miller'
  },
  {
    id: 'job-3',
    companyId: 'comp-3',
    companyName: 'FinTech Pulse',
    companyLogo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&h=150&fit=crop&crop=faces',
    title: 'Senior UX / UI Product Designer',
    department: 'Product Design',
    location: 'New York, NY',
    workType: 'onsite',
    employmentType: 'full-time',
    experienceLevel: 'Senior',
    salaryMin: 165000,
    salaryMax: 200000,
    currency: 'USD',
    description: 'Transform complex financial data into intuitive, fast, and beautiful user interfaces for traders and risk analysts.',
    requirements: [
      '5+ years leading UX product design for enterprise SaaS or Fintech products.',
      'Mastery of Figma, auto-layout, design tokens, and user research methodologies.',
      'Basic understanding of HTML/CSS capabilities and design system handoff.'
    ],
    requiredSkills: ['Figma & Design Systems', 'UI/UX Research', 'HTML/CSS & Tailwind'],
    niceToHaveSkills: ['Framer Motion', 'Prototyping'],
    customQuestions: [],
    postedDate: '2026-08-25',
    status: 'active',
    applicantsCount: 6,
    hiringManager: 'David Kim'
  }
];

export const mockApplications: Application[] = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Senior Full Stack AI Application Engineer',
    companyName: 'Nexus AI Labs',
    candidateId: 'cand-1',
    candidateName: 'Alexandre Mercer',
    candidateAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    candidateTitle: 'Principal Full-Stack & AI Engineer',
    candidateEmail: 'alex.mercer@devpulse.io',
    appliedDate: '2026-08-21',
    stage: 'interview_scheduled',
    resumeScore: 94,
    skillMatchPercentage: 96,
    screeningAnswers: {
      'q-1': '8 years in React and TypeScript production setups across Vercel and Stripe.',
      'q-2': 'Yes, absolutely comfortable with hybrid work in SF.'
    },
    recruiterNotes: [
      { author: 'Marcus Vance', text: 'Outstanding candidate! Resume matched 96% of job criteria. Candidate built real-time LLM UI tools.', date: '2026-08-22' },
      { author: 'Elena Rostova', text: 'Approved for Technical Deep Dive round after stellar recruiter screening.', date: '2026-08-24' }
    ],
    interviewId: 'int-1',
    updatedDate: '2026-08-26'
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    jobTitle: 'Principal DevOps & Site Reliability Engineer',
    companyName: 'CloudScale Systems',
    candidateId: 'cand-2',
    candidateName: 'Priya Sharma',
    candidateAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
    candidateTitle: 'Lead DevOps & Cloud Platform Engineer',
    candidateEmail: 'priya.sharma@cloudcraft.net',
    appliedDate: '2026-08-23',
    stage: 'resume_matched',
    resumeScore: 92,
    skillMatchPercentage: 95,
    screeningAnswers: {
      'q-3': 'Handled DNS failover across US-East and EU-Central during AWS outages using Route53 health checks and Terraform automation.'
    },
    recruiterNotes: [
      { author: 'Aisha Patel', text: 'Top tier candidate with deep Kubernetes and Terraform credentials.', date: '2026-08-24' }
    ],
    updatedDate: '2026-08-24'
  },
  {
    id: 'app-3',
    jobId: 'job-3',
    jobTitle: 'Senior UX / UI Product Designer',
    companyName: 'FinTech Pulse',
    candidateId: 'cand-3',
    candidateName: 'Jordan Vance',
    candidateAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    candidateTitle: 'Senior UX Architect & Design Systems Lead',
    candidateEmail: 'jordan.vance@designops.org',
    appliedDate: '2026-08-26',
    stage: 'screened',
    resumeScore: 88,
    skillMatchPercentage: 90,
    screeningAnswers: {},
    recruiterNotes: [],
    updatedDate: '2026-08-26'
  }
];

export const mockInterviews: Interview[] = [
  {
    id: 'int-1',
    applicationId: 'app-1',
    candidateId: 'cand-1',
    candidateName: 'Alexandre Mercer',
    jobTitle: 'Senior Full Stack AI Application Engineer',
    interviewerName: 'Elena Rostova',
    interviewerRole: 'VP of Engineering',
    scheduledAt: '2026-08-30T14:00:00Z',
    durationMinutes: 60,
    type: 'technical',
    meetingLink: 'https://meet.talentpulse-example.com/room-nexus-9021',
    status: 'scheduled'
  },
  {
    id: 'int-2',
    applicationId: 'app-2',
    candidateId: 'cand-2',
    candidateName: 'Priya Sharma',
    jobTitle: 'Principal DevOps & Site Reliability Engineer',
    interviewerName: 'Devon Miller',
    interviewerRole: 'CTO',
    scheduledAt: '2026-08-31T16:30:00Z',
    durationMinutes: 45,
    type: 'system_design',
    meetingLink: 'https://meet.talentpulse-example.com/room-cloudscale-3891',
    status: 'scheduled'
  }
];

export const mockOffers: Offer[] = [
  {
    id: 'off-1',
    applicationId: 'app-1',
    candidateId: 'cand-1',
    candidateName: 'Alexandre Mercer',
    jobTitle: 'Senior Full Stack AI Application Engineer',
    companyName: 'Nexus AI Labs',
    baseSalary: 215000,
    signOnBonus: 25000,
    equity: '0.35% ISO Stock Options (4-year vesting, 1-year cliff)',
    startDate: '2026-09-15',
    expiryDate: '2026-09-05',
    status: 'draft',
    customizedNotes: 'We are thrilled to invite Alexandre to join our founding AI engineering leadership team in SF!'
  }
];

export const mockAnalytics: AnalyticsMetric = {
  timeToHireDays: 18.4,
  costPerHire: 3450,
  totalApplications: 1420,
  totalHired: 48,
  offerAcceptanceRate: 91.2,
  applicationsByStage: [
    { stage: 'Sourced', count: 450 },
    { stage: 'Screened', count: 320 },
    { stage: 'Resume Matched', count: 210 },
    { stage: 'Interviews', count: 115 },
    { stage: 'Offer Extended', count: 52 },
    { stage: 'Hired', count: 48 }
  ],
  sourcingChannels: [
    { name: 'Direct Portal', percentage: 42 },
    { name: 'AI Skill Matcher', percentage: 28 },
    { name: 'Employee Referral', percentage: 18 },
    { name: 'LinkedIn Sync', percentage: 12 }
  ],
  monthlyHires: [
    { month: 'Mar', hires: 6, target: 8 },
    { month: 'Apr', hires: 9, target: 8 },
    { month: 'May', hires: 7, target: 8 },
    { month: 'Jun', hires: 11, target: 10 },
    { month: 'Jul', hires: 12, target: 10 },
    { month: 'Aug', hires: 14, target: 12 }
  ]
};
