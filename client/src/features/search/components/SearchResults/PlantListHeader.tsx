import { FC, useState, useRef } from "react";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";

interface PlantsListHeaderProps {
  total: number;
}

const PlantsListHeader: FC<PlantsListHeaderProps> = ({total}) => {

  const [sortVisible, setSortVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const hideMenu = () => {
    setSortVisible(false)
  }

  useOnClickOutside(dropdownRef, hideMenu);

  return (
    <div className="flex justify-between items-center">
        <div>
          {total} results
        </div>

        <div className="flex items-center gap-[16px] text-dark-black">
          <div 
            className="relative flex flex-col items-end"
            ref={dropdownRef}
          >
            <div 
              className="flex items-center cursor-pointer hover:text-blue"
              onClick={() => setSortVisible(!sortVisible)}
            >
              <span>Sort by</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <div 
              className={ sortVisible 
                ? "absolute mt-[30px] p-[20px] bg-white w-[200px] rounded-lg border border-silver shadow-lg"
                : "hidden"
              }
            >
              <div className="text-dark hover:text-blue cursor-pointer py-[5px]">
                Sort A-Z
              </div>
              <div className="text-dark hover:text-blue cursor-pointer py-[5px]">
                Sort Z-A
              </div>
            </div>
          </div>

          <div className="cursor-pointer hover:text-blue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="cursor-pointer hover:text-blue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
            </svg>
          </div>

        </div>
      </div>
  )
}

export default PlantsListHeader;