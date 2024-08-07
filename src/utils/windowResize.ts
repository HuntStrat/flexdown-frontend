import { useState, useEffect } from "react";

export function useWindowResize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 800);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
}