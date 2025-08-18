'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300" data-theme="mipim">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="navbar bg-base-100 shadow-lg border-b border-base-300"
      >
        <div className="navbar-start">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-primary-content font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">MIPIM México</h1>
              <p className="text-xs text-base-content/60">2024</p>
            </div>
          </motion.div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-8"
          >
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">Fecha</p>
              <p className="text-xs text-base-content/70">Por confirmar</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">Ubicación</p>
              <p className="text-xs text-base-content/70">Ciudad de México</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">Sector</p>
              <p className="text-xs text-base-content/70">Bienes Raíces</p>
            </div>
          </motion.div>
        </div>
        
        <div className="navbar-end">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="badge badge-accent badge-lg font-semibold"
          >
            Registro Abierto
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="footer footer-center bg-base-100 text-base-content p-10 border-t border-base-300"
      >
        <div className="grid grid-flow-col gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
          >
            <span className="text-primary-content font-bold text-xl">M</span>
          </motion.div>
        </div>
        
        <div className="grid grid-flow-col gap-8 text-center">
          <div>
            <h3 className="font-semibold text-primary mb-2">Evento</h3>
            <p className="text-sm text-base-content/70">MIPIM México 2024</p>
            <p className="text-sm text-base-content/70">El encuentro de bienes raíces más importante</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Contacto</h3>
            <p className="text-sm text-base-content/70">info@mipim-mexico.com</p>
            <p className="text-sm text-base-content/70">+52 55 1234 5678</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Ubicación</h3>
            <p className="text-sm text-base-content/70">Ciudad de México</p>
            <p className="text-sm text-base-content/70">México</p>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
          <p className="text-sm text-base-content/60">
            © 2024 MIPIM México. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#" 
              className="text-base-content/60 hover:text-primary transition-colors"
            >
              Términos
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#" 
              className="text-base-content/60 hover:text-primary transition-colors"
            >
              Privacidad
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#" 
              className="text-base-content/60 hover:text-primary transition-colors"
            >
              Contacto
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}