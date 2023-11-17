import { FC } from "react";

const UserAccountHeader: FC = () => {
  return (
    <div>
      <div className="bg-blue flex flex-col items-center
        xs:px-[32px] xs:pt-[20px] xs:pb-[90px]
        md:px-[50px] md:pt-[20px] md:pb-[130px]
        lg:px-[100px] lg:pt-[40px] lg:pb-[130px]"
      >
        <div className="text-white text-center max-w-[800px]
          xs:text-3xl 
          md:text-[50px] md:font-light"
        >
          Alex Tsoi
        </div>
      </div>
      <div className="relative bg-white xs:py-[30px] md:py-[40px]">
        <div className="absolute top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-full overflow-hidden
          xs:w-[150px] xs:h-[150px]
          md:w-[220px] md:h-[220px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
            alt="author-avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default UserAccountHeader;