import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Application, ApplicationStage } from '../../types';
import { ApplicationDetailDrawer } from './ApplicationDetailDrawer';
import { 
  Users, Filter, Sparkles, MoveRight, CheckCircle2, Award, 
  Video, Eye, Plus, ArrowRight, UserCheck 
} from 'lucide-react';

interface ATSBoardProps {
  onOpenScheduleInterview?: (app: Application) => void;
  onOpenCreateOffer?: (app: Application) => void;
}

export const ATSBoard: React.FC<ATSBoardProps> = ({
  onOpenScheduleInterview,
  onOpenCreateOffer
}) => {
  const { applications, jobs, selectedJobId, setSelectedJobId, updateApplicationStage } = useApp();
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Active Job Filter
  const currentJob = jobs.find((j) => j.id === selectedJobId) || jobs[0];

  // Applications for the selected job (or all)
  const jobApps = applications.filter((app) => !selectedJobId || app.jobId === selectedJobId);

  const columns: { stage: ApplicationStage; title: string; color: string; badgeColor: string }[] = [
    { stage: 'sourced', title: '1. Sourced', color: 'border-slate-700 bg-slate-900/50', badgeColor: 'bg-slate-800 text-slate-300' },
    { stage: 'screened', title: '2. Screened', color: 'border-blue-500/30 bg-blue-950/20', badgeColor: 'bg-blue-500/20 text-blue-300' },
    { stage: 'resume_matched', title: '3. Resume Matched', color: 'border-purple-500/30 bg-purple-950/20', badgeColor: 'bg-purple-500/20 text-purple-300' },
    { stage: 'interview_scheduled', title: '4. Interview', color: 'border-amber-500/30 bg-amber-950/20', badgeColor: 'bg-amber-500/20 text-amber-300' },
    { stage: 'offer_extended', title: '5. Offer Extended', color: 'border-emerald-500/30 bg-emerald-950/20', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
    { stage: 'hired', title: '6. Hired 🎉', color: 'border-brand-500/40 bg-brand-950/30', badgeColor: 'bg-brand-500 text-white' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Job Requisition Selector */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-brand-400" /> ATS Recruitment Kanban Board
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Drag candidates across pipeline stages or advance candidates directly.
          </p>
        </div>

        {/* Job Requisition Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">Requisition:</span>
          <select
            value={selectedJobId || ''}
            onChange={(e) => setSelectedJobId(e.target.value || null)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-brand-500"
          >
            <option value="">All Requisitions ({applications.length})</option>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>{j.title} - {j.companyName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Kanban Pipeline Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
        {columns.map((col) => {
          const colApps = jobApps.filter((app) => app.stage === col.stage);

          return (
            <div
              key={col.stage}
              className={`rounded-2xl border ${col.color} p-3.5 flex flex-col min-h-[500px] shadow-sm`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <span className="text-xs font-bold text-slate-200">{col.title}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${col.badgeColor}`}>
                  {colApps.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3 flex-1 overflow-y-auto">
                {colApps.map((app) => (
                  <div
                    key={app.id}
                    className="glass-card glass-card-hover p-3.5 rounded-xl border border-slate-800 space-y-2.5 cursor-pointer relative group"
                    onClick={() => setSelectedApp(app)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={app.candidateAvatar}
                          alt={app.candidateName}
                          className="w-8 h-8 rounded-lg object-cover border border-slate-700"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-100 group-hover:text-brand-300 transition">
                            {app.candidateName}
                          </h4>
                          <p className="text-[10px] text-slate-400 line-clamp-1">{app.candidateTitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Scores & Match */}
                    <div className="flex items-center justify-between text-[10px] bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800">
                      <span className="font-semibold text-purple-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Score {app.resumeScore}
                      </span>
                      <span className="font-bold text-emerald-400">
                        {app.skillMatchPercentage}% Match
                      </span>
                    </div>

                    {/* Footer Quick Actions */}
                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                      <span className="text-slate-500">{app.appliedDate}</span>

                      {/* Quick stage transition button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const stageOrder: ApplicationStage[] = [
                            'sourced', 'screened', 'resume_matched', 'interview_scheduled', 'offer_extended', 'hired'
                          ];
                          const idx = stageOrder.indexOf(app.stage);
                          if (idx !== -1 && idx < stageOrder.length - 1) {
                            updateApplicationStage(app.id, stageOrder[idx + 1]);
                          }
                        }}
                        title="Advance Candidate Stage"
                        className="px-2 py-1 bg-brand-500/20 text-brand-300 rounded font-semibold hover:bg-brand-500/40 transition flex items-center gap-0.5"
                      >
                        Advance →
                      </button>
                    </div>
                  </div>
                ))}

                {colApps.length === 0 && (
                  <div className="h-32 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-600 text-xs">
                    Empty Stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Candidate Detail Drawer */}
      {selectedApp && (
        <ApplicationDetailDrawer
          application={selectedApp}
          onClose={() => setSelectedApp(null)}
          onOpenScheduleInterview={onOpenScheduleInterview}
          onOpenCreateOffer={onOpenCreateOffer}
        />
      )}
    </div>
  );
};
