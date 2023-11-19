import { FC, useState } from "react";
import AccountMenu, { AccountMenuContent } from "./AccountMenu";

interface AccountMenuMobileProps {
  menuContent: AccountMenuContent;
}

const AccountMenuMobile: FC<AccountMenuMobileProps> = ({menuContent}) => {

  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const onClickToggle = () => {
    setMenuVisible(!menuVisible)
  } 

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-[5px] bg-gray-light h-[50px] px-[30px]"
        onClick={onClickToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">
          Account menu
        </span>
      </div>
      <div className={menuVisible
          ? "absolute w-full h-[600px]"
          : "hidden"
        }
      >
        <AccountMenu 
          menuContent={menuContent}
        />
      </div>
    </div>
  )
}

export default AccountMenuMobile;