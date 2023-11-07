import { FC, useState } from "react";
import { useNavigate } from "react-router";

interface FeaturedPlantsCardProps {
  imageUrl: string;
  rank: string;
  name: string;
  description: string;
  id: number;
}

const FeaturedPlantsCard: FC<FeaturedPlantsCardProps> = ({imageUrl, rank, name, description, id}) => {

  const navigate = useNavigate();

  const goToPlantPage = (id: number):void => {
    navigate(`plants/${id}`)
  } 

  const [cardHover, setCardHover] = useState(false);

  return (
    <div 
      className="w-full cursor-pointer"
      onClick={() => goToPlantPage(id)}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <div className="w-full h-[210px] overflow-hidden">
        <img 
          src={imageUrl} 
          alt="plant-image" 
          className={cardHover 
            ? "scale-110 object-cover w-full h-full duration-300 ease-out" 
            : "object-cover w-full h-full duration-300 ease-out"
          }
        />
      </div>
      <div className="mt-[5px] text-sm text-blue font-bold">
        {rank.toUpperCase()}
      </div>
      <div className={cardHover
        ? "mt-[5px] text-xl text-blue duration-200"
        : "mt-[5px] text-xl text-dark-black duration-200"
        }
      >
        {name}
      </div>
      <div className="mt-[5px] text-dark font-light">
        {description}
      </div>
    </div>
  )
}

export default FeaturedPlantsCard;