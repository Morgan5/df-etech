import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CpuIcon } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white" id="value-proposition">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Livrez Mieux. Livrez Plus Vite.
          </h2>
          <p className="text-xl text-gray-700">
            Nos équipes offshore intégrées à l'IA améliorent naturellement votre flux de travail agile, apportant l'expertise dont vous avez besoin sans la charge d'agrandir vos équipes internes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-subtle hover:shadow-card transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-3 bg-primary-100 rounded-full w-fit mb-6">
              <CpuIcon className="text-primary-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accélération par l'IA</h3>
            <p className="text-gray-700">
              Nos outils d'IA propriétaires optimisent la qualité du code, automatisent les tâches répétitives et accélèrent votre cycle de développement jusqu'à 40%.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-subtle hover:shadow-card transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-3 bg-secondary-100 rounded-full w-fit mb-6">
              <Zap className="text-secondary-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intégration Agile</h3>
            <p className="text-gray-700">
              Nos équipes s'intègrent parfaitement dans vos flux de travail existants avec une transparence totale et une communication quotidienne dans votre langue.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-subtle hover:shadow-card transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-3 bg-accent-100 rounded-full w-fit mb-6">
              <ShieldCheck className="text-accent-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Montée en Charge Sans Risque</h3>
            <p className="text-gray-700">
              Commencez par un sprint d'essai de 5 jours et ajustez la taille de votre équipe selon vos besoins, avec une tarification transparente et sans engagement à long terme.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;