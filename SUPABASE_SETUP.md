# Supabase Setup Guide

## Quick Start (Recommended)

### Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Sign up with GitHub or email
3. Create a new organization (or use default)

### Step 2: Create Project
1. Click "New Project"
2. Name: `relaystack` (or your choice)
3. Region: Choose closest to your customers (EU Central for Switzerland)
4. Database Password: Generate strong password (save it!)
5. Wait 2-3 minutes for provisioning

### Step 3: Get API Keys
1. Go to Project Settings → API
2. Copy these values:
   - **URL**: `https://xxxx.supabase.co`
   - **anon public**: `eyJhbG...` (starts with eyJ)
   - **service_role secret**: `eyJhbG...` (also starts with eyJ)

### Step 4: Run Database Migration

Option A: Using Dashboard SQL Editor (Easiest)
1. Go to SQL Editor in Supabase Dashboard
2. Click "New Query"
3. Copy contents of `supabase/migrations/001_initial_schema.sql`
4. Paste and Run
5. Done!

Option B: Using Supabase CLI
```bash
# Install CLI if not already
npm install -g supabase

# Login
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

### Step 5: Add to Vercel
1. Go to https://vercel.com/dashboard
2. Select your relaystack project
3. Go to Settings → Environment Variables
4. Add these 3 variables:

| Name | Value |
|------|-------|
| `PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` |
| `PUBLIC_SUPABASE_ANON_KEY` | `eyJhbG...` (anon key) |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` (service_role key) |

5. Click "Save"
6. Redeploy project

### Step 6: Test
1. Visit your live site
2. Fill out the lead form
3. Check Supabase Table Editor → `leads` table
4. You should see your submission!

---

## Manual Schema (If Migration Fails)

If the migration file doesn't work, create this table manually in SQL Editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  website_url text,
  industry text NOT NULL,
  country text DEFAULT 'ch',
  city text,
  budget_range text,
  services_needed text[] DEFAULT '{}',
  timeline text,
  challenge text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  page_path text NOT NULL DEFAULT '/',
  language text DEFAULT 'en',
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
  status text DEFAULT 'new',
  notes text,
  rating int,
  last_contact_at timestamptz,
  email_sent_count int DEFAULT 0,
  ip_address inet,
  user_agent text
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Indexes
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_lead_score ON leads(lead_score DESC);

-- Trigger for updated_at
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
```

---

## Troubleshooting

### "Failed to fetch" error in form
- Check environment variables are set correctly in Vercel
- Make sure SUPABASE_SERVICE_ROLE_KEY is set (not just anon key)
- Redeploy after adding env vars

### "No API Route handler" warning
This is normal - the API only accepts POST requests, not GET.

### Leads not appearing
1. Check browser console for errors
2. Verify Supabase table exists: Table Editor → `leads`
3. Check Vercel Functions logs: Dashboard → Functions

### CORS errors
Add your Vercel domain to Supabase:
1. Supabase Dashboard → Authentication → URL Configuration
2. Add `https://relaystack.vercel.app` to Site URL
3. Add to Redirect URLs too

---

## Next Steps

After setup is working:
1. Set up email notifications (Resend or Supabase Edge Functions)
2. Configure admin dashboard authentication
3. Add Plausible analytics
4. Test end-to-end lead flow
5. 🎉 Launch!
