import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    flowType: 'pkce'
  },
  realtime: {
    params: {
      eventsPerSecond: 2
    }
  },
  global: {
    headers: {
      'x-client-info': 'edubot-web'
    }
  },
  db: {
    schema: 'public'
  }
});

// Retry configuration
const RETRY_COUNT = 5;
const INITIAL_RETRY_DELAY = 1000;
const MAX_RETRY_DELAY = 10000;

// Helper function to delay execution with exponential backoff
const delay = (attempt: number) => {
  const ms = Math.min(
    INITIAL_RETRY_DELAY * Math.pow(2, attempt),
    MAX_RETRY_DELAY
  );
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Connection check with retry logic
export async function withConnectionCheck<T>(operation: () => Promise<T>): Promise<T> {
  let lastError: any;
  
  for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
    try {
      // Check connection before operation
      if (attempt > 0) {
        const { error: pingError } = await supabase
          .from('profiles')
          .select('id')
          .limit(1)
          .maybeSingle();

        if (pingError) throw pingError;
      }

      // Perform the operation
      return await operation();
    } catch (error) {
      lastError = error;
      console.warn(`Connection check failed (attempt ${attempt + 1}/${RETRY_COUNT}):`, error);
      
      // Don't wait on the last attempt
      if (attempt < RETRY_COUNT - 1) {
        await delay(attempt);
      }
    }
  }

  throw lastError;
}

// Wrapper function for database operations with retry logic
export async function withRetry<T>(operation: () => Promise<T>): Promise<T> {
  let lastError: any;
  let sessionRefreshed = false;
  
  for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
    try {
      // Try to refresh session if not first attempt and not already refreshed
      if (attempt > 0 && !sessionRefreshed) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          await supabase.auth.refreshSession();
          sessionRefreshed = true;
        }
      }

      // Check connection before operation
      if (attempt > 0) {
        const { error: pingError } = await supabase
          .from('profiles')
          .select('id')
          .limit(1)
          .maybeSingle();

        if (pingError) {
          throw pingError;
        }
      }

      // Perform the operation
      const result = await operation();
      
      // Check if the operation returned a Supabase error
      if (result && typeof result === 'object' && 'error' in result) {
        const error = (result as any).error;
        if (error) {
          // Only retry on connection errors or rate limits
          if (
            error.code === 'PGRST301' || // Connection error
            error.code === '23505' || // Unique violation (retry in case of race condition)
            error.code === '40001' || // Serialization failure
            error.code === '429' || // Rate limit
            error.message?.toLowerCase().includes('connection') ||
            error.message?.toLowerCase().includes('timeout') ||
            error.message?.toLowerCase().includes('network')
          ) {
            throw error;
          } else {
            // Don't retry on other errors
            return result;
          }
        }
      }
      
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`Operation failed (attempt ${attempt + 1}/${RETRY_COUNT}):`, error);
      
      // Don't wait on the last attempt
      if (attempt < RETRY_COUNT - 1) {
        await delay(attempt);
      }
    }
  }

  throw lastError;
}

// Check session validity on page load
const checkSession = async () => {
  if (typeof window === 'undefined') return;

  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error || !session) {
      // Clear invalid session data silently
      window.localStorage.removeItem('supabase-auth');
      window.localStorage.removeItem('auth-storage');
    } else {
      // Refresh the session if it exists
      await supabase.auth.refreshSession();
    }
  } catch (error) {
    console.error('Session check failed:', error);
    // Clear session on error silently
    window.localStorage.removeItem('supabase-auth');
    window.localStorage.removeItem('auth-storage');
  }
};

// Run session check when the page loads
if (typeof window !== 'undefined') {
  checkSession();
}