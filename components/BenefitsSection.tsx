
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: "Maior disposição",
    desc: "Em pesquisa realizada durante a fase de testes com os usuários do Longer Method, indicou-se melhoramento do desempenho sexual em 67% desses após a segunda semana. Com aumento progressivo desse percentual após esse período.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Fim da ejaculação precoce",
    desc: "O principal objetivo do Longer Method é eliminar este problema de forma definitiva, com técnicas exclusivas de fortalecimento da região pélvica, sem a necessidade de uso contínuo de medicamentos, e sem causar qualquer tipo de efeito colateral.",
    icon: ShieldCheck,
    color: "text-emerald-400"
  },
  {
    title: "Melhora da ereção",
    desc: "Outro benefício constatado pelo Longer Method é a melhora da ereção, proporcionando maior força e resistência. Com o fortalecimento da região pélvica poderá auxiliar também na prevenção da disfunção erétil.",
    icon: TrendingUp,
    color: "text-blue-400"
  }
];

const BenefitsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % benefits.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Desktop Layout: 3 Columns */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-primary-700/50 transition-all group"
          >
            <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}>
              <benefit.icon size={30} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
            <p className="text-slate-400 leading-relaxed font-light text-base">
              {benefit.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout: Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden px-2">
          <motion.div 
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {benefits.map((benefit, idx) => (
              <div key={idx} className="min-w-full px-2">
                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${benefit.color} mb-6`}>
                    <benefit.icon size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-base">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {benefits.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === i ? 'bg-primary-500 w-6' : 'bg-slate-700'
                }`}
                aria-label={`Ir para benefício ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
