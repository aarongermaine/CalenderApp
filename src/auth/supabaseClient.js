import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ejmcotgbhtfdmbccshne.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODU0MjgyMywiZXhwIjoxOTQ0MTE4ODIzfQ.0u9eN4QpBbYtuiKIimfWQk6dfACjYPZI7vRh8QGHlEE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);