import { FC } from 'react';
import {ArticleHeader, ArticleFooter, ArticleBody} from '../features/blog/index';

const Article: FC = () => {

  const articleHTML = '';

  return (
    <div>
      <section className="bg-white">
        <div>
          <ArticleHeader />
        </div>
        <div className="flex justify-center
          xs:px-[20px] xs:py-[40px]
          md:px-[50px] md:py-[40px]
          lg:px-[100px] lg:py-[60px]"
        >
          <div className="max-w-[970px] w-full">
            <ArticleBody 
              articleHTML={articleHTML}
            />
          </div>
        </div>
        <div className="bg-white
          xs:px-[32px] xs:py-[30px]
          md:px-[50px] md:py-[30px]
          lg:px-[100px] lg:py-[40px]"
        >
          <ArticleFooter />
        </div>
      </section>
    </div>
  )
}

export default Article;