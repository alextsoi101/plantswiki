import { FC, useState } from 'react';
import NavBar from './NavBar';
import menuIcon from '../../../assets/icons/main-menu.svg';
import whiteMenuIcon from '../../../assets/icons/main-menu-white.svg';
import logo from '../../../assets/images/logo.png';

const Header: FC = () => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <header className="bg-white py-[9px] px-[20px]">
      <div className="flex justify-between align-center">
        <div className="flex items-center">
          <div>
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
          <div className="ml-[12px]">
            <img 
              className="h-[50px]"
              src={logo} 
              alt="logo" 
            />
          </div>
        </div>
        <div className="flex content-center">
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header;