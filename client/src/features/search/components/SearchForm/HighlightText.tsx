import { FC } from "react";

interface HighlightTextProps {
  inputText: string | null; 
  resultText: string;
}

const HighlightText: FC<HighlightTextProps> = ({inputText, resultText}) => {
  if (!inputText) return <>{resultText}</>

  const regex = new RegExp(`(${inputText})`, 'gi');
  const parts = resultText.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        part.toLowerCase() === inputText.toLowerCase() ? (
          <span key={index} className="font-medium">{part}</span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </>
  );
}

export default HighlightText;