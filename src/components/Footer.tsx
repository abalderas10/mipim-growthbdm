'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-neutral text-neutral-content" data-theme="mipim">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Event Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Evento MIPIM México
              </h3>
              <p className="text-neutral-content/80 mb-6 leading-relaxed">
                Un encuentro estratégico para líderes del sector inmobiliario. 
                Conectando México con las oportunidades globales de MIPIM Cannes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="badge badge-accent badge-lg">
                  10 Septiembre 2025
                </div>
                <div className="badge badge-primary badge-lg">
                  8:30 AM
                </div>
                <div className="badge badge-secondary badge-lg">
                  Cupo Limitado
                </div>
              </div>
            </motion.div>

            {/* Organizers */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Organizadores
              </h4>
              <div className="space-y-4">
                <div>
                  <a
                    href="https://growthbdm.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-content/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Growth BD México
                  </a>
                </div>
                <div>
                  <a
                    href="https://h2gconsulting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-content/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    How2Go Consulting
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contacto
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:info@evento-mipim.mx"
                    className="text-neutral-content/80 hover:text-white transition-colors duration-200"
                  >
                    info@evento-mipim.mx
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+525512345678"
                    className="text-neutral-content/80 hover:text-white transition-colors duration-200"
                  >
                    +52 55 1234 5678
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location */}
          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-content/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Ubicación del Evento
                </h4>
                <div className="text-neutral-content/80 space-y-1">
                  <p className="font-medium">Neuchatel</p>
                  <p>Av. Río San Joaquín 498</p>
                  <p>Col. Ampliación Granada</p>
                  <p>Miguel Hidalgo, CDMX</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <button
                  onClick={() => {
                    const element = document.getElementById('registration');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-accent btn-lg hover:scale-105 transition-transform duration-200"
                >
                  Registrarse Ahora
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-neutral-content/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-content/60 text-sm">
              © 2025 Evento MIPIM México. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="https://www.mipim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-content/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                MIPIM Oficial
              </a>
              
              <span className="text-neutral-content/40">•</span>
              
              <span className="text-neutral-content/60 text-sm">
                mipim.growthbdm.com
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;