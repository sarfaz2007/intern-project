
import { ShieldCheck, User, Headphones, BarChart3, Settings, Building2 } from 'lucide-react';

const AccessControlPage = () => {
  const roles = [
    {
      title: "Sales Team Member",
      desc: "Lead entry and personal dashboards",
      icon: <User size={20} className="text-gray-500" />,
    },
    {
      title: "Marketing Manager",
      desc: "Team oversight and lead qualification...",
      icon: <User size={20} className="text-gray-500" />,
    },
    {
      title: "CRE Team",
      desc: "Accept, reject, or transfer work ord...",
      icon: <User size={20} className="text-gray-500" />,
    },
    {
      title: "CRO Officer",
      desc: "Operations control and incentive a...",
      icon: <User size={20} className="text-gray-500" />,
    },
    {
      title: "Branch Manager",
      desc: "Invoicing, billing, and commission...",
      icon: <User size={20} className="text-gray-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
      {/* Main Container */}
      <div className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl flex overflow-hidden min-h-[700px]">
        
        {/* Left Side: Blue Branding Section */}
        <div className="w-[42%] bg-[#2b64e3] p-16 flex flex-col justify-between text-white">
          <div>
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-10">
              <ShieldCheck size={28} />
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">ATG Portal</h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-xs">
              Sales & Marketing Unified Platform for Al Tawakkal Group.
            </p>
          </div>
          
          <div className="text-sm opacity-80">
            © 2024 ATG Group. Secure Internal Access.
          </div>
        </div>

        {/* Right Side: Role Selection Section */}
        <div className="w-[58%] p-16 flex flex-col justify-between bg-white">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Access Control</h2>
            <p className="text-slate-500 mb-10">Please select your organizational role.</p>

            <div className="space-y-4">
              {roles.map((role, index) => (
                <button
                  key={index}
                  className="w-full flex items-center p-4 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-slate-50 hover:border-blue-200 transition-all text-left group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4 border border-slate-100 group-hover:border-blue-100">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 leading-tight">{role.title}</h3>
                    <p className="text-sm text-slate-400">{role.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center sm:text-right">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              Technical Support: <span className="text-blue-500">IT@ATG.AE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessControlPage;