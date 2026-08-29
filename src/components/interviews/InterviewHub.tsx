import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Interview } from '../../types';
import { InterviewSchedulerModal } from './InterviewSchedulerModal';
import { LiveInterviewRoom } from './LiveInterviewRoom';
import { 
  Calendar, Video, Plus, CheckCircle2, Clock, 
  Sparkles, ExternalLink, UserCheck, Star 
} from 'lucide-react';

export const InterviewHub: React.FC = () => {
  const { interviews, currentRole } = useApp();

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [activeLiveInterview, setActiveLiveInterview] = useState<Interview | null>(null);

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-400" /> Interview Hub & Evaluation Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Schedule technical rounds, join virtual interview rooms, and complete candidate evaluation scorecards.
          </p>
        </div>

        <button
          onClick={() => setShowScheduleModal(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white text-xs font-bold shadow-lg shadow-brand-500/25 flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" /> Schedule New Interview
        </button>
      </div>

      {/* Scheduled Interviews Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-400" /> Scheduled Interviews ({interviews.length})
        </h3>

        <div className="space-y-3">
          {interviews.map((item) => {
            const isCompleted = item.status === 'completed';
            const dateStr = new Date(item.scheduledAt).toLocaleString();

            return (
              <div
                key={item.id}
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-sm ${
                    isCompleted ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                  }`}>
                    <Video className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">{item.candidateName}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-brand-300 border border-slate-700">
                        {item.type} Round
                      </span>
                      {isCompleted && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          ✓ Scorecard Complete
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{item.jobTitle}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span>Interviewer: <strong className="text-slate-300">{item.interviewerName}</strong> ({item.interviewerRole})</span>
                      <span>•</span>
                      <span>{dateStr}</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {isCompleted && item.scorecard ? (
                    <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-right text-xs">
                      <div className="font-bold text-amber-400 flex items-center gap-1 justify-end">
                        <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.scorecard.overallRating}/5 Rating
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold uppercase">
                        {item.scorecard.recommendation.replace('_', ' ')}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveLiveInterview(item)}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 transition"
                    >
                      <Video className="w-4 h-4" /> Enter Live Room & Scorecard
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {showScheduleModal && (
        <InterviewSchedulerModal onClose={() => setShowScheduleModal(false)} />
      )}

      {activeLiveInterview && (
        <LiveInterviewRoom
          interview={activeLiveInterview}
          onClose={() => setActiveLiveInterview(null)}
        />
      )}
    </div>
  );
};
