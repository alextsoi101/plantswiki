import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuModalCardProps {
  mainText: string;
  description: string;
  link: string;
}

const SideMenuModalCard: FC<SideMenuModalCardProps> = ({
  mainText, description, link
}) => {

  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);

  const goToPage = () => {
    navigate(link)
  }

  return (
    <div 
      onClick={goToPage}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      className={cardHover
        ? "flex p-[10px] w-full rounded duration-300 bg-blue text-white cursor-pointer"
        : "flex p-[10px] w-full rounded duration-300 bg-white text-dark cursor-pointer"
      }
    >
      <div>
        <div>
          {mainText}
        </div>
        <div className={cardHover 
            ? "text-white font-light duration-300" 
            : "text-gray font-light duration-300"
          }
        >
          {description}
        </div>
      </div>
      <div className="flex justify-end items-center w-[80px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </div>
    </div>
  )
}

export default SideMenuModalCard;