import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, FileText, CheckCircle2, AlertTriangle, Lightbulb, RefreshCw, BarChart2 } from 'lucide-react';

export const ResumeAnalyzer: React.FC = () => {
  const { candidates, updateCandidateResume } = useApp();
  const [selectedCandidateId, setSelectedCandidateId] = useState(candidates[0]?.id || 'cand-1');

  const selectedCandidate = candidates.find((c) => c.id === selectedCandidateId) || candidates[0];
  const [resumeText, setResumeText] = useState(selectedCandidate?.resumeText || '');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [targetJobTitle, setTargetJobTitle] = useState('Senior Full Stack AI Engineer');

  // Compute live match metrics based on text keywords
  const calculateAnalysis = (text: string) => {
    const lower = text.toLowerCase();
    
    // Check keywords
    const keywords = ['react', 'typescript', 'node.js', 'python', 'postgresql', 'docker', 'kubernetes', 'aws', 'llm', 'architecture'];
    const matched = keywords.filter((k) => lower.includes(k));
    const missing = keywords.filter((k) => !lower.includes(k));

    const keywordMatchPct = Math.round((matched.length / keywords.length) * 100);
    const overallScore = Math.min(98, Math.max(65, Math.round(keywordMatchPct * 0.7 + (selectedCandidate.yearsOfExperience * 3.5))));

    return {
      score: overallScore,
      matched,
      missing,
      hardSkillsScore: Math.min(95, overallScore + 3),
      softSkillsScore: 90,
      formatScore: 94,
      experienceScore: Math.min(96, selectedCandidate.yearsOfExperience * 12)
    };
  };

  const analysis = calculateAnalysis(resumeText);

  const handleCandidateChange = (candId: string) => {
    setSelectedCandidateId(candId);
    const cand = candidates.find((c) => c.id === candId);
    if (cand) {
      setResumeText(cand.resumeText);
    }
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      updateCandidateResume(selectedCandidateId, resumeText);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
      {/* Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" /> AI Resume Parser & ATS Match Optimizer
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Instantly evaluate candidate resumes against target job requisitions, extract hard/soft skills, and spot experience gaps.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 font-semibold">Select Profile:</label>
          <select
            value={selectedCandidateId}
            onChange={(e) => handleCandidateChange(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-brand-500"
          >
            {candidates.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.title})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Analysis Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (5 cols): Resume Input & Target Requisition */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-brand-400" /> Plain Text Resume Content
              </h3>
              <button
                onClick={handleRunAnalysis}
                disabled={isAnalyzing}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-1 shadow-md shadow-purple-500/20 transition disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                {isAnalyzing ? 'Analyzing...' : 'Re-Analyze'}
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Target Position Benchmark</label>
              <input
                type="text"
                value={targetJobTitle}
                onChange={(e) => setTargetJobTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Resume Text Payload</label>
              <textarea
                rows={14}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste candidate resume text here..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono outline-none focus:border-purple-500 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): AI Scorecard Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Score Radial / Banner */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/30 flex items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Overall ATS Score</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{analysis.score}</span>
                <span className="text-sm font-semibold text-slate-400">/ 100</span>
              </div>
              <p className="text-xs text-slate-300">
                {analysis.score >= 85
                  ? 'Strong Match! Candidate qualifies for instant technical interview screening.'
                  : 'Moderate Match. Skill alignment recommended.'}
              </p>
            </div>

            {/* Circular Gauge visual */}
            <div className="w-24 h-24 rounded-full border-4 border-purple-500/30 bg-slate-950 flex flex-col items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
              <span className="text-2xl font-extrabold text-purple-300">{analysis.score}%</span>
              <span className="text-[9px] uppercase font-bold text-slate-400">ATS Pass</span>
            </div>
          </div>

          {/* Sub-Metrics Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="glass-panel p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Hard Skills</span>
              <p className="text-lg font-bold text-emerald-400 mt-1">{analysis.hardSkillsScore}%</p>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Soft Skills</span>
              <p className="text-lg font-bold text-brand-400 mt-1">{analysis.softSkillsScore}%</p>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">ATS Formatting</span>
              <p className="text-lg font-bold text-purple-300 mt-1">{analysis.formatScore}%</p>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Years Experience</span>
              <p className="text-lg font-bold text-amber-400 mt-1">{analysis.experienceScore}%</p>
            </div>
          </div>

          {/* Keyword Matching Breakdown */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-brand-400" /> Target Keyword Match Analysis
            </h3>

            <div>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4" /> Detected Required Tech Keywords ({analysis.matched.length})
              </span>
              <div className="flex flex-wrap gap-1.5">
                {analysis.matched.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 capitalize">
                    ✓ {m}
                  </span>
                ))}
              </div>
            </div>

            {analysis.missing.length > 0 && (
              <div>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-2">
                  <AlertTriangle className="w-4 h-4" /> Missing Key Keywords ({analysis.missing.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.missing.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 capitalize">
                      ! {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AI Recommendations */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-purple-400" /> AI Suggestions for Candidate & Recruiter
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-purple-400 font-bold">•</span>
                <span>Candidate has strong frontend engineering credentials in React 19 and TypeScript, but lacks explicit Docker orchestration metrics.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-purple-400 font-bold">•</span>
                <span>Recruiter Recommendation: Proceed to Technical Deep-dive round focusing on backend architecture and state synchronization.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
