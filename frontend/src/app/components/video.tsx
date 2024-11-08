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
    <div className="relative w-[98%] h-[85%] mx-auto overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing-page.mp4"
        className={`w-full object-cover ${isBlurred ? "blur-md" : ""}`}
        style={{ marginTop: "0" }}
      />
    </div>
  );
}
