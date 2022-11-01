import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
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
      // ... log in the user
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
      
    }
    // Process a POST request
    console.log('BODY:', req.body);

    // res.status(200).redirect('/');
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' });
  }
}
