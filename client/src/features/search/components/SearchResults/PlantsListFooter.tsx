import { FC } from "react";
import PlantsPagination, {PlantsPaginationVariant} from "./PlantsPagination";

interface PlantsListFooterProps {
  total: number;
  page: number;
}

const PlantsListFooter: FC<PlantsListFooterProps> = ({total, page}) => {

  return (
    <div className="flex justify-between items-center p-[20px] bg-white
      xs:flex-col xs:gap-[20px] lg:flex-row"
    >
      <div className="xs:hidden sm:block">
        <PlantsPagination 
          total={total}
          page={page}
          variant={PlantsPaginationVariant.desktop}
        />
      </div>
      <div className="xs:block sm:hidden">
        <PlantsPagination 
          total={total}
          page={page}
          variant={PlantsPaginationVariant.mobile}
        />
      </div>
      <div className="flex items-center">
        <div className="mr-[10px]">
          Results per page: 
        </div>
        <select className="border border-silver">
          <option value={35}>35</option>
        </select>
      </div>
    </div>
  )
}

export default PlantsListFooter;