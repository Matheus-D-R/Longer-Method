
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Quote } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Paulo César",
    role: "Diretor Clínico",
    specialty: "Urologia e Saúde Masculina",
    image: "https://longermethod.com/wp-content/uploads/2024/12/doutor-paulo-cesar.png",
    quotes: [
      "A nossa intenção é que o Longer Method seja difundido em todo o território nacional e que futuramente seja uma solução convencional para o problema de ejaculação precoce e prevenção da disfunção erétil.",
      "Para viabilizar o Longer Method no Brasil existem diversos custos operacionais, como manutenção de site, da plataforma para acesso e de pessoal para atendimento do suporte. Para popularizar ainda mais esse procedimento no país, decidimos oferecer um desconto de 95% para os 100 primeiros usuários de 2025, inclusive com consultas gratuitas de acompanhamento via telemedicina para esses 100 primeiros."
    ]
  },
  {
    name: "Dr. Felipe Ribeiro",
    role: "Especialista em Metodologia",
    specialty: "Performance Masculina",
    image: "https://longermethod.com/wp-content/uploads/2024/12/doutor-felipe-ribeiro.png",
    quotes: [
      "Tivemos uma certa dificuldade para disponibilizar o Longer Method no Brasil, haja vista que atualmente tanto eu quanto o doutor Paulo estamos atuando fora do país. Obviamente que para ensejar esse projeto nós tivemos que organizar uma equipe no Brasil para iniciar e dar andamento na regularização do mesmo.",
      "Temos convicção que o Longer Method é diferente de tudo, pois visa máximo resultado com o mínimo de esforço, sem necessidade de medicação. Durante o período de testes no Canadá alguns indivíduos tiveram resultados satisfatórios com menos de 3 semanas."
    ]
  }
];

const DoctorsSection: React.FC = () => {
  return (
    <section id="especialistas" className="container mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary-900/30 border border-primary-800 rounded-full text-primary-300 text-xs font-bold tracking-widest uppercase">
          <Award size={14} className="text-primary-400" />
          Corpo Técnico Responsável
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
          Conheça os idealizadores <br />
          <span className="italic text-primary-400 font-normal">do Longer Method no Brasil.</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-24">
        {doctors.map((doc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-slate-900/30 p-8 md:p-12 rounded-[3rem] border border-slate-800 group hover:border-primary-700/50 transition-all duration-500`}
          >
            {/* Photo Column */}
            <div className="w-full lg:w-1/3">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-800">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-2/3 relative z-10">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{doc.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-primary-400 font-bold text-sm uppercase tracking-[0.2em]">{doc.role}</span>
                  <div className="h-1 w-12 bg-primary-800 rounded-full" />
                  <span className="text-slate-500 text-sm">{doc.specialty}</span>
                </div>
              </div>
              
              <div className="space-y-8">
                {doc.quotes.map((quote, qIdx) => (
                  <motion.div 
                    key={qIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + qIdx * 0.2 }}
                    className="relative pl-6 border-l-4 border-primary-700/30"
                  >
                    <p className="text-slate-300 text-lg md:text-xl font-light italic leading-relaxed">
                      "{quote}"
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800/50 flex items-center gap-4 text-emerald-500 font-bold text-sm tracking-widest uppercase">
                <CheckCircle size={20} />
                <span>Especialista Validado Internacionalmente</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
