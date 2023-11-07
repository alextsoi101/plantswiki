import { FC } from "react";
import PlantBlockCard from "./PlantBlockCard";
import PlantRowCard from "./PlantRowCard";

interface PlantsListProps {
  results: {
    id: number;
    rank: string;
    name: string;
    author: string;
    imageUrl?: string | null;
  }[];
}

const PlantsList: FC<PlantsListProps> = ({results}) => {
  return (
    <div className="grid border-t border-l border-silver bg-white xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        results.map(result =>
          <div className="border-e border-b border-silver bg-white" key={result.id}>
            <PlantBlockCard 
              id={result.id}
              rank={result.rank}
              name={result.name}
              author={result.author}
              imageUrl={result.imageUrl}
            />
          </div>
        )
      }
    </div>
  )
}

export default PlantsList;