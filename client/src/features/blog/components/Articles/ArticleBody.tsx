import { FC } from 'react';

interface ArticleBodyProps {
  articleHTML: string;
}

const ArticleBody: FC<ArticleBodyProps> = ({articleHTML}) => {

  return (
    <div>
      <iframe
        srcDoc={articleHTML}
        // sandbox="allow-same-origin"
        style={{ width: '100%', height: '100%', overflow: 'hidden', fontFamily: 'monospace'}}
      >
      </iframe>
    </div>
  )
}

export default ArticleBody;