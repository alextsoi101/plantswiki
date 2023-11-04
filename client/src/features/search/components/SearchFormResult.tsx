import { FC } from "react";
import HighlightText from "./HighlightText";

interface SearchFormResultProps {
  name: string; 
  rank: string;
  inputText: string | null;
}

const SearchFormResult: FC<SearchFormResultProps> = ({name, rank, inputText}) => {
  return (
    <div className="flex justify-between items-center py-[10px] cursor-pointer text-dark-black hover:text-blue">
      <div className="text-[17px] font-light duration-200">
        <HighlightText 
          inputText={inputText}
          resultText={name}
        />
      </div>
      <div className="text-sm text-blue font-semibold">
        {rank.toUpperCase()}
      </div>
    </div>
  )
}

export default SearchFormResult;