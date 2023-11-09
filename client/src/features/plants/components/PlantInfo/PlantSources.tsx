import { FC } from "react";

interface PlantSourcesProps{
  sources: {name: string, url?: string, citation?: string}[]
}

const PlantSources: FC<PlantSourcesProps> = ({sources}) => {

  return (
    <div>
      <ul className="flex flex-col gap-[30px] mt-[15px]">
        {
          sources.map(source =>
            <li className="">
              <div className="text-xl text-dark">
                {source.name}
              </div>
              <div className="mt-[5px] text-dark font-light">
                {source.citation}
              </div>
              <div className="text-sm text-dark font-light">
                {source.url}
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default PlantSources;