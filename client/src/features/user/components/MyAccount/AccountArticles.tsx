import { FC } from "react";
import AccountArticlesList from "./AccountArticlesList";

interface AccountArticlesProps {
  
}

const AccountArticles: FC<AccountArticlesProps> = () => {

  return (
    <div className="w-full">
      <h1 className="text-dark font-light
        xs:text-[35px] lg:text-[50px]"
      >
        My Articles
      </h1>
      <div className="w-full xs:mt-[15px] md:mt-[30px]">
        <AccountArticlesList />
      </div>
    </div>
  )
}

export default AccountArticles;