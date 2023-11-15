import { FC } from 'react';
import ArticleHeader from '../features/blog/components/Articles/ArticleHeader';
import ArticleFooter from '../features/blog/components/Articles/ArticleFooter';

const Article: FC = () => {

  return (
    <div>
      <section className="bg-white">
        <div>
          <ArticleHeader />
        </div>
        <div>

        </div>
        <div className="bg-white
          xs:px-[32px] xs:py-[20px]
          md:px-[50px] md:py-[30px]
          lg:px-[100px] lg:py-[30px]"
        >
          <ArticleFooter />
        </div>
      </section>
    </div>
  )
}

export default Article;