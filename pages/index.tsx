import Map from '@/src/components/Map';

import SampleComponent from '@/src/components/sample-component';
import { FirebaseAdmin } from '@/src/feature/common/firebase';
import { FirebaseAuthClient } from '@/src/feature/common/firebase/auth';
import getConfig from 'next/config';
import { NextRequest, NextResponse } from 'next/server';

export default function Home() {
  const firebaseAuth = FirebaseAuthClient.getInstance();
  const onLoad = (map: naver.maps.Map) => {
    console.log(map);
  };
  return (
    <main className="w-full h-full">
      <Map onLoad={onLoad} />
      {/* markers */}
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
