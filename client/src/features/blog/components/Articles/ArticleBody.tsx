import { FC, useRef, useEffect } from 'react';
import './styles/articlebody.css';

interface ArticleBodyProps {
  articleHTML: string;
}

const ArticleBody: FC<ArticleBodyProps> = ({articleHTML}) => {

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(divRef.current) {
      divRef.current.innerHTML = articleHTML;
    }
  }, [articleHTML]);


  return (
    <div className="w-full">
      <div className="w-full">
        <div 
          ref={divRef}
          className="article-body"
        >
          </div>
      </div>
    </div>
  )
}

export default ArticleBody;