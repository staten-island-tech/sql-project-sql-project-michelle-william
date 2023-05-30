import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtbwblsfjwdtewafoqph.supabase.co'
const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0YndibHNmandkdGV3YWZvcXBoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Mzg5OTU5MCwiZXhwIjoxOTk5NDc1NTkwfQ
    .XKC7DnNmYD86D_5Vefi1rLrEiv7Z9XC248AFlpKgoNY
const supabase = createClient(supabaseUrl, supabaseKey)

//signing ing//
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password'
  })
}

//sign out//

async function signOut() {
  const { error } = await supabase.auth.signOut()
}
