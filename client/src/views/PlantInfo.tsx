import { FC } from 'react';
import { PlantMainInfo } from '../features/plants/index';
import { PlantFullInfo } from '../features/plants/index';

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