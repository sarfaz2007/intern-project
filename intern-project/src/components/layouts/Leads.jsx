import React from 'react';
import { Search, Plus, Bell, Settings2, Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // 1. Move the hook inside the component
  const navigate = useNavigate();

  // 2. Move the handler inside the component
  const handleClick = () => {
    // Note: Usually "NEW JOB ENTRY" would go to a create page, 
    // e.g., navigate("/jobs/new")
    navigate("/jobentry"); 
  };

  const data = [
    {
      id: "#1003",
      priority: "MEDIUM",
      entityName: "FASFDDSAFDFSFDSF",
      subEntity: "ASFDSFAS",
      executionPoint: "BR MUROOR",
      status: "COMPLETED",
      yield: "AED 15,000.00",
      isNew: true,
    },
    {
      id: "#1002",
      priority: "MEDIUM",
      entityName: "SFSDFSDF",
      subEntity: "FSDFDSF",
      executionPoint: "BR MUROOR",
      status: "COMPLETED",
      yield: "AED 2,000.00",
      isNew: true,
    },
    {
      id: "#1001",
      priority: "URGENT",
      entityName: "SFSDF",
      subEntity: "SDFDSF",
      executionPoint: "BR MUROOR",
      status: "COMPLETED",
      yield: "AED 231,231,230.00",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <main className="p-8 max-w-[1400px] mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter text-slate-900">
              OPERATIONAL CORE
            </h2>
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-1">
              Daily work & registry control
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Ref or Entity..."
                className="pl-10 pr-4 py-2.5 w-72 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            {/* The onClick now references the function inside the component */}
            <button
              onClick={handleClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              <Plus className="w-4 h-4" />
              NEW JOB ENTRY
            </button>
          </div>
        </div>

        {/* --- DATA TABLE --- */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ref / Prio</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Entity Details</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Execution Point</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status Log</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Yield</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Workflow Governance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-700 mb-1">{row.id}</p>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${row.priority === 'URGENT' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      {row.priority}
                    </span>
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-black text-slate-800 tracking-tight">{row.entityName}</p>
                      {row.isNew && (
                        <span className="text-[9px] font-bold bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded">NEW</span>
                      )}
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{row.subEntity}</p>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full">
                      {row.executionPoint}
                    </span>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-extrabold rounded-full">
                      {row.status}
                    </span>
                  </td>

                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-700 tracking-tight">{row.yield}</p>
                  </td>

                  <td className="px-8 py-6 text-right">
                    <button className="text-gray-300 hover:text-blue-600 transition-colors">
                      <Settings2 className="w-5 h-5 ml-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;