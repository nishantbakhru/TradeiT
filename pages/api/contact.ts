import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { time, players, entryFee, duration} = req.body;

    // Perform server-side validation
    // if (time || players || entryFee || duration) {
    //   return res.status(400).json({ message: 'All fields are required.' });
    // }

    // Example: Save data to a database (this is just a placeholder)
    // await saveToDatabase({ name, email, message });

    // Respond with a success message
    return res.status(200).json({ message: 'Form submitted successfully.' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}