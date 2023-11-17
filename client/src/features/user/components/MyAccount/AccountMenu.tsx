import { FC } from "react";

export enum AccountMenuContent {
  general = 'general',
  articles = 'articles',
  reactions = 'reactions',
  info = 'info',
  password = 'password',
}

interface AccountMenuProps {
  menuContent: AccountMenuContent;
}

const AccountMenu: FC<AccountMenuProps> = ({menuContent}) => {

  return (
    <div className="w-full h-full bg-gray-light pb-[20px]
      xs:pt-[30px] lg:pt-[80px]"
    >
      <ul className="pl-[10px]">
        <li className={menuContent === AccountMenuContent.general
            ? "px-[30px] py-[8px] bg-white text-blue font-bold border-l border-blue border-l-4"
            : `px-[30px] py-[8px] text-dark border-l border-gray-light border-l-4 cursor-pointer 
              hover:underline underline-offset-1`
          }
        >
          <div className="ml-20px">
            My Account
          </div>
        </li>
        <li className={menuContent === AccountMenuContent.articles
            ? "px-[30px] py-[8px] bg-white text-blue font-bold border-l border-blue border-l-4"
            : `px-[30px] py-[8px] text-dark border-l border-gray-light border-l-4 cursor-pointer 
              hover:underline underline-offset-1`
          }
        >
          <div className="ml-20px">
            My Articles
          </div>
        </li>
        <li className={menuContent === AccountMenuContent.reactions
            ? "px-[30px] py-[8px] bg-white text-blue font-bold border-l border-blue border-l-4"
            : `px-[30px] py-[8px] text-dark border-l border-gray-light border-l-4 cursor-pointer 
              hover:underline underline-offset-1`
          }
        >
          <div className="ml-20px">
            My Reactions
          </div>
        </li>
        <li className="px-[30px] py-[8px]">
          <div className="ml-20px h-[1px] w-full bg-[#DEDBD4]">
          </div>
        </li>
        <li className={menuContent === AccountMenuContent.info
            ? "px-[30px] py-[8px] bg-white text-blue font-bold border-l border-blue border-l-4"
            : `px-[30px] py-[8px] text-dark border-l border-gray-light border-l-4 cursor-pointer 
              hover:underline underline-offset-1`
          }
        >
          <div className="ml-20px">
            Account Information
          </div>
        </li>
        <li className={menuContent === AccountMenuContent.password
            ? "px-[30px] py-[8px] bg-white text-blue font-bold border-l border-blue border-l-4"
            : `px-[30px] py-[8px] text-dark border-l border-gray-light border-l-4 cursor-pointer 
              hover:underline underline-offset-1`
          }
        >
          <div className="ml-20px">
            Change Password
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AccountMenu;