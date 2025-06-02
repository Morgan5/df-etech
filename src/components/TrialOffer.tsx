import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Star } from 'lucide-react';

const TrialOffer: React.FC = () => {
  return (
    <section id="trial" className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-card overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary-300 py-4 px-6">
              <div className="flex items-center justify-center">
                <Star className="text-white mr-2" size={20} />
                <h3 className="text-xl font-bold text-white text-center">SPRINT D'ESSAI 5 JOURS</h3>
                <Star className="text-white ml-2" size={20} />
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Testez Avant de Vous Engager
                  </h4>
                  
                  <p className="text-gray-700 mb-6">
                    Découvrez notre Squad IA Starter avec 1-2 user stories livrées en un sprint de 5 jours. Constatez nos capacités avec un risque minimal et une transparence maximale.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 p-1 bg-success-100 rounded-full mr-3 mt-0.5">
                        <FileCheck size={16} className="text-success-600" />
                      </span>
                      <span className="text-gray-700">Assurance qualité du code par IA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 p-1 bg-success-100 rounded-full mr-3 mt-0.5">
                        <FileCheck size={16} className="text-success-600" />
                      </span>
                      <span className="text-gray-700">Mises à jour quotidiennes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 p-1 bg-success-100 rounded-full mr-3 mt-0.5">
                        <FileCheck size={16} className="text-success-600" />
                      </span>
                      <span className="text-gray-700">Contact francophone dédié</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 p-1 bg-success-100 rounded-full mr-3 mt-0.5">
                        <FileCheck size={16} className="text-success-600" />
                      </span>
                      <span className="text-gray-700">Gratuit si vous signez sous 10 jours</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/3 text-center">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-sm uppercase font-semibold text-gray-500 mb-2">Offre d'Essai</p>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">3 500€</div>
                    <p className="text-sm text-gray-500 mb-6">(Gratuit si signature sous 10 jours)</p>
                    
                    <a 
                      href="#contact" 
                      className="w-full block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Réserver Votre Essai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrialOffer;