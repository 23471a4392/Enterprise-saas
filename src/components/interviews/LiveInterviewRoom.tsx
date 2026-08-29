import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Interview } from '../../types';
import { Video, Star, CheckCircle2, XCircle, ArrowLeft, Send, Sparkles, MessageSquare } from 'lucide-react';

interface LiveInterviewRoomProps {
  interview: Interview;
  onClose: () => void;
}

export const LiveInterviewRoom: React.FC<LiveInterviewRoomProps> = ({ interview, onClose }) => {
  const { submitInterviewScorecard } = useApp();

  const [overallRating, setOverallRating] = useState(4);
  const [technicalDepthRating, setTechnicalDepthRating] = useState(5);
  const [problemSolvingRating, setProblemSolvingRating] = useState(4);
  const [communicationRating, setCommunicationRating] = useState(4);
  const [notes, setNotes] = useState(
    'Candidate demonstrated deep expertise in React 19 concurrent features and TypeScript generics. Solved the system design problem effectively.'
  );
  const [recommendation, setRecommendation] = useState<'strong_hire' | 'hire' | 'weak_hire' | 'reject'>('strong_hire');

  const handleSubmitScorecard = () => {
    submitInterviewScorecard(interview.id, {
      overallRating,
      technicalDepthRating,
      problemSolvingRating,
      communicationRating,
      notes,
      recommendation
    });
    onClose();
  };

  const renderStarRating = (val: number, setVal: (v: number) => void) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setVal(star)}
          className={`p-1 text-base transition ${star <= val ? 'text-amber-400' : 'text-slate-700 hover:text-slate-500'}`}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-fade-in overflow-hidden">
      {/* Top Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Room
          </button>
          <div>
            <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Video className="w-4 h-4 text-emerald-400 animate-pulse" /> Live Interview Session: {interview.candidateName}
            </h2>
            <p className="text-xs text-slate-400">{interview.jobTitle} • {interview.type.toUpperCase()} Round</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
            ● REC / LIVE SESSION
          </span>
        </div>
      </div>

      {/* Main Split Body: Video Feed Simulator (Left) + Scorecard Form (Right) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Left Video Call Simulator (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 p-6 flex flex-col justify-between space-y-4">
          <div className="relative flex-1 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop"
              alt={interview.candidateName}
              className="w-full h-full object-cover opacity-85"
            />

            {/* Video overlay badge */}
            <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> {interview.candidateName} (Candidate)
            </div>

            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-bold text-slate-300">
              Interviewer: {interview.interviewerName}
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Meeting Link: <code className="text-brand-300">{interview.meetingLink}</code></span>
            <span>Scheduled Duration: {interview.durationMinutes} mins</span>
          </div>
        </div>

        {/* Right Live Scorecard Panel (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border-l border-slate-800 p-6 overflow-y-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Structured Interview Scorecard
            </h3>
          </div>

          {/* Criteria Star Ratings */}
          <div className="space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Overall Assessment</span>
              {renderStarRating(overallRating, setOverallRating)}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Technical Depth</span>
              {renderStarRating(technicalDepthRating, setTechnicalDepthRating)}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Problem Solving Speed</span>
              {renderStarRating(problemSolvingRating, setProblemSolvingRating)}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Communication & Clarity</span>
              {renderStarRating(communicationRating, setCommunicationRating)}
            </div>
          </div>

          {/* Hiring Decision Recommendation */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">Hiring Decision Recommendation</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'strong_hire', label: 'Strong Hire 🔥', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
                { id: 'hire', label: 'Hire 👍', color: 'border-brand-500 bg-brand-950/40 text-brand-300' },
                { id: 'weak_hire', label: 'Weak Hire 🤔', color: 'border-amber-500 bg-amber-950/40 text-amber-300' },
                { id: 'reject', label: 'Reject ❌', color: 'border-rose-500 bg-rose-950/40 text-rose-300' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setRecommendation(opt.id as any)}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition ${
                    recommendation === opt.id ? opt.color : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evaluation Scratchpad Notes */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-400" /> Evaluation Notes & Code Review Summary
            </label>
            <textarea
              rows={6}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Record candidate responses, code efficiency, technical observations..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-brand-500 leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitScorecard}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition"
          >
            <CheckCircle2 className="w-4 h-4" /> Submit Scorecard & Complete Interview Round
          </button>
        </div>
      </div>
    </div>
  );
};
