import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { data: notes, error } = await supabase.from('notes').select('*');
  const { id } = req.query;
  try {
    if (req.method === 'GET') {
      const { data: note, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id);
      // TODO: add note TS type
      console.log('NOTE FROM ID', note);
      res.status(200).json(note);
    }
  } catch (error) {
    console.error(error);
  }
}
