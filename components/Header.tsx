
import React from 'react';
import { ShieldCheck, Tag } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Green Discount Banner at the very top */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Tag size={14} className="animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            95% de desconto para os primeiros 100 usuários
          </span>
        </div>
      </div>

      <header 
        className={`transition-all duration-500 border-b ${
          isScrolled 
          ? 'bg-primary-950/90 blur-backdrop border-slate-800 py-3' 
          : 'bg-white/80 blur-backdrop border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary-700' : 'bg-primary-800'}`}>
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className={`font-serif text-xl tracking-tight font-bold transition-colors ${isScrolled ? 'text-white' : 'text-primary-900'}`}>
              Longer <span className="font-light italic opacity-80">Method</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className={`text-[10px] uppercase tracking-widest font-bold hidden sm:block ${isScrolled ? 'text-emerald-400' : 'text-emerald-600'}`}>
              Acesso Seguro e Discreto
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
