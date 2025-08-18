'use client'

import Layout from '@/components/Layout'
import AuthComponent from '@/components/AuthComponent'
import { motion } from 'framer-motion'

export default function AuthPage() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-base-content/70">
              Accede a tu cuenta para continuar con tu registro a MIPIM México 2024
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <AuthComponent />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-base-content/60">
              ¿No tienes cuenta?{' '}
              <a href="/" className="text-primary hover:text-primary-focus font-medium">
                Regístrate aquí
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}