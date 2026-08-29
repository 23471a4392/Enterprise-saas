import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Application } from '../../types';
import { Award, DollarSign, Calendar, Sparkles, CheckCircle2, X } from 'lucide-react';

interface OfferGeneratorModalProps {
  application?: Application | null;
  onClose: () => void;
}

export const OfferGeneratorModal: React.FC<OfferGeneratorModalProps> = ({
  application,
  onClose
}) => {
  const { createOffer, applications } = useApp();

  const [selectedAppId, setSelectedAppId] = useState(application?.id || applications[0]?.id || 'app-1');
  const activeApp = applications.find((a) => a.id === selectedAppId) || applications[0];

  const [baseSalary, setBaseSalary] = useState(215000);
  const [signOnBonus, setSignOnBonus] = useState(25000);
  const [equity, setEquity] = useState('0.35% ISO Stock Options (4-year vesting, 1-year cliff)');
  const [startDate, setStartDate] = useState('2026-09-15');
  const [expiryDate, setExpiryDate] = useState('2026-09-05');
  const [customizedNotes, setCustomizedNotes] = useState(
    'We are thrilled to invite you to join our team! You will be leading critical engineering initiatives.'
  );

  const handleCreateOffer = () => {
    if (!activeApp) return;

    createOffer({
      applicationId: activeApp.id,
      candidateId: activeApp.candidateId,
      candidateName: activeApp.candidateName,
      jobTitle: activeApp.jobTitle,
      companyName: activeApp.companyName,
      baseSalary,
      signOnBonus,
      equity,
      startDate,
      expiryDate,
      customizedNotes
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl p-6 space-y-5 animate-fade-in my-8">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-slate-100">Generate Official Offer Letter</h3>
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
                  {app.candidateName} — {app.jobTitle} ({app.companyName})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Base Annual Salary ($)</label>
              <input
                type="number"
                value={baseSalary}
                onChange={(e) => setBaseSalary(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Sign-On Bonus ($)</label>
              <input
                type="number"
                value={signOnBonus}
                onChange={(e) => setSignOnBonus(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Equity & Stock Grant Package</label>
            <input
              type="text"
              value={equity}
              onChange={(e) => setEquity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Target Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Offer Expiration Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Custom Terms & Executive Welcome</label>
            <textarea
              rows={3}
              value={customizedNotes}
              onChange={(e) => setCustomizedNotes(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={handleCreateOffer}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
          >
            <Award className="w-4 h-4" /> Issue Official Offer
          </button>
        </div>
      </div>
    </div>
  );
};
