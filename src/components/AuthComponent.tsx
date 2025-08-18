'use client'

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Session } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface AuthComponentProps {
  session?: Session | null
  onSessionChange?: (session: Session | null) => void
  onAuthSuccess?: (session: Session) => void
}

export default function AuthComponent({ session: propSession, onSessionChange, onAuthSuccess }: AuthComponentProps) {
  const [session, setSession] = useState<Session | null>(propSession || null)
  const [redirectUrl, setRedirectUrl] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}/auth/callback`)
    }
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (onSessionChange) onSessionChange(session)
      if (onAuthSuccess && session) onAuthSuccess(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (onSessionChange) onSessionChange(session)
      if (onAuthSuccess && session) onAuthSuccess(session)
    })

    return () => subscription.unsubscribe()
  }, [onSessionChange, onAuthSuccess])

  if (session) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card bg-base-100 shadow-xl border border-base-300"
      >
        <div className="card-body text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="avatar placeholder mb-4"
          >
            <div className="bg-primary text-primary-content rounded-full w-16">
              <span className="text-xl">{session.user.email?.[0].toUpperCase()}</span>
            </div>
          </motion.div>
          <h3 className="card-title justify-center text-primary mb-2">¡Bienvenido!</h3>
          <p className="text-base-content/70 mb-4">{session.user.email}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => supabase.auth.signOut()}
            className="btn btn-outline btn-error"
          >
            Cerrar Sesión
          </motion.button>
        </div>
      </motion.div>
    )
  }

  if (!redirectUrl) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center p-8"
      >
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <span className="ml-3 text-base-content/70">Cargando autenticación...</span>
      </motion.div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card bg-base-100 shadow-2xl border border-base-300 max-w-md mx-auto"
    >
      <div className="card-body">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="card-title justify-center text-2xl text-primary mb-2">
            MIPIM México
          </h2>
          <p className="text-base-content/70">
            Inicia sesión para registrarte al evento
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Auth
            supabaseClient={supabase}
            appearance={{ 
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#003366',
                    brandAccent: '#0066cc',
                    brandButtonText: 'white',
                    defaultButtonBackground: '#f7fafc',
                    defaultButtonBackgroundHover: '#edf2f7',
                    inputBackground: 'white',
                    inputBorder: '#e2e8f0',
                    inputBorderHover: '#cbd5e0',
                    inputBorderFocus: '#003366',
                  },
                },
              },
              className: {
                button: 'transition-all duration-200 hover:scale-105',
                input: 'transition-all duration-200',
              }
            }}
            providers={['google', 'linkedin_oidc']}
            redirectTo={redirectUrl}
            onlyThirdPartyProviders
          />
        </motion.div>
      </div>
    </motion.div>
  )
}