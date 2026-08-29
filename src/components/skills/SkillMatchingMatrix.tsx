import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Radar, CheckCircle2, AlertTriangle, Sparkles, UserCheck, ArrowRight } from 'lucide-react';

export const SkillMatchingMatrix: React.FC = () => {
  const { candidates, jobs } = useApp();
  const [selectedCandidateId, setSelectedCandidateId] = useState(candidates[0]?.id || 'cand-1');
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id || 'job-1');

  const candidate = candidates.find((c) => c.id === selectedCandidateId) || candidates[0];
  const job = jobs.find((j) => j.id === selectedJobId) || jobs[0];

  // Compare candidate skills with job required skills
  const skillComparisons = job.requiredSkills.map((reqSkill) => {
    const found = candidate.skills.find(
      (s) => s.name.toLowerCase().includes(reqSkill.toLowerCase()) || reqSkill.toLowerCase().includes(s.name.toLowerCase())
    );

    const candRating = found ? found.rating : 6.0;
    const targetRating = 8.5;

    return {
      skillName: reqSkill,
      candRating,
      targetRating,
      status: candRating >= targetRating ? 'exceeds' : candRating >= 7.0 ? 'matches' : 'gap'
    };
  });

  const totalMatchScore = Math.round(
    (skillComparisons.reduce((acc, curr) => acc + curr.candRating, 0) / (skillComparisons.length * 10)) * 100
  );

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Radar className="w-5 h-5 text-brand-400" /> AI Skill Matching Engine & Gap Matrix
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Compare candidate skill proficiency against job requisition thresholds to make data-driven hiring decisions.
          </p>
        </div>

        {/* Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <div>
            <select
              value={selectedCandidateId}
              onChange={(e) => setSelectedCandidateId(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold rounded-xl px-3 py-2 outline-none"
            >
              {candidates.map((c) => (
                <option key={c.id} value={c.id}>Candidate: {c.name}</option>
              ))}
            </select>
          </div>
          <span className="text-slate-500 text-xs">vs</span>
          <div>
            <select
              value={selectedJobId}
              onChange={(e) => setSelectedJobId(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold rounded-xl px-3 py-2 outline-none"
            >
              {jobs.map((j) => (
                <option key={j.id} value={j.id}>Job: {j.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Score Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-brand-950/40 via-slate-900 to-indigo-950/40 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={candidate.avatar}
            alt={candidate.name}
            className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shadow-md"
          />
          <div>
            <h2 className="text-lg font-bold text-slate-100">{candidate.name}</h2>
            <p className="text-xs text-slate-400 font-medium">Applied for: <span className="text-brand-300 font-semibold">{job.title}</span> ({job.companyName})</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[10px] font-bold border border-brand-500/30">
                {candidate.yearsOfExperience} Yrs Experience
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                Verified Candidate
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-extrabold uppercase text-slate-400">Match Index</span>
          <div className="text-3xl font-extrabold text-emerald-400">{totalMatchScore}%</div>
          <span className="text-[10px] text-emerald-300 font-semibold">High Match Fit</span>
        </div>
      </div>

      {/* Skill Breakdown Table */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" /> Mandatory Skills Proficiency Matrix
        </h3>

        <div className="space-y-3">
          {skillComparisons.map((item) => (
            <div key={item.skillName} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-200">{item.skillName}</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">Target: {item.targetRating}/10</span>
                  <span className={`font-bold ${
                    item.status === 'exceeds' ? 'text-emerald-400' : item.status === 'matches' ? 'text-brand-300' : 'text-amber-400'
                  }`}>
                    Candidate: {item.candRating}/10
                  </span>
                </div>
              </div>

              {/* Progress bar visual */}
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden flex">
                <div
                  className={`h-full transition-all ${
                    item.status === 'exceeds' ? 'bg-emerald-500' : item.status === 'matches' ? 'bg-brand-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${(item.candRating / 10) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                <span>Category Weighting: High</span>
                <span className="capitalize text-slate-300 font-medium">
                  Status: {item.status === 'exceeds' ? '✓ Exceeds Threshold' : item.status === 'matches' ? '✓ Meets Standard' : '! Minor Skill Gap'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
