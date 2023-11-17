import { FC, useState } from 'react';
import { 
  ArticleList, 
  TopicButtonsGroup, 
  TopicSelect, 
  Topic } from '../features/blog/index';

const BlogArticles: FC = () => {

  const [topic, setTopic] = useState(Topic.all);

  const handleChange = (topic: Topic): void => {
    setTopic(topic)
  }

  return (
    <div>
      <section className="bg-white
        xs:px-[32px] xs:pt-[20px] xs:pb-[50px]
        md:px-[50px] md:pt-[20px] md:pb-[50px]
        lg:px-[100px] lg:pt-[40px] lg:pb-[80px]"
      >
        <div>
          <div className="flex flex-col justify-center items-center bg-white">
            <div className="text-blue font-light xs:text-[40px] md:text-[50px]">
              Read & Watch
            </div>
            <div className="mt-[15px] max-w-[600px] font-light text-center
              xs:text-base md:xs:text-[18px]"
            >
              Go behind the scenes to get the latest in our cutting-edge science and 
              uncover the fascinating world of plants and fungi.
            </div>
          </div>
          <div className="xs:hidden
            md:block md:pt-[30px] md:pb-[80px]"
          >
            <TopicButtonsGroup 
              topic={topic}
              handleChange={handleChange}
            />
          </div>
          <div className="xs:pt-[30px] xs:pb-[30px]
            md:hidden"
          >
            <div className="ml-[10px] text-dark font-medium">
              Filter by category
            </div>
            <div className="mt-[6px]">
              <TopicSelect 
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <ArticleList />
        </div>
      </section>
    </div>
  )
}

export default BlogArticles;