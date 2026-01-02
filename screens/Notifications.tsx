
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Notifications: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-20 transition-colors max-w-md mx-auto">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="flex items-center p-4 pb-2 justify-between">
          <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight flex-1">Notificações</h1>
          <div className="flex items-center">
            <button className="p-2 text-slate-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button onClick={() => navigate('/settings')} className="p-2 text-slate-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors ml-1">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
        
        <div className="px-4 pb-2">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 transition-colors">
            <span className="material-symbols-outlined text-red-500 text-[20px]">error</span>
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Você tem 3 contatos atrasados hoje.</p>
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="flex h-10 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 p-1 transition-colors">
            {['Todos', 'Atrasados', 'Próximos'].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 h-full rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === f 
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-slate-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6">
        <div>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3">Críticos</h3>
          <div className="space-y-3">
            <div className="group relative flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-transparent hover:border-red-200 dark:hover:border-red-900 transition-all cursor-pointer" onClick={() => navigate('/client-details')}>
              <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-12 w-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWngG3h6hm4xSN_rUmGLhm_fR7vkIRfxZw_9GstJOUCwm2ma44mKRUK2RtaizrRLT7fCSjx3H_erPz2FpXJKCAdMy0WXAG8BOgrmLYETQlyJqQy82qsCi1GPyMAOSdDbI3Ql05ncngeyq8Im5ae4cj4C1w2qsgYI15gb8seuRc8YYtyAhEzwV76UO0cEav_xt30Q8B715xZYZkOe_Il7KIVji5mQKaiQdsO0KcM0gXZRXKqwcTC0oi25RE6CTy94gyLH9Eu5aOWw")'}}></div>
                <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full p-[2px] border-2 border-white dark:border-gray-800">
                  <span className="material-symbols-outlined text-white text-[10px] block font-bold">priority_high</span>
                </div>
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 dark:text-white text-base font-semibold truncate">Maria Silva</p>
                  <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-300">Atrasado (3 dias)</span>
                </div>
                <p className="text-slate-500 dark:text-gray-400 text-sm mt-0.5">Última compra: 15/09</p>
              </div>
              <button className="shrink-0 h-9 w-9 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Notifications;
