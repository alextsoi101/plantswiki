import { FC } from "react";
import { PlantInfoContent } from "./PlantFullInfo";

interface PlantInfoNavProps {
  content: string;
  switchContent: (content: PlantInfoContent) => void;
}

const PlantInfoNav: FC<PlantInfoNavProps> = ({content, switchContent}) => {

  return (
    <div className="flex items-end h-[50px] bg-blue 
      xs:px-[20px] xs:justify-center
      md:px-[32px] md:justify-start
      lg:px-[100px]"
    >
      <ul className="flex gap-[20px]">
        <li
          onClick={() => switchContent(PlantInfoContent.general)}
        >
          <div 
            className={ content === PlantInfoContent.general
              ? "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded font-medium"
              : "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded"
            }
          >
            General
          </div>
          {content === PlantInfoContent.general &&
            <div className="h-[4px] rounded-t bg-pink"></div>
          }
        </li>

        <li
          onClick={() => switchContent(PlantInfoContent.images)}
        >
          <div 
            className={ content === PlantInfoContent.images
              ? "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded font-medium"
              : "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded"
            }
          >
            Images
          </div>
          {content === PlantInfoContent.images &&
            <div className="h-[4px] rounded-t bg-pink"></div>
          }
        </li>

        <li
          onClick={() => switchContent(PlantInfoContent.description)}
        >
          <div 
            className={ content === PlantInfoContent.description
              ? "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded font-medium"
              : "px-[8px] py-[8px] text-white cursor-pointer hover:bg-navy rounded"
            }
          >
            Description
          </div>
          {content === PlantInfoContent.description &&
            <div className="h-[4px] rounded-t bg-pink"></div>
          }
        </li>
      </ul>
    </div>
  )
}

export default PlantInfoNav;