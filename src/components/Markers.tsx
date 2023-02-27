import React from 'react';
import useSWR from 'swr';
import { MAP_KEY } from '@/src/feature/common/hooks/useMap';
import useStores from '@/src/feature/common/hooks/useStores';

import Marker from '@/src/components/Marker';
import { StoreProps } from './../../../components/types/store';

export default function Markers() {
  const { data: map } = useSWR<naver.maps.Map>(MAP_KEY);
  const {
    getStores: { isLoading, error, data: store },
  } = useStores();

  return store?.map((item: StoreProps, idx) => {
    return <Marker key={item.nid} coordinates={item.coordinates} map={map} />;
  });
}
