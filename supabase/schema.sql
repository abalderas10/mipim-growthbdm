-- Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  company VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  interests TEXT[] NOT NULL DEFAULT '{}',
  networking_goals TEXT NOT NULL,
  experience_level VARCHAR(50) NOT NULL CHECK (experience_level IN ('principiante', 'intermedio', 'avanzado', 'experto')),
  status VARCHAR(50) DEFAULT 'registered' CHECK (status IN ('registered', 'confirmed', 'attended', 'cancelled'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);

-- Enable Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow public to insert (register)
CREATE POLICY "Allow public registration" ON registrations
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read all registrations (for admin purposes)
CREATE POLICY "Allow authenticated read" ON registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update registrations
CREATE POLICY "Allow authenticated update" ON registrations
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to send welcome email (to be used with Edge Functions)
CREATE OR REPLACE FUNCTION handle_new_registration()
RETURNS TRIGGER AS $$
BEGIN
  -- This will be called by an Edge Function
  -- For now, we just log the registration
  RAISE LOG 'New registration: % (%)', NEW.name, NEW.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new registrations
CREATE TRIGGER on_registration_created
  AFTER INSERT ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_registration();

-- Create a view for registration statistics
CREATE OR REPLACE VIEW registration_stats AS
SELECT 
  COUNT(*) as total_registrations,
  COUNT(*) FILTER (WHERE status = 'registered') as pending_confirmations,
  COUNT(*) FILTER (WHERE status = 'confirmed') as confirmed_attendees,
  COUNT(*) FILTER (WHERE status = 'attended') as actual_attendees,
  COUNT(*) FILTER (WHERE status = 'cancelled') as cancelled_registrations,
  COUNT(DISTINCT company) as unique_companies,
  DATE_TRUNC('day', created_at) as registration_date,
  COUNT(*) as daily_registrations
FROM registrations
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY registration_date DESC;