import { FC, useEffect, useRef, ReactNode, ReactElement } from "react";

interface ModalLayoutProps {
  children: ReactNode | ReactElement;
  onClose: () => void;
}

const ModalLayout: FC<ModalLayoutProps> = ({children, onClose}) => {

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (modalRef.current !== e.target) return
      onClose()
    };
  
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-screen h-screen bg-dark/60 z-[10000]"
    >
      <div ref={modalRef}>
        {children}
      </div>
    </div>
  )
}

export default ModalLayout;