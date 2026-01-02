
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClientDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark pb-24 transition-colors">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-[#102215]/80 backdrop-blur-md px-4 py-3 border-b border-slate-100 dark:border-slate-800/50 max-w-md mx-auto w-full">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Detalhes</h2>
        <button className="flex h-10 items-center justify-end px-2">
          <p className="text-primary text-base font-semibold">Editar</p>
        </button>
      </header>

      <main className="flex-1 px-4 pt-6 space-y-6 max-w-md mx-auto w-full">
        <section className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 border-4 border-white dark:border-slate-800 shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBP4SzTD5lwIfDW8FyKQBBgKfS89qqEdoUNr7DPDpPbT9fw5i0HsDKWs69ghIOuLUcVKVFI2hnKL2Ddf_B0-08c1l6vW9Z0MXNTL2E02W2BODumnMF4S5n39-Wb0vuFajtcqfbEmdQSvkRjxYLZfcTXy48ooWlgp9MblWHDIBWJrOvEmLkHRgBsjyHsz_mocGzqHDI0geda06brjeItZiKtCx2YltynpXDirCTK2m9hNMKvknhE4koKBP6pu3jEc30DwIuG0Tab-g")'}}></div>
            <div className="absolute bottom-0 right-0 bg-primary border-2 border-white dark:border-slate-800 rounded-full p-1.5 flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-sm font-bold">star</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Maria Silva</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">(11) 99999-9999</p>
            <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Cliente Ativo</div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4 w-full">
          <button className="flex flex-col items-center gap-2 group">
            <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20 transition-transform group-active:scale-95">
              <span className="material-symbols-outlined text-black">call</span>
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Ligar</span>
          </button>
          <button onClick={() => navigate('/interactions')} className="flex flex-col items-center gap-2 group">
            <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20 transition-transform group-active:scale-95">
              <span className="material-symbols-outlined text-black">chat</span>
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Interações</span>
          </button>
          <button className="flex flex-col items-center gap-2 group">
            <div className="size-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm transition-transform group-active:scale-95">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">mail</span>
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Email</span>
          </button>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 ml-1 uppercase tracking-wide">Configuração de Lembrete</h3>
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700/50 divide-y divide-slate-100 dark:divide-slate-700">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined block text-[20px]">calendar_clock</span>
                </div>
                <span className="text-slate-900 dark:text-white font-medium">Intervalo (dias)</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="text-slate-900 dark:text-white font-bold w-6 text-center">30</span>
                <button className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined block text-[20px]">notifications_active</span>
                </div>
                <span className="text-slate-900 dark:text-white font-medium">Notificações</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 ml-1 uppercase tracking-wide">Observações</h3>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50">
            <textarea 
              className="w-full bg-transparent border-0 p-0 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:ring-0 resize-none text-base leading-relaxed min-h-[80px] outline-none" 
              placeholder="Adicione notas sobre o cliente..." 
              defaultValue="Prefere contato via WhatsApp na parte da tarde. Gosta de produtos veganos."
            ></textarea>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-2 px-1">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Histórico Recente</h3>
            <button onClick={() => navigate('/interactions')} className="text-sm text-primary font-medium">Ver tudo</button>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center gap-4">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-[20px]">shopping_bag</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Compra - Kit Shampoo</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">10 Out, 2023</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 dark:text-white">R$ 45,00</p>
              <span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">Pago</span>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#102215]/90 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 p-4 pb-8 z-40 max-w-md sm:left-[calc(50%-224px)] mx-auto">
        <button className="w-full bg-primary hover:bg-green-400 text-slate-900 font-bold text-lg h-14 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined">add_circle</span>
          Registrar Nova Venda
        </button>
      </div>
    </div>
  );
};

export default ClientDetails;
