import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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