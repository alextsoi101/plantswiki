import { FC } from 'react';

interface CommentTextAreaProps {
  author: string;
  onChange: (e: any) => void;
  avatar?: string;
}

const CommentTextArea: FC<CommentTextAreaProps> = ({author, avatar, onChange}) => {
  return (
    <div className="p-[15px] w-full shadow">
      <div className="flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
          <img 
            src={avatar} 
            alt='author-avatar' 
            className="object-cover w-[32px] h-[32px] rounded-full"
          />
        </div>
        <div className="text-[15px] ">
          {author}
        </div>
      </div>
      <div className="mt-[20px]">
        <textarea
          onChange={onChange}
          placeholder='Write your comment...'
          className="w-full min-h-[100px] max-h-[300px] text-[15px] "
        />
      </div>
      <div className="flex justify-end mt-[20px]">
        <button className="px-[20px] py-[5px] bg-blue text-sm text-white rounded-full">
          Send
        </button>
      </div>
    </div>
  )
}

export default CommentTextArea;