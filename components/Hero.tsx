
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('emocional')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="text-8xl md:text-[12rem] font-serif font-black text-primary-700 tracking-tighter leading-none select-none">
            Longer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-800 mb-12 leading-tight px-4">
            Diferente de tudo que já existe! <br />
            <span className="italic text-primary-600 font-bold block mt-4">
              O fim da ejaculação precoce com resultados reais na primeira semana.
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col gap-6 justify-center items-center"
          >
            <motion.a
              href="https://pay.kiwify.com.br/SykVrzJ?afid=1gMqmYXp"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-700 hover:bg-primary-800 text-white font-black py-6 px-14 rounded-2xl shadow-xl transition-all w-full sm:w-auto text-xl uppercase tracking-wider"
            >
              Começar Agora (R$ 24,60)
            </motion.a>
            
            <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 text-emerald-700">
              <Users size={18} className="animate-pulse" />
              <span className="text-sm font-bold">85 pessoas já compraram hoje</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} />
      </motion.div>

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" 
      />
    </section>
  );
};

export default Hero;