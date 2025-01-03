import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tlqaleehjegekfcdfxkt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscWFsZWVoamVnZWtmY2RmeGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDUyNDEsImV4cCI6MjAzNjM4MTI0MX0.PTE3J9pFlz5_GNK7x8iHSg-Q5GWlY9czZZMBdcEvzOQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

