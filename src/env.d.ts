/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare interface Window {
  plausible?: (event: string, options?: Record<string, unknown>) => void;
}
