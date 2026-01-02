
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAB: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-24 right-4 z-30 sm:right-[calc(50%-180px)]">
      <button 
        onClick={() => navigate('/clients')} // Usually opens a form, here redirects to list for demo
        className="bg-primary text-black h-14 w-14 rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-primary/30"
      >
        <span className="material-symbols-outlined text-3xl font-semibold">add</span>
      </button>
    </div>
  );
};

export default FAB;
