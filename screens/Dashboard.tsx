
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import FAB from '../components/FAB';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-background-light dark:bg-background-dark transition-colors duration-200 pb-24">
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
          <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Dashboard</h1>
          <button onClick={() => navigate('/settings')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-gray-300" style={{fontSize: '24px'}}>settings</span>
          </button>
        </div>
      </header>

      <main className="px-4 pt-4 flex flex-col gap-6 max-w-md mx-auto">
        <section aria-label="Estatísticas">
          <div className="grid grid-cols-2 gap-4">
            {/* Total Clients Card */}
            <div 
              onClick={() => navigate('/clients')}
              className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer active:scale-95 transition-all"
            >
              <div className="absolute right-[-10px] top-[-10px] p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-primary text-7xl">groups</span>
              </div>
              <div className="flex flex-col gap-1 z-10">
                <span className="text-sm font-medium text-text-muted dark:text-gray-400">Total de Clientes</span>
                <span className="text-3xl font-bold text-text-main dark:text-white">142</span>
              </div>
              <div className="flex items-center gap-1 z-10">
                <span className="material-symbols-outlined text-primary text-sm font-bold">trending_up</span>
                <span className="text-xs font-semibold text-primary">+12 este mês</span>
              </div>
            </div>
            
            {/* Needs Contact Card */}
            <div 
              onClick={() => navigate('/notifications')}
              className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer active:scale-95 transition-all"
            >
              <div className="absolute right-[-10px] top-[-10px] p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-orange-500 text-7xl">notifications</span>
              </div>
              <div className="flex flex-col gap-1 z-10">
                <span className="text-sm font-medium text-text-muted dark:text-gray-400">Precisam Contato</span>
                <span className="text-3xl font-bold text-text-main dark:text-white">8</span>
              </div>
              <div className="flex items-center z-10">
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Atenção</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Clientes Atrasados">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Clientes Atrasados</h3>
            <button onClick={() => navigate('/notifications')} className="text-sm font-medium text-primary hover:text-green-600 dark:hover:text-green-400">Ver todos</button>
          </div>
          <div className="flex flex-col gap-3">
            <div onClick={() => navigate('/client-details')} className="bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center flex-shrink-0 relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtMWdEk9aqlEFzyouuIGg1vp8kr21ZIph6voKx5VVGf2fmBaXKgq3Ch6D502J2Yk6sn1c68h5mleycaI_vIpB_R9Wl5wi28NKO1V03VJhDfSIN64Ag-0w7aSSCxXnGW5aYiyBNsKi_rE7fHimK3jf64fFf5CfZ25Ihp3EvYenyWnzrhxbf35AvhBXUNyqQj4nH93gIgPatymBk1gJ-TgmUYzynojdrw7_FcnzsC9mBknXU2RTDW55rxtAGG_MzyPFaNJqjtKHSVA')"}}>
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">Ana Silva</h4>
                  <p className="text-sm text-red-500 font-medium">Atrasada: 5 dias</p>
                </div>
              </div>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <span className="material-symbols-outlined text-xl">chat</span>
              </button>
            </div>
            
            <div onClick={() => navigate('/client-details')} className="bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center flex-shrink-0 relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHYlsfnIaLMSE28kIyU1CxEwTgkxL-CROVdZd0ZZNGeUaUtch-wTpaRtYPW2dyhQLbT28mdhQM1QbTgpnmyx0i9O2Tx4kw7e25xvk5J1zraRAbDOlMv5n3uHvbpVfus-Ka6t2H_ggdi0y4vQfpM_R6KYLyavzq7l55SgiaHPxlBmoPLxd6LKjMNlrNETKc9JKUONjSsLDtfUSRu4jlZsokDEWT43hHTcXkW0-tXw9lLkOp5QTZdkejkKR8Ig307PxUxHMGzNfw1g')"}}>
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-orange-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">Carlos Souza</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-500 font-medium">Atrasado: 2 dias</p>
                </div>
              </div>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <span className="material-symbols-outlined text-xl">call</span>
              </button>
            </div>
          </div>
        </section>

        <section aria-label="Próximos Contatos">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Próximos Contatos</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-300 font-bold text-lg">ML</div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">Mariana Luz</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-slate-400">schedule</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Hoje, 14:00</p>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 dark:text-gray-600">chevron_right</span>
            </div>
            
            <div className="bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0 text-pink-600 dark:text-pink-300 font-bold text-lg">PS</div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">Pedro Santos</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-slate-400">event</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Amanhã, 10:00</p>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 dark:text-gray-600">chevron_right</span>
            </div>
          </div>
        </section>
      </main>

      <FAB />
      <BottomNav />
    </div>
  );
};

export default Dashboard;
