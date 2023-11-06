import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handler: () => void) => {
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) return
      handler()
    };
  
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
};