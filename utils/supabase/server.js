// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uuaehsgghetbsctqmbny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YWVoc2dnaGV0YnNjdHFtYm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTMyMDMsImV4cCI6MjA3NDk4OTIwM30._Bdx1GZABQ_0st0tO3o8IOoVutzIVhsWmtpUnUE7yZY";

export const supabase = createClient(supabaseUrl, supabaseKey);
