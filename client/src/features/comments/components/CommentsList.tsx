import { FC } from 'react';
import CommentCard from './CommentCard';

interface CommentsListProps {
  comments: {
    text: string;
    author: string;
    date: string;
    avatar?: string;
  }[];
}

const CommentsList: FC<CommentsListProps> = ({comments}) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {comments.map(comment => 
        <div>
          <CommentCard 
            text={comment.text}
            author={comment.author}
            date={comment.date}
            avatar={comment.avatar}
          />
          <div className="mt-[15px] h-[1px] bg-gray-light"></div>
        </div>          
        )
      }
    </div>
  )
}

export default CommentsList;