import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../utils/supabaseclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const { data: notes, error } = await supabase.from('notes').select('*');
  const { id } = req.query;
  try {
    if (req.method === 'DELETE') {
      const { data, error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);
      console.log('ELARE:', data);
      res
        .status(200)
        .redirect('/note')
        .json(data as []);
    }
  } catch (error) {
    console.error(error);
  }
}
