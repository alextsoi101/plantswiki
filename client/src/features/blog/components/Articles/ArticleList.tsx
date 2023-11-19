import { FC } from 'react';
import ArticleCard from './ArticleCard';
import { BaseButton } from '../../../../components';

interface ArticleListProps {
  articles: [];
}

const ArticleList: FC = () => {
  return (
    <div>
      <div className="grid gap-[32px]
        xs:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3"
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="flex justify-center w-full">
        <div className="mt-[40px]">
          <BaseButton 
            text='Start reading'
            onClick={() => console.log(123)}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleList;