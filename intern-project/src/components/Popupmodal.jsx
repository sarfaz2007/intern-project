import React, { useState } from 'react';
import { Plus, X, Phone, Mail, MapPin, Search, ChevronDown } from 'lucide-react';

const InitiateJobForm = () => {
  const [clientType, setClientType] = useState('new');

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-2xl overflow-hidden font-sans border border-gray-200">
      {/* Header */}
      <div className="bg-[#0f172a] text-white p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-[#10b981] p-2 rounded-lg">
            <Plus size={24} strokeWidth={3} />
          </div>
          <div>
            <h1 className="text-2xl font-black italic tracking-tighter uppercase">Initiate New Job</h1>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Operational Registry Access</p>
          </div>
        </div>
        <button className="bg-gray-700/50 p-2 rounded-lg hover:bg-gray-600 transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-8 space-y-8">
        {/* Section 1: Identification & Contact */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Identification & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Client Profile Toggle */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Client Profile</label>
              <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100">
                <button 
                  onClick={() => setClientType('new')}
                  className={`flex-1 py-2 px-4 rounded-md text-[10px] font-bold transition-all ${clientType === 'new' ? 'bg-[#10b981] text-white' : 'text-gray-400'}`}
                >
                  NEW CLIENT
                </button>
                <button 
                  onClick={() => setClientType('existing')}
                  className={`flex-1 py-2 px-4 rounded-md text-[10px] font-bold transition-all ${clientType === 'existing' ? 'bg-[#10b981] text-white' : 'text-gray-400'}`}
                >
                  EXISTING CLIENT
                </button>
              </div>
            </div>

            {/* Entity Names */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Customer & Business Entity Name</label>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Customer Legal Name..." className="w-full p-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
                <input type="text" placeholder="Company Name (LLC/Sole)..." className="w-full p-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Primary Contact (Phone)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="text" placeholder="+971 -- --- ----" className="w-full p-3 pl-10 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Email Identification</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="email" placeholder="entity@domain.com" className="w-full p-3 pl-10 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Geo-Location Tagging</label>
              <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl text-[10px] font-bold text-gray-500 uppercase hover:bg-gray-50 transition-colors">
                <MapPin size={18} />
                Tag Current Location
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Service Master Registry */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Service Master Registry</h2>
          <div className="space-y-4">
            <div className="w-full p-8 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-start italic text-gray-300 text-sm">
              No services selected from global master list...
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search global service database (Visa, ICV, Audit)..." 
                className="w-full p-4 pl-12 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none shadow-sm"
              />
              <ChevronDown className="absolute right-4 top-4 text-gray-400" size={20} />
            </div>
          </div>
        </section>

        {/* Section 3: Execution Logistics */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Execution Logistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Target Branch</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-xl text-xs font-bold appearance-none bg-white focus:outline-none">
                  <option>BR MUROOR</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Urgency Priority</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-xl text-xs font-bold appearance-none bg-white focus:outline-none">
                  <option>MEDIUM</option>
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div className="flex gap-4 pt-4">
          <button className="flex-1 py-4 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 uppercase hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="flex-[1.5] py-4 bg-[#0f172a] text-white rounded-xl text-xs font-bold uppercase hover:bg-black transition-colors tracking-widest">
            Initiate Work Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitiateJobForm;