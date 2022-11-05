import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseclient';
type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
      });
      console.log('data, error', data, error);
      // ...log in the user
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
