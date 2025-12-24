
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, PlayCircle } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowVideo(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowVideo(false);
    }
  };

  return (
    <section id="video" className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900/40 to-slate-900/40 border border-slate-800 p-8 md:p-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-primary-400 font-bold tracking-widest text-[10px] uppercase">
              <PlayCircle size={16} className="text-primary-500" />
              <span>Explicação Oficial</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A base científica <br />
              <span className="italic text-primary-300 font-normal text-2xl md:text-4xl">por trás do Longer Method.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
              Neste vídeo, os doutores Paulo César e Felipe Ribeiro explicam como viabilizaram este projeto no Brasil e os resultados obtidos internacionalmente.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 bg-white text-primary-950 hover:bg-primary-100 font-black py-4 px-10 rounded-xl transition-all group shadow-xl uppercase tracking-tighter"
              >
                <Play size={18} fill="currentColor" />
                Assistir Agora
              </button>
            </div>
          </div>

          <div 
            className="relative cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <div className="aspect-video rounded-3xl overflow-hidden bg-white border-4 border-slate-800/50 relative shadow-2xl flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-primary-700">
                <span className="text-4xl font-serif font-bold tracking-tighter">Longer</span>
                <div className="w-20 h-20 rounded-full bg-primary-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={32} fill="white" className="ml-1" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Clique para Iniciar</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 z-[100] bg-primary-950/98 blur-backdrop flex items-center justify-center p-4 cursor-pointer"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 z-[110]"
            >
              <X size={40} />
            </button>
            <motion.div 
              ref={modalRef}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
            >
              <iframe 
                src="https://player.vimeo.com/video/1045026422?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen 
                className="w-full h-full"
                title="Conexão e Controle"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
