// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db/db.json';

interface Data {
  id: number;
  name: string;
  edad: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json(db);
}
