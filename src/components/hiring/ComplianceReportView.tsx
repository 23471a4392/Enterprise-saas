import React from 'react';
import { ComplianceEngine } from '../../services/complianceEngine';
import { ShieldCheck, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';

export const ComplianceReportView: React.FC = () => {
  const rules = ComplianceEngine.getActiveComplianceRules();

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> HR Regulatory & Equal Opportunity Governance
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Automated compliance verification across EEOC, GDPR, Pay Transparency, and Right to Work standards.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {rules.map((rule) => (
          <div key={rule.id} className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-brand-300">
                  {rule.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">{rule.region}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100">{rule.title}</h3>
              <p className="text-xs text-slate-300">{rule.description}</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30 shrink-0">
              <CheckCircle2 className="w-4 h-4" /> {rule.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
