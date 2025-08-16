import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'

// Only create client if we have valid URLs
const isValidConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder_key'

export const supabase = isValidConfig ? createClient(supabaseUrl, supabaseAnonKey) : null

// Database types (will be updated when we create the database schema)
export interface Registration {
  id?: string
  created_at?: string
  name: string
  email: string
  company: string
  position: string
  phone: string
  interests: string[]
  networking_goals: string
  experience_level: string
}