import { FC } from "react";

export enum InputVariant {
  text = 'text',
  password = 'password'
}

interface AccountInputProps {
  label: string;
  variant: InputVariant;
  required?: any;
}

const AccountInput: FC<AccountInputProps> = ({label, variant, required}) => {

  return (
    <div className="mt-[15px]">
      <div className="ml-[10px] text-gray-dark font-light">
        {label} 
        {required && 
          <span className="ml-[5px] text-[#BB131A] font-normal">*</span>
        }
      </div>
      <input 
        type={variant}
        className="mt-[5px] w-full px-[20px] border border-navy duration-100
        focus:outline outline-yellow
        xs:h-[40px] md:h-[50px]"
      />
    </div>
  )
}

export default AccountInput;