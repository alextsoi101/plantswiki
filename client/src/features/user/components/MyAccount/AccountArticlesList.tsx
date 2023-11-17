import { FC } from 'react';
import ArticleCard from '../../../blog/components/Articles/ArticleCard';

interface AccountArticlesListProps {
  articles: [];
}

const AccountArticlesList: FC = () => {
  return (
    <div>
      <div className="grid gap-[32px]
        xs:grid-cols-1
        lg:grid-cols-2"
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="flex justify-center w-full">
        <button 
          className="mt-[40px] bg-blue text-white font-medium 
          rounded-full duration-200 hover:bg-navy
          xs:py-[10px] xs:px-[37px]
          md:py-[15px] md:px-[45px]"
        >
          Load more
        </button>
      </div>
    </div>
  )
}

export default AccountArticlesList;