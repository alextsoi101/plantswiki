import { FC } from 'react';
import { SearchForm } from '../features/search/index';
import { FeaturedPlants } from '../features/plants/index';

const Home: FC = () => {
  return (
    <div>
      <div className="bg-plant bg-cover bg-center 
        xs:h-[500px] md:h-[600px]">
        <div className="flex justify-center items-center bg-black/70 w-[100%] h-[100%]">
          <div className="flex flex-col justify-center items-center w-[100%] px-[20px]">
            <h1 className="text-white font-light drop-shadow-xl text-center
              xs:text-2xl sm:hidden"
            >
              Plants of the World
            </h1>
            <h1 className="text-white font-light drop-shadow-xl text-center
              xs:hidden sm:block sm:text-3xl md:text-4xl"
            >
              Welcome to Plants of the World
            </h1>
            <div className="text-white font-extralight drop-shadow-xl text-center
              xs:text-lg md:text-xl"
            >
              Browse more than 1,424,000 global plants
            </div>
            <div className="shadow-xl
              xs:w-[100%] xs:mt-[30px] xs:px-[20px]
              md:w-[720px] md:mt-[50px]"
            >
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedPlants />
      </div>
    </div>
  )
}

export default Home;