import { FC, useState } from 'react';
import { Topic } from './TopicButtonsGroup';

const SELECT_OPTIONS = [
  { value: Topic.all, label: 'All' },
  { value: Topic.topic1, label: 'Topic 1' },
  { value: Topic.topic2, label: 'Topic 2' },
  { value: Topic.topic3, label: 'Topic 3' },
];

interface TopicSelectProps {
  onChange: (topic: Topic) => void;
}

const TopicSelect: FC<TopicSelectProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SELECT_OPTIONS[0].value);

  const handleSelect = (value: Topic) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        className="flex justify-between items-center text-dark font-medium
          px-[20px] py-[10px] bg-white border border-1 border-silver rounded-full" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          {SELECT_OPTIONS.find(option => option.value === selectedOption)?.label}
        </div>
        <div className={isOpen
            ? "rotate-180 duration-300"
            : "rotate-0 duration-300"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-[4px] w-full p-[10px]
          bg-white border border-1 border-silver rounded-[20px]"
        >
          {SELECT_OPTIONS.map(option => (
            <div
              key={option.value}
              className={ option.value === selectedOption
                ? "p-[5px] text-dark font-medium"
                : "p-[5px] text-dark font-light"
              }
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicSelect;