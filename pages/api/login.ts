import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';
type Data = {
  error: string;
};

interface Error {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log('data, error', data, error);
      // ...log in the user
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
