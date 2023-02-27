import { StoreProps } from './../../../components/types/store';

import useSWR from 'swr';
import {
  getSampleStoreData,
  sampleStoreEndPoint as cacheKey,
} from '@/src/api/store-api.ts';

export default function useStores() {
  const getStores = useSWR<StoreProps[]>(cacheKey, getSampleStoreData, {});

  return {
    getStores,
  };
}
