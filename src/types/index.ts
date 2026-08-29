export type UserRole = 'candidate' | 'recruiter' | 'hiring_manager' | 'admin';

export interface SkillRating {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud/DevOps' | 'AI/ML' | 'Database' | 'Design' | 'Management' | 'Security' | 'Mobile';
  rating: number; // 1 to 10
  yearsExperience: number;
  lastUsedYear: number;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  techStackUsed: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
  gpa?: string;
  honors?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  bio: string;
  yearsOfExperience: number;
  expectedSalary: number;
  skills: SkillRating[];
  education: Education[];
  certifications: Certification[];
  workHistory: WorkExperience[];
  portfolioUrls: { label: string; url: string }[];
  resumeUrl: string;
  resumeText: string;
  isVerified: boolean;
  securityClearance?: string;
  willingToRelocate: boolean;
  preferredWorkType: WorkType[];
  status: 'active' | 'open_to_offers' | 'not_looking';
  matchScores?: Record<string, number>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  department: string;
}

export interface BenefitItem {
  category: 'Health' | 'Financial' | 'Work-Life' | 'Perks';
  title: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  companySize: '1-10' | '11-50' | '51-200' | '201-1000' | '1000+';
  location: string;
  description: string;
  website: string;
  cultureValues: string[];
  rating: number;
  openJobsCount: number;
  benefits: string[];
  detailedBenefits?: BenefitItem[];
  teamMembers: TeamMember[];
  subscriptionTier: 'Enterprise Talent Pool' | 'Pro Recruiting' | 'Standard';
  foundedYear: number;
  totalFunding?: string;
}

export type WorkType = 'remote' | 'hybrid' | 'onsite';
export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship';
export type ExperienceLevel = 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Lead' | 'Executive';

export interface ScreeningQuestion {
  id: string;
  question: string;
  type: 'text' | 'yes_no' | 'multiple_choice';
  options?: string[];
  required: boolean;
}

export interface Job {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  title: string;
  department: string;
  location: string;
  workType: WorkType;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  description: string;
  requirements: string[];
  requiredSkills: string[];
  niceToHaveSkills: string[];
  customQuestions: ScreeningQuestion[];
  postedDate: string;
  status: 'active' | 'draft' | 'closed';
  applicantsCount: number;
  hiringManager: string;
  recruiterInCharge?: string;
  urgencyLevel?: 'Low' | 'Medium' | 'High' | 'Immediate';
}

export type ApplicationStage = 
  | 'sourced' 
  | 'screened' 
  | 'resume_matched' 
  | 'interview_scheduled' 
  | 'offer_extended' 
  | 'hired' 
  | 'rejected';

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  candidateId: string;
  candidateName: string;
  candidateAvatar: string;
  candidateTitle: string;
  candidateEmail: string;
  appliedDate: string;
  stage: ApplicationStage;
  resumeScore: number;
  skillMatchPercentage: number;
  screeningAnswers: Record<string, string>;
  recruiterNotes: { author: string; text: string; date: string }[];
  interviewId?: string;
  offerId?: string;
  updatedDate: string;
}

export interface ResumeAnalysis {
  candidateId: string;
  matchScore: number;
  hardSkillsScore: number;
  softSkillsScore: number;
  formatScore: number;
  experienceScore: number;
  keywordMatchCount: number;
  totalRequiredKeywords: number;
  matchedSkills: string[];
  missingSkills: string[];
  aiSummary: string;
  strengths: string[];
  areaOfImprovements: string[];
  redFlags: string[];
}

export interface SkillMatchComparison {
  skillName: string;
  candidateRating: number;
  requiredRating: number;
  weight: number;
  status: 'exceeds' | 'matches' | 'gap';
}

export interface InterviewScorecard {
  overallRating: number; // 1 to 5
  technicalDepthRating: number;
  problemSolvingRating: number;
  communicationRating: number;
  notes: string;
  recommendation: 'strong_hire' | 'hire' | 'weak_hire' | 'reject';
  completedAt?: string;
  rubricScores?: Record<string, number>;
}

export interface Interview {
  id: string;
  applicationId: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  interviewerName: string;
  interviewerRole: string;
  scheduledAt: string;
  durationMinutes: number;
  type: 'screening' | 'technical' | 'system_design' | 'culture_fit' | 'executive';
  meetingLink: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'canceled';
  scorecard?: InterviewScorecard;
}

export interface Offer {
  id: string;
  applicationId: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  companyName: string;
  baseSalary: number;
  signOnBonus: number;
  equity: string;
  startDate: string;
  expiryDate: string;
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'declined';
  customizedNotes: string;
  acceptedAt?: string;
  vestingSchedule?: string;
}

export interface AssessmentQuestion {
  id: string;
  domain: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface ComplianceRule {
  id: string;
  region: string;
  category: 'EEOC Diversity' | 'GDPR Data Privacy' | 'Equal Pay Transparency' | 'Right to Work';
  title: string;
  description: string;
  status: 'Compliant' | 'Warning' | 'Non-Compliant';
}

export interface AnalyticsMetric {
  timeToHireDays: number;
  costPerHire: number;
  totalApplications: number;
  totalHired: number;
  offerAcceptanceRate: number;
  applicationsByStage: { stage: string; count: number }[];
  sourcingChannels: { name: string; percentage: number }[];
  monthlyHires: { month: string; hires: number; target: number }[];
}
