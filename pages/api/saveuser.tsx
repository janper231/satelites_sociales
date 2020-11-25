import { NextApiRequest, NextApiResponse } from 'next';

const mysqlite = require('mysqlite');
const db = new mysqlite.Database('sqlite', {
  path: './db/database.db',
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, phone } = _req.body;

    await db.connect().then(async () => {
      return await db.run(
        `insert into users values ('${name}','${email}','${phone}')`
      );
    });

    res.status(200).json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
