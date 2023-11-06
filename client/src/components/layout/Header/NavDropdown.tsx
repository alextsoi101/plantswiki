import { FC, useState, useRef } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

interface NavDropdownProps {
  text: string;
  items: {value: string; link: string;}[];
}

const NavDropdown: FC<NavDropdownProps> = ({text, items}) => {

  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLLIElement>(null)

  const hideMenu = () => {
    setMenuVisible(false)
  }

  useOnClickOutside(dropdownRef, hideMenu)

  return (
    <li 
      className="relative flex flex-col items-center"
      ref={dropdownRef}
    >
      <div 
        className="flex items-center text-sm text-dark font-medium cursor-pointer duration-200 hover:text-blue"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <div className="mr-[5px]">
          {text}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className={menuVisible
          ? "absolute p-[20px] mt-[25px] w-[200px] bg-white rounded-md shadow-xl z-50"
          : "hidden absolute p-[20px] mt-[25px] rounded-md z-50"
        }
      >
        {
          items.map(item =>
            <div className="text-dark hover:text-blue cursor-pointer py-[7px]">
              {item.value}
            </div>
          )
        }
      </div>
    </li>
  )
}

export default NavDropdown;