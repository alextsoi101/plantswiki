import { FC } from "react";
import StickySideHeader from "./StickySideHeader";
import PlantDistribution from "./PlantDistribution";
import PlantSynonyms from "./PlantSynonyms";
import PlantSources from "./PlantSources";

const PlantGeneral: FC = () => {

  return (
    <div>
      <section className="flex 
        xs:flex-col xs:mt-[50px] 
        md:flex-row md:mt-[90px]"
      >
        <div className="md:w-[25%]">
          <StickySideHeader 
            mainText='Distribution'
            sourceLink='121212'
          />
        </div>
        <div className="md:w-[75%] xs:mt-[20px]">
          <PlantDistribution />
        </div>
      </section>
      <section className="flex 
        xs:flex-col xs:mt-[50px] 
        md:flex-row md:mt-[90px]"
      >
        <div className="md:w-[25%]">
          <StickySideHeader 
            mainText='Synonyms'
            description={`Has ${6} synonyms`}
            sourceLink='121212'
          />
        </div>
        <div className="md:w-[75%] xs:mt-[20px]">
          <PlantSynonyms 
            synonyms={[
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online. Facilitated by the Royal Botanic Gardens, Kew. Published on the Internet; http://www.plantsoftheworldonline.org/ Retrieved 2022-12-08'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online. Facilitated by the Royal Botanic Gardens, Kew. Published on the Internet; http://www.plantsoftheworldonline.org/ Retrieved 2022-12-08'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online. Facilitated by the Royal Botanic Gardens, Kew. Published on the Internet; http://www.plantsoftheworldonline.org/ Retrieved 2022-12-08'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online. Facilitated by the Royal Botanic Gardens, Kew. Published on the Internet;'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online. Facilitated by the Royal Botanic Gardens, Kew. Published on the Internet; http://www.plantsoftheworldonline.org/ Retrieved 2022-12-08'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online.'},
              {name: 'Acanthus barteri', author: 'T.Anderson', citation: 'POWO (2019). Plants of the World Online.'},
            ]}
          />
        </div>
      </section>
      <section className="flex 
        xs:flex-col xs:mt-[50px] 
        md:flex-row md:mt-[90px]"
      >
        <div className="md:w-[25%]">
          <StickySideHeader 
            mainText='Sources'
          />
        </div>
        <div className="md:w-[75%] xs:mt-[10px]">
          <PlantSources 
            sources={[
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
              {name: 'POWO', citation: 'The International Plant Names Index and World Checklist of Vascular Plants 2023.', url: 'http://creativecommons.org/licenses/by-nc-sa/3.0'},
            ]}
          />
        </div>
      </section>
    </div>
  )
}

export default PlantGeneral;