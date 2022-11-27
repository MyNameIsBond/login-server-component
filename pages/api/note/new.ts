import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { data: notes, error } = await supabase.from('notes').select('*');
  const { data, title } = req.body;
  try {
    if (req.method === 'POST') {
      const response = await supabase.from('notes').insert([{ data, title }]);
      const e = response;
      console.log('RESPONSE', e);
      return res.status(200);
    }
  } catch (error) {
    console.error(error);
  }
}
