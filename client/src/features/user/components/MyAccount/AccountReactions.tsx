import { FC, ReactNode, ReactElement } from "react";
import AccountArticlesList from "./AccountArticlesList";

interface AccountReactionsProps {
  
}

const AccountReactions: FC<AccountReactionsProps> = () => {

  return (
    <div className="w-full">
      <h1 className="text-dark font-light
        xs:text-[35px] lg:text-[50px]"
      >
        Liked Articles
      </h1>
      <div className="w-full xs:mt-[15px] md:mt-[30px]">
        <AccountArticlesList />
      </div>
    </div>
  )
}

export default AccountReactions;