import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ResumeBuilder } from './ResumeBuilder';
import { SkillAssessmentRunner } from './SkillAssessmentRunner';
import { 
  Users, FileText, CheckCircle2, Clock, Award, 
  Sparkles, ExternalLink, Briefcase, ChevronRight 
} from 'lucide-react';

interface CandidateDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const CandidateDashboard: React.FC<CandidateDashboardProps> = ({ onNavigateTab }) => {
  const { candidates, applications, jobs } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'builder' | 'assessment'>('overview');

  const currentCandidate = candidates[0]; // Alexandre Mercer
  const candidateApps = applications.filter((a) => a.candidateId === currentCandidate.id);

  if (activeSubTab === 'builder') {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveSubTab('overview')}
          className="text-xs text-brand-400 font-semibold hover:underline"
        >
          ← Back to Candidate Hub
        </button>
        <ResumeBuilder />
      </div>
    );
  }

  if (activeSubTab === 'assessment') {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveSubTab('overview')}
          className="text-xs text-brand-400 font-semibold hover:underline"
        >
          ← Back to Candidate Hub
        </button>
        <SkillAssessmentRunner />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Candidate Profile Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentCandidate.avatar}
            alt={currentCandidate.name}
            className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-slate-100">{currentCandidate.name}</h1>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                ✓ Verified Talent
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">{currentCandidate.title} • {currentCandidate.location}</p>
            <p className="text-xs text-slate-300 mt-1 line-clamp-1">{currentCandidate.bio}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('builder')}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 flex items-center gap-1.5 shrink-0 transition"
          >
            <FileText className="w-4 h-4" /> Resume Builder
          </button>
          <button
            onClick={() => setActiveSubTab('assessment')}
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-500/20 flex items-center gap-1.5 shrink-0 transition"
          >
            <Award className="w-4 h-4" /> Skill Verification Test
          </button>
        </div>
      </div>

      {/* Applications Tracker */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-400" /> Active Job Applications ({candidateApps.length})
          </h3>
          <button
            onClick={() => onNavigateTab('jobs')}
            className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
          >
            Find More Jobs <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {candidateApps.map((app) => (
            <div key={app.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-slate-100">{app.jobTitle}</h4>
                <p className="text-[11px] text-slate-400">{app.companyName} • Applied on {app.appliedDate}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-lg border border-purple-500/30">
                  {app.skillMatchPercentage}% Match Fit
                </span>
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-lg bg-brand-500 text-white">
                  {app.stage.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
