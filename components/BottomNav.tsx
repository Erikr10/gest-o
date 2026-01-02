
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', icon: 'dashboard', label: 'Início', path: '/dashboard' },
  { id: 'clients', icon: 'groups', label: 'Clientes', path: '/clients' },
  { id: 'notifications', icon: 'calendar_today', label: 'Agenda', path: '/notifications' },
  { id: 'settings', icon: 'settings', label: 'Ajustes', path: '/settings' },
];

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 z-40 h-[84px] transition-colors">
      <div className="flex justify-around items-center h-16 pb-2 max-w-md mx-auto">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all ${
              isActive(item.path) 
              ? 'text-primary scale-110' 
              : 'text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive(item.path) ? 'fill' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
