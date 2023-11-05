import { FC } from 'react';

const Footer: FC = () => {

  return (
    <footer>
      <div className={
        `flex items-center bg-dark text-white
        xs:flex-col xs:justify-normal xs:px-[20px] xs:py-[10px] xs:text-sm
        lg:flex-row lg:justify-between lg:px-[100px] lg:py-[15px] lg:text-base`
        }
      >
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[5px] font-extralight">
            <li className="cursor-pointer hover:underline">
              Terms and conditions
            </li>
            <li className="cursor-pointer hover:underline">
              Privacy
            </li>
            <li className="cursor-pointer hover:underline">
              Cookies
            </li>
            <li className="cursor-pointer hover:underline">
              Contacts
            </li>
          </ul>
        </div>
        <div className="font-normal xs:mt-[10px] xs:text-sm lg:mt-[0px] lg:text-base">
          © Plants of the World Online
        </div>
      </div>
      <div className="flex justify-center items-center py-[10px] bg-dark-black">
        <a href="" className="flex items-center text-base text-white font-medium hover:underline text-white">
          Github
          <span className="ml-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;