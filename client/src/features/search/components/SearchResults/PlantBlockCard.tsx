import { FC, useState } from 'react';
import plantblueicon from '../../../../assets/icons/plant-blue.svg';
import plantgrayicon from '../../../../assets/icons/plant-gray.svg';

interface PlantBlockCardProps {
  id: number;
  rank: string;
  name: string;
  author: string;
  imageUrl?: string | null;
}

const PlantBlockCard: FC<PlantBlockCardProps> = ({id, rank, name, author, imageUrl}) => {

  return (
    <div className={`p-[30px] bg-white cursor-pointer duration-150 h-full hover:ring-[10px] ring-inset 
        ${imageUrl ? 'ring-[#40a1a4]' : 'ring-[#989898]' }`}
    >
      <div className="text-sm font-bold">
        {imageUrl ?
          <div className="flex items-center text-blue">
            <img src={plantblueicon} alt="plant-icon" />
            <span className="ml-1">{rank.toUpperCase()}</span>
          </div>
          :
          <div className="flex items-center text-gray">
            <img src={plantgrayicon} alt="plant-icon" />
            <span className="ml-1">{rank.toUpperCase()}</span>
          </div>
        }
      </div>
      <div className="mt-0.5 text-[18px] font-medium text-dark-black italic">
        {name}
      </div>
      <div className="text-[18px] font-light text-dark">
        {author}
      </div>
      { 
        imageUrl ?
          <div className="mt-4 overflow-hidden
            xs:h-[30vw] md:h-[16vw] lg:h-[12vw] xl:h-[8.4vw]"
          >
            <img 
              src={imageUrl} 
              alt="plant-image" 
              className="object-cover w-full h-full"
            />
          </div>
        :
          <div className="mt-1">
            <div className="text-[16px] text-dark-black font-medium">
              Synonym of: <span className="italic font-medium">Coconut palm tree</span>
            </div>
            <div className="text-[16px] text-dark-black font-light">
              Brit. Fl., ed. 2, 1: 114 (1808)
            </div>
            <div className="mt-1 text-[16px] text-dark-black font-medium">
              Year: <span>1785</span>
            </div>
          </div>
      }
    </div>
  )
}

export default PlantBlockCard;