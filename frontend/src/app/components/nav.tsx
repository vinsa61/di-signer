import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-30 bg-black w-[98%] mx-auto mt-4 border border-gray-700 border-[0.5] h-[70px] font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center h-full md:justify-between md:px-8 px-0 justify-around">
        <div className="flex h-full items-center">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Di-Signer Logo"
              width={125}
              height={50}
              className="object-contain max-w-full h-auto"
            />
          </Link>
        </div>
        <div className="flex h-full">
          <Link
            className="text-white flex items-center justify-center h-full px-4"
            href="/request"
          >
            Request Signature
          </Link>
          <Link
            className="text-white flex items-center justify-center h-full px-4"
            href="/accept"
          >
            Accept Requests
          </Link>
        </div>
        <div className="flex h-full">{/* Username(if logged in) */}</div>
      </div>
    </nav>
  );
}
