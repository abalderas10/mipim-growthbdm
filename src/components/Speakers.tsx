'use client';

import { motion } from 'framer-motion';

const Speakers = () => {
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

  const speakers = [
    {
      name: "Luis Méndez Trillo",
      title: "Presidente de Coldwell Banker Commercial",
      topic: "Mercado inmobiliario de oficinas e industrial",
      description: "Análisis del mercado mexicano y oportunidades de inversión actuales. Con una trayectoria destacada en el sector, Luis Méndez Trillo, Presidente de Coldwell Banker Commercial México, analizará el mercado inmobiliario de oficinas e industrial, así como las actuales oportunidades de inversión. Su profundo conocimiento del mercado mexicano y su visión estratégica lo convierten en una voz indispensable para entender las dinámicas que rigen el real estate.",
      link: "https://www.linkedin.com/in/luis-mendez-trillo/",
      linkType: "LinkedIn",
      color: "bg-blue-500"
    },
    {
      name: "Hines",
      title: "Desarrollador Inmobiliario Global",
      topic: "Trayectoria y proyectos en México",
      description: "Retos enfrentados y proyectos actuales de la firma líder mundial. Hines, una de las firmas de desarrollo inmobiliario más respetadas a nivel mundial, compartirá su vasta trayectoria en México, los retos enfrentados y sus proyectos actuales. Fundada en 1957, Hines es una empresa global de inversión y desarrollo inmobiliario con presencia en 255 ciudades en 27 países. En México, Hines ha dejado una huella significativa con proyectos icónicos como Torre del Ángel en la Ciudad de México y el desarrollo de comunidades maestras como Monteleón en Monterrey.",
      link: "https://www.hines.com/locations/mexico",
      linkType: "Sitio Web",
      color: "bg-green-500"
    },
    {
      name: "Mtra. Diana León",
      title: "Titular de Energía - Secretaría de Economía",
      topic: "Proyectos energéticos estratégicos",
      description: "Impacto en el crecimiento industrial del país. La Mtra. Diana León, Titular de Energía de la Secretaría de Economía, expondrá los proyectos energéticos estratégicos para el país y su impacto en el crecimiento industrial. Con una sólida experiencia en el sector energético y en la administración pública, la Mtra. León es una figura clave en la formulación de políticas que impulsan el desarrollo económico de México a través de la energía.",
      link: "https://mx.linkedin.com/in/diana-le%C3%B3n-742a45349",
      linkType: "LinkedIn",
      color: "bg-purple-500"
    },
    {
      name: "Gobierno del Estado de Oaxaca",
      title: "Representantes Oficiales",
      topic: "Corredor Interoceánico",
      description: "Oportunidades de inversión y desarrollo económico regional. Representantes del Gobierno del Estado de Oaxaca presentarán las oportunidades de inversión que ofrece el Corredor Interoceánico del Istmo de Tehuantepec (CIIT) y su potencial para detonar el desarrollo económico regional. El CIIT es un proyecto estratégico del gobierno mexicano que busca conectar el Océano Pacífico con el Atlántico a través de una moderna infraestructura ferroviaria, portuaria y de polos de desarrollo industrial.",
      link: "https://www.gob.mx/ciit",
      linkType: "Sitio Web",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ponentes de Alto Nivel: Insights que Transforman
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-base-content max-w-4xl mx-auto leading-relaxed">
              Contaremos con la participación de figuras prominentes que compartirán su visión y experiencia, 
              ofreciendo perspectivas valiosas sobre el panorama actual y futuro del sector inmobiliario y energético en México.
            </p>
          </motion.div>

          {/* Speakers Grid */}
          <motion.div variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="card-body p-8">
                  {/* Speaker Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${speaker.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-xl">
                        {speaker.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl md:text-2xl mb-2 text-primary">
                        {speaker.name}
                      </h3>
                      <p className="text-secondary font-semibold mb-1">
                        {speaker.title}
                      </p>
                      <div className="badge badge-accent badge-outline">
                        {speaker.topic}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base-content/80 leading-relaxed mb-6">
                    {speaker.description}
                  </p>

                  {/* Link */}
                  <div className="card-actions justify-end">
                    <a
                      href={speaker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm gap-2 hover:scale-105 transition-transform duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Ver {speaker.linkType}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                ¿Listo para conectar con estos líderes?
              </h3>
              <p className="text-lg text-base-content/80 mb-6 max-w-2xl mx-auto">
                No pierda la oportunidad de interactuar directamente con estos expertos y expandir su red de contactos profesionales.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('registration');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-200"
              >
                Registrarse al Evento
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;