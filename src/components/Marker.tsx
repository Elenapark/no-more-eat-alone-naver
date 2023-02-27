import { useEffect } from 'react';
import { MarkerProps } from '@/src/components/types';

export default function Marker({ coordinates, map }: MarkerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    if (map) {
      const position = new naver.maps.LatLng(...coordinates);
      marker = new naver.maps.Marker({
        position,
        map,
      });
    }
    return () => {
      marker?.setMap(null);
    };
  }, [coordinates, map]);

  return <></>;
}
