import { FC, ReactNode, ReactElement } from "react";
import { AccountMenu, AccountMenuContent } from "../features/user/index";

interface MyAccountLayoutProps {
  menuContent: AccountMenuContent;
  children: ReactNode | ReactElement;
}

const MyAccountLayout: FC<MyAccountLayoutProps> = ({menuContent, children}) => {

  return (
    <div className="flex min-h-[100vh]
      xs:flex-col lg:flex-row"
    >
      <div className="
        xs:hidden
        lg:block lg:min-w-[300px]
        xl:min-w-[370px]"
      >
        <AccountMenu 
          menuContent={menuContent}
        />
      </div>
      <div className="w-full
        xs:px-[20px] xs:py-[40px]
        md:px-[50px] md:py-[40px]
        lg:px-[80px] lg:py-[60px]"
      >
        {children}
      </div>
    </div>
  )
}

export default MyAccountLayout;