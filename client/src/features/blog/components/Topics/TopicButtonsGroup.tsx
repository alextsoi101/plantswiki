import { FC } from 'react';

export enum Topic {
  all = 'all',
  topic1 = 'topic1',
  topic2 = 'topic2',
  topic3 = 'topic3',
}

interface TopicButtonsGroupProps {
  topic: Topic;
  handleChange: (topic: Topic) => void;
}

const TopicButtonsGroup: FC<TopicButtonsGroupProps> = ({topic, handleChange}) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-white
      xs:gap-[15px] md:gap-[20px]"
    >
      <button 
        className={
          `${topic === Topic.all 
            ? "bg-white text-blue border-blue cursor-default"
            : "bg-blue text-white border-white hover:bg-navy"
          }
          rounded-full border border-2 duration-300
          xs:px-[20px] xs:py-[5px] xs:font-light
          md:px-[50px] md:py-[10px] md:font-normal`
        }
        onClick={() => handleChange(Topic.all)}
      >
        All
      </button>
      <button 
        className={
          `${topic === Topic.topic1 
            ? "bg-white text-blue border-blue cursor-default"
            : "bg-blue text-white border-white hover:bg-navy"
          }
          rounded-full border border-2 duration-300
          xs:px-[20px] xs:py-[5px] xs:font-light
          md:px-[30px] md:py-[10px] md:font-normal`
        }
        onClick={() => handleChange(Topic.topic1)}
      >
        Plants growing
      </button>
      <button 
        className={
          `${topic === Topic.topic2 
            ? "bg-white text-blue border-blue cursor-default"
            : "bg-blue text-white border-white hover:bg-navy"
          }
          rounded-full border border-2 duration-300
          xs:px-[20px] xs:py-[5px] xs:font-light
          md:px-[30px] md:py-[10px] md:font-normal`
        }
        onClick={() => handleChange(Topic.topic2)}
      >
        Agronomy
      </button>
      <button 
        className={
          `${topic === Topic.topic3 
            ? "bg-white text-blue border-blue cursor-default"
            : "bg-blue text-white border-white hover:bg-navy"
          }
          rounded-full border border-2 duration-300
          xs:px-[20px] xs:py-[5px] xs:font-light
          md:px-[30px] md:py-[10px] md:font-normal`
        }
        onClick={() => handleChange(Topic.topic3)}
      >
        Botanic
      </button>
    </div>
  )
}

export default TopicButtonsGroup;