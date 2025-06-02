import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPackages } from '../data/pricing';

const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Offres
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tarification transparente sans frais cachés. Choisissez le forfait qui correspond à vos besoins.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              className={`rounded-2xl overflow-hidden ${
                pkg.isPopular 
                  ? 'border-2 border-primary-300 relative shadow-card' 
                  : 'border border-gray-200 shadow-subtle'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {pkg.isPopular && (
                <div className="bg-primary-300 text-white text-center py-1 font-medium text-sm">
                  LE PLUS POPULAIRE
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.focus}</p>
                
                <div className="mb-6">
                  <p className="text-gray-700 font-medium">{pkg.team}</p>
                  <div className="flex items-end mt-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 p-1 bg-success-100 rounded-full mr-3 mt-0.5">
                          <Check size={14} className="text-success-600" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all duration-200 ${
                    pkg.isPopular 
                      ? 'bg-primary-300 hover:bg-primary-400 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Commencer
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;