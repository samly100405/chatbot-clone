import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hysenuwitqywqyzxxtbw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5c2VudXdpdHF5d3F5enh4dGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MTk5MjUsImV4cCI6MjA0MDM5NTkyNX0.GpaMeuHNAeCY5upyFXzr7J_1-QARYxkOXwJG7AcmDFo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;