
// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://tuaurrzurxdtafsywivg.supabase.co',
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1YXVycnp1cnhkdGFmc3l3aXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjE0NjEsImV4cCI6MjA2MjYzNzQ2MX0.ASucl9BkqGA6RKFJHl9DhkZc0h4ntAyIyYoIdeeK58M'
)
