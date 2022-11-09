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
        .eq('title', 'new');
      // TODO: add note TS type
      console.log('THIS IS SPARTA', string, notes);
      res.status(200).json(notes);
    }
  } catch (error) {
    console.error(error);
  }
}
