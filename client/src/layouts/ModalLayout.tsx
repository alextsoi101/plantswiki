import { FC, ReactNode, ReactElement } from "react";

interface ModalLayoutProps {
  children: ReactNode | ReactElement;
}

const ModalLayout: FC<ModalLayoutProps> = ({children}) => {
  document.body.style.overflow = 'hidden';
  // document.body.style.overflow = 'unset';

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-dark/60 z-[10000]">
      {children}
    </div>
  )
}

export default ModalLayout;