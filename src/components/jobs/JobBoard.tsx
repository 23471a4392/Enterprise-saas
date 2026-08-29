import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Job, WorkType, EmploymentType, ExperienceLevel } from '../../types';
import { JobPostingWizard } from './JobPostingWizard';
import { JobDetailView } from './JobDetailView';
import { 
  Search, MapPin, DollarSign, Briefcase, Plus, Filter, 
  Sparkles, CheckCircle2, SlidersHorizontal, ArrowUpRight 
} from 'lucide-react';

interface JobBoardProps {
  onNavigateToATS?: () => void;
}

export const JobBoard: React.FC<JobBoardProps> = ({ onNavigateToATS }) => {
  const { jobs, currentRole, setSelectedJobId } = useApp();
  
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showWizard, setShowWizard] = useState(false);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [workTypeFilter, setWorkTypeFilter] = useState<string>('all');
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState<string>('all');
  const [experienceLevelFilter, setExperienceLevelFilter] = useState<string>('all');
  const [minSalaryFilter, setMinSalaryFilter] = useState<number>(0);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string>('all');

  // Collect unique skills across all jobs
  const availableSkills = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach((j) => j.requiredSkills.forEach((s) => set.add(s)));
    return Array.from(set);
  }, [jobs]);

  // Filter logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Role status filter
      if (job.status !== 'active' && currentRole === 'candidate') return false;

      // Text search
      const textMatch =
        searchQuery === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Dropdown filters
      const workTypeMatch = workTypeFilter === 'all' || job.workType === workTypeFilter;
      const employmentTypeMatch = employmentTypeFilter === 'all' || job.employmentType === employmentTypeFilter;
      const experienceMatch = experienceLevelFilter === 'all' || job.experienceLevel === experienceLevelFilter;
      const salaryMatch = job.salaryMax >= minSalaryFilter;
      const skillMatch = selectedSkillFilter === 'all' || job.requiredSkills.includes(selectedSkillFilter);

      return textMatch && workTypeMatch && employmentTypeMatch && experienceMatch && salaryMatch && skillMatch;
    });
  }, [jobs, searchQuery, workTypeFilter, employmentTypeFilter, experienceLevelFilter, minSalaryFilter, selectedSkillFilter, currentRole]);

  if (selectedJob) {
    return (
      <JobDetailView
        job={selectedJob}
        onBack={() => setSelectedJob(null)}
        onNavigateToATS={onNavigateToATS}
      />
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner & Action */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-brand-400" /> Active Job Requisitions & Talent Matcher
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Browse {filteredJobs.length} verified open positions with real-time AI skill scoring.
          </p>
        </div>

        {(currentRole === 'recruiter' || currentRole === 'hiring_manager' || currentRole === 'admin') && (
          <button
            onClick={() => setShowWizard(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white text-xs font-bold shadow-lg shadow-brand-500/25 flex items-center gap-2 shrink-0 transition"
          >
            <Plus className="w-4 h-4" /> Post New Job Requisition
          </button>
        )}
      </div>

      {/* Multi-faceted Search & Filter Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          {/* Main Keyword Search */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by job title, tech stack (e.g. React, PyTorch, Kubernetes), or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-brand-500 outline-none"
            />
          </div>

          {/* Quick Select Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <select
              value={workTypeFilter}
              onChange={(e) => setWorkTypeFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none"
            >
              <option value="all">All Modes</option>
              <option value="remote">Remote Only</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">Onsite</option>
            </select>

            <select
              value={experienceLevelFilter}
              onChange={(e) => setExperienceLevelFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none"
            >
              <option value="all">All Seniority</option>
              <option value="Entry-Level">Entry-Level</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior">Senior</option>
              <option value="Lead">Lead</option>
            </select>

            <select
              value={selectedSkillFilter}
              onChange={(e) => setSelectedSkillFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none max-w-[150px]"
            >
              <option value="all">All Tech Skills</option>
              {availableSkills.map((sk) => (
                <option key={sk} value={sk}>{sk}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Salary Slider */}
        <div className="flex items-center gap-4 pt-2 border-t border-slate-800/60">
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Min Base Salary: ${minSalaryFilter.toLocaleString()}+
          </span>
          <input
            type="range"
            min="0"
            max="250000"
            step="10000"
            value={minSalaryFilter}
            onChange={(e) => setMinSalaryFilter(Number(e.target.value))}
            className="flex-1 accent-brand-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between cursor-pointer group"
          >
            <div className="space-y-3">
              {/* Card Top Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="w-11 h-11 rounded-xl object-cover border border-slate-700 shadow-sm"
                  />
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 group-hover:text-brand-300 transition">
                      {job.companyName}
                    </h3>
                    <h2 className="text-sm font-bold text-slate-100 group-hover:text-white line-clamp-1">
                      {job.title}
                    </h2>
                  </div>
                </div>

                <div className="p-1 rounded-lg text-slate-500 group-hover:text-brand-400 group-hover:bg-brand-500/10 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-brand-500/10 text-brand-300 border border-brand-500/20 font-medium capitalize">
                  {job.workType}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                  {job.experienceLevel}
                </span>
              </div>

              {/* Description snippet */}
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {job.description}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1 pt-1">
                {job.requiredSkills.slice(0, 4).map((sk) => (
                  <span
                    key={sk}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-medium border border-slate-800"
                  >
                    {sk}
                  </span>
                ))}
                {job.requiredSkills.length > 4 && (
                  <span className="text-[10px] text-slate-500 self-center">
                    +{job.requiredSkills.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-extrabold text-emerald-400">
                ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
              </span>

              <span className="text-[11px] font-semibold text-slate-400 group-hover:text-brand-400 flex items-center gap-1">
                View & Apply →
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="glass-panel p-12 text-center rounded-2xl border border-slate-800 space-y-3">
          <Filter className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="text-sm font-bold text-slate-300">No jobs match your active filters</h3>
          <p className="text-xs text-slate-400">Try widening your search terms or resetting the salary slider.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setWorkTypeFilter('all');
              setEmploymentTypeFilter('all');
              setExperienceLevelFilter('all');
              setMinSalaryFilter(0);
              setSelectedSkillFilter('all');
            }}
            className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700 transition"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Job Wizard Modal */}
      {showWizard && <JobPostingWizard onClose={() => setShowWizard(false)} />}
    </div>
  );
};
