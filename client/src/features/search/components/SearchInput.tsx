

const SearchInput = () => {
  return (
    <div className="flex items-center w-[100%] h-[50px] rounded-full">
      <input 
        type="text" 
        className="w-[100%] h-[100%] rounded-l-full"
      />
      <div className="min-w-[50px]">
        <button className="flex items-center justify-center w-[100%] h-[50px] rounded-r-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchInput;