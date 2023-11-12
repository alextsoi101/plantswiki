import { FC } from 'react';
import TopicHighlight from './TopicHighlight';

interface TopicHighlightProps {
  imageUrl: string;
  mainText: string;
  description: string;
  linkText: string;
}

const TopicHighlightList: FC = () => {
  return (
    <div className="flex flex-col xs:gap-[32px] md:gap-[60px]">
      <TopicHighlight 
        
      />
      <TopicHighlight />
      <TopicHighlight />
    </div>
  )
}

export default TopicHighlightList;