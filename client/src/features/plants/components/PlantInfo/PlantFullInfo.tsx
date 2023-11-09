import { FC, useState } from "react";
import PlantInfoNav from "./PlantInfoNav";
import PlantGeneral from "./PlantGeneral";
import PlantImages from "./PlantImages";
import PlantDescription from "./PlantDescription";

export enum PlantInfoContent {
  general = 'general',
  images = 'images',
  description = 'description',
}

const PlantFullInfo: FC = () => {

  const [infoContent, setInfoContent] = useState<PlantInfoContent>(PlantInfoContent.general);

  const switchContent = (content: PlantInfoContent): void => {
    setInfoContent(content)
  }

  return (
    <div className="">
      <div className="sticky top-0 z-[5000]">
        <PlantInfoNav 
          content={infoContent}
          switchContent={switchContent}
        />
      </div>
      <div className="xs:px-[20px] xs:pb-[40px]
        lg:px-[32px] lg:pb-[40px]
        xl:px-[100px] xl:pb-[90px]"
      >
        <div>
          { infoContent === PlantInfoContent.general &&
            <PlantGeneral />
          }
          { infoContent === PlantInfoContent.images &&
            <PlantImages 
              images={[
                'https://bs.plantnet.org/image/o/171e538d4f59288686f87e378a4a1b5d9a80fe2d',
                'https://bs.plantnet.org/image/o/e03c4945dbb3f1d56e0693e7d95ab8df86140ee6',
                'https://bs.plantnet.org/image/o/cd066e1b57604ad4a4b84334a0ff4f68a9099fdf',
                'https://bs.plantnet.org/image/o/171e538d4f59288686f87e378a4a1b5d9a80fe2d',
                'https://bs.plantnet.org/image/o/e03c4945dbb3f1d56e0693e7d95ab8df86140ee6',
                'https://bs.plantnet.org/image/o/cd066e1b57604ad4a4b84334a0ff4f68a9099fdf',
              ]}
            />
          }
          { infoContent === PlantInfoContent.description &&
            <PlantDescription 
              description='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
            />
          }
        </div>
      </div>
    </div>
  )
}

export default PlantFullInfo;