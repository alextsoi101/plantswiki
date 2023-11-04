import { FC } from "react";
import { SearchForm } from "../features/search/index";

const Home: FC = () => {
  return (
    <div>
      <div className="bg-plant bg-cover bg-center h-[600px]">
        <div className="flex justify-center items-center bg-black/70 w-[100%] h-[100%]">
          <div className="flex flex-col justify-center items-center w-[800px]">
            <h1 className="text-white text-4xl font-light drop-shadow-xl">
              Welcome to Plants of the World
            </h1>
            <div className="text-white text-xl font-extralight drop-shadow-xl">
              Browse more than 1,424,000 global plants
            </div>
            <div className="w-[720px] mt-[50px] shadow-xl">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home;