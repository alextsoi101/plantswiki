import { FC, useState } from 'react';
import PlantsListHeader from './PlantListHeader';
import PlantsList from './PlantsList';
import PlantsListFooter from './PlantsListFooter';

interface SearchResultsProps {
  results: {
    id: number;
    rank: string;
    name: string;
    author: string;
    imageUrl?: string | null;
  }[];
  total: number;
}

const SearchResults: FC<SearchResultsProps> = ({results, total}) => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div className="bg-gray-light pt-[20px] pb-[40px] xs:px-[20px] md:px-[100px]">
      <div>
        <PlantsListHeader 
          total={total}
        />
      </div>
      <div className="mt-[15px]">
        <PlantsList 
          results={results}
        />
      </div>
      <div>
        <PlantsListFooter 
          total={432200}
          page={2}
        />
      </div>
    </div>
  )
}

export default SearchResults;