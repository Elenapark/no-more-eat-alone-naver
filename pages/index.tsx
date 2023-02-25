import SampleComponent from '@/src/components/sample-component';
import { FirebaseAdmin } from '@/src/feature/common/firebase';
import { NextRequest, NextResponse } from 'next/server';

export default function Home() {
  return (
    <div>
      Hello, NextJS
      <SampleComponent />
    </div>
  );
}

// sample firebase init
export async function getServerSideProps(req: NextRequest, res: NextResponse) {
  const app = FirebaseAdmin.getInstance();

  //TODO: fetch first data  by firebase admin sdk

  return {
    props: {}, // will be passed to the page component as props
  };
}
