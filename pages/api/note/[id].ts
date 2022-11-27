import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseclient';
// interface for note
interface Note {
  id: number;
  data: string;
  title: string;
  user?: string;
  created_at?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note[] | null>
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
      return res.status(200).json(note);
    }
  } catch (error) {
    console.error(error);
  }
}
