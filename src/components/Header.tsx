import Image from 'next/image';
import Link from 'next/link';
import headerLogo from 'public/logo.png';

export default function Header() {
  return (
    <div className="border-b px-2">
      <header className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="header logo"
            width={50}
            height={50}
            placeholder="blur"
          />
        </Link>
        {/* nav will be here */}
      </header>
    </div>
  );
}
