import { FC } from "react";

interface SearchInputProps {
  handleChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({handleChange}) => {
  return (
    <div className="flex items-center w-[100%] rounded-full border border-silver">
      <input 
        type="text" 
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
        className="w-[100%] rounded-l-full text-dark-black 
          placeholder:text-dark placeholder:font-light
          xs:h-[40px] xs:px-[22px]
          md:h-[50px] md:px-[26px]"
      />
      <div className="xs:min-w-[40px] md:min-w-[50px]">
        <button className="flex items-center justify-center w-[100%]
          rounded-r-full bg-white duration-200 hover:text-blue
          xs: h-[40px] md:h-[50px]"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchInput;