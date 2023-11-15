import { FC } from 'react';
import ArticleActionButtons from './ArticleActionButtons';

const ArticleHeader: FC = () => {

  return (
    <div>
      <div className="bg-blue flex flex-col items-center pb-[50px]
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
          Plants growing and agronomy
        </div>
        <div className="mt-[20px] text-white text-center font-light max-w-[600px]
          xs:text-sm md:text-[18px]"
        >
          Delve into the Millennium Seed Bank vaults with us and uncover the secrets behind some of our seeds.
        </div>
      </div>
      <div className="relative bg-white xs:py-[30px] md:py-[40px]">
        <div className="absolute top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-full overflow-hidden
          xs:w-[50px] xs:h-[50px]
          md:w-[60px] md:h-[60px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="author-avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="mt-[10px] text-sm text-blue text-center">
          BY 
          <span className="ml-[7px] font-extrabold underline underline-offset-[4px]">
            ALEX TSOI
          </span>
        </div>
        <div className="flex justify-center xs:mt-[10px] md:mt-[20px]">
          <ArticleActionButtons />
        </div>
      </div>
      <div className="overflow-hidden xs:h-[250px] md:h-[350px]">
        <img 
          src="https://www.kew.org/sites/default/files/styles/header_style/public/2023-11/Domincan%20republic.jpg?itok=U5FtXn5O" 
          alt="article-main-image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default ArticleHeader;