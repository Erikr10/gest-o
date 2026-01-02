
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import FAB from '../components/FAB';

const Clients: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');

  const clients = [
    {
      id: '1',
      name: 'Ana Silva',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGWIuhIGDjoCrOPPA-wP43W5Pfa1dP2pKFjUEGs1kkXbRaBIWUmsTG56WSLH5pfjPtdarcWgea8yeR7OJMUuWwqWngGcrFHye7X5QFKe39TNgeS5gAs6yjwCP4VweMB8kY0scDT_9KHGwZF3_X7W8PhdzIAfJJvOuN7CdKbqxIOdh4WJR1YlpWgDGLa_KFJa3L-pNnca46w7IuE-3k2PgoQExP_aNWiujaIlKrZ7hG5yM4G_LVeupAKB2mTCAgh8uh4W0-ZBXXg',
      status: 'active',
      lastPurchase: 'Hoje'
    },
    {
      id: '2',
      name: 'Carlos Souza',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0CYnSUn9yuTT2jN2v1pbHe9lCFAFMPFgxZfYgSWhUuUhvDv5yM6hcvSy84CpvDJ1HAHEDm7fkiABL66xMTMBg-cRv5ihKWaMfRaJNtLilgU_KDegkHlTYD9R2CXuD5UqPA9sB-SBqGXydqjf5gRPxJ2CrgDTEYMDbV4w8aOhS6ARDE3ZQAiQ5ckcJ1BHTqyYYCruixUPfH79jnfAek5QEzMiThGLU18AOu8K04D8z8RrAoiDl7MyGTvdxCQV8L41Zolk0vR3U0Q',
      status: 'pending',
      lastPurchase: '15 dias atrás'
    }
  ];

  const filters = ['Todos', 'Recentes', 'Inativos', 'Pendentes'];

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-24 transition-colors">
      <header className="flex flex-col gap-2 p-4 pt-12 pb-2 sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm max-w-md mx-auto w-full">
        <div className="flex items-center justify-between h-8">
          <div className="w-8"></div>
          <button onClick={() => navigate('/settings')} className="text-[#111813] dark:text-white p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <h1 className="text-[#111813] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Meus Clientes</h1>
      </header>

      <div className="px-4 py-2 sticky top-[100px] z-10 bg-background-light dark:bg-background-dark -mt-1 pb-4 max-w-md mx-auto w-full">
        <label className="flex flex-col h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
            <div className="text-[#61896b] flex border-none bg-[#e8ece9] dark:bg-[#1a2e20] items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="flex w-full min-w-0 flex-1 rounded-r-lg text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#e8ece9] dark:bg-[#1a2e20] h-full placeholder:text-[#61896b] px-4 pl-2 text-base outline-none transition-all" 
              placeholder="Nome ou telefone" 
            />
          </div>
        </label>
      </div>

      <div className="px-4 pb-4 flex gap-2 overflow-x-auto no-scrollbar max-w-md mx-auto w-full">
        {filters.map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f 
              ? 'bg-[#111813] dark:bg-white text-white dark:text-[#111813]' 
              : 'bg-[#e8ece9] dark:bg-[#1a2e20] text-[#111813] dark:text-white hover:bg-primary/20'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col px-4 gap-3 max-w-md mx-auto w-full">
        {clients.map((client) => (
          <div 
            key={client.id}
            onClick={() => navigate('/client-details')}
            className="group flex items-center gap-4 bg-white dark:bg-[#1a261e] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0 shadow-inner" 
              style={{backgroundImage: `url("${client.avatar}")`}}
            ></div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <p className="text-[#111813] dark:text-white text-base font-semibold leading-normal line-clamp-1">{client.name}</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  client.status === 'active' ? 'text-primary bg-primary/10' : 'text-orange-500 bg-orange-500/10'
                }`}>
                  {client.status === 'active' ? 'Ativo' : 'Pendente'}
                </span>
              </div>
              <p className="text-[#61896b] dark:text-[#8ea895] text-sm font-normal leading-normal line-clamp-1 mt-0.5">
                Última compra: {client.lastPurchase}
              </p>
            </div>
            <div className="shrink-0 text-gray-400">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        ))}
      </div>

      <FAB />
      <BottomNav />
    </div>
  );
};

export default Clients;
