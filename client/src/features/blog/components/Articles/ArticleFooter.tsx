import { FC } from 'react';
import ArticleActionButtons from './ArticleActionButtons';

interface ArticleFooterProps {
  openComments: () => void;
}

const ArticleFooter: FC<ArticleFooterProps> = ({openComments}) => {

  return (
    <div>
      <div className="flex justify-between items-center bg-white">
        <div>
          <div className="text-sm text-gray">
            BY 
            <span className="ml-[7px]
              xs:font-bold md:font-extrabold"
            >
              ALEX TSOI
            </span>
          </div>
        </div>
        <div>
          <ArticleActionButtons 
            openComments={openComments}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleFooter;