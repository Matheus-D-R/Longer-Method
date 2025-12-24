
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Lock } from 'lucide-react';

const thoughts = [
  { text: "Isso afeta minha confiança no dia a dia", icon: Shield },
  { text: "Tenho receio de decepcionar quem está comigo", icon: Heart },
  { text: "Às vezes acabo evitando conexões por medo", icon: Lock },
];

const EmotionalSupport: React.FC = () => {
  return (
    <section id="emocional" className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-snug">
            Sentir-se compreendido é o primeiro passo para o controle.
          </h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Entendemos que este é um assunto delicado. Por trás da biologia, existe a emoção, o nervosismo e a expectativa. Tirar o peso do julgamento é o que permite você começar a evoluir.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {thoughts.map((thought, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -5, borderColor: 'rgba(98, 125, 152, 0.5)' }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 mb-2">
                  <thought.icon size={24} />
                </div>
                <span className="text-slate-200 font-medium italic text-lg leading-relaxed">"{thought.text}"</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalSupport;
