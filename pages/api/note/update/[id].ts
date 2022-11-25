import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { id } = req.query;
  console.log('BODY', req.body);
  console.log('BODY', id);
  try {
    if (req.method === 'PUT') {
      const { data, error } = await supabase
        .from('notes')
        .update({ data: 'otherValue' })
        .eq('some_column', 'someValue');
      res.status(200);
    }
  } catch (error) {
    console.error(error);
  }
}
