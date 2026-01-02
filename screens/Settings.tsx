
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initial sync with document state
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    
    const themeClass = nextMode ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeClass);
    localStorage.setItem('theme', themeClass);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f8f6] dark:bg-[#0a120b] pb-28 transition-theme max-w-md mx-auto">
      {/* Header */}
      <div className="pt-14 pb-6 px-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Configurações</h1>
      </div>

      {/* Profile Card */}
      <div className="px-5 mb-8">
        <div className="bg-white dark:bg-[#121d14] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 transition-theme">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-white dark:border-[#1a281a] shadow-sm overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7uUVs49KmvX6GJV3Ow8wd-IxOl37hVpjPoJ3zIR5tPT3QUo4n5aa1YEKUHFmZh1FYTl_s6KF--LBD41xXkvYfVJaJYbjIWIvHiY3JQVFkHT_HRptpG3lRYajNMldBA3fA3P7wBlOhvMrXmfVUNuDpl0wOtjNIlrXd6ioWTihyyHGgAu3eDZSxSsAbdJbgTAUuDDim2zISX0Fc9blz7to8pmfEeljjvgF6u0U_xcUl2egIZu2sr9cmzfp2tuRJJcCAJSAXYMB38g')"}}></div>
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-white dark:border-[#1a281a] shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[12px] block font-bold">edit</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-white truncate">Maria Silva</h2>
            <p className="text-[#61896b] dark:text-[#13ec49] text-sm font-medium">Vendedora de Cosméticos</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">Plano Premium</p>
          </div>
          <button className="bg-gray-50 dark:bg-white/5 p-2.5 rounded-xl text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 transition-theme">
            <span className="material-symbols-outlined text-[24px]">qr_code_2</span>
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-5 space-y-8">
        {/* Section: APP */}
        <div>
          <h3 className="text-gray-400 dark:text-gray-600 text-xs font-bold uppercase tracking-[0.1em] mb-3 ml-1">App</h3>
          <div className="space-y-3">
            {/* Dark Mode Toggle Item */}
            <div 
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#121d14] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-theme cursor-pointer active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center rounded-xl size-10 shrink-0 transition-colors ${darkMode ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'}`}>
                  <span className="material-symbols-outlined text-[22px]">{darkMode ? 'dark_mode' : 'light_mode'}</span>
                </div>
                <span className="text-[16px] font-semibold text-slate-900 dark:text-white">Tema Escuro</span>
              </div>
              <div className={`w-11 h-6 rounded-full transition-all relative flex items-center px-1 ${darkMode ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                <div className={`size-4 rounded-full bg-white shadow-sm transition-all transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </div>
            
            {/* Edit Profile Item */}
            <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#121d14] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-theme cursor-pointer active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 size-10 shrink-0">
                  <span className="material-symbols-outlined text-[22px]">person</span>
                </div>
                <span className="text-[16px] font-semibold text-slate-900 dark:text-white">Editar Perfil</span>
              </div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-[24px]">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Section: SUPORTE */}
        <div>
          <h3 className="text-gray-400 dark:text-gray-600 text-xs font-bold uppercase tracking-[0.1em] mb-3 ml-1">Suporte</h3>
          <div className="space-y-3">
            <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#121d14] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-theme cursor-pointer active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 size-10 shrink-0">
                  <span className="material-symbols-outlined text-[22px]">help_center</span>
                </div>
                <span className="text-[16px] font-semibold text-slate-900 dark:text-white">Central de Ajuda</span>
              </div>
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-[24px]">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="mt-auto px-5 pt-8">
        <button 
          onClick={() => navigate('/')} 
          className="w-full bg-white dark:bg-[#121d14] p-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 group active:scale-[0.97] transition-all border border-transparent hover:border-red-500/20 border-gray-100 dark:border-gray-800"
        >
          <span className="material-symbols-outlined text-red-500 text-[22px] font-bold">logout</span>
          <span className="text-red-500 font-bold text-[16px]">Sair da Conta</span>
        </button>
        <div className="flex flex-col items-center mt-6 opacity-40">
          <p className="text-slate-500 dark:text-gray-400 text-[11px] font-medium tracking-wide">VERSÃO 1.0.4 (BUILD 202)</p>
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-800 rounded-full mt-2"></div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Settings;
