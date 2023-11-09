import { FC } from "react";
import StickySideHeader from "./StickySideHeader";

interface PlantDescriptionProps {
  description: string;
}

const PlantDescription: FC<PlantDescriptionProps> = ({description}) => {

  return (
    <div>
      <section className="flex 
        xs:flex-col xs:mt-[50px] 
        md:flex-row md:mt-[90px]"
      >
        <div className="md:w-[25%]">
          <StickySideHeader 
            mainText='Description'
          />
        </div>
        <div className="md:w-[75%] xs:mt-[20px]">
          <div className="text-xl text-dark">
            Growth description
          </div>
          <div className="text-dark font-light xs:mt-[10px] md:mt-[20px]">
            {description}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlantDescription;