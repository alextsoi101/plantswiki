import { FC } from "react";
import SearchFormResult from "./SerchFormResult";

interface SearchFormResultsProps {
  results: {name: string; rank: string;}[];
  inputText: string | null;
}

const SearchFormResults: FC<SearchFormResultsProps> = ({results, inputText}) => {
  return (
    <div className="w-[100%] rounded-3xl bg-white px-[30px] py-[10px]">
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