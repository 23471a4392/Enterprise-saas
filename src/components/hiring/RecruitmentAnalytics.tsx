import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, 
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid 
} from 'recharts';
import { BarChart3, Clock, DollarSign, Users, Award, TrendingUp, Sparkles } from 'lucide-react';

export const RecruitmentAnalytics: React.FC = () => {
  const { analytics } = useApp();

  const COLORS = ['#0c95e6', '#a855f7', '#10b981', '#f59e0b', '#ec4899'];

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-400" /> Executive Recruitment Analytics & Talent Intelligence
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time pipeline metrics, time-to-hire benchmarks, sourcing efficiency, and offer conversion rates.
          </p>
        </div>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-400" /> Avg Time-to-Hire
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-white">{analytics.timeToHireDays}</span>
            <span className="text-xs text-slate-400 font-medium">Days</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold">↓ 3.2 days faster than industry benchmark</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-emerald-400" /> Cost Per Hire
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-emerald-400">${analytics.costPerHire.toLocaleString()}</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold">↓ 14% efficiency savings with AI Parser</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1.5">
            <Award className="w-4 h-4 text-purple-400" /> Offer Acceptance Rate
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-purple-300">{analytics.offerAcceptanceRate}%</span>
          </div>
          <span className="text-[10px] text-purple-300 font-semibold">Top tier candidate retention</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-400" /> Total Applications Processed
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-white">{analytics.totalApplications.toLocaleString()}</span>
          </div>
          <span className="text-[10px] text-slate-400 font-semibold">Across active requisitions</span>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recruitment Pipeline Funnel Bar Chart (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-400" /> Applicant Pipeline Stage Conversion Funnel
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.applicationsByStage} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="stage" stroke="#94a3b8" fontSize={10} />
                <YAxis stroke="#94a3b8" fontSize={10} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#0c95e6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sourcing Channel Breakdown Pie Chart (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" /> Sourcing Channel Attribution
          </h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.sourcingChannels}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {analytics.sourcingChannels.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-[11px]">
            {analytics.sourcingChannels.map((ch, idx) => (
              <div key={ch.name} className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                <span>{ch.name} ({ch.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
