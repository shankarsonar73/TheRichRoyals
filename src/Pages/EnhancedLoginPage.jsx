import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { RiFacebookBoxFill, RiFileChart2Fill } from "react-icons/ri";
import { useAuth } from "../components/AuthContext"; 
const EnhancedLoginPage = () => {
const [isEmailFocused, setIsEmailFocused] = useState(false);
const [isPasswordFocused, setIsPasswordFocused] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const isValidEm="therichroyals@gmail.com";
const isValidPass="sumit@#12"
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const navigate = useNavigate();
const { setIsLoggedIn } = useAuth(); 

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (isValidEm === email && isValidPass === password) {
        setIsLoggedIn(true);
        setLoading(false);
        navigate('/adminpanel');
      } else {
        setLoading(false);
        setError('Incorrect credentials');
      }
    }, 200); 
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
      <div className="absolute inset-0">
  {[...Array(5)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full opacity-30"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 300 + 50}px`,
        height: `${Math.random() * 300 + 50}px`,
        background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
        animation: `pulse ${3 + i}s infinite`,
      }}
    />
  ))}
</div>

      {/* Main Content */}
      <div className="relative w-full max-w-md">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-gray-800/50 shadow-2xl">
          {/* Logo Section */}
          <div className="p-8 pb-0">
            <div className="flex items-center justify-center gap-3 mb-8 group">
              <div className="text-yellow-500 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                RICHROYALS
              </h1>
            </div>

            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-400">Access your trading dashboard</p>
            </div>
          </div>

          {/* Sign in with Google */}
          <div className="px-8">
            <button 
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-4 rounded-2xl 
                flex items-center justify-center gap-3 transform hover:-translate-y-0.5 transition-all duration-300 
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8 px-8">
            <div className="absolute inset-0 flex items-center px-8">
              <div className="w-full border-t border-gray-800/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-500 bg-black/40 rounded-full">or continue with</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className={`w-full bg-black/50 border-2 border-gray-800/50 text-white rounded-xl px-4 py-3 
                    focus:outline-none transition-all duration-300 group-hover:border-gray-700/50
                    ${isEmailFocused ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : ''}`}
                />
                {email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                )}
              </div>

              <div className="relative group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className={`w-full bg-black/50 border-2 border-gray-800/50 text-white rounded-xl px-4 py-3 
                    focus:outline-none transition-all duration-300 group-hover:border-gray-700/50
                    ${isPasswordFocused ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : ''}`}
                />
                {password && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 
                text-black font-semibold py-4 px-4 rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 
                shadow-lg hover:shadow-xl relative overflow-hidden group">
                <span  className="relative z-10">Sign in →</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
           

{loading && (
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {error && (
              <p className="mt-4 text-center text-red-500 bg-red-900/50 p-3 rounded-md animate-bounce">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoginPage;