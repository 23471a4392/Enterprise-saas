import React from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { 
  Briefcase, Users, Building2, FileCheck, Radar, Calendar, 
  Award, BarChart3, Sparkles, RefreshCw, UserCheck, ShieldAlert, ShieldCheck 
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { currentRole, setCurrentRole, resetDemoData, applications, jobs } = useApp();

  const activeApplicationsCount = applications.filter((a) => a.stage !== 'rejected').length;
  const activeJobsCount = jobs.filter((j) => j.status === 'active').length;

  const roleConfigs: Record<UserRole, { label: string; icon: React.ReactNode; color: string; badge: string }> = {
    recruiter: { label: 'Recruiter / Employer', icon: <Briefcase className="w-4 h-4" />, color: 'bg-brand-500/20 text-brand-400 border-brand-500/30', badge: 'ATS & Sourcing' },
    hiring_manager: { label: 'Hiring Manager', icon: <UserCheck className="w-4 h-4" />, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', badge: 'Interviews & Offers' },
    candidate: { label: 'Candidate (Job Seeker)', icon: <Users className="w-4 h-4" />, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', badge: 'Career Portal' },
    admin: { label: 'System Admin', icon: <ShieldAlert className="w-4 h-4" />, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', badge: 'Full Access' }
  };

  const navItems = [
    { id: 'jobs', label: 'Jobs Board', icon: <Briefcase className="w-4 h-4" />, badge: activeJobsCount },
    { id: 'ats', label: 'ATS Pipeline', icon: <FileCheck className="w-4 h-4" />, badge: activeApplicationsCount, roles: ['recruiter', 'hiring_manager', 'admin'] },
    { id: 'resume_ai', label: 'Resume Parser AI', icon: <Sparkles className="w-4 h-4 text-purple-400" />, isNew: true },
    { id: 'skill_matrix', label: 'Skill Matching', icon: <Radar className="w-4 h-4 text-brand-400" /> },
    { id: 'interviews', label: 'Interview Hub', icon: <Calendar className="w-4 h-4" /> },
    { id: 'hiring_offers', label: 'Hiring & Offers', icon: <Award className="w-4 h-4" /> },
    { id: 'candidates_portal', label: 'Candidates Portal', icon: <Users className="w-4 h-4" /> },
    { id: 'companies', label: 'Companies', icon: <Building2 className="w-4 h-4" /> },
    { id: 'compliance', label: 'HR Compliance', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, roles: ['recruiter', 'hiring_manager', 'admin'] }
  ];

  const visibleNavItems = navItems.filter((item) => !item.roles || item.roles.includes(currentRole));

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('jobs')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
              <Sparkles className="w-6 h-6 text-white animate-pulse-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white">Talent<span className="text-brand-400">Pulse</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">Enterprise</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">AI-Powered End-to-End Recruitment Suite</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <span className="text-xs font-medium text-slate-400 px-2 hidden md:inline">Role View:</span>
            <div className="flex items-center gap-1">
              {(Object.keys(roleConfigs) as UserRole[]).map((role) => {
                const config = roleConfigs[role];
                const isActive = currentRole === role;
                return (
                  <button
                    key={role}
                    onClick={() => setCurrentRole(role)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? `${config.color} border shadow-sm`
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {config.icon}
                    <span className="hidden lg:inline">{config.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetDemoData}
              title="Reset Demo Data to Initial State"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-800/80 hover:bg-slate-800 hover:text-slate-200 rounded-lg border border-slate-700 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Data</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-950/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto py-2 no-scrollbar">
            {visibleNavItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>

                  {item.badge !== undefined && (
                    <span
                      className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.isNew && (
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-300 text-[9px] font-bold border border-purple-500/40 animate-pulse">
                      AI PRO
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
