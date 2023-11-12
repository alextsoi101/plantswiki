import { FC } from 'react';
import ArticleCard from '../Articles/ArticleCard';
import highlightimg from '../../../../assets/images/test-highlight.jpg';

interface TopicHighlightProps {
  imageUrl: string;
  mainText: string;
  description: string;
  linkText: string;
}

const TopicHighlight: FC = () => {
  return (
    <div>
      <div className="relative flex
        xs:flex-col 
        md:flex-row md:items-center"
      >
        <div className="overflow-hidden 
          xs:h-[250px] xs:w-[100%]
          md:h-[400px] md:w-[65%]"
        >
          <img 
            src={highlightimg} 
            alt='topic-image'
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-col items-center bg-white 
          xs:static xs:px-[2rem] xs:py-[1.5rem] xs:w-full
          md:absolute md:right-[0px] md:px-[3.75rem] md:py-[2.5rem] md:w-[41%] md:translate-x-0"
        >
          <div className="text-center text-dark xs:text-xl md:text-2xl">
            Visit the world-famous Plants
          </div>
          <div className="pt-[10px] text-center text-dark font-light 
            xs:text-[12px] md:text-[15px]"
          >
            Experience our beautiful plants and the most biodiverse place on Earth.
          </div>
          <div className="pt-[12px] text-center text-dark font-medium
            underline underline-offset-[8px] decoration-2 decoration-blue
            xs:text-sm md:text-base"
          >
            Visit plants
          </div>
        </div>
      </div>
      <div className="xs:hidden md:mt-[32px]">
        <div className="duration-300 scale-1 origin-top">
          <div className="flex gap-[30px]">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicHighlight;