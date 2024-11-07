import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-30 bg-black w-[98%] mx-auto mt-4 border border-gray-700 border-[0.5] h-[70px] font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center h-full justify-between">
        <div className="flex h-full items-center">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Di-Signer Logo"
              width={250}
              height={50}
              className="object-contain w-full h-20 -translate-y-1"
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
            href="/confirmation"
          >
            Accept Requests
          </Link>
        </div>
      </div>
    </nav>
  );
}
