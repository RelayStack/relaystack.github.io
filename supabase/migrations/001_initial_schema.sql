-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Main leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  -- Contact information (required)
  name text NOT NULL CHECK (length(name) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text CHECK (phone IS NULL OR length(phone) >= 8),
  
  -- Business context
  company text,
  website_url text CHECK (website_url IS NULL OR website_url ~* '^https?://'),
  industry text NOT NULL CHECK (industry IN ('restaurants', 'lawyers', 'trades', 'ecommerce', 'healthcare', 'other')),
  country text DEFAULT 'ch',
  city text,
  
  -- Qualification data
  budget_range text CHECK (budget_range IN ('under500', '500-1000', '1000-3000', '3000+', 'unknown')),
  services_needed text[] DEFAULT '{}',
  timeline text CHECK (timeline IN ('asap', '1month', '3months', 'flexible')),
  challenge text CHECK (challenge IS NULL OR length(challenge) <= 2000),
  
  -- Marketing attribution
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  page_path text NOT NULL,
  language text DEFAULT 'en',
  
  -- Auto-calculated lead score (0-150)
  lead_score int GENERATED ALWAYS AS (
    CASE 
      WHEN budget_range = '3000+' THEN 100
      WHEN budget_range = '1000-3000' THEN 75
      WHEN budget_range = '500-1000' THEN 50
      WHEN budget_range = 'under500' THEN 25
      ELSE 50
    END +
    CASE WHEN website_url IS NOT NULL THEN 20 ELSE 0 END +
    CASE WHEN timeline = 'asap' THEN 30 WHEN timeline = '1month' THEN 20 ELSE 10 END
  ) STORED,
  
  -- Pipeline status
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal_sent', 'closed_won', 'closed_lost', 'nurture', 'unqualified')),
  
  -- Your workspace
  notes text,
  rating int CHECK (rating IS NULL OR rating BETWEEN 1 AND 5),
  assigned_to text,
  
  -- Communication tracking
  last_contact_at timestamptz,
  email_sent_count int DEFAULT 0,
  
  -- Technical
  ip_address inet,
  user_agent text
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_lead_score ON leads(lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_leads_industry ON leads(industry);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from Edge Function (service role)
CREATE POLICY "Allow all operations for service role" ON leads
  FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- Policy: No direct access for anonymous users
CREATE POLICY "No anonymous access" ON leads
  FOR ALL 
  TO anon 
  USING (false);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for uploads (optional)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('assets', 'assets', false)
ON CONFLICT DO NOTHING;
