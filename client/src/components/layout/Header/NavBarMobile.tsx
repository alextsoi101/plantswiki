import { FC } from 'react';
import NavMobileLink from './NavMobileLink';

const NavBarMobile: FC = () => {

  return (
    <div className="h-full bg-blue p-[30px]">
      <ul className="flex flex-col gap-[20px]">
        <NavMobileLink 
          text='HOME'
        />
        <NavMobileLink 
          text='BLOG'
        />
        <NavMobileLink 
          text='WHAT WE DO'
        />
        <NavMobileLink 
          text='CONTACTS'
        />
      </ul>
    </div>
  )
}

export default NavBarMobile;