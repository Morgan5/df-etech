import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const references = [
  {
    id: 1,
    logo: "https://images.pexels.com/photos/15013972/pexels-photo-15013972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "TechCorp France",
    quote: "Digital Factory a transformé notre processus de développement. Notre vélocité a augmenté de 40% dès le premier mois.",
    author: "Marie Dubois",
    position: "CTO"
  },
  {
    id: 2,
    logo: "https://images.pexels.com/photos/15013973/pexels-photo-15013973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "InnovSoft",
    quote: "L'intégration de l'IA dans notre workflow a considérablement amélioré la qualité de notre code.",
    author: "Pierre Martin",
    position: "Directeur Technique"
  },
  {
    id: 3,
    logo: "https://images.pexels.com/photos/15013974/pexels-photo-15013974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "DataFlow Solutions",
    quote: "Une collaboration exceptionnelle qui nous a permis de réduire nos délais de livraison de 50%.",
    author: "Sophie Bernard",
    position: "VP Engineering"
  }
];

const ClientReferences: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur développement avec notre approche IA-first
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {references.map((reference) => (
              <SwiperSlide key={reference.id}>
                <div className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-card transition-shadow duration-300">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <img
                      src={reference.logo}
                      alt={`${reference.name} logo`}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <blockquote className="text-gray-700 mb-6">
                    "{reference.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{reference.author}</p>
                      <p className="text-sm text-gray-600">{reference.position}</p>
                      <p className="text-sm text-primary-600">{reference.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReferences;