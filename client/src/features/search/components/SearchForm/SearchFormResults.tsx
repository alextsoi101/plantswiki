import { FC } from "react";
import SearchFormResult from "./SearchFormResult";

interface SearchFormResultsProps {
  results: {name: string; rank: string;}[];
  inputText: string | null;
}

const SearchFormResults: FC<SearchFormResultsProps> = ({results, inputText}) => {

  if (results.length === 0) return "" 
  return (
    <div className="w-[100%] rounded-3xl bg-white px-[30px] py-[14px] shadow-2xl">
      {results.map(result => 
        <SearchFormResult 
          name={result.name}
          rank={result.rank}
          inputText={inputText}
        />
      )}
    </div>
  )
}

export default SearchFormResults;