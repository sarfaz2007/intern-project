import React from 'react';
import { 
  Search, 
  User, 
  Calendar, 
  CheckCircle2, 
  PauseCircle, 
  Banknote, 
  Filter 
} from 'lucide-react';

const PayoutDashboard = () => {
  const stats = [
    {
      title: "TOTAL AUTHORIZED",
      amount: "371.50",
      icon: <Banknote className="text-blue-600" size={24} />,
      iconBg: "bg-blue-50",
    },
    {
      title: "SETTLED PAYOUTS",
      amount: "125.00",
      icon: <CheckCircle2 className="text-emerald-500" size={24} />,
      iconBg: "bg-emerald-50",
    },
    {
      title: "HOLDS / ESCROW",
      amount: "246.50",
      icon: <PauseCircle className="text-orange-400" size={24} />,
      iconBg: "bg-orange-50",
    },
  ];

  const tableData = [
    {
      id: "#LD-5",
      date: "07 FEB 2026",
      agent: "SALES1",
      inv: "INV #3",
      revenue: "2,500.00",
      commission: "5.00%",
      payout: "125.00",
      status: "PAID",
    },
    {
      id: "#LD-4",
      date: "05 FEB 2026",
      agent: "SYSTEM ADMIN",
      inv: "INV #2",
      revenue: "2,500.00",
      commission: "5.30%",
      payout: "132.50",
      status: "PENDING",
    },
    {
      id: "#LD-2",
      date: "05 FEB 2026",
      agent: "SYSTEM ADMIN",
      inv: "INV #1",
      revenue: "2,000.00",
      commission: "5.70%",
      payout: "114.00",
      status: "PENDING",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-800">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className={`w-14 h-14 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
              {stat.icon}
            </div>
            <p className="text-xs font-bold text-slate-400 tracking-widest mb-2 uppercase">{stat.title}</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              AED {stat.amount}
            </h2>
          </div>
        ))}
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Search Header */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search Agent Name or Lead ID..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
            <Filter size={16} />
            AUTHORIZED RECORDS: {tableData.length}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 tracking-widest uppercase border-y border-slate-50">
                <th className="px-8 py-4">LEAD REF / DATE</th>
                <th className="px-8 py-4">BENEFICIARY (AGENT)</th>
                <th className="px-8 py-4">REVENUE BASIS</th>
                <th className="px-8 py-4">COMMISSION</th>
                <th className="px-8 py-4">PAYOUT AMOUNT</th>
                <th className="px-8 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-black text-slate-900 mb-1">{row.id}</div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                      <Calendar size={12} /> {row.date}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                        <User size={16} />
                      </div>
                      <span className="font-black italic text-slate-800 text-sm tracking-tight">{row.agent}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-[10px] font-bold text-slate-400 mb-0.5">{row.inv}</div>
                    <div className="font-bold text-slate-800">AED {row.revenue}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-bold text-xs">
                      {row.commission}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="font-bold text-emerald-600">AED {row.payout}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest ${
                      row.status === 'PAID' 
                        ? 'bg-emerald-50 text-emerald-500' 
                        : 'bg-orange-50 text-orange-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayoutDashboard;