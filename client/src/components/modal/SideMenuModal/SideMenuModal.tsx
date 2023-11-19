import { FC, useState } from 'react';
import ModalLayout from '../../../layouts/ModalLayout';
import SideMenuModalCard from './SideMenuModalCard';
import menuIcon from '../../../assets/icons/main-menu.svg';
import whiteMenuIcon from '../../../assets/icons/main-menu-white.svg';

const SideMenuModal: FC = () => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <ModalLayout>
      <div className="h-full bg-white shadow-xl xs:w-full md:w-[400px]">
        <div className="p-[14px]">
          <button 
            className="p-[12px] bg-transparent rounded-full hover:bg-blue"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            <img 
              src={buttonHover ? whiteMenuIcon : menuIcon}
              alt="menu-icon"
            />
          </button>
        </div>
        <div className="px-[25px] py-[20px]">
          <h2 className="text-[24px]">
            Popular Kew Science Apps
          </h2>
          <div className="flex flex-col gap-[10px] mt-[10px] h-[800px]">
            <SideMenuModalCard 
              mainText='Plants of The World'
              description='Names, synonyms, distribution, images and 
                descriptions of all the plants in the world'
              link='/'
            />
            <SideMenuModalCard 
              mainText='Plants of The World'
              description='Names, synonyms, distribution, images and 
                descriptions of all the plants in the world'
              link='/'
            />
          </div>
        </div>
      </div>
    </ModalLayout>
  )
}

export default SideMenuModal;