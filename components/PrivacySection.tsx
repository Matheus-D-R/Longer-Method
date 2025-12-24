
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, LockKeyhole } from 'lucide-react';

const PrivacySection: React.FC = () => {
  return (
    <section id="privacidade" className="container mx-auto px-6 py-20">
      <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-12 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Sua privacidade é inegociável.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Sabemos o quanto a discrição é importante para você. Todo o nosso conteúdo é entregue de forma privada e segura, para que você possa estudar e praticar no seu tempo, sem preocupações.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: ShieldCheck, text: "Acesso 100% privado e individual" },
                { icon: EyeOff, text: "Conteúdo discreto, sem rótulos expostos" },
                { icon: LockKeyhole, text: "Segurança total dos seus dados" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <item.icon size={20} className="text-primary-400" />
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-48 h-64 bg-primary-800/30 rounded-2xl border border-primary-700/50 flex flex-col items-center justify-center gap-4 shadow-2xl shadow-primary-900/40"
            >
              <ShieldCheck size={64} className="text-primary-300" />
              <div className="h-2 w-24 bg-primary-700 rounded-full" />
              <div className="h-2 w-16 bg-primary-700 rounded-full opacity-50" />
            </motion.div>
          </div>
        </div>
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-600/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default PrivacySection;
