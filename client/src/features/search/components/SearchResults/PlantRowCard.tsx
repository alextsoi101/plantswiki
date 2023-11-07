import { FC } from "react";
import plantblueicon from '../../../../assets/icons/plant-blue.svg';
import plantgrayicon from '../../../../assets/icons/plant-gray.svg';

interface PlantRowCardProps {
  id: number;
  rank: string;
  name: string;
  author: string;
  imageUrl?: string | null;
}

const PlantRowCard: FC<PlantRowCardProps> = ({id, rank, name, author, imageUrl}) => {
  return (
    <div className={`flex items-center p-[30px] bg-white cursor-pointer duration-150 h-full hover:ring-[10px] ring-inset 
      ${imageUrl ? 'ring-[#40a1a4]' : 'ring-[#989898]' }`}
    >
      <div className="text-sm font-bold xs:w-[100px] md:w-[180px]">
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
      <div className="flex 
        xs:flex-col xs:justify-start xs:items-start
        md:flex-row xs:justify-normal md:items-center"
      >
        <div className="text-[18px] font-medium text-dark-black italic">
          {name}
        </div>
        <div className="text-base font-light text-dark xs:ml-[0px] md:ml-[10px]">
          {author}
        </div>
      </div>
    </div>
  )
}

export default PlantRowCard;