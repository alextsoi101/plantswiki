import { FC } from 'react';
import AccountInput, { InputVariant } from '../Elements/AccountInput';
import { BaseButton } from '../../../../components';

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
        <div className="mt-[30px]">
          <BaseButton 
            text='Start reading'
            onClick={() => console.log(123)}
          />
        </div>
      </div>
    </div>
  )
}

export default AccountInformation;