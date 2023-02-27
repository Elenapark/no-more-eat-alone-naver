import { mutate } from 'swr';

export const MAP_KEY = '/map';

export default function useMap() {
  const initMap = (map: naver.maps.Map) => {
    mutate(MAP_KEY, map);
  };

  return {
    initMap,
  };
}
