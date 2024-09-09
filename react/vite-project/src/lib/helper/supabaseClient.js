import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://wlewgqqupmmwlktcqbaq.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZXdncXF1cG1td2xrdGNxYmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3ODMsImV4cCI6MjA0MTQ4MDc4M30.pk6N9r1Dv1qYxWUMdn7NJYuKdemT6AwZuXLWJ4jmrJI"
);

export default supabase;
