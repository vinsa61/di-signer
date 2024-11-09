"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Video() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBlurred(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const nextSection = document.querySelector("section");
    if (nextSection) {
      observer.observe(nextSection);
    }

    return () => {
      if (nextSection) observer.unobserve(nextSection);
    };
  }, []);

  return (
    <div
      className={`relative w-[92%] md:w-[98%] min-h-[85%] mx-auto overflow-hidden ${
        isBlurred ? "blur-md" : ""
      }`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing-page.mp4"
        className="min-h-screen w-full object-cover hidden md:block"
        style={{ marginTop: "0" }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing-page-mobile.mp4"
        className="min-h-screen w-full object-cover block md:hidden"
        style={{ marginTop: "0" }}
      />

      <div className="absolute top-0 left-0 w-full h-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3 px-4 md:px-7 items-center justify-center text-white font-[family-name:var(--space-mono)]">
        <div className="flex flex-col h-full translate-y-1/4 md:col-span-2 md:pl-2 lg:pl-3 gap-5">
          <div className="text-4xl md:text-4xl lg:text-6xl font-[family-name:var(--space-mono-bold)]">
            Digital Signature Protocol
          </div>
          <div className="">
            An innovative approach to sign your documents with ease.
          </div>
        </div>
        <div className="flex flex-col min-h-full items-center lg:items-start translate-y-1/3 md:col-span-1 md:pl-20 gap-5">
          <Image
            src="/logo-white.svg"
            alt="Di-Signer Logo"
            width={150}
            height={100}
            className="object-contain max-w-full h-auto hidden lg:block"
          />
          <Image
            src="/d-logo-white.svg"
            alt="Di-Signer Logo"
            width={50}
            height={50}
            className="object-contain max-w-full h-auto block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
