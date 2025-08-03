// supabase-config.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://cbngdegxmfzkstistitg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibmdkZWd4bWZ6a3N0aXN0aXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNTczMDQsImV4cCI6MjA2OTgzMzMwNH0.0wxaV19YNRrnXiFbtGIKgr9v32pwSQSbwRaWnyd3SlQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
