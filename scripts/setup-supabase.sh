#!/bin/bash
set -e

echo "🚀 RelayStack Supabase Setup Script"
echo "===================================="
echo ""

# Check if supabase CLI is installed
if ! command -v npx &> /dev/null; then
    echo "❌ npm/npx not found. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js found"

# Check if user is logged in
echo ""
echo "Step 1: Checking Supabase login..."
if ! npx supabase projects list &> /dev/null; then
    echo "🔑 Please login to Supabase:"
    npx supabase login
fi

echo "✓ Logged in"

# Create project
echo ""
echo "Step 2: Creating Supabase project..."
echo "Note: This requires an organization. Using default..."

read -p "Enter project name (default: relaystack): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-relaystack}

read -p "Enter region (default: eu-central-1): " REGION
REGION=${REGION:-eu-central-1}

# Create project
npx supabase projects create "$PROJECT_NAME" --region "$REGION" --org-id default

echo "✓ Project created: $PROJECT_NAME"

# Link project
echo ""
echo "Step 3: Linking project..."
npx supabase link --project-ref "$PROJECT_NAME"

# Push schema
echo ""
echo "Step 4: Pushing database schema..."
npx supabase db push

echo "✓ Schema pushed"

# Get credentials
echo ""
echo "Step 5: Getting credentials..."
URL=$(npx supabase status | grep "API URL" | awk '{print $3}')
ANON_KEY=$(npx supabase status | grep "anon key" | awk '{print $3}')
SERVICE_KEY=$(npx supabase status | grep "service_role key" | awk '{print $3}')

echo ""
echo "===================================="
echo "📋 Your Supabase Credentials:"
echo "===================================="
echo ""
echo "PUBLIC_SUPABASE_URL=$URL"
echo "PUBLIC_SUPABASE_ANON_KEY=$ANON_KEY"
echo "SUPABASE_SERVICE_ROLE_KEY=$SERVICE_KEY"
echo ""
echo "===================================="
echo ""
echo "Next steps:"
echo "1. Add these to your Vercel environment variables"
echo "2. Update .env file locally"
echo "3. Redeploy to Vercel"
echo ""
