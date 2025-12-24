
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-primary-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`shrink-0 ml-4 ${isOpen ? 'text-primary-400' : 'text-slate-500'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-400 leading-relaxed font-light text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é o Longer Method?",
      answer: "O Longer Method é uma metodologia científica e prática desenvolvida por especialistas internacionais, focada no fortalecimento da região pélvica e no controle da ansiedade de desempenho. É uma abordagem natural, sem necessidade de medicamentos, que visa o controle total da ejaculação."
    },
    {
      question: "Como posso iniciar o Longer Method?",
      answer: "Para iniciar, basta clicar em qualquer botão 'Começar Agora' nesta página. Você será redirecionado para nossa plataforma de pagamento segura. Após a confirmação, você receberá acesso imediato a todo o conteúdo e aos bônus exclusivos de 2025."
    },
    {
      question: "Quando terei resultados com o Longer Method?",
      answer: "Muitos de nossos usuários relatam melhoras significativas logo na primeira semana de prática. O protocolo completo é desenhado para 21 dias, tempo necessário para que as técnicas de fortalecimento e consciência corporal apresentem resultados sólidos e duradouros."
    },
    {
      question: "Esse site é seguro?",
      answer: "Sim, absolutamente. Utilizamos tecnologia de criptografia de ponta para garantir que seus dados estejam protegidos. Além disso, a sua privacidade é nossa prioridade: a cobrança na fatura do cartão aparece de forma discreta e ninguém saberá o conteúdo do que você adquiriu."
    },
    {
      question: "Quando vou receber o Longer Method?",
      answer: "O acesso é imediato. Assim que o pagamento for aprovado, você receberá um e-mail com seus dados de acesso (usuário e senha) para entrar na nossa plataforma exclusiva de membros e começar os treinamentos hoje mesmo."
    },
    {
      question: "Quais são os benefícios do Longer Method?",
      answer: "Além de eliminar a ejaculação precoce, o método proporciona maior confiança íntima, melhora na qualidade e rigidez da ereção, aumento da disposição física e emocional, e o fim da ansiedade de desempenho que afeta tantos homens."
    }
  ];

  return (
    <section id="faq" className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-slate-800 border border-slate-700 rounded-full text-slate-400 text-xs font-bold tracking-widest uppercase">
            <HelpCircle size={14} />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Perguntas <span className="italic text-primary-400 font-normal">Frequentes</span>
          </h2>
          <p className="text-slate-400 font-light">
            Tudo o que você precisa saber para começar sua transformação com total segurança.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/20 border border-slate-800 rounded-[2.5rem] px-8 md:px-12 py-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
