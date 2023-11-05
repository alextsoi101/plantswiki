import { FC } from "react";
import FeaturedPlantsCard from "./FeaturedPlantsCard";

const FeaturedPlants: FC = () => {

  return (
    <div className="px-[100px] pt-[30px] pb-[70px]">
      <h1 className="text-3xl text-dark">
        Featured Plants
      </h1>
      <div className="mt-[20px] flex justify-between items-start gap-[30px]">
        <FeaturedPlantsCard 
          imageUrl='https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'
          rank='species'
          name='Basella alba L.'
          description='The native range of this species is Tropical Asia. It is a climbing subshrub and
            grows primarily in the wet tropical biome. It is used as animal food and a
            medicine, has environmental uses and social uses and for food ed as animal food and a
            medicine, has environmental uses and social uses and for food ed as animal food and a
            medicine, has environmental uses and social uses and for food.'
          id={1}
        />
        <FeaturedPlantsCard 
          imageUrl='https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'
          rank='species'
          name='Basella alba L.'
          description='The native range of this species is Tropical Asia. It is a climbing subshrub and
            grows primarily in the wet tropical biome. It is used as animal food and a
            medicine, has environmental uses and social uses and for food.'
          id={1}
        />
        <FeaturedPlantsCard 
          imageUrl='https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'
          rank='species'
          name='Basella alba L.'
          description='The native range of this species is Tropical Asia. It is a climbing subshrub and
            grows primarily in the wet tropical biome. It is used as animal food and a
            medicine, has environmental uses and social uses and for food.'
          id={1}
        />
      </div>
    </div>
  )
}

export default FeaturedPlants;