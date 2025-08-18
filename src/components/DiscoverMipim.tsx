'use client';

import { motion } from 'framer-motion';

const DiscoverMipim = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-base-100" data-theme="mipim">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Descubra MIPIM: La Cita Global del Real Estate
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-lg md:text-xl text-base-content leading-relaxed text-center max-w-4xl mx-auto">
              MIPIM no es solo una feria; es el festival urbano global donde se forja el futuro del entorno construido. 
              Celebrada anualmente en Cannes, Francia, MIPIM reúne a los tomadores de decisiones más importantes del 
              mercado inmobiliario, desde inversionistas y desarrolladores hasta arquitectos y representantes gubernamentales.
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3 justify-center">Quiénes asisten</h3>
                <p className="text-base-content/80">
                  Conozca el perfil de los más de 21,000 profesionales que convergen en Cannes.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3 justify-center">Intereses y dinámicas</h3>
                <p className="text-base-content/80">
                  Entienda las tendencias que mueven el mercado y las estrategias de networking que maximizan su participación.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3 justify-center">Beneficios tangibles</h3>
                <p className="text-base-content/80">
                  Descubra cómo MIPIM fortalece relaciones clave y genera oportunidades de negocio a escala global, 
                  especialmente con actores de Europa, México y otros países participantes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing Paragraph */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-lg md:text-xl text-base-content leading-relaxed max-w-4xl mx-auto">
              Este evento de promoción es una oportunidad inigualable para comprender la magnitud de MIPIM y cómo 
              su participación puede impulsar su negocio y reputación a nivel internacional.
            </p>
          </motion.div>

          {/* Event Details */}
          <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Detalles del Evento
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Fecha</h4>
                    <p className="text-base-content/80">10 de septiembre de 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Hora</h4>
                    <p className="text-base-content/80">8:30 a.m.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Sede</h4>
                    <p className="text-base-content/80">
                      Neuchatel<br />
                      Av. Río San Joaquín 498<br />
                      Col. Ampliación Granada<br />
                      Alcaldía Miguel Hidalgo, Ciudad de México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Audiencia</h4>
                    <p className="text-base-content/80">Exclusivo C-Level</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverMipim;