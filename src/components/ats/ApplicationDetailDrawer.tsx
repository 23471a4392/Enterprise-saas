import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Application, ApplicationStage } from '../../types';
import { 
  X, CheckCircle2, User, Mail, Calendar, Sparkles, MessageSquare, 
  Send, FileText, ArrowRight, Award, Video, Ban 
} from 'lucide-react';

interface ApplicationDetailDrawerProps {
  application: Application;
  onClose: () => void;
  onOpenScheduleInterview?: (app: Application) => void;
  onOpenCreateOffer?: (app: Application) => void;
}

export const ApplicationDetailDrawer: React.FC<ApplicationDetailDrawerProps> = ({
  application,
  onClose,
  onOpenScheduleInterview,
  onOpenCreateOffer
}) => {
  const { updateApplicationStage, addRecruiterNote, candidates, jobs } = useApp();
  const [newNote, setNewNote] = useState('');

  const candidate = candidates.find((c) => c.id === application.candidateId);
  const job = jobs.find((j) => j.id === application.jobId);

  const stages: { stage: ApplicationStage; label: string }[] = [
    { stage: 'sourced', label: 'Sourced' },
    { stage: 'screened', label: 'Screened' },
    { stage: 'resume_matched', label: 'Resume Matched' },
    { stage: 'interview_scheduled', label: 'Interview Scheduled' },
    { stage: 'offer_extended', label: 'Offer Extended' },
    { stage: 'hired', label: 'Hired' }
  ];

  const handleAddNote = () => {
    if (newNote.trim()) {
      addRecruiterNote(application.id, newNote.trim());
      setNewNote('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-2xl h-full flex flex-col shadow-2xl animate-fade-in overflow-hidden">
        
        {/* Top Drawer Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={application.candidateAvatar}
              alt={application.candidateName}
              className="w-14 h-14 rounded-2xl object-cover border border-slate-700 shadow-md"
            />
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {application.candidateName}
              </h2>
              <p className="text-xs text-slate-400 font-medium">{application.candidateTitle}</p>
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                <span className="flex items-center gap-1 text-brand-300">
                  <Mail className="w-3 h-3" /> {application.candidateEmail}
                </span>
                <span>•</span>
                <span>Applied: {application.appliedDate}</span>
              </div>
            </div>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pipeline Stage Bar */}
        <div className="bg-slate-950/60 px-6 py-3 border-b border-slate-800 flex items-center justify-between overflow-x-auto">
          <span className="text-[11px] font-bold uppercase text-slate-500 shrink-0">Stage Workflow:</span>
          <div className="flex items-center gap-1">
            {stages.map((st) => {
              const isActive = application.stage === st.stage;
              return (
                <button
                  key={st.stage}
                  onClick={() => updateApplicationStage(application.id, st.stage)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {st.label}
                </button>
              );
            })}
            <button
              onClick={() => updateApplicationStage(application.id, 'rejected')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                application.stage === 'rejected'
                  ? 'bg-rose-500 text-white'
                  : 'bg-slate-800 text-rose-400 hover:bg-rose-950/40'
              }`}
            >
              Reject
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Quick AI Scorecard */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">AI Resume Score</span>
              <p className="text-xl font-extrabold text-brand-400 mt-0.5 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-purple-400" /> {application.resumeScore}/100
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Skill Match Index</span>
              <p className="text-xl font-extrabold text-emerald-400 mt-0.5">
                {application.skillMatchPercentage}%
              </p>
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onOpenScheduleInterview && onOpenScheduleInterview(application)}
              className="flex-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition"
            >
              <Video className="w-4 h-4 text-brand-400" /> Schedule Interview
            </button>
            <button
              onClick={() => onOpenCreateOffer && onOpenCreateOffer(application)}
              className="flex-1 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold flex items-center justify-center gap-1.5 border border-emerald-500/30 transition"
            >
              <Award className="w-4 h-4 text-emerald-400" /> Extend Offer
            </button>
          </div>

          {/* Screening Answers */}
          {Object.keys(application.screeningAnswers).length > 0 && (
            <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Screening Answers
              </h4>
              <div className="space-y-2">
                {Object.entries(application.screeningAnswers).map(([qId, ans]) => (
                  <div key={qId} className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 font-medium">Question Response:</span>
                    <p className="text-xs text-slate-200 mt-0.5 font-semibold">{ans}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Candidate Resume Preview Snippet */}
          <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-brand-400" /> Parsed Candidate Resume
              </h4>
            </div>
            <pre className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap max-h-48 leading-relaxed">
              {candidate?.resumeText || 'No plain text resume uploaded.'}
            </pre>
          </div>

          {/* Recruiter Notes & Activity Feed */}
          <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-brand-400" /> Hiring Team Notes ({application.recruiterNotes.length})
            </h4>

            <div className="space-y-2">
              {application.recruiterNotes.map((note, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                    <span className="font-bold text-slate-300">{note.author}</span>
                    <span>{note.date}</span>
                  </div>
                  <p className="text-slate-200">{note.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Add private evaluation note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddNote())}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-500"
              />
              <button
                onClick={handleAddNote}
                className="px-3 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
