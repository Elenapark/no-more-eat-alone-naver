import { FirebaseAdmin } from '@/src/feature/common/firebase';
import { FirebaseAuthClient } from '@/src/feature/common/firebase/auth';
import getConfig from 'next/config';
import { NextRequest, NextResponse } from 'next/server';

import Map from '@/src/components/Map';
import Markers from '@/src/components/Markers';
import useMap from '@/src/feature/common/hooks/useMap';

export default function Home() {
  const { initMap } = useMap();
  const firebaseAuth = FirebaseAuthClient.getInstance();

  const onLoad = (map: NaverMap) => {
    initMap(map);
  };

  return (
    <main className="w-full h-full">
      <Map onLoad={onLoad} />
      <Markers />
    </main>
  );
}

// sample firebase init
export async function getServerSideProps(req: NextRequest, res: NextResponse) {
  const app = FirebaseAdmin.getInstance();
  const { publicRuntimeConfig } = getConfig();

  //TODO: fetch first data  by firebase admin sdk

  return {
    props: {}, // will be passed to the page component as props
  };
}
