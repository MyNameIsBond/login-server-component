import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { string } = req.query;

  try {
    if (req.method === 'GET') {
      const { data: notes, error } = await supabase
        .from('notes')
        .select('title, data')
        .eq('title', string);
      res.status(200).json(notes);
    }
  } catch (error) {
    console.error(error);
  }
}
