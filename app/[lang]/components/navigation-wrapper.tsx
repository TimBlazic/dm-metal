"use client";

import { useEffect, useState } from "react";
import Navigation from "./navigation";

export default function NavigationWrapper() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[40px]"
        }`}
      >
        <Navigation />
      </div>
    </div>
  );
}
