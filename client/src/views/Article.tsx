import { FC, useState } from 'react';
import {ArticleHeader, ArticleFooter, ArticleBody} from '../features/blog';
import { CommentsModal } from '../features/comments';
import { Breadcrumbs } from '../components';

const Article: FC = () => {

  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);

  const openComments = () => {
    setCommentsOpen(true)
  }

  const closeComments = () => {
    setCommentsOpen(false)
  }

  const articleHTML = '';

  return (
    <div>
      {commentsOpen &&
        <CommentsModal 
          total={23}
          onClose={closeComments}
        />
      }
      <section className="bg-white">
        <div>
          <Breadcrumbs 
            lastItem='Plants growing and agronomy'
          />
        </div>
        <div>
          <ArticleHeader 
            openComments={openComments}
          />
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
          <ArticleFooter 
            openComments={openComments}
          />
        </div>
      </section>
    </div>
  )
}

export default Article;