import { FC } from "react";
import AccountInput, { InputVariant } from "../Elements/AccountInput";

interface AccountInformationProps {
  
}

const AccountInformation: FC<AccountInformationProps> = () => {

  return (
    <div className="w-full">
      <h1 className="text-dark font-light
        xs:text-[35px] lg:text-[50px]"
      >
        Edit Account Information
      </h1>
      <div className="w-full xs:mt-[15px] md:mt-[30px]">
        <div className="w-full">
          <h3 className="text-dark xs:text-[24px] md:text-[30px]">
            Contact Information
          </h3>
        </div>
        <div className="mt-[15px]">
          <AccountInput 
            label='First Name'
            variant={InputVariant.text}
            required
          />
        </div>
        <div className="mt-[15px]">
          <AccountInput 
            label='Last Name'
            variant={InputVariant.text}
            required
          />
        </div>
        <div className="mt-[15px]">
          <AccountInput 
            label='Email'
            variant={InputVariant.text}
            required
          />
        </div>
        <button 
          className="mt-[30px] bg-blue text-white font-medium 
            rounded-full duration-200 hover:bg-navy
            xs:py-[10px] xs:px-[37px]
            md:py-[15px] md:px-[45px]"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AccountInformation;