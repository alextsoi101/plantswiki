import { FC } from "react";

const PlantMainInfo: FC = () => {

  return (
    <div className="flex bg-gray-blue min-h-[400px]
      xs:flex-col lg:flex-row"
    >
      <div className="xs:px-[32px] xs:pt-[16px] pb-[24px] xs:w-full
        lg:py-[32px] lg:w-[50%] 
        xl:pl-[100px] xl:pr-[56px]"
      >
        <div className="text-3xl text-dark italic">
          Deamia testudo 
        </div>
        <div className="text-base text-dark font-light">
          (Karw. ex Zucc.) Britton & Rose
        </div>
        <div className="mt-[10px] text-xl text-dark font-light">
          First published in Cact. 2: 213 (1920)
        </div>
        <div className="mt-[10px] text-base text-navy font-medium">
          This species is accepted
        </div>
        <div className="mt-[20px] text-base text-dark font-light">
          The native range of this species is S. Mexico to Central America. 
          It is a succulent epiphyte and grows primarily in the seasonally dry tropical biome.
        </div>
      </div>
      <div className="xs:w-full xs:h-[250px] lg:w-[50%] lg:h-[400px]">
        <img 
          src="https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900" 
          alt="" 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default PlantMainInfo;