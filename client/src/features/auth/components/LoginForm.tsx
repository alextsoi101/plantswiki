import { FC } from 'react';
import { BaseButton, BaseInput, InputVariant } from '../../../components';

const LoginForm: FC = () => {

  return (
    <div className="w-full">
      <h1 className="text-dark xs:text-[30px] md:text-[40px]">
        Login
      </h1>
      <div className="mt-[10px]">
        Don't have an Account? 
        <span className="ml-[8px] text-blue font-medium cursor-pointer 
          underline underline-offset-4 decoration-blue">
          Sign Up
        </span>
      </div>
      <div className="flex flex-col xs:gap-[10px] md:gap-[20px]">
        <div>
          <BaseInput 
            label='Email'
            variant={InputVariant.text}
            required
          />
          <BaseInput 
            label='Password'
            variant={InputVariant.password}
            required
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <BaseButton 
          text='Login'
          onClick={() => console.log(123)}
        />
      </div>
    </div>
  )
}

export default LoginForm;