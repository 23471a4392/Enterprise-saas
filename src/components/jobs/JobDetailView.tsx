import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Job } from '../../types';
import { 
  Building2, MapPin, DollarSign, Briefcase, Calendar, CheckCircle2, 
  Sparkles, ArrowLeft, Send, UserCheck, ShieldCheck 
} from 'lucide-react';

interface JobDetailViewProps {
  job: Job;
  onBack: () => void;
  onNavigateToATS?: () => void;
}

export const JobDetailView: React.FC<JobDetailViewProps> = ({ job, onBack, onNavigateToATS }) => {
  const { currentRole, candidates, applyForJob, applications, setSelectedJobId } = useApp();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState(candidates[0]?.id || 'cand-1');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const existingApp = applications.find(
    (a) => a.jobId === job.id && a.candidateId === selectedCandidateId
  );

  const handleApplySubmit = () => {
    applyForJob(job.id, selectedCandidateId, answers);
    setShowApplyModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Job Listings
        </button>

        {(currentRole === 'recruiter' || currentRole === 'hiring_manager' || currentRole === 'admin') && (
          <button
            onClick={() => {
              setSelectedJobId(job.id);
              if (onNavigateToATS) onNavigateToATS();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 hover:bg-brand-500/30 transition"
          >
            <UserCheck className="w-4 h-4" /> View Candidates in ATS Kanban Pipeline ({job.applicantsCount})
          </button>
        )}
      </div>

      {/* Hero Banner Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shadow-md shrink-0"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-100 tracking-tight">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400">
                <span className="font-semibold text-brand-400 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" /> {job.companyName}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                </span>
                <span>•</span>
                <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                  {job.workType}
                </span>
                <span>•</span>
                <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                  {job.employmentType}
                </span>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div>
            {existingApp ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" /> Applied ({existingApp.stage.replace('_', ' ')})
              </div>
            ) : (
              <button
                onClick={() => setShowApplyModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white text-xs font-bold shadow-lg shadow-brand-500/25 transition transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" /> Apply Now (1-Click)
              </button>
            )}
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div>
            <span className="text-[11px] text-slate-500 uppercase font-semibold">Compensation</span>
            <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center">
              <DollarSign className="w-4 h-4" /> ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
            </p>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 uppercase font-semibold">Experience</span>
            <p className="text-sm font-bold text-slate-200 mt-0.5">{job.experienceLevel}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 uppercase font-semibold">Hiring Manager</span>
            <p className="text-sm font-bold text-slate-200 mt-0.5">{job.hiringManager}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 uppercase font-semibold">Posted Date</span>
            <p className="text-sm font-bold text-slate-300 mt-0.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {job.postedDate}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Description & Skills Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2/3): Description & Requirements */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-brand-400" /> Role Description
            </h3>
            <div className="text-xs leading-relaxed text-slate-300 whitespace-pre-line">
              {job.description}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Requirements & Qualifications
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (1/3): Required Skills & Company Badge */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Mandatory Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>

            {job.niceToHaveSkills && job.niceToHaveSkills.length > 0 && (
              <>
                <h4 className="text-[11px] font-semibold text-slate-400 uppercase mt-4">Nice to Have</h4>
                <div className="flex flex-wrap gap-1.5">
                  {job.niceToHaveSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> Verified Requisition
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              This job posting is directly managed by {job.companyName}'s recruitment team with guaranteed candidate feedback within 3 business days.
            </p>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl p-6 space-y-5 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-100">Submit Application</h3>
                <p className="text-xs text-slate-400">{job.title} at {job.companyName}</p>
              </div>
              <button onClick={() => setShowApplyModal(false)} className="text-slate-500 hover:text-white">✕</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Applying Persona</label>
                <select
                  value={selectedCandidateId}
                  onChange={(e) => setSelectedCandidateId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                >
                  {candidates.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.title})</option>
                  ))}
                </select>
              </div>

              {job.customQuestions.length > 0 && (
                <div className="space-y-3 border-t border-slate-800 pt-3">
                  <span className="text-xs font-bold text-brand-400">Screening Questions</span>
                  {job.customQuestions.map((q) => (
                    <div key={q.id}>
                      <label className="block text-xs text-slate-300 mb-1">{q.question}</label>
                      <input
                        type="text"
                        placeholder="Your answer..."
                        value={answers[q.id] || ''}
                        onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Resume Attached:</span>
                <span className="font-semibold text-emerald-400">Verified Profile Resume</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4">
              <button
                onClick={() => setShowApplyModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleApplySubmit}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white flex items-center gap-1.5 shadow-lg shadow-brand-500/20"
              >
                <Send className="w-4 h-4" /> Confirm & Send Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
