import { FC } from 'react';

export interface CommentCardProps {
  text: string;
  author: string;
  date: string;
  avatar?: string;
}

const CommentCard: FC<CommentCardProps> = ({
  text, author, date, avatar
}) => {

  
  
  return (
    <div>
      <div className="flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
          <img 
            src={avatar} 
            alt='author-avatar' 
            className="object-cover w-[32px] h-[32px] rounded-full"
          />
        </div>
        <div>
          <div className="text-sm">
            {author}
          </div>
          <div className="text-sm text-gray">
            {date}
          </div>
        </div>
      </div>
      <div className="mt-[10px]">
        {text}
      </div>
    </div>
  )
}

export default CommentCard;