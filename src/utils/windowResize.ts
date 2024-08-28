import { useState, useEffect } from "react";

export function useWindowResize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 950);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
}