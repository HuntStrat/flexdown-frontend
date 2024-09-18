import { useState, useEffect } from "react";

export function useWindowResize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 918);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 918);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
