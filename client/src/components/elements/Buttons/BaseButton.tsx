import { FC } from 'react';

interface BaseButtonProps {
  text: string;
  onClick: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({text, onClick}) => {
  return (
    <button 
      onClick={onClick}
      className="bg-blue text-white font-medium 
        rounded-full duration-200 hover:bg-navy
        xs:py-[10px] xs:px-[37px]
        md:py-[15px] md:px-[45px]"
    >
      {text}
    </button>
  )
}

export default BaseButton;