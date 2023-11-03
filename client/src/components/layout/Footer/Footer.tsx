import { FC } from 'react';

const Footer: FC = () => {

  return (
    <footer>
      <div className="flex justify-between items-center px-[100px] h-[56px] bg-dark text-base text-white">
        <div>
          <ul className="flex justify-between items-center gap-[20px] font-extralight">
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
        <div className="font-normal">
          © Plants of the World Online
        </div>
      </div>
      <div className="flex justify-center items-center h-[44px] bg-dark-black">
        <a href="" className="flex items-center text-base text-white font-semibold hover:underline text-white">
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