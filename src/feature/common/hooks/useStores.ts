import useSWR from 'swr';
import {
  getSampleStoreData,
  sampleStoreEndPoint as cacheKey,
} from '@/src/api/store-api.ts';

export default function useStores() {
  const getStores = useSWR(cacheKey, getSampleStoreData, {});

  return {
    getStores,
  };
}
