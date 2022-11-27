import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { string } = req.query;

  try {
    if (req.method === 'GET') {
      const {
        data: notes,
        error,
        status,
        statusText,
      } = await supabase
        .from('notes')
        .select('*')
        .textSearch('data', string as string, { type: 'plain' });
      if (status === 400) {
        res.status(200).json({ error: statusText });
      } else {
        res.status(200).json(notes);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
