
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Waves } from 'lucide-react';

const pillars = [
  {
    title: "Consciência Corporal",
    desc: "Aprenda a identificar os sinais que o seu corpo envia. O controle começa no reconhecimento físico.",
    icon: Activity,
    color: "text-blue-400"
  },
  {
    title: "Equilíbrio Mental",
    desc: "A mente e o corpo trabalham juntos. Técnicas simples para acalmar a ansiedade de desempenho.",
    icon: Brain,
    color: "text-emerald-400"
  },
  {
    title: "Práticas Gradativas",
    desc: "Sem promessas mágicas. Um método baseado em hábitos e técnicas aplicáveis no seu tempo.",
    icon: Waves,
    color: "text-indigo-400"
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="bg-slate-900/30 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Uma abordagem completa <br />
            <span className="text-primary-400 italic font-normal">e verdadeiramente simples</span>
          </h2 >
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            O controle não é um "botão" que você aperta, mas uma habilidade que você desenvolve. Nosso foco é unir mente, corpo e técnica de forma discreta e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-primary-950 border border-slate-800 hover:border-primary-600 transition-all duration-300 group"
            >
              <div className={`mb-6 p-4 rounded-xl bg-slate-900 w-fit ${pillar.color} group-hover:bg-primary-900 transition-all`}>
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
