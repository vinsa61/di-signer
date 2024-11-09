"use client";
import { useEffect, useState } from "react";

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
    <div className={`relative w-[98%] h-[85%] mx-auto overflow-hidden ${isBlurred ? "blur-md" : ""}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing-page.mp4"
        className="w-full object-cover"
        style={{ marginTop: "0" }}
      />

      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 gap-16 items-center justify-center text-white font-[family-name:var(--space-mono)]">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="md:text-4xl">Digital Signature Protocol</div>
          <div>Goes Here</div>
        </div>
      </div>
    </div>
  );
}
