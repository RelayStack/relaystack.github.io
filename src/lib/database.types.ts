export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          website_url: string | null;
          industry: string;
          country: string;
          city: string | null;
          budget_range: string | null;
          services_needed: string[];
          timeline: string | null;
          challenge: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          referrer: string | null;
          page_path: string;
          language: string;
          lead_score: number;
          status: string;
          notes: string | null;
          rating: number | null;
          assigned_to: string | null;
          last_contact_at: string | null;
          email_sent_count: number;
          ip_address: string | null;
          user_agent: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          website_url?: string | null;
          industry: string;
          country?: string;
          city?: string | null;
          budget_range?: string | null;
          services_needed?: string[];
          timeline?: string | null;
          challenge?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          referrer?: string | null;
          page_path: string;
          language?: string;
          lead_score?: number;
          status?: string;
          notes?: string | null;
          rating?: number | null;
          assigned_to?: string | null;
          last_contact_at?: string | null;
          email_sent_count?: number;
          ip_address?: string | null;
          user_agent?: string | null;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
      };
    };
  };
}
