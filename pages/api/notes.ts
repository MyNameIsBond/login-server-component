// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[] | null>
) {
  const { data: notes, error } = await supabase.from('notes').select('*');
  try {
    if (req.method === 'GET') {
      res.status(200).json(notes);
    }
  } catch (error) {
    console.error(error);
  }
}
