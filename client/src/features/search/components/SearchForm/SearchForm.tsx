import { FC, useState, useRef } from 'react';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import SearchInput from './SearchInput';
import SearchFormResults from './SearchFormResults';

const SearchForm: FC = () => {

  const [resultsVisible, setResultsVisible] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string | null>(null);

  const searchFormRef = useRef<HTMLDivElement>(null);

  const showResults = () => {
    setResultsVisible(true)
  }

  const hideResults = () => {
    setResultsVisible(false)
  }

  const handleInputChange = (value: string): void => {
    setInputText(value)
  }

  useOnClickOutside(searchFormRef, hideResults);

  return (
    <div 
      ref={searchFormRef}
      onClick={showResults}
      className="relative w-[100%]"
    >
      <SearchInput 
        handleChange={handleInputChange}
      />
      <div className={ resultsVisible
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