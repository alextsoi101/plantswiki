import { FC, useState } from "react";
import SearchInput from "./SearchInput";
import SearchFormResults from "./SearchFormResults";

const SearchForm: FC = () => {

  const [inputText, setInputText] = useState<string | null>(null);

  const handleInputChange = (value: string): void => {
    setInputText(value)
  }

  return (
    <div className="w-[100%]">
      <SearchInput 
        handleChange={handleInputChange}
      />
      <div className="mt-[10px]">
        <SearchFormResults 
          results={[{name: 'Plant tree', rank: 'species'}, {name: 'Plant tree', rank: 'species'}, {name: 'Plant tree', rank: 'species'}, ]}
          inputText={inputText}
        />
      </div>
    </div>
  )
}

export default SearchForm;