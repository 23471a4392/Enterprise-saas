import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, Candidate, Company, Job, Application, Interview, Offer, 
  ApplicationStage, ScreeningQuestion, AnalyticsMetric 
} from '../types';
import { 
  mockCandidates, mockCompanies, mockJobs, mockApplications, 
  mockInterviews, mockOffers, mockAnalytics 
} from '../data/mockData';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface AppContextType {
  // Personas / Role State
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;

  // Data Collections
  candidates: Candidate[];
  companies: Company[];
  jobs: Job[];
  applications: Application[];
  interviews: Interview[];
  offers: Offer[];
  analytics: AnalyticsMetric;

  // Active Selections
  selectedJobId: string | null;
  setSelectedJobId: (id: string | null) => void;
  selectedCandidateId: string | null;
  setSelectedCandidateId: (id: string | null) => void;
  selectedApplicationId: string | null;
  setSelectedApplicationId: (id: string | null) => void;

  // Toast System
  toasts: ToastMessage[];
  addToast: (type: ToastMessage['type'], title: string, message: string) => void;
  removeToast: (id: string) => void;

  // Actions - Jobs
  createJob: (jobData: Omit<Job, 'id' | 'postedDate' | 'applicantsCount' | 'status'>) => void;
  updateJobStatus: (jobId: string, status: Job['status']) => void;

  // Actions - Applications & ATS Pipeline
  applyForJob: (jobId: string, candidateId: string, screeningAnswers: Record<string, string>) => void;
  updateApplicationStage: (applicationId: string, newStage: ApplicationStage) => void;
  addRecruiterNote: (applicationId: string, noteText: string) => void;

  // Actions - Interviews
  scheduleInterview: (interviewData: Omit<Interview, 'id' | 'status'>) => void;
  submitInterviewScorecard: (interviewId: string, scorecard: NonNullable<Interview['scorecard']>) => void;

  // Actions - Offers
  createOffer: (offerData: Omit<Offer, 'id' | 'status'>) => void;
  updateOfferStatus: (offerId: string, status: Offer['status']) => void;

  // Actions - Candidates & Resumes
  updateCandidateResume: (candidateId: string, resumeText: string) => void;
  
  // Storage Reset
  resetDemoData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'TALENTPULSE_APP_STATE_V1';

const safeParseJSON = <T,>(saved: string | null, fallback: T): T => {
  if (!saved) return fallback;
  try {
    const parsed = JSON.parse(saved);
    if (parsed && (Array.isArray(parsed) || typeof parsed === 'object')) {
      return parsed;
    }
    return fallback;
  } catch (e) {
    console.warn('Invalid JSON payload detected in storage, recovering with mock fallback:', e);
    return fallback;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('recruiter');

  // Initialize from LocalStorage safely with HTML/Corrupted payload fallback
  const [candidates, setCandidates] = useState<Candidate[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_CANDIDATES'), mockCandidates);
  });

  const [companies, setCompanies] = useState<Company[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_COMPANIES'), mockCompanies);
  });

  const [jobs, setJobs] = useState<Job[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_JOBS'), mockJobs);
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_APPLICATIONS'), mockApplications);
  });

  const [interviews, setInterviews] = useState<Interview[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_INTERVIEWS'), mockInterviews);
  });

  const [offers, setOffers] = useState<Offer[]>(() => {
    return safeParseJSON(localStorage.getItem(LOCAL_STORAGE_KEY + '_OFFERS'), mockOffers);
  });

  const [analytics] = useState<AnalyticsMetric>(mockAnalytics);

  // Active selections
  const [selectedJobId, setSelectedJobId] = useState<string | null>('job-1');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>('cand-1');
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>('app-1');

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: ToastMessage['type'], title: string, message: string) => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, type, title, message }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to LocalStorage safely
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_CANDIDATES', JSON.stringify(candidates));
    } catch (e) {
      // ignore storage quota errors
    }
  }, [candidates]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_COMPANIES', JSON.stringify(companies));
    } catch (e) {}
  }, [companies]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_JOBS', JSON.stringify(jobs));
    } catch (e) {}
  }, [jobs]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_APPLICATIONS', JSON.stringify(applications));
    } catch (e) {}
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_INTERVIEWS', JSON.stringify(interviews));
    } catch (e) {}
  }, [interviews]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY + '_OFFERS', JSON.stringify(offers));
    } catch (e) {}
  }, [offers]);

  // Actions Implementation
  const createJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'applicantsCount' | 'status'>) => {
    const newJob: Job = {
      ...jobData,
      id: 'job-' + Date.now(),
      postedDate: new Date().toISOString().split('T')[0],
      applicantsCount: 0,
      status: 'active'
    };
    setJobs((prev) => [newJob, ...prev]);
    addToast('success', 'Job Posted Successfully', `"${newJob.title}" is now active on the public job board.`);
  };

  const updateJobStatus = (jobId: string, status: Job['status']) => {
    setJobs((prev) => prev.map((j) => (j.id === jobId ? { ...j, status } : j)));
    addToast('info', 'Job Status Updated', `Job #${jobId} status changed to ${status}.`);
  };

  const applyForJob = (jobId: string, candidateId: string, screeningAnswers: Record<string, string>) => {
    const targetJob = jobs.find((j) => j.id === jobId);
    const targetCandidate = candidates.find((c) => c.id === candidateId);

    if (!targetJob || !targetCandidate) return;

    const existing = applications.find((a) => a.jobId === jobId && a.candidateId === candidateId);
    if (existing) {
      addToast('warning', 'Already Applied', 'You have already submitted an application for this role.');
      return;
    }

    const newApp: Application = {
      id: 'app-' + Date.now(),
      jobId,
      jobTitle: targetJob.title,
      companyName: targetJob.companyName,
      candidateId,
      candidateName: targetCandidate.name,
      candidateAvatar: targetCandidate.avatar,
      candidateTitle: targetCandidate.title,
      candidateEmail: targetCandidate.email,
      appliedDate: new Date().toISOString().split('T')[0],
      stage: 'sourced',
      resumeScore: 85 + Math.floor(Math.random() * 12),
      skillMatchPercentage: 88 + Math.floor(Math.random() * 10),
      screeningAnswers,
      recruiterNotes: [{ author: 'System Bot', text: 'Application submitted via online portal.', date: new Date().toISOString().split('T')[0] }],
      updatedDate: new Date().toISOString().split('T')[0]
    };

    setApplications((prev) => [newApp, ...prev]);
    setJobs((prev) => prev.map((j) => (j.id === jobId ? { ...j, applicantsCount: j.applicantsCount + 1 } : j)));
    addToast('success', 'Application Submitted!', `Your application for "${targetJob.title}" has been sent to recruiters.`);
  };

  const updateApplicationStage = (applicationId: string, newStage: ApplicationStage) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === applicationId) {
          return {
            ...app,
            stage: newStage,
            updatedDate: new Date().toISOString().split('T')[0]
          };
        }
        return app;
      })
    );

    const app = applications.find((a) => a.id === applicationId);
    if (app) {
      const stageLabels: Record<ApplicationStage, string> = {
        sourced: 'Sourced',
        screened: 'Screened',
        resume_matched: 'Resume Matched',
        interview_scheduled: 'Interview Scheduled',
        offer_extended: 'Offer Extended',
        hired: 'Hired 🎉',
        rejected: 'Rejected'
      };
      addToast('info', 'Stage Updated', `${app.candidateName} moved to "${stageLabels[newStage]}"`);
    }
  };

  const addRecruiterNote = (applicationId: string, noteText: string) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === applicationId) {
          const newNotes = [
            ...app.recruiterNotes,
            {
              author: currentRole === 'recruiter' ? 'Recruiter' : currentRole === 'hiring_manager' ? 'Hiring Manager' : 'Admin',
              text: noteText,
              date: new Date().toISOString().split('T')[0]
            }
          ];
          return { ...app, recruiterNotes: newNotes };
        }
        return app;
      })
    );
    addToast('success', 'Note Added', 'Candidate note saved.');
  };

  const scheduleInterview = (interviewData: Omit<Interview, 'id' | 'status'>) => {
    const newInterview: Interview = {
      ...interviewData,
      id: 'int-' + Date.now(),
      status: 'scheduled'
    };

    setInterviews((prev) => [newInterview, ...prev]);
    updateApplicationStage(interviewData.applicationId, 'interview_scheduled');
    addToast('success', 'Interview Scheduled', `Interview confirmed with ${interviewData.candidateName} for ${new Date(interviewData.scheduledAt).toLocaleString()}`);
  };

  const submitInterviewScorecard = (interviewId: string, scorecard: NonNullable<Interview['scorecard']>) => {
    setInterviews((prev) =>
      prev.map((int) =>
        int.id === interviewId
          ? {
              ...int,
              status: 'completed',
              scorecard: {
                ...scorecard,
                completedAt: new Date().toISOString()
              }
            }
          : int
      )
    );
    addToast('success', 'Scorecard Submitted', 'Interview feedback and recommendation recorded.');
  };

  const createOffer = (offerData: Omit<Offer, 'id' | 'status'>) => {
    const newOffer: Offer = {
      ...offerData,
      id: 'off-' + Date.now(),
      status: 'sent'
    };

    setOffers((prev) => [newOffer, ...prev]);
    updateApplicationStage(offerData.applicationId, 'offer_extended');
    addToast('success', 'Offer Letter Extended!', `Official offer sent to ${offerData.candidateName} ($${offerData.baseSalary.toLocaleString()}/yr).`);
  };

  const updateOfferStatus = (offerId: string, status: Offer['status']) => {
    setOffers((prev) =>
      prev.map((off) => {
        if (off.id === offerId) {
          const updated = { ...off, status };
          if (status === 'accepted') {
            updated.acceptedAt = new Date().toISOString();
          }
          return updated;
        }
        return off;
      })
    );

    const offer = offers.find((o) => o.id === offerId);
    if (offer && status === 'accepted') {
      updateApplicationStage(offer.applicationId, 'hired');
      addToast('success', 'OFFER ACCEPTED! 🎉', `${offer.candidateName} has officially signed the offer letter!`);
    } else {
      addToast('info', 'Offer Status Updated', `Offer status changed to ${status}.`);
    }
  };

  const updateCandidateResume = (candidateId: string, resumeText: string) => {
    setCandidates((prev) =>
      prev.map((cand) => (cand.id === candidateId ? { ...cand, resumeText } : cand))
    );
    addToast('success', 'Resume Updated', 'Candidate resume content re-parsed.');
  };

  const resetDemoData = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_CANDIDATES');
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_COMPANIES');
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_JOBS');
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_APPLICATIONS');
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_INTERVIEWS');
      localStorage.removeItem(LOCAL_STORAGE_KEY + '_OFFERS');
    } catch (e) {}

    setCandidates(mockCandidates);
    setCompanies(mockCompanies);
    setJobs(mockJobs);
    setApplications(mockApplications);
    setInterviews(mockInterviews);
    setOffers(mockOffers);

    addToast('info', 'Demo Data Reset', 'Platform datasets restored to initial state.');
  };

  return (
    <AppContext.Provider
      value={{
        currentRole,
        setCurrentRole,
        candidates,
        companies,
        jobs,
        applications,
        interviews,
        offers,
        analytics,
        selectedJobId,
        setSelectedJobId,
        selectedCandidateId,
        setSelectedCandidateId,
        selectedApplicationId,
        setSelectedApplicationId,
        toasts,
        addToast,
        removeToast,
        createJob,
        updateJobStatus,
        applyForJob,
        updateApplicationStage,
        addRecruiterNote,
        scheduleInterview,
        submitInterviewScorecard,
        createOffer,
        updateOfferStatus,
        updateCandidateResume,
        resetDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
