import { FC } from "react";
import StickySideHeader from "./StickySideHeader";

interface PlantImagesProps {
  images: string[];
}

const PlantImages: FC<PlantImagesProps> = ({images}) => {

  return (
    <div>
      <section className="flex 
        xs:flex-col xs:mt-[50px] 
        md:flex-row md:mt-[90px]"
      >
        <div className="md:w-[25%]">
          <StickySideHeader 
            mainText='All images'
          />
        </div>
        <div className="md:w-[75%] xs:mt-[20px]">
          <div className="grid bg-white gap-[8px]
            xs:grid-cols-2 lg:grid-cols-3"
          >
            {
              images.map(image =>
                <div className="w-full xs:h-[180px] md:h-[210px]">
                  <img 
                    src={image} 
                    alt='plant-image' 
                    className="object-cover w-full h-full"
                  />
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlantImages;