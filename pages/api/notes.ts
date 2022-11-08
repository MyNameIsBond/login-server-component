// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { data: notes, error } = await supabase.from('notes').select('*');
  try {
    if (req.method === 'GET') {
      // Process a POST request
      console.log(req.body);
      res.status(200).json(notes);
    }
  } catch (error) {
    console.error(error);
  }
}
