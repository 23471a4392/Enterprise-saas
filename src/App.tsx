import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { ToastContainer } from './components/common/ToastContainer';
import { JobBoard } from './components/jobs/JobBoard';
import { ATSBoard } from './components/ats/ATSBoard';
import { ResumeAnalyzer } from './components/resume/ResumeAnalyzer';
import { SkillMatchingMatrix } from './components/skills/SkillMatchingMatrix';
import { InterviewHub } from './components/interviews/InterviewHub';
import { InterviewSchedulerModal } from './components/interviews/InterviewSchedulerModal';
import { OfferTrackerView } from './components/hiring/OfferTrackerView';
import { OfferGeneratorModal } from './components/hiring/OfferGeneratorModal';
import { CandidateDashboard } from './components/candidates/CandidateDashboard';
import { CompanyDirectory } from './components/companies/CompanyDirectory';
import { RecruitmentAnalytics } from './components/hiring/RecruitmentAnalytics';
import { ComplianceReportView } from './components/hiring/ComplianceReportView';
import { Application } from './types';

const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('jobs');

  // Drawer / Modal states passed between views
  const [selectedAppForInterview, setSelectedAppForInterview] = useState<Application | null>(null);
  const [showInterviewModal, setShowInterviewModal] = useState(false);

  const [selectedAppForOffer, setSelectedAppForOffer] = useState<Application | null>(null);
  const [showOfferModal, setShowOfferModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'jobs' && (
          <JobBoard onNavigateToATS={() => setActiveTab('ats')} />
        )}

        {activeTab === 'ats' && (
          <ATSBoard
            onOpenScheduleInterview={(app) => {
              setSelectedAppForInterview(app);
              setShowInterviewModal(true);
            }}
            onOpenCreateOffer={(app) => {
              setSelectedAppForOffer(app);
              setShowOfferModal(true);
            }}
          />
        )}

        {activeTab === 'resume_ai' && <ResumeAnalyzer />}

        {activeTab === 'skill_matrix' && <SkillMatchingMatrix />}

        {activeTab === 'interviews' && <InterviewHub />}

        {activeTab === 'hiring_offers' && <OfferTrackerView />}

        {activeTab === 'candidates_portal' && (
          <CandidateDashboard onNavigateTab={(t) => setActiveTab(t)} />
        )}

        {activeTab === 'companies' && <CompanyDirectory />}

        {activeTab === 'compliance' && <ComplianceReportView />}

        {activeTab === 'analytics' && <RecruitmentAnalytics />}
      </main>

      {/* Global Modals launched from ATS or Navbar */}
      {showInterviewModal && (
        <InterviewSchedulerModal
          application={selectedAppForInterview}
          onClose={() => {
            setShowInterviewModal(false);
            setSelectedAppForInterview(null);
          }}
        />
      )}

      {showOfferModal && (
        <OfferGeneratorModal
          application={selectedAppForOffer}
          onClose={() => {
            setShowOfferModal(false);
            setSelectedAppForOffer(null);
          }}
        />
      )}

      {/* Toast Notifications Overlay */}
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
