'use client'

import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero min-h-screen bg-primary" data-theme="mipim">
      {/* Simple blue background overlay */}
      <div className="hero-overlay bg-opacity-20"></div>

      {/* Content */}
      <div className="hero-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="badge badge-accent badge-lg px-6 py-3 text-primary-content font-semibold">
              EVENTO EXCLUSIVO • CUPO LIMITADO
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white"
          >
            Save the Date
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white"
          >
            Evento MIPIM México
          </motion.h2>

          {/* Lema */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
          >
            Un encuentro estratégico para líderes del sector inmobiliario
          </motion.p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="card bg-white/10 border border-white/20">
                <div className="card-body items-center text-center py-4 px-6">
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg md:text-xl font-semibold">10 de Septiembre 2025</span>
                  </div>
                </div>
              </div>
              <div className="card bg-white/10 border border-white/20">
                <div className="card-body items-center text-center py-4 px-6">
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg md:text-xl font-semibold">8:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              onClick={scrollToRegistration}
              className="btn btn-accent btn-lg px-12 py-4 text-lg font-semibold text-primary-content hover:btn-accent-focus transition-colors duration-200"
            >
              REGISTRARSE AHORA
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <div className="btn btn-circle btn-ghost bg-white/20 backdrop-blur-sm border-2 border-white/40 hover:bg-white/30 transition-all duration-300">
            <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;