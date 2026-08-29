import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { WorkType, EmploymentType, ExperienceLevel, ScreeningQuestion } from '../../types';
import { Sparkles, Plus, Trash2, ArrowRight, ArrowLeft, CheckCircle2, DollarSign, Briefcase } from 'lucide-react';

interface JobPostingWizardProps {
  onClose: () => void;
}

export const JobPostingWizard: React.FC<JobPostingWizardProps> = ({ onClose }) => {
  const { createJob, companies } = useApp();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [companyId, setCompanyId] = useState(companies[0]?.id || 'comp-1');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('Engineering');
  const [location, setLocation] = useState('San Francisco, CA (Hybrid)');
  const [workType, setWorkType] = useState<WorkType>('hybrid');
  const [employmentType, setEmploymentType] = useState<EmploymentType>('full-time');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('Senior');
  const [salaryMin, setSalaryMin] = useState(160000);
  const [salaryMax, setSalaryMax] = useState(210000);
  const [currency] = useState('USD');
  const [description, setDescription] = useState('');
  const [hiringManager, setHiringManager] = useState('Elena Rostova');

  // Dynamic Skill tags
  const [skillInput, setSkillInput] = useState('');
  const [requiredSkills, setRequiredSkills] = useState<string[]>([
    'React / Next.js', 'TypeScript', 'Node.js / Express', 'PostgreSQL'
  ]);
  const [requirementsInput, setRequirementsInput] = useState('');
  const [requirements, setRequirements] = useState<string[]>([
    '5+ years experience building production TypeScript web applications.',
    'Experience scaling RESTful APIs and PostgreSQL databases.'
  ]);

  // Screening questions
  const [questions, setQuestions] = useState<ScreeningQuestion[]>([
    { id: 'sq-1', question: 'How many years of commercial experience do you have in TypeScript/React?', type: 'text', required: true }
  ]);
  const [newQuestionText, setNewQuestionText] = useState('');

  const selectedCompany = companies.find((c) => c.id === companyId) || companies[0];

  const handleAddSkill = () => {
    if (skillInput.trim() && !requiredSkills.includes(skillInput.trim())) {
      setRequiredSkills([...requiredSkills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setRequiredSkills(requiredSkills.filter((s) => s !== skill));
  };

  const handleAddRequirement = () => {
    if (requirementsInput.trim()) {
      setRequirements([...requirements, requirementsInput.trim()]);
      setRequirementsInput('');
    }
  };

  const handleAddQuestion = () => {
    if (newQuestionText.trim()) {
      setQuestions([
        ...questions,
        { id: 'sq_' + Date.now(), question: newQuestionText.trim(), type: 'text', required: true }
      ]);
      setNewQuestionText('');
    }
  };

  const handleGenerateAIDescription = () => {
    const jobTitle = title || 'Senior Software Engineer';
    const aiDesc = `We are seeking an exceptional ${jobTitle} to join our high-impact team at ${selectedCompany.name}. 

In this role, you will lead the architecture and rollout of critical customer-facing product features, optimize system latency, and collaborate closely with product management and design teams. 

Key Responsibilities:
• Architect clean, scalable code in ${requiredSkills.join(', ')}.
• Perform code reviews, enforce unit testing coverage, and mentor team members.
• Participate in technical design discussions and incident root cause analysis.`;

    setDescription(aiDesc);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    createJob({
      companyId: selectedCompany.id,
      companyName: selectedCompany.name,
      companyLogo: selectedCompany.logo,
      title: title.trim(),
      department,
      location,
      workType,
      employmentType,
      experienceLevel,
      salaryMin,
      salaryMax,
      currency,
      description: description || `Join ${selectedCompany.name} as a ${title}!`,
      requirements,
      requiredSkills,
      niceToHaveSkills: ['Docker', 'GraphQL'],
      customQuestions: questions,
      hiringManager
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl animate-fade-in my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">Create New Job Requisition</h3>
              <p className="text-xs text-slate-400">Step {step} of 3 - Requisition Details & Skills</p>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s
                    ? 'bg-brand-500 text-white ring-2 ring-brand-500/50'
                    : step > s
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* STEP 1: Basic Requisition Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company Requisition</label>
                  <select
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-brand-500 outline-none"
                  >
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Job Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Full Stack AI Engineer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Department</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Hiring Manager</label>
                  <input
                    type="text"
                    value={hiringManager}
                    onChange={(e) => setHiringManager(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Location Mode</label>
                  <select
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value as WorkType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-brand-500 outline-none"
                  >
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">Onsite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Employment Type</label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                  >
                    <option value="full-time">Full-Time</option>
                    <option value="contract">Contract</option>
                    <option value="part-time">Part-Time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Seniority Level</label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value as ExperienceLevel)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                  >
                    <option value="Entry-Level">Entry-Level</option>
                    <option value="Mid-Level">Mid-Level</option>
                    <option value="Senior">Senior</option>
                    <option value="Lead">Lead</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Location Details</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none"
                />
              </div>

              {/* Salary Compensation Band */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-400" /> Salary Band Benchmark ({currency})
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    ${salaryMin.toLocaleString()} - ${salaryMax.toLocaleString()} / year
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] text-slate-400">Min Salary</span>
                    <input
                      type="number"
                      value={salaryMin}
                      onChange={(e) => setSalaryMin(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 outline-none mt-1"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400">Max Salary</span>
                    <input
                      type="number"
                      value={salaryMax}
                      onChange={(e) => setSalaryMax(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 outline-none mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Skills & Job Description AI */}
          {step === 2 && (
            <div className="space-y-5">
              {/* Mandatory Skills Matrix Tagging */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Required Candidate Skills (Used for AI Skill Matching)
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Add skill tag (e.g. PyTorch, React 19, AWS)"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-brand-500"
                  />
                  <button
                    onClick={handleAddSkill}
                    className="px-3 py-2 bg-brand-500 text-white rounded-xl text-xs font-semibold hover:bg-brand-600 transition"
                  >
                    Add Skill
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30 flex items-center gap-1.5"
                    >
                      {s}
                      <button onClick={() => handleRemoveSkill(s)} className="hover:text-white">×</button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Description Generator */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-300">Job Description & Responsibilities</label>
                  <button
                    onClick={handleGenerateAIDescription}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Auto-Generate with AI
                  </button>
                </div>
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide detailed responsibilities or click Auto-Generate with AI..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-brand-500"
                />
              </div>

              {/* Key Bullet Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Core Job Requirements</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="e.g. 5+ years experience in Node.js backend systems"
                    value={requirementsInput}
                    onChange={(e) => setRequirementsInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddRequirement())}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
                  />
                  <button
                    onClick={handleAddRequirement}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
                  >
                    Add
                  </button>
                </div>
                <ul className="space-y-1.5">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="text-xs text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                      <span>• {req}</span>
                      <button onClick={() => setRequirements(requirements.filter((_, i) => i !== idx))} className="text-slate-500 hover:text-rose-400">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* STEP 3: Screening Questions & Review */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="bg-brand-950/40 p-4 rounded-xl border border-brand-500/20">
                <h4 className="text-xs font-bold text-brand-300 mb-1">Candidate Application Screening Questions</h4>
                <p className="text-[11px] text-slate-400">Candidates will be prompted to answer these questions during 1-click apply.</p>
              </div>

              <div className="space-y-2">
                {questions.map((q, idx) => (
                  <div key={q.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-500">Question {idx + 1}</span>
                      <p className="text-xs text-slate-200 font-medium">{q.question}</p>
                    </div>
                    <button
                      onClick={() => setQuestions(questions.filter((item) => item.id !== q.id))}
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add custom candidate screening question..."
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddQuestion())}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
                />
                <button
                  onClick={handleAddQuestion}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Question
                </button>
              </div>

              {/* Final Summary Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <h5 className="text-xs font-bold text-slate-300">Requisition Summary Preview</h5>
                <div className="grid grid-cols-2 text-xs gap-y-1 text-slate-400">
                  <div>Title: <span className="text-slate-200 font-semibold">{title || 'Untitled Job'}</span></div>
                  <div>Company: <span className="text-slate-200 font-semibold">{selectedCompany.name}</span></div>
                  <div>Salary Range: <span className="text-emerald-400 font-semibold">${salaryMin.toLocaleString()} - ${salaryMax.toLocaleString()}</span></div>
                  <div>Location: <span className="text-slate-200 font-semibold">{location}</span></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={step === 1 ? onClose : () => setStep((s) => (s - 1) as any)}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> {step === 1 ? 'Cancel' : 'Back'}
          </button>

          {step < 3 ? (
            <button
              onClick={() => {
                if (step === 1 && !title.trim()) return;
                setStep((s) => (s + 1) as any);
              }}
              disabled={step === 1 && !title.trim()}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white flex items-center gap-1.5 transition disabled:opacity-50"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition"
            >
              <CheckCircle2 className="w-4 h-4" /> Publish Requisition
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
