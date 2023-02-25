import Map from '@/src/components/Map';

export default function Home() {
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
