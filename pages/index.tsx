import { FirebaseAdmin } from '@/src/feature/common/firebase';
import { FirebaseAuthClient } from '@/src/feature/common/firebase/auth';
import getConfig from 'next/config';
import { NextRequest, NextResponse } from 'next/server';

import Map from '@/src/components/Map';
import useStores from '@/src/feature/common/hooks/useStores';

export default function Home() {
  const firebaseAuth = FirebaseAuthClient.getInstance();

  const {
    getStores: { isLoading, error, data: sampleStore },
  } = useStores();

  return (
    <main className="w-full h-full">
      <Map />
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
