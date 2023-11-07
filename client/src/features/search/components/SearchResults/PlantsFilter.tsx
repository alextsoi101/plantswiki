import { FC } from "react";

interface PlantsListFilterProps {
  
}

const PlantsListFilter: FC<PlantsListFilterProps> = ({}) => {

  return (
    <div className="flex items-center gap-[15px] xs:h-[50px] md:h-[65px]">
      <button className="rounded-full border border-gray text-sm duration-200 hover:text-blue
        xs:px-[5px] xs:py-[2px] xs:font-light
        md:px-[10px] md:py-[5px] md:font-normal"
      >
        Accepted name only
      </button>
      <button className="rounded-full border border-gray text-sm duration-200 hover:text-blue
        xs:px-[5px] xs:py-[2px] xs:font-light
        md:px-[10px] md:py-[5px] md:font-normal"
      >
        Has image
      </button>
    </div>
  )
}

export default PlantsListFilter;