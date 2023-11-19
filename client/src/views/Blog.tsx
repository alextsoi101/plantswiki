import { FC } from 'react';
import { TopicHighlightList, ArticleList } from '../features/blog/index';
import { BaseButton } from '../components';
import lastsectionimg from '../assets/images/blog-last-section.jpg';

const Blog: FC = () => {
  return (
    <div>
      <section className="bg-plant_blog bg-cover bg-center">
        <div className="flex justify-center
          bg-gradient-to-r via-dark-black via-30% from-dark-black
          xs:px-[32px] xs:pt-[40px] xs:pb-[50px]
          md:px-[50px] md:pt-[40px] md:pb-[50px]
          lg:px-[100px] lg:pt-[60px] lg:pb-[80px]"
        >
          <div className="max-w-[1200px] w-full">
            <h1 className="text-white font-light 
              xs:text-3xl xs:font-normal
              md:text-[60px] md:font-light
              lg:text-[70px]"
            >
              Explore Our Blog
            </h1>
            <div className="mt-[20px] text-white font-light max-w-[550px]
              xs:text-base md:text-xl"
            >
              Dive into plant profiles, gardening insights, and nature's 
              interconnected tapestry. It's your green nook for botanical
              wonder.
            </div>
            <div className="mt-[40px]">
              <BaseButton 
                text='Start reading'
                onClick={() => console.log(123)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-gray-light
        xs:px-[32px] xs:py-[30px]
        md:px-[50px] md:py-[40px]
        lg:px-[100px] lg:py-[60px]"
      >
        <div className="max-w-[1200px] w-full">
          <TopicHighlightList />
        </div>
      </section>
      <section className="flex flex-col items-center bg-blue-dark
        xs:px-[32px] xs:py-[30px]
        md:px-[50px] md:py-[40px]
        lg:px-[100px] lg:py-[60px]"
      >
        <h1 className="text-3xl text-white">
          Read & Watch
        </h1>
        <div className="mt-[10px] text-white font-light text-center">
          Check back for new stories throughout the week.
        </div>
        <div className="mt-[50px] max-w-[1200px] w-full">
          <ArticleList />
        </div>
      </section>
      <section className="flex justify-center bg-white
        xs:px-[32px] xs:py-[30px]
        md:px-[50px] md:py-[40px]
        lg:px-[100px] lg:py-[60px]"
      >
        <div className="flex xs:flex-col md:flex-row">
          <div className="overflow-hidden 
            xs:w-[100%] xs:h-[300px]
            md:w-[60%] md:h-[350px]"
          >
            <img 
              src={lastsectionimg} 
              alt='last-section-image' 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white
            xs:w-[100%] xs:p-[20px] xs:flex xs:flex-col xs:items-center
            md:w-[40%] md:p-[30px] md:block"
          >
            <div className="text-2xl text-dark">
              Discover our blog
            </div>
            <div className="mt-[10px] text-dark font-light xs:text-center md:text-left">
              Dive into plant profiles, gardening insights, and nature's 
              interconnected tapestry. It's your green nook for botanical wonder.
            </div>
            <div className="mt-[20px]">
              <BaseButton 
                text='Start reading'
                onClick={() => console.log(123)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog;