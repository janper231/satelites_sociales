import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from 'src/utils/sample-data';

const mysqlite = require('mysqlite');
const Db = new mysqlite.Database('sqlite', {
  path: './db/database.db',
});
Db.connect();

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = async () => {
      const response = await Db?.all('select * from users');
      console.log(response, 'data');
      return response;
    };

    data();

    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
