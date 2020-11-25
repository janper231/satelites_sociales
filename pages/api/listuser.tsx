import { NextApiRequest, NextApiResponse } from 'next';

const mysqlite = require('mysqlite');
const db = new mysqlite.Database('sqlite', {
  path: './db/database.db',
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await db.connect().then(async () => {
      return await db.all(`select * from users`);
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
