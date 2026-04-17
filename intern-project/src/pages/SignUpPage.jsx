import React, { useState } from "react";
import { Mail, Lock, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("SUPER_ADMIN");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/auth/login", {
        email,
        password,
        role
      });

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Success ✅");

      navigate("/dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl min-h-[600px]">
        
        {/* LEFT SIDE */}
        <div className="md:w-5/12 bg-[#1a5fff] p-8 md:p-12 flex flex-col justify-between text-white">
          
          <div>
            <button className="flex items-center gap-2 text-xs font-bold uppercase">
              <div className="bg-white/20 p-1.5 rounded-md">
                <ArrowLeft size={16} />
              </div>
              Change Role
            </button>

            <div className="mt-20">
              <h1 className="text-5xl font-extrabold italic mb-4">
                Welcome Back
              </h1>
              <p className="text-blue-100">
                Secure access for <br />
                Al Tawakkal Group employees.
              </p>
            </div>
          </div>

          <div className="bg-blue-500/30 p-6 rounded-2xl mt-12">
            <h3 className="text-xs font-bold uppercase mb-2">
              Security Notice
            </h3>
            <p className="text-sm">
              This system is monitored. Unauthorized access is prohibited.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-7/12 p-8 md:p-20 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">

            <div className="mb-6 text-xs font-bold text-blue-600">
              SUPER ADMIN
            </div>

            <h2 className="text-3xl font-bold mb-8">
              Sign in to your account
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">

              {/* EMAIL */}
              <div>
                <label className="text-xs font-bold text-gray-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="name@atg.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 py-4 border rounded-xl"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-xs font-bold text-gray-400">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 py-4 border rounded-xl"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a5fff] text-white py-4 rounded-xl flex justify-center gap-2"
              >
                SIGN IN <ArrowRight size={18} />
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;