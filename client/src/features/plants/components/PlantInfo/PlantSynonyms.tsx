import { FC } from "react";

interface PlantSynonymsProps{
  synonyms: {name: string, author: string, citation?: string}[]
}

const PlantSynonyms: FC<PlantSynonymsProps> = ({synonyms}) => {

  return (
    <div>
      <div className="text-xl text-dark">
        List of Synonyms
      </div>
      <ul className="flex flex-col gap-[10px] mt-[15px]">
        {
          synonyms.map(synonym =>
            <li className="flex flex-wrap items-center gap-x-[10px]">
              <div className="text-blue italic">
                {synonym.name}
              </div>
              <div className="text-dark italic">
                {synonym.author}
              </div>
              <div className="text-sm text-dark font-light">
                {synonym.citation}
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default PlantSynonyms;