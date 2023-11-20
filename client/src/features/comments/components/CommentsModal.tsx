import { FC } from 'react';
import ModalLayout from '../../../layouts/ModalLayout';
import CommentTextArea from './CommentTextArea';
import CommentsList from './CommentsList';

interface CommentsModalProps {
  total: number;
  onClose: () => void;
}

const CommentsModal: FC<CommentsModalProps> = ({total, onClose}) => {

  return (
    <ModalLayout
      onClose={onClose}
    >
      <div className="block ml-[auto] p-[25px] h-[100vh] bg-white shadow-xl xs:w-full md:w-[500px] 
        overflow-y-scroll"
      >
        <div className="flex justify-between items-center pb-[20px]">
          <h1 className="text-xl font-medium">
            Comments ({total})
          </h1>
          <button 
            className="p-[1px] text-dark duration-200 hover:text-blue"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <CommentTextArea 
            author='Alex Tsoi'
            avatar='https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
            onChange={() => console.log()}
          />
        </div>
        <div className="mt-[30px] mb-[20px] h-[1px] bg-gray-light">
        </div>
        <div>
          <CommentsList 
            comments={[
              {
                text: 'Test Comment text',
                author: 'Alex Tsoi',
                date: '19 November 2023',
                avatar: 'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
              },
              {
                text: 'Test Comment text',
                author: 'Alex Tsoi',
                date: '19 November 2023',
                avatar: 'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
              },
              {
                text: 'Test Comment text',
                author: 'Alex Tsoi',
                date: '19 November 2023',
                avatar: 'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
              }
            ]}
          />
        </div>
      </div>
    </ModalLayout>
  )
}

export default CommentsModal;