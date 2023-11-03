import { FC, useState, useEffect, useRef } from 'react';

interface NavDropdownProps {
  text: string;
  items: {value: string; link: string;}[];
}

const NavDropdown: FC<NavDropdownProps> = ({text, items}) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      if (dropdownRef.current && e.target && dropdownRef.current.contains(e.target)) {
        return
      } else {
        setMenuVisible(false)
      }
    };
  
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <li 
      className="relative flex flex-col items-center"
      ref={dropdownRef}
      onClick={() => setMenuVisible(!menuVisible)}
    >
      <div className="flex items-center text-sm text-dark font-medium cursor-pointer duration-200 hover:text-blue">
        <div className="mr-[5px]">
          {text}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className={menuVisible
          ? "absolute p-[20px] mt-[25px] w-[200px] bg-white opacity-100 rounded-md transition duration-100 ease-in-out translate-y-0 shadow"
          : "invisible absolute p-[20px] mt-[25px] opacity-0 rounded-md translate-y-2"
        }
      >
        {
          items.map(item =>
            <div className="text-dark hover:text-blue cursor-pointer py-[5px]">
              {item.value}
            </div>
          )
        }
      </div>
    </li>
  )
}

export default NavDropdown;