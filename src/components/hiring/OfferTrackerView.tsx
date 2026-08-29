import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Offer } from '../../types';
import { OfferGeneratorModal } from './OfferGeneratorModal';
import confetti from 'canvas-confetti';
import { Award, Plus, CheckCircle2, DollarSign, Calendar, Sparkles, FileCheck, ShieldCheck } from 'lucide-react';

export const OfferTrackerView: React.FC = () => {
  const { offers, updateOfferStatus, currentRole } = useApp();
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleAcceptOffer = (offerId: string) => {
    // Fire confetti effect
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }

    updateOfferStatus(offerId, 'accepted');
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" /> Hiring Offers & E-Signature Hub
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Track active offer letters, compensation packages, and candidate e-signature status.
          </p>
        </div>

        {(currentRole === 'recruiter' || currentRole === 'hiring_manager' || currentRole === 'admin') && (
          <button
            onClick={() => setShowOfferModal(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition"
          >
            <Plus className="w-4 h-4" /> Issue Offer Letter
          </button>
        )}
      </div>

      {/* Offers Cards */}
      <div className="space-y-4">
        {offers.map((offer) => {
          const isAccepted = offer.status === 'accepted';

          return (
            <div
              key={offer.id}
              className={`glass-panel p-6 rounded-2xl border ${
                isAccepted ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-slate-800'
              } space-y-4 shadow-lg`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-100">{offer.candidateName}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      isAccepted
                        ? 'bg-emerald-500 text-white'
                        : offer.status === 'sent'
                        ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isAccepted ? '✓ OFFER ACCEPTED (HIRED)' : `STATUS: ${offer.status.toUpperCase()}`}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{offer.jobTitle} • {offer.companyName}</p>
                </div>

                {/* E-Signature Simulation */}
                <div>
                  {!isAccepted ? (
                    <button
                      onClick={() => handleAcceptOffer(offer.id)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition animate-bounce-subtle"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Simulate E-Signature & Accept Offer 🎉
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/30">
                      <ShieldCheck className="w-4 h-4" /> E-Signed & Onboarding Triggered
                    </div>
                  )}
                </div>
              </div>

              {/* Compensation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">Base Salary</span>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">${offer.baseSalary.toLocaleString()} / yr</p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">Sign-On Bonus</span>
                  <p className="text-sm font-bold text-brand-300 mt-0.5">${offer.signOnBonus.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">Equity Grant</span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5 line-clamp-1">{offer.equity}</p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">Target Start Date</span>
                  <p className="text-xs font-bold text-slate-200 mt-0.5">{offer.startDate}</p>
                </div>
              </div>

              <div className="text-xs text-slate-400 italic bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                "{offer.customizedNotes}"
              </div>
            </div>
          );
        })}
      </div>

      {showOfferModal && <OfferGeneratorModal onClose={() => setShowOfferModal(false)} />}
    </div>
  );
};
