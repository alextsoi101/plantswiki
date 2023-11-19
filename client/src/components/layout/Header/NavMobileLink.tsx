import { FC } from 'react';

interface NavMobileLinkProps {
  text: string
}

const NavMobileLink: FC<NavMobileLinkProps> = ({text}) => {
  return (
    <li className="flex items-center text-base text-white 
      underline decoration-pink decoration-2 underline-offset-4"
    >
      {text} 
    </li>
  )
}

export default NavMobileLink;