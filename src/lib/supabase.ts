export { createClient } from "@/lib/supabase/client";
export { isSupabaseConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase/config";

import { createClient } from "@/lib/supabase/client";

export function getSupabase() {
  const client = createClient();

  if (!client) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local and restart the dev server.",
    );
  }

  return client;
}
