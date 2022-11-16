import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).redirect('/');
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' });
  }
}
