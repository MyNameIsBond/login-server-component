import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  error: string;
};

interface Error {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      // ...log in the user
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
