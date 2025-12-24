
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Users } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="container mx-auto px-6 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative text-center max-w-4xl mx-auto py-20 px-8 rounded-[3rem] bg-gradient-to-br from-primary-800 to-primary-950 border border-primary-700/50 shadow-2xl shadow-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/5 rounded-full -ml-20 -mb-20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            Hoje é o dia de retomar <br />
            <span className="italic font-normal text-primary-200 text-3xl md:text-4xl">o controle da sua vida íntima.</span>
          </h2>
          
          <div className="mb-10">
            <p className="text-slate-300 text-lg mb-2 max-w-2xl mx-auto font-light leading-relaxed">
              Não perca a oportunidade de acessar todo esse conhecimento por apenas 
            </p>
            <div className="text-white text-5xl font-bold tracking-tight">
              R$ 24,60 <span className="text-lg text-slate-500 font-normal">à vista</span>
            </div>
            <p className="text-emerald-400 font-bold text-sm mt-2 uppercase tracking-[0.15em]">Ou 5 parcelas de R$ 5,39</p>
          </div>
          
          <div className="flex flex-col gap-6 items-center">
            <motion.a
              href="https://pay.kiwify.com.br/SykVrzJ?afid=1gMqmYXp"
              whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-primary-950 font-black py-6 px-12 rounded-2xl transition-all group shadow-2xl text-xl"
            >
              QUERO O MÉTODO AGORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center gap-3 bg-emerald-500/10 px-6 py-2 rounded-full border border-emerald-500/20 text-emerald-400">
              <Users size={18} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">85 homens já tomaram essa decisão hoje</span>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-3 text-slate-500 text-sm">
            <Lock size={16} />
            Pagamento Processado com Segurança
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;