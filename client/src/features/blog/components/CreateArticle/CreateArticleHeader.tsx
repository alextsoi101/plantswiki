import { FC } from 'react';

interface CreateArticleHeaderProps {
  onChangeTitle: (e: any) => void;
  onChangeDescription: (e: any) => void;
  author: string;
  authorAvatarUrl: string | null;
}

const CreateArticleHeader: FC<CreateArticleHeaderProps> = ({
  onChangeTitle, onChangeDescription, author, authorAvatarUrl
}) => {

  return (
    <div className="w-full h-full">
      <div className="bg-blue flex flex-col items-center pb-[50px] w-full
        xs:px-[32px] xs:pt-[20px]
        md:px-[50px] md:pt-[20px]
        lg:px-[100px] lg:pt-[40px]"
      >
        <div className="text-sm text-pink font-extrabold">
          19 NOVEMBER 2023
        </div>
        <div className="text-white text-center max-w-[800px]
          xs:mt-[10px] xs:text-3xl xs:leading-[40px]
          md:mt-[10px] md:text-[50px] md:leading-[58px] md:font-light"
        >
          <textarea 
            placeholder='Add your Title'
            onChange={onChangeTitle}
            className="bg-blue border border-gray-light border-dashed text-center 
              xs:w-[90vw] xs:h-[100px] xs:min-h-[90px] xs:max-h-[150px] xs:placeholder:text-[30px]
              md:w-[700px] md:h-[120px] md:min-h-[120px] md:max-h-[200px] md:placeholder:text-[40px]
              lg:w-[800px]"
          />
        </div>
        <div className="mt-[20px] text-white text-center font-light max-w-[600px]
          xs:text-sm md:text-[18px]"
        >
          <textarea  
            placeholder='Add your Description'
            onChange={onChangeDescription}
            className="bg-blue border border-gray-light border-dashed text-center
              xs:w-[80vw] xs:h-[50px] xs:min-h-[50px] xs:max-h-[70px] xs:placeholder:text-[14px]
              md:w-[500px] md:h-[80px] md:min-h-[80px] md:max-h-[120px] md:placeholder:text-[18px]
              lg:w-[600px]"
          />
        </div>
      </div>
      <div className="relative bg-white xs:py-[30px] md:py-[40px]">
        <div className="absolute top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-full overflow-hidden
          xs:w-[50px] xs:h-[50px]
          md:w-[60px] md:h-[60px]"
        >
          <img 
            src={authorAvatarUrl || 'wwwww'} 
            alt="author-avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="mt-[10px] text-sm text-blue text-center">
          BY 
          <span className="ml-[7px] font-extrabold underline underline-offset-[4px]">
            {author.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CreateArticleHeader;