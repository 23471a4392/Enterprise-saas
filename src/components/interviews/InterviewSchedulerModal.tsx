import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Application } from '../../types';
import { Video, Calendar, Clock, User, CheckCircle2, Link as LinkIcon, X } from 'lucide-react';

interface InterviewSchedulerModalProps {
  application?: Application | null;
  onClose: () => void;
}

export const InterviewSchedulerModal: React.FC<InterviewSchedulerModalProps> = ({
  application,
  onClose
}) => {
  const { scheduleInterview, applications, candidates, jobs } = useApp();

  const [selectedAppId, setSelectedAppId] = useState(application?.id || applications[0]?.id || 'app-1');
  const [interviewerName, setInterviewerName] = useState('Elena Rostova');
  const [interviewerRole, setInterviewerRole] = useState('VP of Engineering');
  const [date, setDate] = useState('2026-08-31');
  const [time, setTime] = useState('14:00');
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [type, setType] = useState<'screening' | 'technical' | 'system_design' | 'culture_fit' | 'executive'>('technical');

  const activeApp = applications.find((a) => a.id === selectedAppId) || applications[0];

  const handleSchedule = () => {
    if (!activeApp) return;

    const scheduledIso = new Date(`${date}T${time}:00`).toISOString();
    const roomCode = Math.floor(1000 + Math.random() * 9000);

    scheduleInterview({
      applicationId: activeApp.id,
      candidateId: activeApp.candidateId,
      candidateName: activeApp.candidateName,
      jobTitle: activeApp.jobTitle,
      interviewerName,
      interviewerRole,
      scheduledAt: scheduledIso,
      durationMinutes,
      type,
      meetingLink: `https://meet.talentpulse-example.com/room-${roomCode}`
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl p-6 space-y-5 animate-fade-in">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-brand-400" />
            <h3 className="text-base font-bold text-slate-100">Schedule Interview Round</h3>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Target Application & Candidate</label>
            <select
              value={selectedAppId}
              onChange={(e) => setSelectedAppId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
            >
              {applications.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.candidateName} — {app.jobTitle}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Interview Round Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
              >
                <option value="screening">Recruiter Screening</option>
                <option value="technical">Technical Coding</option>
                <option value="system_design">System Architecture</option>
                <option value="culture_fit">Culture & Team Fit</option>
                <option value="executive">Executive Final</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Duration</label>
              <select
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
              >
                <option value={30}>30 Minutes</option>
                <option value={45}>45 Minutes</option>
                <option value={60}>60 Minutes</option>
                <option value={90}>90 Minutes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Start Time (24h)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Lead Interviewer</label>
              <input
                type="text"
                value={interviewerName}
                onChange={(e) => setInterviewerName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Interviewer Role</label>
              <input
                type="text"
                value={interviewerRole}
                onChange={(e) => setInterviewerRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><LinkIcon className="w-3.5 h-3.5 text-brand-400" /> Virtual Room URL:</span>
            <span className="font-mono text-[10px] text-brand-300">Auto-Generated Link</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={handleSchedule}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white flex items-center gap-1.5 shadow-lg shadow-brand-500/20"
          >
            <Calendar className="w-4 h-4" /> Confirm Schedule & Send Invite
          </button>
        </div>
      </div>
    </div>
  );
};
