import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { id } = req.query;
  try {
    if (req.method === 'PUT') {
      const { data, error } = await supabase
        .from('notes')
        .update({ data: req.body })
        .eq('id', id);
      return res.status(200);
    }
  } catch (error) {
    console.error(error);
  }
}
