import React from 'react';
import { Search, Plus, MapPin, Building2, Pencil, Trash2 } from 'lucide-react';

const BranchManagement = () => {
  const branches = [
    {
      id: 2,
      name: 'Edarikkod',
      locationName: 'sky mall',
      subLocation: 'CHENGUVETTY',
    },
    {
      id: 1,
      name: 'Kottakkal',
      locationName: 'towns',
      subLocation: 'MALAPPURAM',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Actions */}
        <div className="flex justify-end items-center gap-4 mb-8">
          {/* Search Input */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search Branch Name or City..."
              className="pl-10 pr-4 py-2.5 w-80 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-sm"
            />
          </div>

          {/* New Branch Button */}
          <button className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-100">
            <Plus className="w-4 h-4" />
            New Branch
          </button>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden min-h-[500px]">
          <table className="w-full">
            <thead>
              <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                <th className="px-10 py-8 text-left font-semibold">Branch Name</th>
                <th className="px-10 py-8 text-left font-semibold">Location</th>
                <th className="px-10 py-8 text-right pr-20 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {branches.map((branch) => (
                <tr key={branch.id} className="group hover:bg-slate-50/50 transition-colors">
                  {/* Branch Name Column */}
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105">
                        <Building2 className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-[15px]">{branch.name}</div>
                        <div className="text-xs text-gray-400 font-semibold mt-0.5">ID: #{branch.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Location Column */}
                  <td className="px-10 py-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 text-gray-300" />
                        <span className="text-sm font-medium">{branch.locationName}</span>
                      </div>
                      <div className="ml-6">
                        <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                          {branch.subLocation}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="px-10 py-6 text-right pr-20">
                    <div className="flex justify-end items-center gap-6">
                      <button className="text-gray-300 hover:text-blue-500 transition-colors">
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button className="text-red-200 hover:text-red-500 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
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

export default BranchManagement;  