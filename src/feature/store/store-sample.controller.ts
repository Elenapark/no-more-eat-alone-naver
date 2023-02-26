import debug from '@/src/feature/common/utils/debug';
import { ControllerInput } from '../common/types';
import { Store } from './schemas/store.schema';
import { storeModel } from './store.model';

const log = debug('Server | controller | store-sample');

export const storeSampleController = {
  getAll: async ({ res }: ControllerInput<null,Store[]>) => {
    log('getAll');

    const resp = await storeModel.getSampleStore();
    log(resp);

    if (!resp) {
      return res.status(404).end();
    }

    return res.json(resp);
  },
};
