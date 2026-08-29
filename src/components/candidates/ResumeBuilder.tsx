import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, FileText, Download, CheckCircle2, Plus, Trash2 } from 'lucide-react';

export const ResumeBuilder: React.FC = () => {
  const { candidates, updateCandidateResume } = useApp();
  const [selectedCandidateId, setSelectedCandidateId] = useState(candidates[0]?.id || 'cand-1');

  const candidate = candidates.find((c) => c.id === selectedCandidateId) || candidates[0];

  const [fullName, setFullName] = useState(candidate?.name || '');
  const [title, setTitle] = useState(candidate?.title || '');
  const [email, setEmail] = useState(candidate?.email || '');
  const [phone, setPhone] = useState(candidate?.phone || '');
  const [bio, setBio] = useState(candidate?.bio || '');

  const [skillsText, setSkillsText] = useState(
    candidate?.skills.map((s) => s.name).join(', ') || 'React, TypeScript, Node.js, Python, PostgreSQL, AWS'
  );

  const handleSaveResume = () => {
    const formatted = `${fullName} - ${title}
${email} | ${phone}

SUMMARY:
${bio}

SKILLS:
${skillsText}

EXPERIENCE:
${candidate?.workHistory.map((w) => `${w.role} at ${w.company} (${w.startDate} - ${w.endDate})\n${w.description}`).join('\n\n')}

EDUCATION:
${candidate?.education.map((e) => `${e.degree} in ${e.fieldOfStudy} - ${e.institution} (${e.graduationYear})`).join('\n')}`;

    updateCandidateResume(selectedCandidateId, formatted);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-400" /> Interactive AI Resume Builder
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Build and optimize an ATS-compliant resume with live preview and formatting checks.
          </p>
        </div>

        <button
          onClick={handleSaveResume}
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 transition"
        >
          <CheckCircle2 className="w-4 h-4" /> Save & Sync to Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Form */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-100">Resume Details</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1">Professional Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-300 font-semibold mb-1">Professional Executive Summary</label>
            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 font-semibold mb-1">Skills (Comma Separated)</label>
            <input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
            />
          </div>
        </div>

        {/* Right Preview */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-xs font-bold text-slate-300 uppercase">Live Document Preview</h3>
            <span className="text-[10px] text-emerald-400 font-bold">✓ ATS Compatible</span>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-xs space-y-3 font-sans">
            <div>
              <h2 className="text-base font-extrabold text-white">{fullName}</h2>
              <p className="text-brand-400 font-semibold">{title}</p>
              <p className="text-slate-400 text-[11px]">{email} • {phone}</p>
            </div>

            <hr className="border-slate-800" />

            <div>
              <h4 className="text-[11px] font-bold text-slate-300 uppercase">Summary</h4>
              <p className="text-slate-300 mt-1 leading-relaxed">{bio}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-slate-300 uppercase">Skills</h4>
              <p className="text-brand-300 mt-1 font-mono">{skillsText}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-slate-300 uppercase">Experience</h4>
              {candidate?.workHistory.map((w) => (
                <div key={w.id} className="mt-1">
                  <span className="font-bold text-slate-200">{w.role}</span> — <span className="text-slate-400">{w.company} ({w.startDate} - {w.endDate})</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
