import { FC, useState } from 'react';
import testimg from '../../../../assets/images/test-highlight.jpg';

interface ArticeCardProps {
  imageUrl: string;
  mainText: string;
  description: string;
  linkText: string;
}

const ArticleCard: FC = () => {

  const [cardHover, setCardHover] = useState<boolean>(false);

  return (
    <div 
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      className="cursor-pointer"
    >
      <div className="w-full h-210px overflow-hidden">
        <img 
          src={testimg} 
          alt='' 
          className={cardHover
            ? "object-cover w-full h-full scale-110 duration-500"
            : "object-cover w-full h-full duration-500"
          }
        />
      </div>
      <div className="bg-white 
        xs:p-[10px] xs:pt-[10px]
        md:p-[20px] md:pt-[16px]"
      >
        <div className="flex flex-wrap gap-[10px] text-[11px] text-gray font-extrabold">
          <div>TOURS AND TALKS</div>
          <div>PLANT GROWING</div>
        </div>
        <div className="mt-[10px] text-sm text-blue font-extrabold tracking-[1px]">
          27 NOVEMBER 2023
        </div>
        <div className={cardHover
          ? "mt-[6px] text-xl text-dark font-normal underline underline-offset-[6px] decoration-1 decoration-dark duration-300"
          : "mt-[6px] text-xl text-dark font-normal underline underline-offset-[6px] decoration-1 decoration-white duration-300"
        }

        >
          Why does the plant grows? Biology and boanical
        </div>
        <div className="mt-[8px] text-sm text-dark font-light">
          Dereck Logan
        </div>
      </div>
    </div>
  )
}

export default ArticleCard;