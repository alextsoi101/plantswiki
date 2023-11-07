import { FC } from "react";
import { SearchForm, SearchResults, PlantsFilter } from "../features/search/index";

const Plants: FC = () => {
  return (
    <div>
      <div className="bg-white xs:px-[20px] md:px-[100px]">
        <PlantsFilter />
      </div>
      <div className="bg-gray-light 
        xs:px-[20px] xs:pt-[10px]
        md:px-[100px] md:pt-[15px]"
      >
        <SearchForm 
          
        />
      </div>
      <div>
        <SearchResults 
          results={[
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: 'https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'},
            {id: 101, rank: 'species', name: 'Test Plant Spec', author: 'Anderson Smith', imageUrl: null},
          ]}
          total={21}
        />
      </div>
    </div>
  )
}

export default Plants;