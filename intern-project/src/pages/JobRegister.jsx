import React, { useState, useEffect } from 'react';
import { Plus, X, Phone, Mail, MapPin, Search, ChevronDown } from 'lucide-react';

const InitiateJobModal = ({ isOpen, onClose }) => {
  // 1. Unified Form State
  const [formData, setFormData] = useState({
    clientType: 'new',
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    branch: 'BR MUROOR',
    priority: 'MEDIUM'
  });

  // 2. Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData);
    // API call logic here
  };

  return (
    // Added onClick to backdrop to close modal
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      {/* stopPropagation prevents modal from closing when clicking inside the white box */}
      <div className="w-full max-w-4xl bg-white rounded-[24px] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        
        {/* --- HEADER --- */}
        <div className="bg-[#0f172a] p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-[#10b981] p-3 rounded-xl text-white">
              <Plus size={24} strokeWidth={3} />
            </div>
            <div>
              <h2 className="text-white text-3xl font-black italic leading-none tracking-tighter">INITIATE NEW JOB</h2>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Operational Registry Access</p>
            </div>
          </div>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* --- FORM BODY --- */}
        <form onSubmit={handleSubmit}>
          <div className="p-8 max-h-[80vh] overflow-y-auto space-y-10">
            
            {/* SECTION 1: IDENTIFICATION */}
            <section>
              <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Identification & Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Client Profile</label>
                  <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                    <button 
                      type="button"
                      onClick={() => setFormData(p => ({...p, clientType: 'new'}))}
                      className={`flex-1 py-3 text-[10px] font-black rounded-lg transition-all ${formData.clientType === 'new' ? 'bg-[#10b981] text-white' : 'text-slate-400'}`}
                    >NEW CLIENT</button>
                    <button 
                      type="button"
                      onClick={() => setFormData(p => ({...p, clientType: 'existing'}))}
                      className={`flex-1 py-3 text-[10px] font-black rounded-lg transition-all ${formData.clientType === 'existing' ? 'bg-[#10b981] text-white' : 'text-slate-400'}`}
                    >EXISTING CLIENT</button>
                  </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="customerName" className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Customer Legal Name</label>
                    <input 
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      type="text" 
                      placeholder={formData.clientType === 'new' ? "Enter name..." : "Search existing client..."} 
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20" 
                    />
                  </div>
                  <div className="mt-6">
                    <input 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Company Name (LLC/Sole)..." 
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm" 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ... Other sections follow same pattern ... */}

          </div>   

          {/* --- FOOTER --- */}
          <div className="p-6 bg-white border-t border-slate-50 flex gap-4">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 py-4 border border-slate-200 rounded-xl text-[11px] font-black text-slate-400 hover:bg-slate-50 uppercase tracking-widest"
            >Cancel</button>
            <button 
              type="submit"
              className="flex-1 py-4 bg-[#0f172a] text-white rounded-xl text-[11px] font-black hover:bg-slate-800 uppercase tracking-[0.2em]"
            >Initiate Work Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InitiateJobModal;