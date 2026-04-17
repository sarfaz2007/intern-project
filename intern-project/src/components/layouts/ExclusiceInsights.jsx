import React from 'react';
import {
  DollarSign, CheckCircle2, ShieldCheck, Box,
  FileCheck, History, Zap, Activity, AlertCircle
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceDot } from 'recharts';

// Mock data for the chart to match the image
const chartData = [
  { name: '05 Feb', value: 1 },
  { name: '06 Feb', value: 1 },
  { name: '07 Feb', value: 1 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* SECTION 1: TOP STAT CARDS (Existing) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="SEGMENT REVENUE"
            value="AED 7,000.00"
            icon={<DollarSign size={18} className="text-blue-500" />}
            iconBg="bg-blue-50"
          />
          <StatCard
            title="FINISHED TASKS"
            value="3"
            sub="Yield: 50%"
            icon={<CheckCircle2 size={18} className="text-emerald-500" />}
            iconBg="bg-emerald-50"
          />
          <StatCard
            title="AWAITING APPROVAL"
            value="AED 0.00"
            sub="0 pending CEO sign-off"
            icon={<ShieldCheck size={18} className="text-indigo-500" />}
            iconBg="bg-indigo-50"
          />
          <StatCard
            title="STALLED JOBS"
            value="2"
            icon={<Box size={18} className="text-rose-400" />}
            iconBg="bg-rose-50"
          />
        </div>

        {/* SECTION 2: APPROVAL HUB (Existing) */}
        <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
          <div className="bg-[#5D45FF] p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-[-20deg] translate-x-12" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 text-white">
                  <FileCheck size={28} />
                </div>
                <div>
                  <h2 className="text-white font-black italic text-2xl tracking-tight leading-none">APPROVAL HUB</h2>
                  <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] mt-1 uppercase">
                    Finalized by branches • Awaiting strategic authorization
                  </p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-white text-[10px] font-black tracking-widest uppercase">
                Action Required: 0
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col items-center justify-center py-12 opacity-30">
              <Box size={48} className="text-slate-200 mb-4" />
              <p className="text-[10px] font-black tracking-[0.3em] uppercase">No Strategic Approvals Pending</p>
            </div>
          </div>
        </div>

        {/* SECTION 3: CEO APPROVALS & CHART (Existing) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-slate-800">
                <History size={20} />
                <h3 className="text-xs font-black tracking-widest uppercase">Recent CEO Approvals</h3>
              </div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div className="font-black italic text-slate-800 tracking-tight">SFDSFD</div>
                      <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">EDARIKKOD • SALES1</div>
                    </div>
                  </div>
                  <div className="text-right font-black text-slate-800">AED 2,500.00</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B1221] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col">
            {/* Background Large Zap Icon */}
            <Zap
              size={240}
              className="absolute -top-12 -right-12 text-slate-800/40 rotate-[15deg] pointer-events-none"
              strokeWidth={1.5}
            />

            {/* Header */}
            <div className="flex items-center gap-3 mb-12 relative z-10">
              <Activity size={20} className="text-[#7C3AED]" strokeWidth={3} />
              <h3 className="text-[11px] font-black tracking-[0.2em] uppercase text-white">
                Executive Distribution
              </h3>
            </div>

            {/* Custom Donut Chart */}
            <div className="flex-1 flex justify-center items-center relative z-10 pb-4">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Dark Green Segment (Bottom) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#064E3B"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="160"
                  />
                  {/* Medium Green Segment (Left side) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#10B981"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="200"
                    className="transform rotate-[110deg] origin-center"
                  />
                  {/* Bright Green Segment (Top/Right side) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#34D399"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="180"
                    className="transform rotate-[245deg] origin-center"
                  />
                </svg>
                {/* Center cutout to make it a donut */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[72%] h-[72%] bg-[#0B1221] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: REPLICATED FROM IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Global Pipeline Velocity Card */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#E0F2FE] text-[#3B82F6] rounded-2xl border border-[#BAE6FD]">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <h3 className="font-black italic text-slate-900 text-2xl tracking-tighter">GLOBAL PIPELINE VELOCITY</h3>
                <p className="text-[11px] font-bold text-slate-400 tracking-[0.15em] uppercase">Movement & Lead Processing Speed</p>
              </div>
            </div>

            {/* Stat Boxes */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <PipelineStat label="COMPLETED" value="3" type="success" />
              <PipelineStat label="PENDING PROCESSING" value="1" type="warning" />
              <PipelineStat label="STOPPED CANCELLED" value="2" type="danger" />
            </div>

            {/* Real Chart Implementation */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                    domain={[0, 2]}
                    ticks={[0, 0.5, 1, 1.5, 2]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10B981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorVal)"
                    dot={<CustomizedDot />}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Strategic Analysis AI Card */}
          <div className="bg-[#5D45FF] rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="flex items-start gap-3 relative z-10">
              <Zap size={22} className="mt-1" fill="white" />
              <h3 className="text-[13px] font-black tracking-widest uppercase leading-tight">
                Strategic Analysis<br />(AI)
              </h3>
            </div>

            <div className="flex flex-col items-center text-center py-20 relative z-10">
              <p className="italic text-lg font-semibold leading-relaxed max-w-[240px]">
                Unable to generate insights at this time. Please check your data manually.
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-full h-[1px] bg-white/20 mb-6" />
              <div className="flex justify-between items-center text-[10px] font-black tracking-widest">
                <div className="flex items-center gap-2">
                  MODEL: GEMINI 3 FLASH
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  SYSTEM LIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Sub-components
const StatCard = ({ title, value, sub, icon, iconBg }) => (
  <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm">
    <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{title}</p>
    <h2 className="text-xl font-black text-slate-900 tracking-tight">{value}</h2>
    {sub && <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase">{sub}</p>}
  </div>
);

const PipelineStat = ({ label, value, type }) => {
  const styles = {
    success: 'bg-[#F1FDF9] text-[#059669] border-[#D1FAE5]',
    warning: 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]',
    danger: 'bg-[#FFF1F2] text-[#E11D48] border-[#FFE4E6]'
  };

  return (
    <div className={`${styles[type]} border p-8 rounded-[2.5rem] text-center flex flex-col items-center justify-center min-h-[160px]`}>
      <p className="text-[10px] font-black tracking-widest uppercase mb-4 leading-tight opacity-80">
        {label}
      </p>
      <span className="text-6xl font-black italic tracking-tighter">{value}</span>
    </div>
  );
};

// Custom dot for the chart ends (the green squares with "1")
const CustomizedDot = (props) => {
  const { cx, cy, value, index } = props;
  // Only show on first and last points
  if (index === 0 || index === 2) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <rect width="20" height="20" rx="4" fill="#10B981" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">
          {value}
        </text>
      </svg>
    );
  }
  return null;
};

export default Dashboard;