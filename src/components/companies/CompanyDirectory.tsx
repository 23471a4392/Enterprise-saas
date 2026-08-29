import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Company } from '../../types';
import { Building2, MapPin, Users, Star, ExternalLink, Briefcase, Award } from 'lucide-react';

export const CompanyDirectory: React.FC = () => {
  const { companies, jobs, setSelectedJobId } = useApp();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-brand-400" /> Enterprise Employer Directory
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Explore verified hiring partners, engineering cultures, tech stacks, and open requisitions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {companies.map((comp) => {
          const compJobs = jobs.filter((j) => j.companyId === comp.id && j.status === 'active');

          return (
            <div key={comp.id} className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={comp.logo}
                  alt={comp.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-700 shadow-md shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-100">{comp.name}</h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {comp.rating}
                    </span>
                  </div>
                  <p className="text-xs text-brand-400 font-medium">{comp.industry}</p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                    <span><MapPin className="w-3 h-3 inline" /> {comp.location}</span>
                    <span>•</span>
                    <span>{comp.companySize} Employees</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{comp.description}</p>

              {/* Open Positions Pills */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400">Open Requisitions:</span>
                <span className="font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  {compJobs.length} Positions Active
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
