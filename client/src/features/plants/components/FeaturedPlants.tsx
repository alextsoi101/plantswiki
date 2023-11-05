import { FC } from "react";
import FeaturedPlantsCard from "./FeaturedPlantsCard";

const FeaturedPlants: FC = () => {

  return (
    <div className="flex justify-center pt-[30px]
      xs:px-[15px] xs:pb-[40px]
      md:px-[100px] md:pb-[70px]
      lg:px-[100px] md:pb-[70px]"
    >
      <div className="max-w-[2000px]">
        <h1 className="text-3xl text-dark">
          Featured Plants
        </h1>
        <div className="flex mt-[20px] items-start
          xs:flex-col xs:justify-normal gap-[32px]
          md:flex-col md:justify-normal gap-[30px]
          lg:flex-row lg:justify-between gap-[30px]"
        >
          <FeaturedPlantsCard 
            imageUrl='https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg'
            rank='species'
            name='Basella alba L.'
            description='The native range of this species is Tropical Asia. It is a climbing subshrub and
              grows primarily in the wet tropical biome. It is used as animal food and a
              medicine, has environmental uses and social uses and for food ed.'
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
    </div>
  )
}

export default FeaturedPlants;