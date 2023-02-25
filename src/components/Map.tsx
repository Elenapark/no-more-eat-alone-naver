import React from 'react';
import Script from 'next/script';
import { Coordinates } from './types/map';

interface MapProps {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad: (map: naver.maps.Map) => void;
}

export default function Map({
  mapId = 'map',
  initialCenter = [37.3595704, 127.105399],
  initialZoom = 10,
  onLoad,
}: MapProps) {
  let map: naver.maps.Map | null = null;

  const initMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
    };

    map = new naver.maps.Map(mapId, mapOptions);
    if (onLoad) {
      onLoad(map);
    }
  };

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        type="text/javascript"
        onReady={initMap}
      />
      <div id={mapId} className="w-[100%] h-[100%]" />
    </>
  );
}
