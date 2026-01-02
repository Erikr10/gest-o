
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Interactions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24 transition-colors max-w-md mx-auto">
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-surface-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800 transition-colors">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back_ios_new</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Interações</h2>
        <button className="text-primary text-base font-bold">Filtrar</button>
      </header>

      <div className="flex p-4 flex-col bg-white dark:bg-surface-dark transition-colors">
        <div className="flex gap-4 items-center">
          <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 ring-2 ring-primary/20" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLr4g7q2YfXQ7kx0x1dj3V6KkaYWZyZnVbZ3KZ3A7--Yq2tAXNgAinWWil4MkBi-s_GBAE5eQ7AiqcSKb0VI_6QQuP8pA-wbV0qDV0pcgdEXl0NRXwO5GkR2qOYicRzQ04YmceUKH81OVi7a_z-IVt4a8wl7i9LGBDAFRLB-kkwBn-wals_FgshRkKiSEwtsGS_fd81j__lX8a9yl7K9BoK00XYAA4RaPI3NIIvAJHz1Kjb_eQppYyP-ruYSBf1Syoan9gxkVl_A")'}}></div>
            <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-primary border-2 border-white dark:border-surface-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-[12px] font-bold">check</span>
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Maria Silva</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-100">Cliente Ativo</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              Último contato: 3 dias atrás
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 bg-white dark:bg-surface-dark rounded-b-2xl shadow-sm mb-4 transition-colors">
        <button className="w-full h-14 bg-primary hover:bg-[#0fd640] transition-colors text-slate-900 gap-2 text-base font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center">
          <span className="material-symbols-outlined">add_circle</span>
          Registrar Nova Interação
        </button>
      </div>

      <div className="flex-1 px-4 pb-8 mt-4">
        <div className="grid grid-cols-[48px_1fr] gap-x-0">
          {/* Timeline Item 1 */}
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-primary shrink-0 z-10 border-2 border-background-light dark:border-background-dark">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <div className="w-[2px] bg-gray-200 dark:bg-gray-700 grow min-h-8"></div>
          </div>
          <div className="flex flex-col pb-8 pl-3 pt-1">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-start mb-1">
                <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Compra Realizada</p>
                <span className="text-xs font-semibold text-emerald-600 dark:text-primary bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">R$ 150,00</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide mb-2">Hoje • 14:30</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Comprou kit de perfumes para presente. Solicitou embalagem especial.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 z-10 border-2 border-background-light dark:border-background-dark">
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
            </div>
          </div>
          <div className="flex flex-col pb-8 pl-3 pt-1">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Ligação de Retorno</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide mb-2">Ontem • 09:15</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Confirmou interesse na promoção de verão. Ficou de passar na loja amanhã.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactions;
