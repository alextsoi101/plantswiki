import { FC } from "react";
import PlantMainInfo from "../features/plants/components/PlantInfo/PlantMainInfo";
import PlantFullInfo from "../features/plants/components/PlantInfo/PlantFullInfo";

const PlantInfo: FC = () => {
  return (
    <div>
      <div>
        <PlantMainInfo />
      </div>
      <div>
        <PlantFullInfo />
      </div>
    </div>
  )
}

export default PlantInfo;