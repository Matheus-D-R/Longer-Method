
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layers, UserCheck, Star } from 'lucide-react';

const levels = [
  {
    name: "Nível Inicial",
    items: ["Procedimento 1", "Procedimento 2"],
    icon: Layers,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    name: "Nível Intermediário",
    items: ["Procedimento 1", "Procedimento 2"],
    icon: Star,
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    name: "Nível Avançado",
    items: ["Procedimento 1", "Procedimento 2", "Procedimento 3"],
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
];

import { TrendingUp } from 'lucide-react';

const PlatformAccess: React.FC = () => {
  return (
    <section id="plataforma" className="container mx-auto px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            AO QUE TEREI ACESSO NA <br />
            <span className="italic text-primary-400 font-normal">PLATAFORMA LONGER METHOD?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {levels.map((level, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2.5rem] border ${level.color} flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-6">
                <level.icon size={24} />
                <h3 className="text-xl font-bold text-white">{level.name}</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                {level.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="p-8 rounded-3xl bg-primary-900/20 border border-primary-800/50 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary-700 flex items-center justify-center text-white shrink-0">
              <Star size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Técnica de Efetividade</h4>
              <p className="text-slate-400 text-sm">Otimize seus resultados com protocolos exclusivos.</p>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="p-8 rounded-3xl bg-emerald-900/10 border border-emerald-800/30 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-700 flex items-center justify-center text-white shrink-0">
              <UserCheck size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Suporte com Especialista</h4>
              <p className="text-slate-400 text-sm">Canal direto para tirar dúvidas e acompanhamento.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-primary-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
            "Conquiste resultados à partir da primeira semana e adquira a confiança que todo homem precisa ter!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformAccess;
