import { FC, useState } from "react";
import SearchInput from "./SearchInput";
import SearchFormResults from "./SearchFormResults";

const SearchForm: FC = () => {

  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string | null>(null);

  const focusInput = (): void => {
    setInputFocus(true)
  }

  const unfocusInput = (): void => {
    setInputFocus(false)
  }

  const handleInputChange = (value: string): void => {
    setInputText(value)
  }

  return (
    <div className="relative w-[100%]">
      <SearchInput 
        handleChange={handleInputChange}
        focusInput={focusInput}
        unfocusInput={unfocusInput}
      />
      <div className={ inputFocus
        ? "absolute mt-[5px] w-[100%] z-50"
        : "hidden mt-[5px] w-[100%] z-50"
        }
      >
        <SearchFormResults 
          results={[
            {name: 'Plant tree', rank: 'species'}, 
            {name: 'Plant tree', rank: 'species'}, 
            {name: 'Plant tree', rank: 'species'}, 
            {name: 'Plant tree', rank: 'species'}, 
            {name: 'Plant tree', rank: 'species'}, 
            {name: 'Plant tree', rank: 'species'}, 
          ]}
          inputText={inputText}
        />
      </div>
    </div>
  )
}

export default SearchForm;