import { FC } from 'react';

interface NavLinkProps {
  text: string
}

const NavLink: FC<NavLinkProps> = ({text}) => {
  return (
    <li className="text-sm text-dark font-medium cursor-pointer duration-200 hover:text-blue">
      {text}
    </li>
  )
}

export default NavLink;