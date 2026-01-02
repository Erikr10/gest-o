
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors">
      <div className="w-full max-w-md flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm flex items-center justify-center mb-6 overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDs9gIF72ZfaYmxpc7S7g43su0C5GcrRIuS2h-KXE4fA9CNfnj7oDQeAV76JOME-Up-IP2heraJDn0AvSdKF2aBnSwUBJgoV-fFH_G0PSqYEZGlVYGsESiEiXNuWYQvnLal3PDqlvytugpA26OALl30F6NbWY4cy_Ys2-j2OEQ8bCWyJdZSk0mlhnakbIPem_N17kPnvuifFya3xQlhUSVzH09Dz1-BgCewdFoab4-Ujq2OFK5p-TZf_0pRpZiYQD2u49Nrdmqjgw")'}}></div>
          </div>
          <h1 className="text-text-main dark:text-white text-[32px] font-bold leading-tight text-center">Gestão Pro</h1>
          <p className="text-text-muted text-center mt-2 text-base">Organize seus clientes e venda mais.</p>
        </div>
        
        <form className="flex flex-col gap-5 w-full" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-text-main dark:text-gray-200 text-sm font-medium ml-1">E-mail</label>
            <div className="relative">
              <input 
                className="w-full rounded-xl border border-[#dbe6de] dark:border-gray-700 bg-surface-light dark:bg-surface-dark text-text-main dark:text-white h-14 px-4 text-base placeholder:text-text-muted focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none" 
                placeholder="seu@email.com" 
                type="email" 
                defaultValue="demo@gestaopro.com" 
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-text-main dark:text-gray-200 text-sm font-medium ml-1">Senha</label>
            <div className="relative flex items-center">
              <input 
                className="w-full rounded-xl border border-[#dbe6de] dark:border-gray-700 bg-surface-light dark:bg-surface-dark text-text-main dark:text-white h-14 pl-4 pr-12 text-base placeholder:text-text-muted focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none" 
                placeholder="Sua senha" 
                type={showPassword ? 'text' : 'password'}
                defaultValue="123456" 
              />
              <button 
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-text-muted hover:text-primary transition-colors focus:outline-none" 
                type="button"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button type="button" className="text-text-muted hover:text-primary text-sm font-medium transition-colors">Esqueci minha senha</button>
          </div>
          
          <button type="submit" className="mt-4 w-full h-14 bg-primary hover:bg-[#0fd640] text-[#052e11] text-base font-bold rounded-xl transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2">
            <span>Entrar</span>
            <span className="material-symbols-outlined text-[20px]">login</span>
          </button>
        </form>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="relative w-full text-center">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background-light dark:bg-background-dark px-2 text-sm text-text-muted">Não tem uma conta?</span>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="w-full h-12 bg-transparent border-2 border-[#dbe6de] dark:border-gray-700 hover:border-primary dark:hover:border-primary text-text-main dark:text-white text-base font-medium rounded-xl transition-colors active:scale-[0.98]">Criar conta grátis</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
