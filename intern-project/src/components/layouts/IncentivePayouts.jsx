import React from 'react';
import { 
  Shield, 
  PauseCircle, 
  ArrowUpRight, 
  Inbox, 
  Building2, 
  Percent 
} from 'lucide-react';

const WorkQueueDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: CONFIRMED WORK QUEUE */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 h-fit">
          {/* Header Area */}
          <div className="bg-[#0B1221] p-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 shadow-inner">
                <Shield className="text-white/80" size={32} />
              </div>
              <div>
                <h2 className="text-white font-black italic text-3xl tracking-tight leading-none">
                  CONFIRMED WORK QUEUE
                </h2>
                <p className="text-white/40 text-[11px] font-bold tracking-[0.2em] mt-2 uppercase">
                  Awaiting strategic percentage assignment
                </p>
              </div>
            </div>
            <div className="bg-[#1E40AF] shadow-[0_0_20px_rgba(30,64,175,0.4)] px-6 py-3 rounded-full text-white text-[11px] font-black tracking-widest uppercase border border-blue-400/30">
              1 ACTIONS REQUIRED
            </div>
          </div>

          {/* Content Area */}
          <div className="p-12 min-h-[400px]">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-12">
                {/* Ref Section */}
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">REF</p>
                  <p className="text-2xl font-black text-slate-800 tracking-tighter">#LD-6</p>
                </div>

                {/* Identity Section */}
                <div>
                  <h3 className="text-2xl font-black italic text-slate-900 tracking-tight mb-2">SALES1</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#F0F7FF] border border-[#BFDBFE] px-3 py-1.5 rounded-lg">
                       <Building2 size={14} className="text-blue-600" />
                       <span className="text-[10px] font-black text-blue-700 tracking-wider">BR MUROOR</span>
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 tracking-wide uppercase">
                      Confirmed Yield: <span className="text-slate-700 font-black">AED 5,000.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="bg-[#5D45FF] hover:bg-[#4B36E3] text-white px-8 py-5 rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(93,69,255,0.3)]">
                <Shield size={20} className="opacity-80" />
                <span className="text-xs font-black tracking-widest uppercase">SET PAYOUT %</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REGISTRY & POLICY */}
        <div className="flex flex-col gap-8">
          
          {/* Hold Payout Registry */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-[400px]">
             <div className="flex items-center gap-3 mb-10">
                <PauseCircle size={22} className="text-orange-400" />
                <h3 className="text-[13px] font-black tracking-[0.2em] uppercase text-slate-800">
                  Hold Payout Registry
                </h3>
             </div>
             
             <div className="flex-1 flex flex-col items-center justify-center opacity-20">
                <div className="w-20 h-20 border-4 border-slate-200 rounded-3xl mb-6 flex items-center justify-center">
                  <Inbox size={32} className="text-slate-400" />
                </div>
                <p className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500">
                  No Payout Holds Active
                </p>
             </div>
          </div>

          {/* Gatekeeper Policy */}
          <div className="bg-[#3B49DF] rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-xl shadow-blue-900/20 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
               <Shield size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Shield size={20} className="text-blue-200" />
                <h3 className="text-[13px] font-black tracking-[0.2em] uppercase">
                  Gatekeeper Policy
                </h3>
              </div>
              
              <p className="italic text-lg font-medium leading-relaxed text-blue-50 mb-12">
                "Final incentive percentages authorized here are legally binding and will trigger automated payout drafts. Ensure entity value matches branch invoice registry before authorization."
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-full h-[1px] bg-white/20 mb-8" />
              <div className="flex justify-between items-center text-[11px] font-black tracking-[0.2em]">
                <div className="flex items-center gap-3 uppercase">
                  System Lock: Active
                </div>
                <ArrowUpRight size={20} className="text-white/60" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkQueueDashboard;