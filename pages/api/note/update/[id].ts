import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { id } = req.query;
  const { title, data } = req.body;
  try {
    if (req.method === 'PUT') {
      console.log('DATA:', req.body.data);
      const { data: response, error } = await supabase
        .from('notes')
        .update({ data, title })
        .eq('id', id);
      return res.status(200);
    }

    return res.status(401);
  } catch (error) {
    console.error(error);
  }
}
