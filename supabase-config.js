// supabase-config.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// URL y API Key de tu proyecto (públicas para uso de lectura/escritura con RLS habilitado)
const SUPABASE_URL = 'https://cbngdegxmfzkstistitg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibmdkZWd4bWZ6a3N0aXN0aXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNTczMDQsImV4cCI6MjA2OTgzMzMwNH0.0wxaV19YNRrnXiFbtGIKgr9v32pwSQSbwRaWnyd3SlQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
