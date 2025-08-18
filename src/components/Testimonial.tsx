'use client';

import { motion } from 'framer-motion';

const Testimonial = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-primary/5" data-theme="mipim">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lo que dicen nuestros aliados
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-base-100 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary/20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <blockquote className="text-lg md:text-xl text-base-content leading-relaxed mb-8 italic pl-20">
                  &ldquo;El evento de promoción de MIPIM es una iniciativa crucial para el sector inmobiliario en México. 
                  Facilita conexiones estratégicas y abre puertas a oportunidades globales que son vitales para el 
                  crecimiento y la innovación. Es un honor ser parte de este esfuerzo que impulsa el desarrollo de 
                  la industria en nuestro país.&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">AV</span>
                  </div>

                  {/* Author Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      Adriana Vargas
                    </h3>
                    <p className="text-base-content/70 mb-2">
                      Directora General, Growth BD México
                    </p>
                    <a
                      href="https://www.linkedin.com/in/adrianavargasolvera/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-focus transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Ver perfil en LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"></div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <div className="bg-base-100 rounded-xl p-6 shadow-lg">
              <p className="text-base-content/70 mb-4">
                Growth BD México es el organizador principal de este evento exclusivo
              </p>
              <a
                href="https://growthbdm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary btn-sm hover:scale-105 transition-transform duration-200"
              >
                Conocer más sobre Growth BD México
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;