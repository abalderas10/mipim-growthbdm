'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  nombreCompleto: string;
  correoElectronico: string;
  sector: string;
  empresa: string;
  cargo: string;
  telefono: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: '',
    correoElectronico: '',
    sector: '',
    empresa: '',
    cargo: '',
    telefono: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const sectorOptions = [
    'Construcción',
    'Inmobiliario',
    'Financiero',
    'Gobierno',
    'Consultoría',
    'Arquitectura',
    'Ingeniería',
    'Legal',
    'Otros'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'El nombre completo es requerido';
    }

    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Ingrese un correo electrónico válido';
    }

    if (!formData.sector.trim()) {
      newErrors.sector = 'El sector es requerido';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'La empresa es requerida';
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = 'El cargo es requerido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^[+]?[0-9\s\-\(\)]{10,}$/.test(formData.telefono)) {
      newErrors.telefono = 'Ingrese un número de teléfono válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-success/10 border border-success/20 rounded-2xl p-12">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-success mb-4">
                ¡Registro Exitoso!
              </h2>
              <p className="text-lg text-base-content/80 mb-6">
                Recibirá un correo de confirmación con los detalles de su acceso pronto.
              </p>
              <p className="text-base text-base-content/60">
                Nos vemos el 10 de septiembre de 2025 a las 8:30 AM
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-base-100">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Asegure su Acceso Gratuito
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto">
              Este es un evento exclusivo con cupo limitado, dirigido a C-Level del sector. 
              Complete el formulario para obtener su boleto de acceso.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp} className="bg-base-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nombre Completo */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Nombre Completo *</span>
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleInputChange}
                    className={`input input-bordered w-full ${errors.nombreCompleto ? 'input-error' : ''}`}
                    placeholder="Ingrese su nombre completo"
                  />
                  {errors.nombreCompleto && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.nombreCompleto}</span>
                    </label>
                  )}
                </div>

                {/* Correo Electrónico */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Correo Electrónico *</span>
                  </label>
                  <input
                    type="email"
                    name="correoElectronico"
                    value={formData.correoElectronico}
                    onChange={handleInputChange}
                    className={`input input-bordered w-full ${errors.correoElectronico ? 'input-error' : ''}`}
                    placeholder="ejemplo@empresa.com"
                  />
                  {errors.correoElectronico && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.correoElectronico}</span>
                    </label>
                  )}
                </div>

                {/* Sector */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Sector *</span>
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className={`select select-bordered w-full ${errors.sector ? 'select-error' : ''}`}
                  >
                    <option value="">Seleccione su sector</option>
                    {sectorOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.sector && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.sector}</span>
                    </label>
                  )}
                </div>

                {/* Empresa */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Empresa *</span>
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className={`input input-bordered w-full ${errors.empresa ? 'input-error' : ''}`}
                    placeholder="Nombre de su empresa"
                  />
                  {errors.empresa && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.empresa}</span>
                    </label>
                  )}
                </div>

                {/* Cargo */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Cargo *</span>
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className={`input input-bordered w-full ${errors.cargo ? 'input-error' : ''}`}
                    placeholder="Su cargo o posición"
                  />
                  {errors.cargo && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.cargo}</span>
                    </label>
                  )}
                </div>

                {/* Teléfono */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Teléfono *</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`input input-bordered w-full ${errors.telefono ? 'input-error' : ''}`}
                    placeholder="+52 55 1234 5678"
                  />
                  {errors.telefono && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.telefono}</span>
                    </label>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary btn-lg px-12 hover:scale-105 transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Registrando...
                    </>
                  ) : (
                    <>
                      Registrarme
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-base-content/60 text-center mt-4">
                * Todos los campos son obligatorios
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;