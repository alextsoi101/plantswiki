import { FC, useState } from 'react';
import NavBar from './NavBar';
import menuIcon from '../../../assets/icons/main-menu.svg';
import whiteMenuIcon from '../../../assets/icons/main-menu-white.svg';
import logo from '../../../assets/images/logo.png';

const Header: FC = () => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <header className="bg-white
      xs:px-[10px] xs:py-[4px]
      md:px-[20px] md:py-[9px]"
    >
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
          <div className="xs:ml-[5px] md:ml-[12px]">
            <img 
              className="xs:h-[30px] md:h-[50px]"
              src={logo} 
              alt="logo" 
            />
          </div>
        </div>
        <div className="content-center 
          xs:hidden md:flex"
        >
          <NavBar />
        </div>
        <div className="items-center
          xs:flex md:hidden"
        >
          <button className="flex content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;