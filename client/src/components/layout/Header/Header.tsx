import { FC, useState } from 'react';
import { SideMenuModal } from '../../modal';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import menuIcon from '../../../assets/icons/main-menu.svg';
import whiteMenuIcon from '../../../assets/icons/main-menu-white.svg';
import logo from '../../../assets/images/logo.png';

const Header: FC = () => {

  const [buttonHover, setButtonHover] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const onClickMobileToggle = () => {
    setShowMobileNav(!showMobileNav)
  }

  const openSideMenu = () => {
    setShowSideMenu(true)
  }

  const closeSideMenu = () => {
    setShowSideMenu(false)
  }

  return (
    <>
      {showSideMenu &&
        <SideMenuModal 
          onClose={closeSideMenu}
        />
      }
      <header className={`flex flex-col bg-white
        ${showMobileNav ? 'fixed w-full z-[1000]' : 'relative'}
        xs:px-[10px] xs:py-[4px]
        md:px-[20px] md:py-[9px]`}
      >
        <div className="flex justify-between align-center">
          <div className="flex items-center">
            <div>
              <button 
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                onClick={openSideMenu}
                className="p-[12px] bg-transparent rounded-full hover:bg-blue"
              >
                <img 
                  src={buttonHover ? whiteMenuIcon : menuIcon}
                  alt="menu-icon"
                />
              </button>
            </div>
            <div className="xs:ml-[5px] md:ml-[12px] cursor-pointer">
              <img 
                className="xs:h-[30px] md:h-[50px]"
                src={logo} 
                alt="logo" 
              />
            </div>
          </div>
          <div className="content-center mr-[15px]
            xs:hidden md:flex"
          >
            <NavBar />
          </div>
          <div className="items-center
            xs:flex md:hidden"
          >
            <button 
              className="flex content-center"
              onClick={onClickMobileToggle}
            >
              {showMobileNav ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
            </button>
          </div>
        </div>
        {showMobileNav &&
          <div className="fixed h-[100vh] w-full left-0 top-[50px] z-[1000]">
            <NavBarMobile />
          </div>
        }
      </header>
    </>
  )
}

export default Header;