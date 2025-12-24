
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Star, Clock, Users } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="preco" className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-emerald-900/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-500/20"
          >
            <Clock size={14} />
            RESTAM POUCAS VAGAS COM 95% DE DESCONTO
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Acesso aos 100 primeiros de 2025</h2>
          <p className="text-slate-400 font-light text-lg">Garanta sua vaga no grupo de acompanhamento com telemedicina gratuita.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-900/20 border-2 border-primary-700/50 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="bg-primary-800/20 p-8 border-b border-primary-700/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-slate-400 text-xs font-medium ml-2">Acompanhamento Médico Incluso</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Combo Longer Method 2025</h3>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">+ Bônus: Telemedicina Gratuita</p>
            </div>
            
            <div className="text-center md:text-right">
              <span className="text-slate-500 line-through text-lg block mb-1">De R$ 149,00</span>
              <div className="flex flex-col items-center md:items-end">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg">Apenas</span>
                  <span className="text-6xl font-black text-white tracking-tighter">R$ 24,60</span>
                </div>
                <p className="text-emerald-400 font-bold text-sm mt-1 uppercase tracking-widest">Ou 5x de R$ 5,39</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <ul className="space-y-4">
                {[
                  "Metodologia Longer Method Completa",
                  "Protocolo de 21 dias (Resultados rápidos)",
                  "Guia Sem Medicação e Sem Esforço",
                  "Acesso Vitalício à Plataforma"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <Zap size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "Consultas Gratuitas (Telemedicina)*",
                  "Suporte da Equipe Técnica no Brasil",
                  "Garantia de 7 dias Incondicional",
                  "Acesso Discreto (Celular/PC)"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-slate-300 font-bold"
                  >
                    <Zap size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <motion.a 
                href="https://pay.kiwify.com.br/SykVrzJ?afid=1gMqmYXp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-2xl rounded-2xl shadow-xl shadow-emerald-900/20 transition-all uppercase tracking-wider"
              >
                Quero Garantir Meu Desconto
                <ArrowRight />
              </motion.a>
              
              <div className="flex items-center gap-3 bg-emerald-900/30 px-6 py-2 rounded-full border border-emerald-500/20 text-emerald-400">
                <Users size={20} className="animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider">85 pessoas já compraram nas últimas 24h</span>
              </div>
            </div>
            
            <p className="text-center text-slate-500 text-[10px] mt-6 italic">
              *As consultas de telemedicina são limitadas aos 100 primeiros inscritos conforme disponibilidade dos doutores Paulo César e Felipe Ribeiro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;