import { FC } from 'react';
import { LoginForm } from '../features/auth';

const Login: FC = () => {
  return (
    <div>
      <section className="flex justify-center bg-gray-light min-h-[100vh]">
        <div className="flex justify-center
          xs:px-[32px] xs:py-[30px] xs:w-[100%]
          md:px-[50px] md:py-[40px] md:w-[60%]
          lg:px-[150px] lg:py-[60px]"
        >
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
        <div className="w-[40%] bg-blue
          xs:hidden
          md:block md:px-[50px] md:py-[40px]
          lg:px-[50px] lg:py-[70px]"
        >
          <h1 className="text-[35px] text-white text-center">
            Login to Account
          </h1>
          <div className="mt-[10px] text-xl text-white font-light text-center">
            Login to your account. Fill all required fields
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;