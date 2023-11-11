import { FC } from 'react';

const Blog: FC = () => {
  return (
    <div>
      <section className="bg-plant_blog bg-cover bg-center">
        <div className="bg-gradient-to-r via-dark-black via-30% from-dark-black
          xs:px-[32px] xs:pt-[40px] xs:pb-[50px]
          md:px-[50px] md:pt-[40px] md:pb-[50px]
          lg:px-[100px] lg:pt-[60px] lg:pb-[80px]"
        >
          <div>
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
            <button 
              className="mt-[40px] bg-blue text-white font-medium rounded-full duration-200 hover:bg-navy
              xs:py-[10px] xs:px-[37px]
              md:py-[15px] md:px-[45px]"
            >
              Start reading
            </button>
          </div>
        </div>
      </section>
      <div>

      </div>
    </div>
  )
}

export default Blog;