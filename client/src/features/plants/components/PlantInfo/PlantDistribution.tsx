import { FC } from "react";
import PlantMap from "./PlantMap";

const PlantDistribution: FC = () => {

  return (
    <div>
      <div className="w-[100%] xs:h-[300px] md:h-[500px]">
        <PlantMap />
      </div>
      <div className="mt-[40px]">
        <div className="flex items-center gap-[14px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[12px] h-[12px] bg-[#72994C]"></div> 
            <div className="text-dark">Native</div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[12px] h-[12px] bg-[#995499]"></div>
            <div className="text-dark">Introduced</div>
          </div>
        </div>
        <div className="mt-[35px]">
          <div>
            <div className="text-xl text-dark">
              Native to:
            </div>
            <div className="mt-[10px] text-dark font-light">
              Angola, Benin, Burundi, Cameroon, Central African Repu, Chad, Congo, Gabon, Gulf of Guinea Is., Nigeria, Sierra Leone, Zambia, Zaïre
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="text-xl text-dark">
              Introduced into:
            </div>
            <div className="mt-[10px] text-dark font-light">
              Costa Rica, Mauritius
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantDistribution;