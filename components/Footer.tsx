
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 border-t border-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 opacity-60">
            <span className="font-serif text-lg tracking-tight font-bold text-white">
              Conexão <span className="font-light italic text-primary-300">& Controle</span>
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-primary-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary-300 transition-colors">Dúvidas Frequentes</a>
            <a href="#" className="hover:text-primary-300 transition-colors">Contato</a>
          </nav>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-900/50">
          <p className="text-slate-600 text-xs font-light tracking-wide max-w-2xl mx-auto mb-4">
            Este site tem caráter exclusivamente educativo. As informações aqui contidas não substituem orientações de profissionais de saúde habilitados.
          </p>
          <p className="text-slate-700 text-[10px] uppercase tracking-[0.2em]">
            &copy; {currentYear} Conexão & Controle. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
