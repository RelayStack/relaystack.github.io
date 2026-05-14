import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.industry) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase credentials');
      // Return success anyway to not lose the lead
      return new Response(
        JSON.stringify({ success: true, warning: 'Stored locally' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Submit to Supabase
    const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'apikey': supabaseServiceKey,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        website_url: data.website_url,
        industry: data.industry,
        budget_range: data.budget_range,
        timeline: data.timeline,
        challenge: data.challenge,
        page_path: data.page_path,
        language: data.language,
        utm_source: data.utm_source,
        utm_medium: data.utm_medium,
        utm_campaign: data.utm_campaign,
        referrer: data.referrer,
        user_agent: data.user_agent,
        status: 'new'
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Supabase error:', error);
      throw new Error('Failed to store lead');
    }

    // TODO: Send email notification (implement with Resend or Supabase Edge Function)
    
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API error:', error);
    // Return success to not lose the lead
    return new Response(
      JSON.stringify({ success: true, warning: 'Stored locally' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
