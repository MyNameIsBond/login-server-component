'use client';

import { supabase } from '../utils/supabaseclient';
import { ReactNode } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionContextProvider supabaseClient={supabase as any}>
      {children}
    </SessionContextProvider>
  );
}
