import debug from '@/src/feature/common/utils/debug';
import { storeSampleController } from '@/src/feature/store';
import type { NextApiRequest, NextApiResponse } from 'next';

const log = debug('API|store|index');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allowMehtods: NextApiRequest['method'][] = ['GET'];
  const method = req.method;

  log(method);

  if (!allowMehtods.includes(method)) {
    return res.status(400).end();
  }

  if (method === 'GET') {
    return await storeSampleController.getAll({
      res,
    });
  }
}
