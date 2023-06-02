import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtbwblsfjwdtewafoqph.supabase.co'
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0YndibHNmandkdGV3YWZvcXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTk1OTAsImV4cCI6MTk5OTQ3NTU5MH0.aHBemK6VllFXBqZII4cBXwnYYvVJkasV4pQ-oElV0zQ`

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
