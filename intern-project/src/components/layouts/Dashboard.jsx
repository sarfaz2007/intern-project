import React from 'react';
import { 
  Bell, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

// Mock data for the chart based on the second image
const chartData = [
  { day: 'Tue', intake: 3, completed: 1 },
  { day: 'Wed', intake: 1, completed: 0 },
  { day: 'Thu', intake: 1, completed: 1 },
  { day: 'Fri', intake: 0, completed: 0 },
  { day: 'Sat', intake: 1, completed: 1 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-800">
      {/* --- PERFORMANCE TRACKING HERO --- */}
      <section className="bg-white rounded-[40px] p-10 mb-8 border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-6 h-6 text-cyan-400 fill-cyan-400" />
              <h2 className="text-2xl font-black tracking-tight italic">PERFORMANCE TRACKING</h2>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
              Current Performance Slab & Achievement Tracker
            </p>

            {/* Empty Progress Bar */}
            <div className="w-full h-3 bg-slate-50 rounded-full mb-10 overflow-hidden">
              <div className="h-full bg-cyan-400 w-0 transition-all duration-500"></div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Revenue Achieved</p>
                <h3 className="text-4xl font-black">AED 7,000.00</h3>
              </div>

              {/* Tiers */}
              <div className="flex gap-4">
                {['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'].map((tier) => (
                  <div key={tier} className="flex flex-col items-center gap-2 opacity-30">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-400 flex items-center justify-center">
                      <div className="w-4 h-4 border border-slate-400 rounded-sm"></div>
                    </div>
                    <span className="text-[8px] font-bold tracking-tighter">{tier}</span>
                  </div>
                ))}
              </div>

              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Yield</p>
                <h3 className="text-5xl font-black text-cyan-500">0%</h3>
                <p className="text-[9px] font-bold text-slate-400 italic">MONTHLY TARGET: AED 0</p>
              </div>
            </div>
          </div>

          {/* Teal Earning Box */}
          <div className="w-full md:w-64 h-64 bg-cyan-400 rounded-[35px] flex flex-col items-center justify-center text-white relative shadow-xl shadow-cyan-100">
            <Star className="w-10 h-10 mb-4 stroke-[2.5px]" />
            <p className="font-black text-sm tracking-widest uppercase">Earning Progress</p>
            {/* Watermark Shield */}
            <ShieldCheck className="absolute bottom-4 right-4 w-24 h-24 opacity-20" />
          </div>
        </div>
      </section>

      {/* --- STAT CARDS ROW --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-blue-50/50 p-8 rounded-[35px] border border-blue-50">
          <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1"># Customers / Completed</p>
          <h4 className="text-4xl font-black mb-1">4 / 3</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase">Entity Base vs Closed Tasks</p>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-50/50 p-8 rounded-[35px] border border-purple-50">
          <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Conversion Yield</p>
          <h4 className="text-4xl font-black mb-1">0.00%</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase">Won vs Total Opportunity</p>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-50/50 p-8 rounded-[35px] border border-orange-50">
          <div className="bg-orange-100 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Stopped Tasks</p>
          <h4 className="text-4xl font-black mb-1">2</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase">Requires Immediate Review</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm">
          <div className="bg-slate-50 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
            <Clock className="w-5 h-5 text-slate-600" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Pending Actions</p>
          <h4 className="text-4xl font-black mb-1">1</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase">Active Workflow Queue</p>
        </div>
      </div>

      {/* --- BOTTOM ROW: CHART & ACTIVITY --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Lead Intake Chart */}
        <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
          <h2 className="text-xl font-black italic mb-1 uppercase tracking-tighter">Weekly Lead Intake vs Completion</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">Operational Velocity Distribution</p>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="intake" name="Total Intake" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="completed" name="Completed" fill="#4ade80" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Total Intake</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Completed</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm flex flex-col">
          <h2 className="text-xl font-black italic mb-10 uppercase tracking-tighter">Recent Activity</h2>
          
          <div className="flex-1 flex flex-col items-center justify-center text-slate-300">
            <Clock className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-xs font-black tracking-widest uppercase opacity-40">No Recent Updates</p>
          </div>

          <button className="w-full py-4 mt-6 border-2 border-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;