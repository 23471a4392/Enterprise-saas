import { Candidate } from '../types';

export const expandedCandidateDataset: Candidate[] = [
  {
    id: 'exp-cand-1',
    name: 'Priya Sharma 1',
    title: 'Senior Engineer & Architect #1',
    email: 'candidate1@talentpulse-example.io',
    phone: '+1 (555) 019-1001',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-1',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-1', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-1-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-1' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-1.pdf',
    resumeText: `Priya Sharma 1 - Senior Engineer & Architect #1\nEmail: candidate1@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-2',
    name: 'Jordan Vance 2',
    title: 'Senior Engineer & Architect #2',
    email: 'candidate2@talentpulse-example.io',
    phone: '+1 (555) 019-1002',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-2',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-2', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-2-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-2' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-2.pdf',
    resumeText: `Jordan Vance 2 - Senior Engineer & Architect #2\nEmail: candidate2@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-3',
    name: 'Elena Rostova 3',
    title: 'Senior Engineer & Architect #3',
    email: 'candidate3@talentpulse-example.io',
    phone: '+1 (555) 019-1003',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-3',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-3', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-3-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-3' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-3.pdf',
    resumeText: `Elena Rostova 3 - Senior Engineer & Architect #3\nEmail: candidate3@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-4',
    name: 'Marcus Vance 4',
    title: 'Senior Engineer & Architect #4',
    email: 'candidate4@talentpulse-example.io',
    phone: '+1 (555) 019-1004',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-4',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-4', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-4-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-4' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-4.pdf',
    resumeText: `Marcus Vance 4 - Senior Engineer & Architect #4\nEmail: candidate4@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-5',
    name: 'Sarah Chen 5',
    title: 'Senior Engineer & Architect #5',
    email: 'candidate5@talentpulse-example.io',
    phone: '+1 (555) 019-1005',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-5',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-5', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-5-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-5' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-5.pdf',
    resumeText: `Sarah Chen 5 - Senior Engineer & Architect #5\nEmail: candidate5@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-6',
    name: 'Devon Miller 6',
    title: 'Senior Engineer & Architect #6',
    email: 'candidate6@talentpulse-example.io',
    phone: '+1 (555) 019-1006',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-6',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-6', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-6-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-6' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-6.pdf',
    resumeText: `Devon Miller 6 - Senior Engineer & Architect #6\nEmail: candidate6@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-7',
    name: 'Aisha Patel 7',
    title: 'Senior Engineer & Architect #7',
    email: 'candidate7@talentpulse-example.io',
    phone: '+1 (555) 019-1007',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-7',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-7', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-7-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-7' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-7.pdf',
    resumeText: `Aisha Patel 7 - Senior Engineer & Architect #7\nEmail: candidate7@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-8',
    name: 'David Kim 8',
    title: 'Senior Engineer & Architect #8',
    email: 'candidate8@talentpulse-example.io',
    phone: '+1 (555) 019-1008',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-8',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-8', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-8-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-8' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-8.pdf',
    resumeText: `David Kim 8 - Senior Engineer & Architect #8\nEmail: candidate8@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-9',
    name: 'Lucas Rodriguez 9',
    title: 'Senior Engineer & Architect #9',
    email: 'candidate9@talentpulse-example.io',
    phone: '+1 (555) 019-1009',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-9',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-9', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-9-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-9' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-9.pdf',
    resumeText: `Lucas Rodriguez 9 - Senior Engineer & Architect #9\nEmail: candidate9@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-10',
    name: 'Sophia Martinez 10',
    title: 'Senior Engineer & Architect #10',
    email: 'candidate10@talentpulse-example.io',
    phone: '+1 (555) 019-1010',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-10',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-10', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-10-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-10' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-10.pdf',
    resumeText: `Sophia Martinez 10 - Senior Engineer & Architect #10\nEmail: candidate10@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-11',
    name: 'Ethan Wright 11',
    title: 'Senior Engineer & Architect #11',
    email: 'candidate11@talentpulse-example.io',
    phone: '+1 (555) 019-1011',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-11',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-11', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-11-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-11' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-11.pdf',
    resumeText: `Ethan Wright 11 - Senior Engineer & Architect #11\nEmail: candidate11@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-12',
    name: 'Olivia Taylor 12',
    title: 'Senior Engineer & Architect #12',
    email: 'candidate12@talentpulse-example.io',
    phone: '+1 (555) 019-1012',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-12',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-12', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-12-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-12' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-12.pdf',
    resumeText: `Olivia Taylor 12 - Senior Engineer & Architect #12\nEmail: candidate12@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-13',
    name: 'Liam Anderson 13',
    title: 'Senior Engineer & Architect #13',
    email: 'candidate13@talentpulse-example.io',
    phone: '+1 (555) 019-1013',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-13',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-13', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-13-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-13' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-13.pdf',
    resumeText: `Liam Anderson 13 - Senior Engineer & Architect #13\nEmail: candidate13@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-14',
    name: 'Emma Thomas 14',
    title: 'Senior Engineer & Architect #14',
    email: 'candidate14@talentpulse-example.io',
    phone: '+1 (555) 019-1014',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-14',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-14', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-14-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-14' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-14.pdf',
    resumeText: `Emma Thomas 14 - Senior Engineer & Architect #14\nEmail: candidate14@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-15',
    name: 'Alexandre Mercer 15',
    title: 'Senior Engineer & Architect #15',
    email: 'candidate15@talentpulse-example.io',
    phone: '+1 (555) 019-1015',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-15',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-15', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-15-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-15' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-15.pdf',
    resumeText: `Alexandre Mercer 15 - Senior Engineer & Architect #15\nEmail: candidate15@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-16',
    name: 'Priya Sharma 16',
    title: 'Senior Engineer & Architect #16',
    email: 'candidate16@talentpulse-example.io',
    phone: '+1 (555) 019-1016',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-16',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-16', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-16-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-16' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-16.pdf',
    resumeText: `Priya Sharma 16 - Senior Engineer & Architect #16\nEmail: candidate16@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-17',
    name: 'Jordan Vance 17',
    title: 'Senior Engineer & Architect #17',
    email: 'candidate17@talentpulse-example.io',
    phone: '+1 (555) 019-1017',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-17',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-17', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-17-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-17' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-17.pdf',
    resumeText: `Jordan Vance 17 - Senior Engineer & Architect #17\nEmail: candidate17@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-18',
    name: 'Elena Rostova 18',
    title: 'Senior Engineer & Architect #18',
    email: 'candidate18@talentpulse-example.io',
    phone: '+1 (555) 019-1018',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-18',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-18', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-18-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-18' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-18.pdf',
    resumeText: `Elena Rostova 18 - Senior Engineer & Architect #18\nEmail: candidate18@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-19',
    name: 'Marcus Vance 19',
    title: 'Senior Engineer & Architect #19',
    email: 'candidate19@talentpulse-example.io',
    phone: '+1 (555) 019-1019',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-19',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-19', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-19-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-19' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-19.pdf',
    resumeText: `Marcus Vance 19 - Senior Engineer & Architect #19\nEmail: candidate19@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-20',
    name: 'Sarah Chen 20',
    title: 'Senior Engineer & Architect #20',
    email: 'candidate20@talentpulse-example.io',
    phone: '+1 (555) 019-1020',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-20',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-20', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-20-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-20' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-20.pdf',
    resumeText: `Sarah Chen 20 - Senior Engineer & Architect #20\nEmail: candidate20@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-21',
    name: 'Devon Miller 21',
    title: 'Senior Engineer & Architect #21',
    email: 'candidate21@talentpulse-example.io',
    phone: '+1 (555) 019-1021',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-21',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-21', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-21-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-21' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-21.pdf',
    resumeText: `Devon Miller 21 - Senior Engineer & Architect #21\nEmail: candidate21@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-22',
    name: 'Aisha Patel 22',
    title: 'Senior Engineer & Architect #22',
    email: 'candidate22@talentpulse-example.io',
    phone: '+1 (555) 019-1022',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-22',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-22', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-22-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-22' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-22.pdf',
    resumeText: `Aisha Patel 22 - Senior Engineer & Architect #22\nEmail: candidate22@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-23',
    name: 'David Kim 23',
    title: 'Senior Engineer & Architect #23',
    email: 'candidate23@talentpulse-example.io',
    phone: '+1 (555) 019-1023',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-23',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-23', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-23-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-23' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-23.pdf',
    resumeText: `David Kim 23 - Senior Engineer & Architect #23\nEmail: candidate23@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-24',
    name: 'Lucas Rodriguez 24',
    title: 'Senior Engineer & Architect #24',
    email: 'candidate24@talentpulse-example.io',
    phone: '+1 (555) 019-1024',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-24',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-24', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-24-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-24' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-24.pdf',
    resumeText: `Lucas Rodriguez 24 - Senior Engineer & Architect #24\nEmail: candidate24@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-25',
    name: 'Sophia Martinez 25',
    title: 'Senior Engineer & Architect #25',
    email: 'candidate25@talentpulse-example.io',
    phone: '+1 (555) 019-1025',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-25',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-25', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-25-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-25' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-25.pdf',
    resumeText: `Sophia Martinez 25 - Senior Engineer & Architect #25\nEmail: candidate25@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-26',
    name: 'Ethan Wright 26',
    title: 'Senior Engineer & Architect #26',
    email: 'candidate26@talentpulse-example.io',
    phone: '+1 (555) 019-1026',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-26',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-26', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-26-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-26' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-26.pdf',
    resumeText: `Ethan Wright 26 - Senior Engineer & Architect #26\nEmail: candidate26@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-27',
    name: 'Olivia Taylor 27',
    title: 'Senior Engineer & Architect #27',
    email: 'candidate27@talentpulse-example.io',
    phone: '+1 (555) 019-1027',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-27',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-27', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-27-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-27' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-27.pdf',
    resumeText: `Olivia Taylor 27 - Senior Engineer & Architect #27\nEmail: candidate27@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-28',
    name: 'Liam Anderson 28',
    title: 'Senior Engineer & Architect #28',
    email: 'candidate28@talentpulse-example.io',
    phone: '+1 (555) 019-1028',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-28',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-28', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-28-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-28' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-28.pdf',
    resumeText: `Liam Anderson 28 - Senior Engineer & Architect #28\nEmail: candidate28@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-29',
    name: 'Emma Thomas 29',
    title: 'Senior Engineer & Architect #29',
    email: 'candidate29@talentpulse-example.io',
    phone: '+1 (555) 019-1029',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-29',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-29', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-29-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-29' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-29.pdf',
    resumeText: `Emma Thomas 29 - Senior Engineer & Architect #29\nEmail: candidate29@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-30',
    name: 'Alexandre Mercer 30',
    title: 'Senior Engineer & Architect #30',
    email: 'candidate30@talentpulse-example.io',
    phone: '+1 (555) 019-1030',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-30',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-30', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-30-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-30' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-30.pdf',
    resumeText: `Alexandre Mercer 30 - Senior Engineer & Architect #30\nEmail: candidate30@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-31',
    name: 'Priya Sharma 31',
    title: 'Senior Engineer & Architect #31',
    email: 'candidate31@talentpulse-example.io',
    phone: '+1 (555) 019-1031',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-31',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-31', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-31-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-31' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-31.pdf',
    resumeText: `Priya Sharma 31 - Senior Engineer & Architect #31\nEmail: candidate31@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-32',
    name: 'Jordan Vance 32',
    title: 'Senior Engineer & Architect #32',
    email: 'candidate32@talentpulse-example.io',
    phone: '+1 (555) 019-1032',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-32',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-32', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-32-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-32' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-32.pdf',
    resumeText: `Jordan Vance 32 - Senior Engineer & Architect #32\nEmail: candidate32@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-33',
    name: 'Elena Rostova 33',
    title: 'Senior Engineer & Architect #33',
    email: 'candidate33@talentpulse-example.io',
    phone: '+1 (555) 019-1033',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-33',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-33', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-33-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-33' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-33.pdf',
    resumeText: `Elena Rostova 33 - Senior Engineer & Architect #33\nEmail: candidate33@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-34',
    name: 'Marcus Vance 34',
    title: 'Senior Engineer & Architect #34',
    email: 'candidate34@talentpulse-example.io',
    phone: '+1 (555) 019-1034',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-34',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-34', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-34-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-34' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-34.pdf',
    resumeText: `Marcus Vance 34 - Senior Engineer & Architect #34\nEmail: candidate34@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-35',
    name: 'Sarah Chen 35',
    title: 'Senior Engineer & Architect #35',
    email: 'candidate35@talentpulse-example.io',
    phone: '+1 (555) 019-1035',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-35',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-35', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-35-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-35' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-35.pdf',
    resumeText: `Sarah Chen 35 - Senior Engineer & Architect #35\nEmail: candidate35@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-36',
    name: 'Devon Miller 36',
    title: 'Senior Engineer & Architect #36',
    email: 'candidate36@talentpulse-example.io',
    phone: '+1 (555) 019-1036',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-36',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-36', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-36-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-36' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-36.pdf',
    resumeText: `Devon Miller 36 - Senior Engineer & Architect #36\nEmail: candidate36@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-37',
    name: 'Aisha Patel 37',
    title: 'Senior Engineer & Architect #37',
    email: 'candidate37@talentpulse-example.io',
    phone: '+1 (555) 019-1037',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-37',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-37', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-37-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-37' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-37.pdf',
    resumeText: `Aisha Patel 37 - Senior Engineer & Architect #37\nEmail: candidate37@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-38',
    name: 'David Kim 38',
    title: 'Senior Engineer & Architect #38',
    email: 'candidate38@talentpulse-example.io',
    phone: '+1 (555) 019-1038',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-38',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-38', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-38-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-38' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-38.pdf',
    resumeText: `David Kim 38 - Senior Engineer & Architect #38\nEmail: candidate38@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-39',
    name: 'Lucas Rodriguez 39',
    title: 'Senior Engineer & Architect #39',
    email: 'candidate39@talentpulse-example.io',
    phone: '+1 (555) 019-1039',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-39',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-39', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-39-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-39' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-39.pdf',
    resumeText: `Lucas Rodriguez 39 - Senior Engineer & Architect #39\nEmail: candidate39@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-40',
    name: 'Sophia Martinez 40',
    title: 'Senior Engineer & Architect #40',
    email: 'candidate40@talentpulse-example.io',
    phone: '+1 (555) 019-1040',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-40',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-40', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-40-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-40' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-40.pdf',
    resumeText: `Sophia Martinez 40 - Senior Engineer & Architect #40\nEmail: candidate40@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-41',
    name: 'Ethan Wright 41',
    title: 'Senior Engineer & Architect #41',
    email: 'candidate41@talentpulse-example.io',
    phone: '+1 (555) 019-1041',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-41',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-41', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-41-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-41' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-41.pdf',
    resumeText: `Ethan Wright 41 - Senior Engineer & Architect #41\nEmail: candidate41@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-42',
    name: 'Olivia Taylor 42',
    title: 'Senior Engineer & Architect #42',
    email: 'candidate42@talentpulse-example.io',
    phone: '+1 (555) 019-1042',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-42',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-42', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-42-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-42' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-42.pdf',
    resumeText: `Olivia Taylor 42 - Senior Engineer & Architect #42\nEmail: candidate42@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-43',
    name: 'Liam Anderson 43',
    title: 'Senior Engineer & Architect #43',
    email: 'candidate43@talentpulse-example.io',
    phone: '+1 (555) 019-1043',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-43',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-43', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-43-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-43' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-43.pdf',
    resumeText: `Liam Anderson 43 - Senior Engineer & Architect #43\nEmail: candidate43@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-44',
    name: 'Emma Thomas 44',
    title: 'Senior Engineer & Architect #44',
    email: 'candidate44@talentpulse-example.io',
    phone: '+1 (555) 019-1044',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-44',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-44', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-44-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-44' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-44.pdf',
    resumeText: `Emma Thomas 44 - Senior Engineer & Architect #44\nEmail: candidate44@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-45',
    name: 'Alexandre Mercer 45',
    title: 'Senior Engineer & Architect #45',
    email: 'candidate45@talentpulse-example.io',
    phone: '+1 (555) 019-1045',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-45',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-45', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-45-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-45' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-45.pdf',
    resumeText: `Alexandre Mercer 45 - Senior Engineer & Architect #45\nEmail: candidate45@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-46',
    name: 'Priya Sharma 46',
    title: 'Senior Engineer & Architect #46',
    email: 'candidate46@talentpulse-example.io',
    phone: '+1 (555) 019-1046',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-46',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-46', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-46-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-46' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-46.pdf',
    resumeText: `Priya Sharma 46 - Senior Engineer & Architect #46\nEmail: candidate46@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-47',
    name: 'Jordan Vance 47',
    title: 'Senior Engineer & Architect #47',
    email: 'candidate47@talentpulse-example.io',
    phone: '+1 (555) 019-1047',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-47',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-47', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-47-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-47' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-47.pdf',
    resumeText: `Jordan Vance 47 - Senior Engineer & Architect #47\nEmail: candidate47@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-48',
    name: 'Elena Rostova 48',
    title: 'Senior Engineer & Architect #48',
    email: 'candidate48@talentpulse-example.io',
    phone: '+1 (555) 019-1048',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-48',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-48', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-48-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-48' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-48.pdf',
    resumeText: `Elena Rostova 48 - Senior Engineer & Architect #48\nEmail: candidate48@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-49',
    name: 'Marcus Vance 49',
    title: 'Senior Engineer & Architect #49',
    email: 'candidate49@talentpulse-example.io',
    phone: '+1 (555) 019-1049',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-49',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-49', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-49-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-49' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-49.pdf',
    resumeText: `Marcus Vance 49 - Senior Engineer & Architect #49\nEmail: candidate49@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-50',
    name: 'Sarah Chen 50',
    title: 'Senior Engineer & Architect #50',
    email: 'candidate50@talentpulse-example.io',
    phone: '+1 (555) 019-1050',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-50',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-50', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-50-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-50' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-50.pdf',
    resumeText: `Sarah Chen 50 - Senior Engineer & Architect #50\nEmail: candidate50@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-51',
    name: 'Devon Miller 51',
    title: 'Senior Engineer & Architect #51',
    email: 'candidate51@talentpulse-example.io',
    phone: '+1 (555) 019-1051',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-51',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-51', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-51-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-51' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-51.pdf',
    resumeText: `Devon Miller 51 - Senior Engineer & Architect #51\nEmail: candidate51@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-52',
    name: 'Aisha Patel 52',
    title: 'Senior Engineer & Architect #52',
    email: 'candidate52@talentpulse-example.io',
    phone: '+1 (555) 019-1052',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-52',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-52', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-52-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-52' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-52.pdf',
    resumeText: `Aisha Patel 52 - Senior Engineer & Architect #52\nEmail: candidate52@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-53',
    name: 'David Kim 53',
    title: 'Senior Engineer & Architect #53',
    email: 'candidate53@talentpulse-example.io',
    phone: '+1 (555) 019-1053',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-53',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-53', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-53-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-53' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-53.pdf',
    resumeText: `David Kim 53 - Senior Engineer & Architect #53\nEmail: candidate53@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-54',
    name: 'Lucas Rodriguez 54',
    title: 'Senior Engineer & Architect #54',
    email: 'candidate54@talentpulse-example.io',
    phone: '+1 (555) 019-1054',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-54',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-54', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-54-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-54' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-54.pdf',
    resumeText: `Lucas Rodriguez 54 - Senior Engineer & Architect #54\nEmail: candidate54@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-55',
    name: 'Sophia Martinez 55',
    title: 'Senior Engineer & Architect #55',
    email: 'candidate55@talentpulse-example.io',
    phone: '+1 (555) 019-1055',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-55',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-55', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-55-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-55' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-55.pdf',
    resumeText: `Sophia Martinez 55 - Senior Engineer & Architect #55\nEmail: candidate55@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-56',
    name: 'Ethan Wright 56',
    title: 'Senior Engineer & Architect #56',
    email: 'candidate56@talentpulse-example.io',
    phone: '+1 (555) 019-1056',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-56',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-56', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-56-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-56' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-56.pdf',
    resumeText: `Ethan Wright 56 - Senior Engineer & Architect #56\nEmail: candidate56@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-57',
    name: 'Olivia Taylor 57',
    title: 'Senior Engineer & Architect #57',
    email: 'candidate57@talentpulse-example.io',
    phone: '+1 (555) 019-1057',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-57',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-57', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-57-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-57' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-57.pdf',
    resumeText: `Olivia Taylor 57 - Senior Engineer & Architect #57\nEmail: candidate57@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-58',
    name: 'Liam Anderson 58',
    title: 'Senior Engineer & Architect #58',
    email: 'candidate58@talentpulse-example.io',
    phone: '+1 (555) 019-1058',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-58',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-58', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-58-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-58' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-58.pdf',
    resumeText: `Liam Anderson 58 - Senior Engineer & Architect #58\nEmail: candidate58@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-59',
    name: 'Emma Thomas 59',
    title: 'Senior Engineer & Architect #59',
    email: 'candidate59@talentpulse-example.io',
    phone: '+1 (555) 019-1059',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-59',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-59', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-59-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-59' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-59.pdf',
    resumeText: `Emma Thomas 59 - Senior Engineer & Architect #59\nEmail: candidate59@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-60',
    name: 'Alexandre Mercer 60',
    title: 'Senior Engineer & Architect #60',
    email: 'candidate60@talentpulse-example.io',
    phone: '+1 (555) 019-1060',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-60',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-60', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-60-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-60' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-60.pdf',
    resumeText: `Alexandre Mercer 60 - Senior Engineer & Architect #60\nEmail: candidate60@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-61',
    name: 'Priya Sharma 61',
    title: 'Senior Engineer & Architect #61',
    email: 'candidate61@talentpulse-example.io',
    phone: '+1 (555) 019-1061',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-61',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-61', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-61-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-61' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-61.pdf',
    resumeText: `Priya Sharma 61 - Senior Engineer & Architect #61\nEmail: candidate61@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-62',
    name: 'Jordan Vance 62',
    title: 'Senior Engineer & Architect #62',
    email: 'candidate62@talentpulse-example.io',
    phone: '+1 (555) 019-1062',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-62',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-62', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-62-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-62' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-62.pdf',
    resumeText: `Jordan Vance 62 - Senior Engineer & Architect #62\nEmail: candidate62@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-63',
    name: 'Elena Rostova 63',
    title: 'Senior Engineer & Architect #63',
    email: 'candidate63@talentpulse-example.io',
    phone: '+1 (555) 019-1063',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-63',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-63', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-63-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-63' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-63.pdf',
    resumeText: `Elena Rostova 63 - Senior Engineer & Architect #63\nEmail: candidate63@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-64',
    name: 'Marcus Vance 64',
    title: 'Senior Engineer & Architect #64',
    email: 'candidate64@talentpulse-example.io',
    phone: '+1 (555) 019-1064',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-64',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-64', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-64-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-64' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-64.pdf',
    resumeText: `Marcus Vance 64 - Senior Engineer & Architect #64\nEmail: candidate64@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-65',
    name: 'Sarah Chen 65',
    title: 'Senior Engineer & Architect #65',
    email: 'candidate65@talentpulse-example.io',
    phone: '+1 (555) 019-1065',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-65',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-65', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-65-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-65' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-65.pdf',
    resumeText: `Sarah Chen 65 - Senior Engineer & Architect #65\nEmail: candidate65@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-66',
    name: 'Devon Miller 66',
    title: 'Senior Engineer & Architect #66',
    email: 'candidate66@talentpulse-example.io',
    phone: '+1 (555) 019-1066',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-66',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-66', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-66-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-66' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-66.pdf',
    resumeText: `Devon Miller 66 - Senior Engineer & Architect #66\nEmail: candidate66@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-67',
    name: 'Aisha Patel 67',
    title: 'Senior Engineer & Architect #67',
    email: 'candidate67@talentpulse-example.io',
    phone: '+1 (555) 019-1067',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-67',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-67', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-67-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-67' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-67.pdf',
    resumeText: `Aisha Patel 67 - Senior Engineer & Architect #67\nEmail: candidate67@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-68',
    name: 'David Kim 68',
    title: 'Senior Engineer & Architect #68',
    email: 'candidate68@talentpulse-example.io',
    phone: '+1 (555) 019-1068',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-68',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-68', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-68-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-68' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-68.pdf',
    resumeText: `David Kim 68 - Senior Engineer & Architect #68\nEmail: candidate68@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-69',
    name: 'Lucas Rodriguez 69',
    title: 'Senior Engineer & Architect #69',
    email: 'candidate69@talentpulse-example.io',
    phone: '+1 (555) 019-1069',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-69',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-69', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-69-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-69' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-69.pdf',
    resumeText: `Lucas Rodriguez 69 - Senior Engineer & Architect #69\nEmail: candidate69@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-70',
    name: 'Sophia Martinez 70',
    title: 'Senior Engineer & Architect #70',
    email: 'candidate70@talentpulse-example.io',
    phone: '+1 (555) 019-1070',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-70',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-70', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-70-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-70' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-70.pdf',
    resumeText: `Sophia Martinez 70 - Senior Engineer & Architect #70\nEmail: candidate70@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-71',
    name: 'Ethan Wright 71',
    title: 'Senior Engineer & Architect #71',
    email: 'candidate71@talentpulse-example.io',
    phone: '+1 (555) 019-1071',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-71',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-71', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-71-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-71' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-71.pdf',
    resumeText: `Ethan Wright 71 - Senior Engineer & Architect #71\nEmail: candidate71@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-72',
    name: 'Olivia Taylor 72',
    title: 'Senior Engineer & Architect #72',
    email: 'candidate72@talentpulse-example.io',
    phone: '+1 (555) 019-1072',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-72',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-72', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-72-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-72' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-72.pdf',
    resumeText: `Olivia Taylor 72 - Senior Engineer & Architect #72\nEmail: candidate72@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-73',
    name: 'Liam Anderson 73',
    title: 'Senior Engineer & Architect #73',
    email: 'candidate73@talentpulse-example.io',
    phone: '+1 (555) 019-1073',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-73',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-73', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-73-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-73' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-73.pdf',
    resumeText: `Liam Anderson 73 - Senior Engineer & Architect #73\nEmail: candidate73@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-74',
    name: 'Emma Thomas 74',
    title: 'Senior Engineer & Architect #74',
    email: 'candidate74@talentpulse-example.io',
    phone: '+1 (555) 019-1074',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-74',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-74', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-74-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-74' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-74.pdf',
    resumeText: `Emma Thomas 74 - Senior Engineer & Architect #74\nEmail: candidate74@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-75',
    name: 'Alexandre Mercer 75',
    title: 'Senior Engineer & Architect #75',
    email: 'candidate75@talentpulse-example.io',
    phone: '+1 (555) 019-1075',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-75',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-75', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-75-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-75' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-75.pdf',
    resumeText: `Alexandre Mercer 75 - Senior Engineer & Architect #75\nEmail: candidate75@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-76',
    name: 'Priya Sharma 76',
    title: 'Senior Engineer & Architect #76',
    email: 'candidate76@talentpulse-example.io',
    phone: '+1 (555) 019-1076',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-76',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-76', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-76-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-76' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-76.pdf',
    resumeText: `Priya Sharma 76 - Senior Engineer & Architect #76\nEmail: candidate76@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-77',
    name: 'Jordan Vance 77',
    title: 'Senior Engineer & Architect #77',
    email: 'candidate77@talentpulse-example.io',
    phone: '+1 (555) 019-1077',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-77',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-77', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-77-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-77' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-77.pdf',
    resumeText: `Jordan Vance 77 - Senior Engineer & Architect #77\nEmail: candidate77@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-78',
    name: 'Elena Rostova 78',
    title: 'Senior Engineer & Architect #78',
    email: 'candidate78@talentpulse-example.io',
    phone: '+1 (555) 019-1078',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-78',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-78', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-78-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-78' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-78.pdf',
    resumeText: `Elena Rostova 78 - Senior Engineer & Architect #78\nEmail: candidate78@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-79',
    name: 'Marcus Vance 79',
    title: 'Senior Engineer & Architect #79',
    email: 'candidate79@talentpulse-example.io',
    phone: '+1 (555) 019-1079',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-79',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-79', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-79-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-79' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-79.pdf',
    resumeText: `Marcus Vance 79 - Senior Engineer & Architect #79\nEmail: candidate79@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-80',
    name: 'Sarah Chen 80',
    title: 'Senior Engineer & Architect #80',
    email: 'candidate80@talentpulse-example.io',
    phone: '+1 (555) 019-1080',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-80',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-80', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-80-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-80' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-80.pdf',
    resumeText: `Sarah Chen 80 - Senior Engineer & Architect #80\nEmail: candidate80@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-81',
    name: 'Devon Miller 81',
    title: 'Senior Engineer & Architect #81',
    email: 'candidate81@talentpulse-example.io',
    phone: '+1 (555) 019-1081',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-81',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-81', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-81-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-81' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-81.pdf',
    resumeText: `Devon Miller 81 - Senior Engineer & Architect #81\nEmail: candidate81@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-82',
    name: 'Aisha Patel 82',
    title: 'Senior Engineer & Architect #82',
    email: 'candidate82@talentpulse-example.io',
    phone: '+1 (555) 019-1082',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-82',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-82', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-82-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-82' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-82.pdf',
    resumeText: `Aisha Patel 82 - Senior Engineer & Architect #82\nEmail: candidate82@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-83',
    name: 'David Kim 83',
    title: 'Senior Engineer & Architect #83',
    email: 'candidate83@talentpulse-example.io',
    phone: '+1 (555) 019-1083',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-83',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-83', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-83-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-83' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-83.pdf',
    resumeText: `David Kim 83 - Senior Engineer & Architect #83\nEmail: candidate83@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-84',
    name: 'Lucas Rodriguez 84',
    title: 'Senior Engineer & Architect #84',
    email: 'candidate84@talentpulse-example.io',
    phone: '+1 (555) 019-1084',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-84',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-84', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-84-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-84' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-84.pdf',
    resumeText: `Lucas Rodriguez 84 - Senior Engineer & Architect #84\nEmail: candidate84@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-85',
    name: 'Sophia Martinez 85',
    title: 'Senior Engineer & Architect #85',
    email: 'candidate85@talentpulse-example.io',
    phone: '+1 (555) 019-1085',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-85',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-85', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-85-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-85' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-85.pdf',
    resumeText: `Sophia Martinez 85 - Senior Engineer & Architect #85\nEmail: candidate85@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-86',
    name: 'Ethan Wright 86',
    title: 'Senior Engineer & Architect #86',
    email: 'candidate86@talentpulse-example.io',
    phone: '+1 (555) 019-1086',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-86',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-86', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-86-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-86' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-86.pdf',
    resumeText: `Ethan Wright 86 - Senior Engineer & Architect #86\nEmail: candidate86@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-87',
    name: 'Olivia Taylor 87',
    title: 'Senior Engineer & Architect #87',
    email: 'candidate87@talentpulse-example.io',
    phone: '+1 (555) 019-1087',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-87',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-87', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-87-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-87' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-87.pdf',
    resumeText: `Olivia Taylor 87 - Senior Engineer & Architect #87\nEmail: candidate87@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-88',
    name: 'Liam Anderson 88',
    title: 'Senior Engineer & Architect #88',
    email: 'candidate88@talentpulse-example.io',
    phone: '+1 (555) 019-1088',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-88',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-88', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-88-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-88' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-88.pdf',
    resumeText: `Liam Anderson 88 - Senior Engineer & Architect #88\nEmail: candidate88@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-89',
    name: 'Emma Thomas 89',
    title: 'Senior Engineer & Architect #89',
    email: 'candidate89@talentpulse-example.io',
    phone: '+1 (555) 019-1089',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-89',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-89', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-89-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-89' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-89.pdf',
    resumeText: `Emma Thomas 89 - Senior Engineer & Architect #89\nEmail: candidate89@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-90',
    name: 'Alexandre Mercer 90',
    title: 'Senior Engineer & Architect #90',
    email: 'candidate90@talentpulse-example.io',
    phone: '+1 (555) 019-1090',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-90',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-90', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-90-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-90' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-90.pdf',
    resumeText: `Alexandre Mercer 90 - Senior Engineer & Architect #90\nEmail: candidate90@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-91',
    name: 'Priya Sharma 91',
    title: 'Senior Engineer & Architect #91',
    email: 'candidate91@talentpulse-example.io',
    phone: '+1 (555) 019-1091',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-91',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-91', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-91-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-91' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-91.pdf',
    resumeText: `Priya Sharma 91 - Senior Engineer & Architect #91\nEmail: candidate91@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-92',
    name: 'Jordan Vance 92',
    title: 'Senior Engineer & Architect #92',
    email: 'candidate92@talentpulse-example.io',
    phone: '+1 (555) 019-1092',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-92',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-92', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-92-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-92' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-92.pdf',
    resumeText: `Jordan Vance 92 - Senior Engineer & Architect #92\nEmail: candidate92@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-93',
    name: 'Elena Rostova 93',
    title: 'Senior Engineer & Architect #93',
    email: 'candidate93@talentpulse-example.io',
    phone: '+1 (555) 019-1093',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-93',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-93', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-93-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-93' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-93.pdf',
    resumeText: `Elena Rostova 93 - Senior Engineer & Architect #93\nEmail: candidate93@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-94',
    name: 'Marcus Vance 94',
    title: 'Senior Engineer & Architect #94',
    email: 'candidate94@talentpulse-example.io',
    phone: '+1 (555) 019-1094',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-94',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-94', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-94-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-94' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-94.pdf',
    resumeText: `Marcus Vance 94 - Senior Engineer & Architect #94\nEmail: candidate94@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-95',
    name: 'Sarah Chen 95',
    title: 'Senior Engineer & Architect #95',
    email: 'candidate95@talentpulse-example.io',
    phone: '+1 (555) 019-1095',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-95',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-95', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-95-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-95' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-95.pdf',
    resumeText: `Sarah Chen 95 - Senior Engineer & Architect #95\nEmail: candidate95@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-96',
    name: 'Devon Miller 96',
    title: 'Senior Engineer & Architect #96',
    email: 'candidate96@talentpulse-example.io',
    phone: '+1 (555) 019-1096',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-96',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-96', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-96-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-96' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-96.pdf',
    resumeText: `Devon Miller 96 - Senior Engineer & Architect #96\nEmail: candidate96@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-97',
    name: 'Aisha Patel 97',
    title: 'Senior Engineer & Architect #97',
    email: 'candidate97@talentpulse-example.io',
    phone: '+1 (555) 019-1097',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-97',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-97', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-97-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-97' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-97.pdf',
    resumeText: `Aisha Patel 97 - Senior Engineer & Architect #97\nEmail: candidate97@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-98',
    name: 'David Kim 98',
    title: 'Senior Engineer & Architect #98',
    email: 'candidate98@talentpulse-example.io',
    phone: '+1 (555) 019-1098',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-98',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-98', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-98-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-98' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-98.pdf',
    resumeText: `David Kim 98 - Senior Engineer & Architect #98\nEmail: candidate98@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-99',
    name: 'Lucas Rodriguez 99',
    title: 'Senior Engineer & Architect #99',
    email: 'candidate99@talentpulse-example.io',
    phone: '+1 (555) 019-1099',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-99',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-99', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-99-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-99' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-99.pdf',
    resumeText: `Lucas Rodriguez 99 - Senior Engineer & Architect #99\nEmail: candidate99@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-100',
    name: 'Sophia Martinez 100',
    title: 'Senior Engineer & Architect #100',
    email: 'candidate100@talentpulse-example.io',
    phone: '+1 (555) 019-1100',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-100',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-100', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-100-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-100' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-100.pdf',
    resumeText: `Sophia Martinez 100 - Senior Engineer & Architect #100\nEmail: candidate100@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-101',
    name: 'Ethan Wright 101',
    title: 'Senior Engineer & Architect #101',
    email: 'candidate101@talentpulse-example.io',
    phone: '+1 (555) 019-1101',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-101',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-101', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-101-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-101' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-101.pdf',
    resumeText: `Ethan Wright 101 - Senior Engineer & Architect #101\nEmail: candidate101@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-102',
    name: 'Olivia Taylor 102',
    title: 'Senior Engineer & Architect #102',
    email: 'candidate102@talentpulse-example.io',
    phone: '+1 (555) 019-1102',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-102',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-102', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-102-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-102' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-102.pdf',
    resumeText: `Olivia Taylor 102 - Senior Engineer & Architect #102\nEmail: candidate102@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-103',
    name: 'Liam Anderson 103',
    title: 'Senior Engineer & Architect #103',
    email: 'candidate103@talentpulse-example.io',
    phone: '+1 (555) 019-1103',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-103',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-103', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-103-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-103' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-103.pdf',
    resumeText: `Liam Anderson 103 - Senior Engineer & Architect #103\nEmail: candidate103@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-104',
    name: 'Emma Thomas 104',
    title: 'Senior Engineer & Architect #104',
    email: 'candidate104@talentpulse-example.io',
    phone: '+1 (555) 019-1104',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-104',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-104', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-104-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-104' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-104.pdf',
    resumeText: `Emma Thomas 104 - Senior Engineer & Architect #104\nEmail: candidate104@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-105',
    name: 'Alexandre Mercer 105',
    title: 'Senior Engineer & Architect #105',
    email: 'candidate105@talentpulse-example.io',
    phone: '+1 (555) 019-1105',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-105',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-105', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-105-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-105' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-105.pdf',
    resumeText: `Alexandre Mercer 105 - Senior Engineer & Architect #105\nEmail: candidate105@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-106',
    name: 'Priya Sharma 106',
    title: 'Senior Engineer & Architect #106',
    email: 'candidate106@talentpulse-example.io',
    phone: '+1 (555) 019-1106',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-106',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-106', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-106-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-106' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-106.pdf',
    resumeText: `Priya Sharma 106 - Senior Engineer & Architect #106\nEmail: candidate106@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-107',
    name: 'Jordan Vance 107',
    title: 'Senior Engineer & Architect #107',
    email: 'candidate107@talentpulse-example.io',
    phone: '+1 (555) 019-1107',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-107',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-107', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-107-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-107' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-107.pdf',
    resumeText: `Jordan Vance 107 - Senior Engineer & Architect #107\nEmail: candidate107@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-108',
    name: 'Elena Rostova 108',
    title: 'Senior Engineer & Architect #108',
    email: 'candidate108@talentpulse-example.io',
    phone: '+1 (555) 019-1108',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-108',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-108', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-108-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-108' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-108.pdf',
    resumeText: `Elena Rostova 108 - Senior Engineer & Architect #108\nEmail: candidate108@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-109',
    name: 'Marcus Vance 109',
    title: 'Senior Engineer & Architect #109',
    email: 'candidate109@talentpulse-example.io',
    phone: '+1 (555) 019-1109',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-109',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-109', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-109-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-109' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-109.pdf',
    resumeText: `Marcus Vance 109 - Senior Engineer & Architect #109\nEmail: candidate109@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-110',
    name: 'Sarah Chen 110',
    title: 'Senior Engineer & Architect #110',
    email: 'candidate110@talentpulse-example.io',
    phone: '+1 (555) 019-1110',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-110',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-110', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-110-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-110' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-110.pdf',
    resumeText: `Sarah Chen 110 - Senior Engineer & Architect #110\nEmail: candidate110@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-111',
    name: 'Devon Miller 111',
    title: 'Senior Engineer & Architect #111',
    email: 'candidate111@talentpulse-example.io',
    phone: '+1 (555) 019-1111',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-111',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-111', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-111-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-111' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-111.pdf',
    resumeText: `Devon Miller 111 - Senior Engineer & Architect #111\nEmail: candidate111@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-112',
    name: 'Aisha Patel 112',
    title: 'Senior Engineer & Architect #112',
    email: 'candidate112@talentpulse-example.io',
    phone: '+1 (555) 019-1112',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-112',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-112', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-112-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-112' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-112.pdf',
    resumeText: `Aisha Patel 112 - Senior Engineer & Architect #112\nEmail: candidate112@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-113',
    name: 'David Kim 113',
    title: 'Senior Engineer & Architect #113',
    email: 'candidate113@talentpulse-example.io',
    phone: '+1 (555) 019-1113',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-113',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-113', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-113-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-113' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-113.pdf',
    resumeText: `David Kim 113 - Senior Engineer & Architect #113\nEmail: candidate113@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-114',
    name: 'Lucas Rodriguez 114',
    title: 'Senior Engineer & Architect #114',
    email: 'candidate114@talentpulse-example.io',
    phone: '+1 (555) 019-1114',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-114',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-114', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-114-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-114' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-114.pdf',
    resumeText: `Lucas Rodriguez 114 - Senior Engineer & Architect #114\nEmail: candidate114@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-115',
    name: 'Sophia Martinez 115',
    title: 'Senior Engineer & Architect #115',
    email: 'candidate115@talentpulse-example.io',
    phone: '+1 (555) 019-1115',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-115',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-115', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-115-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-115' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-115.pdf',
    resumeText: `Sophia Martinez 115 - Senior Engineer & Architect #115\nEmail: candidate115@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-116',
    name: 'Ethan Wright 116',
    title: 'Senior Engineer & Architect #116',
    email: 'candidate116@talentpulse-example.io',
    phone: '+1 (555) 019-1116',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-116',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-116', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-116-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-116' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-116.pdf',
    resumeText: `Ethan Wright 116 - Senior Engineer & Architect #116\nEmail: candidate116@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-117',
    name: 'Olivia Taylor 117',
    title: 'Senior Engineer & Architect #117',
    email: 'candidate117@talentpulse-example.io',
    phone: '+1 (555) 019-1117',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-117',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-117', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-117-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-117' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-117.pdf',
    resumeText: `Olivia Taylor 117 - Senior Engineer & Architect #117\nEmail: candidate117@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-118',
    name: 'Liam Anderson 118',
    title: 'Senior Engineer & Architect #118',
    email: 'candidate118@talentpulse-example.io',
    phone: '+1 (555) 019-1118',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-118',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-118', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-118-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-118' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-118.pdf',
    resumeText: `Liam Anderson 118 - Senior Engineer & Architect #118\nEmail: candidate118@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-119',
    name: 'Emma Thomas 119',
    title: 'Senior Engineer & Architect #119',
    email: 'candidate119@talentpulse-example.io',
    phone: '+1 (555) 019-1119',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-119',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-119', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-119-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-119' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-119.pdf',
    resumeText: `Emma Thomas 119 - Senior Engineer & Architect #119\nEmail: candidate119@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-120',
    name: 'Alexandre Mercer 120',
    title: 'Senior Engineer & Architect #120',
    email: 'candidate120@talentpulse-example.io',
    phone: '+1 (555) 019-1120',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-120',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-120', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-120-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-120' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-120.pdf',
    resumeText: `Alexandre Mercer 120 - Senior Engineer & Architect #120\nEmail: candidate120@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-121',
    name: 'Priya Sharma 121',
    title: 'Senior Engineer & Architect #121',
    email: 'candidate121@talentpulse-example.io',
    phone: '+1 (555) 019-1121',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-121',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-121', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-121-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-121' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-121.pdf',
    resumeText: `Priya Sharma 121 - Senior Engineer & Architect #121\nEmail: candidate121@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-122',
    name: 'Jordan Vance 122',
    title: 'Senior Engineer & Architect #122',
    email: 'candidate122@talentpulse-example.io',
    phone: '+1 (555) 019-1122',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-122',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-122', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-122-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-122' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-122.pdf',
    resumeText: `Jordan Vance 122 - Senior Engineer & Architect #122\nEmail: candidate122@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-123',
    name: 'Elena Rostova 123',
    title: 'Senior Engineer & Architect #123',
    email: 'candidate123@talentpulse-example.io',
    phone: '+1 (555) 019-1123',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-123',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-123', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-123-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-123' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-123.pdf',
    resumeText: `Elena Rostova 123 - Senior Engineer & Architect #123\nEmail: candidate123@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-124',
    name: 'Marcus Vance 124',
    title: 'Senior Engineer & Architect #124',
    email: 'candidate124@talentpulse-example.io',
    phone: '+1 (555) 019-1124',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-124',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-124', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-124-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-124' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-124.pdf',
    resumeText: `Marcus Vance 124 - Senior Engineer & Architect #124\nEmail: candidate124@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-125',
    name: 'Sarah Chen 125',
    title: 'Senior Engineer & Architect #125',
    email: 'candidate125@talentpulse-example.io',
    phone: '+1 (555) 019-1125',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-125',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-125', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-125-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-125' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-125.pdf',
    resumeText: `Sarah Chen 125 - Senior Engineer & Architect #125\nEmail: candidate125@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-126',
    name: 'Devon Miller 126',
    title: 'Senior Engineer & Architect #126',
    email: 'candidate126@talentpulse-example.io',
    phone: '+1 (555) 019-1126',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-126',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-126', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-126-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-126' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-126.pdf',
    resumeText: `Devon Miller 126 - Senior Engineer & Architect #126\nEmail: candidate126@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-127',
    name: 'Aisha Patel 127',
    title: 'Senior Engineer & Architect #127',
    email: 'candidate127@talentpulse-example.io',
    phone: '+1 (555) 019-1127',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-127',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-127', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-127-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-127' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-127.pdf',
    resumeText: `Aisha Patel 127 - Senior Engineer & Architect #127\nEmail: candidate127@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-128',
    name: 'David Kim 128',
    title: 'Senior Engineer & Architect #128',
    email: 'candidate128@talentpulse-example.io',
    phone: '+1 (555) 019-1128',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-128',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-128', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-128-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-128' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-128.pdf',
    resumeText: `David Kim 128 - Senior Engineer & Architect #128\nEmail: candidate128@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-129',
    name: 'Lucas Rodriguez 129',
    title: 'Senior Engineer & Architect #129',
    email: 'candidate129@talentpulse-example.io',
    phone: '+1 (555) 019-1129',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-129',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-129', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-129-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-129' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-129.pdf',
    resumeText: `Lucas Rodriguez 129 - Senior Engineer & Architect #129\nEmail: candidate129@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-130',
    name: 'Sophia Martinez 130',
    title: 'Senior Engineer & Architect #130',
    email: 'candidate130@talentpulse-example.io',
    phone: '+1 (555) 019-1130',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-130',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-130', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-130-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-130' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-130.pdf',
    resumeText: `Sophia Martinez 130 - Senior Engineer & Architect #130\nEmail: candidate130@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-131',
    name: 'Ethan Wright 131',
    title: 'Senior Engineer & Architect #131',
    email: 'candidate131@talentpulse-example.io',
    phone: '+1 (555) 019-1131',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-131',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-131', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-131-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-131' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-131.pdf',
    resumeText: `Ethan Wright 131 - Senior Engineer & Architect #131\nEmail: candidate131@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-132',
    name: 'Olivia Taylor 132',
    title: 'Senior Engineer & Architect #132',
    email: 'candidate132@talentpulse-example.io',
    phone: '+1 (555) 019-1132',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-132',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-132', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-132-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-132' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-132.pdf',
    resumeText: `Olivia Taylor 132 - Senior Engineer & Architect #132\nEmail: candidate132@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-133',
    name: 'Liam Anderson 133',
    title: 'Senior Engineer & Architect #133',
    email: 'candidate133@talentpulse-example.io',
    phone: '+1 (555) 019-1133',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-133',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-133', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-133-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-133' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-133.pdf',
    resumeText: `Liam Anderson 133 - Senior Engineer & Architect #133\nEmail: candidate133@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-134',
    name: 'Emma Thomas 134',
    title: 'Senior Engineer & Architect #134',
    email: 'candidate134@talentpulse-example.io',
    phone: '+1 (555) 019-1134',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-134',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-134', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-134-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-134' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-134.pdf',
    resumeText: `Emma Thomas 134 - Senior Engineer & Architect #134\nEmail: candidate134@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-135',
    name: 'Alexandre Mercer 135',
    title: 'Senior Engineer & Architect #135',
    email: 'candidate135@talentpulse-example.io',
    phone: '+1 (555) 019-1135',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-135',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-135', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-135-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-135' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-135.pdf',
    resumeText: `Alexandre Mercer 135 - Senior Engineer & Architect #135\nEmail: candidate135@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-136',
    name: 'Priya Sharma 136',
    title: 'Senior Engineer & Architect #136',
    email: 'candidate136@talentpulse-example.io',
    phone: '+1 (555) 019-1136',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-136',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-136', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-136-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-136' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-136.pdf',
    resumeText: `Priya Sharma 136 - Senior Engineer & Architect #136\nEmail: candidate136@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-137',
    name: 'Jordan Vance 137',
    title: 'Senior Engineer & Architect #137',
    email: 'candidate137@talentpulse-example.io',
    phone: '+1 (555) 019-1137',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-137',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-137', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-137-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-137' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-137.pdf',
    resumeText: `Jordan Vance 137 - Senior Engineer & Architect #137\nEmail: candidate137@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-138',
    name: 'Elena Rostova 138',
    title: 'Senior Engineer & Architect #138',
    email: 'candidate138@talentpulse-example.io',
    phone: '+1 (555) 019-1138',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-138',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-138', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-138-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-138' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-138.pdf',
    resumeText: `Elena Rostova 138 - Senior Engineer & Architect #138\nEmail: candidate138@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-139',
    name: 'Marcus Vance 139',
    title: 'Senior Engineer & Architect #139',
    email: 'candidate139@talentpulse-example.io',
    phone: '+1 (555) 019-1139',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-139',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-139', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-139-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-139' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-139.pdf',
    resumeText: `Marcus Vance 139 - Senior Engineer & Architect #139\nEmail: candidate139@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-140',
    name: 'Sarah Chen 140',
    title: 'Senior Engineer & Architect #140',
    email: 'candidate140@talentpulse-example.io',
    phone: '+1 (555) 019-1140',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-140',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-140', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-140-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-140' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-140.pdf',
    resumeText: `Sarah Chen 140 - Senior Engineer & Architect #140\nEmail: candidate140@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-141',
    name: 'Devon Miller 141',
    title: 'Senior Engineer & Architect #141',
    email: 'candidate141@talentpulse-example.io',
    phone: '+1 (555) 019-1141',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-141',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-141', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-141-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-141' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-141.pdf',
    resumeText: `Devon Miller 141 - Senior Engineer & Architect #141\nEmail: candidate141@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-142',
    name: 'Aisha Patel 142',
    title: 'Senior Engineer & Architect #142',
    email: 'candidate142@talentpulse-example.io',
    phone: '+1 (555) 019-1142',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-142',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-142', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-142-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-142' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-142.pdf',
    resumeText: `Aisha Patel 142 - Senior Engineer & Architect #142\nEmail: candidate142@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-143',
    name: 'David Kim 143',
    title: 'Senior Engineer & Architect #143',
    email: 'candidate143@talentpulse-example.io',
    phone: '+1 (555) 019-1143',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-143',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-143', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-143-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-143' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-143.pdf',
    resumeText: `David Kim 143 - Senior Engineer & Architect #143\nEmail: candidate143@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-144',
    name: 'Lucas Rodriguez 144',
    title: 'Senior Engineer & Architect #144',
    email: 'candidate144@talentpulse-example.io',
    phone: '+1 (555) 019-1144',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-144',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-144', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-144-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-144' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-144.pdf',
    resumeText: `Lucas Rodriguez 144 - Senior Engineer & Architect #144\nEmail: candidate144@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-145',
    name: 'Sophia Martinez 145',
    title: 'Senior Engineer & Architect #145',
    email: 'candidate145@talentpulse-example.io',
    phone: '+1 (555) 019-1145',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-145',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-145', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-145-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-145' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-145.pdf',
    resumeText: `Sophia Martinez 145 - Senior Engineer & Architect #145\nEmail: candidate145@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-146',
    name: 'Ethan Wright 146',
    title: 'Senior Engineer & Architect #146',
    email: 'candidate146@talentpulse-example.io',
    phone: '+1 (555) 019-1146',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-146',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-146', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-146-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-146' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-146.pdf',
    resumeText: `Ethan Wright 146 - Senior Engineer & Architect #146\nEmail: candidate146@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-147',
    name: 'Olivia Taylor 147',
    title: 'Senior Engineer & Architect #147',
    email: 'candidate147@talentpulse-example.io',
    phone: '+1 (555) 019-1147',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-147',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-147', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-147-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-147' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-147.pdf',
    resumeText: `Olivia Taylor 147 - Senior Engineer & Architect #147\nEmail: candidate147@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-148',
    name: 'Liam Anderson 148',
    title: 'Senior Engineer & Architect #148',
    email: 'candidate148@talentpulse-example.io',
    phone: '+1 (555) 019-1148',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-148',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-148', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-148-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-148' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-148.pdf',
    resumeText: `Liam Anderson 148 - Senior Engineer & Architect #148\nEmail: candidate148@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-149',
    name: 'Emma Thomas 149',
    title: 'Senior Engineer & Architect #149',
    email: 'candidate149@talentpulse-example.io',
    phone: '+1 (555) 019-1149',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-149',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-149', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-149-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-149' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-149.pdf',
    resumeText: `Emma Thomas 149 - Senior Engineer & Architect #149\nEmail: candidate149@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-150',
    name: 'Alexandre Mercer 150',
    title: 'Senior Engineer & Architect #150',
    email: 'candidate150@talentpulse-example.io',
    phone: '+1 (555) 019-1150',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-150',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-150', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-150-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-150' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-150.pdf',
    resumeText: `Alexandre Mercer 150 - Senior Engineer & Architect #150\nEmail: candidate150@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-151',
    name: 'Priya Sharma 151',
    title: 'Senior Engineer & Architect #151',
    email: 'candidate151@talentpulse-example.io',
    phone: '+1 (555) 019-1151',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-151',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-151', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-151-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-151' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-151.pdf',
    resumeText: `Priya Sharma 151 - Senior Engineer & Architect #151\nEmail: candidate151@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-152',
    name: 'Jordan Vance 152',
    title: 'Senior Engineer & Architect #152',
    email: 'candidate152@talentpulse-example.io',
    phone: '+1 (555) 019-1152',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-152',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-152', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-152-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-152' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-152.pdf',
    resumeText: `Jordan Vance 152 - Senior Engineer & Architect #152\nEmail: candidate152@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-153',
    name: 'Elena Rostova 153',
    title: 'Senior Engineer & Architect #153',
    email: 'candidate153@talentpulse-example.io',
    phone: '+1 (555) 019-1153',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-153',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-153', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-153-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-153' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-153.pdf',
    resumeText: `Elena Rostova 153 - Senior Engineer & Architect #153\nEmail: candidate153@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-154',
    name: 'Marcus Vance 154',
    title: 'Senior Engineer & Architect #154',
    email: 'candidate154@talentpulse-example.io',
    phone: '+1 (555) 019-1154',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-154',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-154', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-154-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-154' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-154.pdf',
    resumeText: `Marcus Vance 154 - Senior Engineer & Architect #154\nEmail: candidate154@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-155',
    name: 'Sarah Chen 155',
    title: 'Senior Engineer & Architect #155',
    email: 'candidate155@talentpulse-example.io',
    phone: '+1 (555) 019-1155',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-155',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-155', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-155-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-155' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-155.pdf',
    resumeText: `Sarah Chen 155 - Senior Engineer & Architect #155\nEmail: candidate155@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-156',
    name: 'Devon Miller 156',
    title: 'Senior Engineer & Architect #156',
    email: 'candidate156@talentpulse-example.io',
    phone: '+1 (555) 019-1156',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-156',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-156', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-156-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-156' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-156.pdf',
    resumeText: `Devon Miller 156 - Senior Engineer & Architect #156\nEmail: candidate156@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-157',
    name: 'Aisha Patel 157',
    title: 'Senior Engineer & Architect #157',
    email: 'candidate157@talentpulse-example.io',
    phone: '+1 (555) 019-1157',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-157',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-157', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-157-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-157' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-157.pdf',
    resumeText: `Aisha Patel 157 - Senior Engineer & Architect #157\nEmail: candidate157@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-158',
    name: 'David Kim 158',
    title: 'Senior Engineer & Architect #158',
    email: 'candidate158@talentpulse-example.io',
    phone: '+1 (555) 019-1158',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-158',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-158', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-158-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-158' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-158.pdf',
    resumeText: `David Kim 158 - Senior Engineer & Architect #158\nEmail: candidate158@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-159',
    name: 'Lucas Rodriguez 159',
    title: 'Senior Engineer & Architect #159',
    email: 'candidate159@talentpulse-example.io',
    phone: '+1 (555) 019-1159',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-159',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-159', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-159-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-159' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-159.pdf',
    resumeText: `Lucas Rodriguez 159 - Senior Engineer & Architect #159\nEmail: candidate159@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-160',
    name: 'Sophia Martinez 160',
    title: 'Senior Engineer & Architect #160',
    email: 'candidate160@talentpulse-example.io',
    phone: '+1 (555) 019-1160',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-160',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-160', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-160-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-160' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-160.pdf',
    resumeText: `Sophia Martinez 160 - Senior Engineer & Architect #160\nEmail: candidate160@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-161',
    name: 'Ethan Wright 161',
    title: 'Senior Engineer & Architect #161',
    email: 'candidate161@talentpulse-example.io',
    phone: '+1 (555) 019-1161',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-161',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-161', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-161-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-161' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-161.pdf',
    resumeText: `Ethan Wright 161 - Senior Engineer & Architect #161\nEmail: candidate161@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-162',
    name: 'Olivia Taylor 162',
    title: 'Senior Engineer & Architect #162',
    email: 'candidate162@talentpulse-example.io',
    phone: '+1 (555) 019-1162',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-162',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-162', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-162-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-162' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-162.pdf',
    resumeText: `Olivia Taylor 162 - Senior Engineer & Architect #162\nEmail: candidate162@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-163',
    name: 'Liam Anderson 163',
    title: 'Senior Engineer & Architect #163',
    email: 'candidate163@talentpulse-example.io',
    phone: '+1 (555) 019-1163',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-163',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-163', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-163-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-163' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-163.pdf',
    resumeText: `Liam Anderson 163 - Senior Engineer & Architect #163\nEmail: candidate163@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-164',
    name: 'Emma Thomas 164',
    title: 'Senior Engineer & Architect #164',
    email: 'candidate164@talentpulse-example.io',
    phone: '+1 (555) 019-1164',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-164',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-164', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-164-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-164' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-164.pdf',
    resumeText: `Emma Thomas 164 - Senior Engineer & Architect #164\nEmail: candidate164@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-165',
    name: 'Alexandre Mercer 165',
    title: 'Senior Engineer & Architect #165',
    email: 'candidate165@talentpulse-example.io',
    phone: '+1 (555) 019-1165',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-165',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-165', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-165-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-165' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-165.pdf',
    resumeText: `Alexandre Mercer 165 - Senior Engineer & Architect #165\nEmail: candidate165@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-166',
    name: 'Priya Sharma 166',
    title: 'Senior Engineer & Architect #166',
    email: 'candidate166@talentpulse-example.io',
    phone: '+1 (555) 019-1166',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-166',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-166', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-166-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-166' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-166.pdf',
    resumeText: `Priya Sharma 166 - Senior Engineer & Architect #166\nEmail: candidate166@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-167',
    name: 'Jordan Vance 167',
    title: 'Senior Engineer & Architect #167',
    email: 'candidate167@talentpulse-example.io',
    phone: '+1 (555) 019-1167',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-167',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-167', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-167-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-167' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-167.pdf',
    resumeText: `Jordan Vance 167 - Senior Engineer & Architect #167\nEmail: candidate167@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-168',
    name: 'Elena Rostova 168',
    title: 'Senior Engineer & Architect #168',
    email: 'candidate168@talentpulse-example.io',
    phone: '+1 (555) 019-1168',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-168',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-168', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-168-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-168' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-168.pdf',
    resumeText: `Elena Rostova 168 - Senior Engineer & Architect #168\nEmail: candidate168@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-169',
    name: 'Marcus Vance 169',
    title: 'Senior Engineer & Architect #169',
    email: 'candidate169@talentpulse-example.io',
    phone: '+1 (555) 019-1169',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-169',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-169', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-169-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-169' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-169.pdf',
    resumeText: `Marcus Vance 169 - Senior Engineer & Architect #169\nEmail: candidate169@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-170',
    name: 'Sarah Chen 170',
    title: 'Senior Engineer & Architect #170',
    email: 'candidate170@talentpulse-example.io',
    phone: '+1 (555) 019-1170',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-170',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-170', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-170-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-170' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-170.pdf',
    resumeText: `Sarah Chen 170 - Senior Engineer & Architect #170\nEmail: candidate170@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-171',
    name: 'Devon Miller 171',
    title: 'Senior Engineer & Architect #171',
    email: 'candidate171@talentpulse-example.io',
    phone: '+1 (555) 019-1171',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-171',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-171', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-171-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-171' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-171.pdf',
    resumeText: `Devon Miller 171 - Senior Engineer & Architect #171\nEmail: candidate171@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-172',
    name: 'Aisha Patel 172',
    title: 'Senior Engineer & Architect #172',
    email: 'candidate172@talentpulse-example.io',
    phone: '+1 (555) 019-1172',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-172',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-172', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-172-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-172' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-172.pdf',
    resumeText: `Aisha Patel 172 - Senior Engineer & Architect #172\nEmail: candidate172@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-173',
    name: 'David Kim 173',
    title: 'Senior Engineer & Architect #173',
    email: 'candidate173@talentpulse-example.io',
    phone: '+1 (555) 019-1173',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-173',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-173', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-173-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-173' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-173.pdf',
    resumeText: `David Kim 173 - Senior Engineer & Architect #173\nEmail: candidate173@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-174',
    name: 'Lucas Rodriguez 174',
    title: 'Senior Engineer & Architect #174',
    email: 'candidate174@talentpulse-example.io',
    phone: '+1 (555) 019-1174',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-174',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-174', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-174-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-174' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-174.pdf',
    resumeText: `Lucas Rodriguez 174 - Senior Engineer & Architect #174\nEmail: candidate174@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-175',
    name: 'Sophia Martinez 175',
    title: 'Senior Engineer & Architect #175',
    email: 'candidate175@talentpulse-example.io',
    phone: '+1 (555) 019-1175',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-175',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-175', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-175-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-175' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-175.pdf',
    resumeText: `Sophia Martinez 175 - Senior Engineer & Architect #175\nEmail: candidate175@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-176',
    name: 'Ethan Wright 176',
    title: 'Senior Engineer & Architect #176',
    email: 'candidate176@talentpulse-example.io',
    phone: '+1 (555) 019-1176',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-176',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-176', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-176-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-176' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-176.pdf',
    resumeText: `Ethan Wright 176 - Senior Engineer & Architect #176\nEmail: candidate176@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-177',
    name: 'Olivia Taylor 177',
    title: 'Senior Engineer & Architect #177',
    email: 'candidate177@talentpulse-example.io',
    phone: '+1 (555) 019-1177',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-177',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-177', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-177-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-177' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-177.pdf',
    resumeText: `Olivia Taylor 177 - Senior Engineer & Architect #177\nEmail: candidate177@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-178',
    name: 'Liam Anderson 178',
    title: 'Senior Engineer & Architect #178',
    email: 'candidate178@talentpulse-example.io',
    phone: '+1 (555) 019-1178',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-178',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-178', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-178-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-178' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-178.pdf',
    resumeText: `Liam Anderson 178 - Senior Engineer & Architect #178\nEmail: candidate178@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-179',
    name: 'Emma Thomas 179',
    title: 'Senior Engineer & Architect #179',
    email: 'candidate179@talentpulse-example.io',
    phone: '+1 (555) 019-1179',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-179',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-179', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-179-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-179' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-179.pdf',
    resumeText: `Emma Thomas 179 - Senior Engineer & Architect #179\nEmail: candidate179@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-180',
    name: 'Alexandre Mercer 180',
    title: 'Senior Engineer & Architect #180',
    email: 'candidate180@talentpulse-example.io',
    phone: '+1 (555) 019-1180',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-180',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-180', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-180-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-180' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-180.pdf',
    resumeText: `Alexandre Mercer 180 - Senior Engineer & Architect #180\nEmail: candidate180@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-181',
    name: 'Priya Sharma 181',
    title: 'Senior Engineer & Architect #181',
    email: 'candidate181@talentpulse-example.io',
    phone: '+1 (555) 019-1181',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-181',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-181', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-181-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-181' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-181.pdf',
    resumeText: `Priya Sharma 181 - Senior Engineer & Architect #181\nEmail: candidate181@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-182',
    name: 'Jordan Vance 182',
    title: 'Senior Engineer & Architect #182',
    email: 'candidate182@talentpulse-example.io',
    phone: '+1 (555) 019-1182',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-182',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-182', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-182-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-182' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-182.pdf',
    resumeText: `Jordan Vance 182 - Senior Engineer & Architect #182\nEmail: candidate182@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-183',
    name: 'Elena Rostova 183',
    title: 'Senior Engineer & Architect #183',
    email: 'candidate183@talentpulse-example.io',
    phone: '+1 (555) 019-1183',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-183',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-183', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-183-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-183' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-183.pdf',
    resumeText: `Elena Rostova 183 - Senior Engineer & Architect #183\nEmail: candidate183@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-184',
    name: 'Marcus Vance 184',
    title: 'Senior Engineer & Architect #184',
    email: 'candidate184@talentpulse-example.io',
    phone: '+1 (555) 019-1184',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-184',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-184', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-184-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-184' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-184.pdf',
    resumeText: `Marcus Vance 184 - Senior Engineer & Architect #184\nEmail: candidate184@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-185',
    name: 'Sarah Chen 185',
    title: 'Senior Engineer & Architect #185',
    email: 'candidate185@talentpulse-example.io',
    phone: '+1 (555) 019-1185',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-185',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-185', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-185-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-185' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-185.pdf',
    resumeText: `Sarah Chen 185 - Senior Engineer & Architect #185\nEmail: candidate185@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-186',
    name: 'Devon Miller 186',
    title: 'Senior Engineer & Architect #186',
    email: 'candidate186@talentpulse-example.io',
    phone: '+1 (555) 019-1186',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-186',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-186', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-186-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-186' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-186.pdf',
    resumeText: `Devon Miller 186 - Senior Engineer & Architect #186\nEmail: candidate186@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-187',
    name: 'Aisha Patel 187',
    title: 'Senior Engineer & Architect #187',
    email: 'candidate187@talentpulse-example.io',
    phone: '+1 (555) 019-1187',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-187',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-187', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-187-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-187' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-187.pdf',
    resumeText: `Aisha Patel 187 - Senior Engineer & Architect #187\nEmail: candidate187@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-188',
    name: 'David Kim 188',
    title: 'Senior Engineer & Architect #188',
    email: 'candidate188@talentpulse-example.io',
    phone: '+1 (555) 019-1188',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-188',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-188', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-188-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-188' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-188.pdf',
    resumeText: `David Kim 188 - Senior Engineer & Architect #188\nEmail: candidate188@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-189',
    name: 'Lucas Rodriguez 189',
    title: 'Senior Engineer & Architect #189',
    email: 'candidate189@talentpulse-example.io',
    phone: '+1 (555) 019-1189',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '13+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 13,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 11, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-189',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2013
      }
    ],
    certifications: [
      { id: 'cert-189', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-189-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-189' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-189.pdf',
    resumeText: `Lucas Rodriguez 189 - Senior Engineer & Architect #189\nEmail: candidate189@talentpulse-example.io\n\nSUMMARY:\n13 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-190',
    name: 'Sophia Martinez 190',
    title: 'Senior Engineer & Architect #190',
    email: 'candidate190@talentpulse-example.io',
    phone: '+1 (555) 019-1190',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '14+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 14,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 13, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 12, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-190',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2012
      }
    ],
    certifications: [
      { id: 'cert-190', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-190-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-190' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-190.pdf',
    resumeText: `Sophia Martinez 190 - Senior Engineer & Architect #190\nEmail: candidate190@talentpulse-example.io\n\nSUMMARY:\n14 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-191',
    name: 'Ethan Wright 191',
    title: 'Senior Engineer & Architect #191',
    email: 'candidate191@talentpulse-example.io',
    phone: '+1 (555) 019-1191',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '15+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 15,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.6, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.9, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 15, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 14, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 13, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-191',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2011
      }
    ],
    certifications: [
      { id: 'cert-191', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-191-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-191' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-191.pdf',
    resumeText: `Ethan Wright 191 - Senior Engineer & Architect #191\nEmail: candidate191@talentpulse-example.io\n\nSUMMARY:\n15 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-192',
    name: 'Olivia Taylor 192',
    title: 'Senior Engineer & Architect #192',
    email: 'candidate192@talentpulse-example.io',
    phone: '+1 (555) 019-1192',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '4+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 4,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 3, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 2, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-192',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2022
      }
    ],
    certifications: [
      { id: 'cert-192', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-192-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-192' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-192.pdf',
    resumeText: `Olivia Taylor 192 - Senior Engineer & Architect #192\nEmail: candidate192@talentpulse-example.io\n\nSUMMARY:\n4 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-193',
    name: 'Liam Anderson 193',
    title: 'Senior Engineer & Architect #193',
    email: 'candidate193@talentpulse-example.io',
    phone: '+1 (555) 019-1193',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '5+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 5,
    expectedSalary: 160000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.8, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.100000000000001, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 4, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 3, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-193',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2021
      }
    ],
    certifications: [
      { id: 'cert-193', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-193-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-193' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-193.pdf',
    resumeText: `Liam Anderson 193 - Senior Engineer & Architect #193\nEmail: candidate193@talentpulse-example.io\n\nSUMMARY:\n5 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-194',
    name: 'Emma Thomas 194',
    title: 'Senior Engineer & Architect #194',
    email: 'candidate194@talentpulse-example.io',
    phone: '+1 (555) 019-1194',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '6+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 6,
    expectedSalary: 170000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.9, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.200000000000001, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 5, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 4, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-194',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2020
      }
    ],
    certifications: [
      { id: 'cert-194', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-194-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-194' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-194.pdf',
    resumeText: `Emma Thomas 194 - Senior Engineer & Architect #194\nEmail: candidate194@talentpulse-example.io\n\nSUMMARY:\n6 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-195',
    name: 'Alexandre Mercer 195',
    title: 'Senior Engineer & Architect #195',
    email: 'candidate195@talentpulse-example.io',
    phone: '+1 (555) 019-1195',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '7+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 7,
    expectedSalary: 180000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.3, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 6, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 5, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-195',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2019
      }
    ],
    certifications: [
      { id: 'cert-195', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-195-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-195' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-195.pdf',
    resumeText: `Alexandre Mercer 195 - Senior Engineer & Architect #195\nEmail: candidate195@talentpulse-example.io\n\nSUMMARY:\n7 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-196',
    name: 'Priya Sharma 196',
    title: 'Senior Engineer & Architect #196',
    email: 'candidate196@talentpulse-example.io',
    phone: '+1 (555) 019-1196',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '8+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 8,
    expectedSalary: 190000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.1, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.4, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 7, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 6, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-196',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2018
      }
    ],
    certifications: [
      { id: 'cert-196', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-196-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-196' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-196.pdf',
    resumeText: `Priya Sharma 196 - Senior Engineer & Architect #196\nEmail: candidate196@talentpulse-example.io\n\nSUMMARY:\n8 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-197',
    name: 'Jordan Vance 197',
    title: 'Senior Engineer & Architect #197',
    email: 'candidate197@talentpulse-example.io',
    phone: '+1 (555) 019-1197',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '9+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 9,
    expectedSalary: 200000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.2, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 8, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 7, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-197',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2017
      }
    ],
    certifications: [
      { id: 'cert-197', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-197-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-197' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-197.pdf',
    resumeText: `Jordan Vance 197 - Senior Engineer & Architect #197\nEmail: candidate197@talentpulse-example.io\n\nSUMMARY:\n9 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-198',
    name: 'Elena Rostova 198',
    title: 'Senior Engineer & Architect #198',
    email: 'candidate198@talentpulse-example.io',
    phone: '+1 (555) 019-1198',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '10+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 10,
    expectedSalary: 210000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.3, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.600000000000001, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 9, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 8, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-198',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2016
      }
    ],
    certifications: [
      { id: 'cert-198', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-198-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-198' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-198.pdf',
    resumeText: `Elena Rostova 198 - Senior Engineer & Architect #198\nEmail: candidate198@talentpulse-example.io\n\nSUMMARY:\n10 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-199',
    name: 'Marcus Vance 199',
    title: 'Senior Engineer & Architect #199',
    email: 'candidate199@talentpulse-example.io',
    phone: '+1 (555) 019-1199',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '11+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 11,
    expectedSalary: 220000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 9.4, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 9.700000000000001, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 10, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 9, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-199',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2015
      }
    ],
    certifications: [
      { id: 'cert-199', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-199-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-199' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-199.pdf',
    resumeText: `Marcus Vance 199 - Senior Engineer & Architect #199\nEmail: candidate199@talentpulse-example.io\n\nSUMMARY:\n11 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
  {
    id: 'exp-cand-200',
    name: 'Sarah Chen 200',
    title: 'Senior Engineer & Architect #200',
    email: 'candidate200@talentpulse-example.io',
    phone: '+1 (555) 019-1200',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    bio: '12+ years of experience in enterprise software architecture, full-stack development, and cloud services.',
    yearsOfExperience: 12,
    expectedSalary: 150000,
    isVerified: true,
    willingToRelocate: true,
    preferredWorkType: ['remote', 'hybrid'],
    status: 'open_to_offers',
    skills: [
      { name: 'React / Next.js', category: 'Frontend', rating: 8.5, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'TypeScript', category: 'Frontend', rating: 8.8, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Node.js / Express', category: 'Backend', rating: 9.0, yearsExperience: 12, lastUsedYear: 2026 },
      { name: 'Python', category: 'Backend', rating: 8.5, yearsExperience: 11, lastUsedYear: 2026 },
      { name: 'PostgreSQL', category: 'Database', rating: 8.7, yearsExperience: 10, lastUsedYear: 2026 }
    ],
    education: [
      {
        id: 'edu-200',
        institution: 'University of California',
        degree: 'B.S. in Computer Science',
        fieldOfStudy: 'Software Engineering',
        graduationYear: 2014
      }
    ],
    certifications: [
      { id: 'cert-200', title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2023-06' }
    ],
    workHistory: [
      {
        id: 'work-200-1',
        company: 'Tech Corp Labs',
        role: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Led core web platform development, improving API latency by 35%.',
        achievements: ['Architected microservices handling high traffic.'],
        techStackUsed: ['React', 'TypeScript', 'Node.js']
      }
    ],
    portfolioUrls: [
      { label: 'GitHub', url: 'https://github.com/example-cand-200' }
    ],
    resumeUrl: 'https://example.com/resumes/cand-200.pdf',
    resumeText: `Sarah Chen 200 - Senior Engineer & Architect #200\nEmail: candidate200@talentpulse-example.io\n\nSUMMARY:\n12 years of hands-on experience in software engineering, React, TypeScript, and Node.js.\n\nSKILLS:\nReact, TypeScript, Node.js, Python, PostgreSQL, AWS\n\nEXPERIENCE:\nSenior Software Engineer at Tech Corp Labs (2021 - Present)`
  },
];
