import { FC } from "react";

interface AccountGeneralProps {
  
}

const AccountGeneral: FC<AccountGeneralProps> = () => {

  return (
    <div className="w-full">
      <h1 className="text-dark font-light
        xs:text-[35px] lg:text-[50px]"
      >
        My Account
      </h1>
      <div className="w-full xs:mt-[15px] md:mt-[30px]">
        <div className="w-full border-b border-[#DEDBD4] pb-[5px]">
          <h3 className="text-dark xs:text-[24px] md:text-[30px]">
            Contact Information
          </h3>
        </div>
        <div className="mt-[5px] text-[#404040] xs:text-[20px] md:text-[24px]">
          Name & Email
        </div>
        <div className="mt-[5px] text-dark font-light">
          Alex Tsoi
        </div>
        <div className="text-dark font-light">
          alextsoi101@gmail.com
        </div>
        <div className="mt-[5px] text-[#404040] font-medium cursor-pointer duration-300
          underline decoration-blue decoration-2 underline-offset-8
          hover:text-blue"
        >
          Edit Information
        </div>
      </div>
      <div className="w-full xs:mt-[35px] md:mt-[50px]">
        <div className="w-full border-b border-[#DEDBD4] pb-[5px]">
          <h3 className="text-dark xs:text-[24px] md:text-[30px]">
            Password Information
          </h3>
        </div>
        <div className="mt-[5px] text-[#404040] xs:text-[20px] md:text-[24px]">
          Password
        </div>
        <div className="mt-[5px] text-dark font-light">
          ****************
        </div>
        <div className="mt-[5px] text-[#404040] font-medium cursor-pointer duration-300
          underline decoration-blue decoration-2 underline-offset-8
          hover:text-blue"
        >
          Change Password
        </div>
      </div>
    </div>
  )
}

export default AccountGeneral;