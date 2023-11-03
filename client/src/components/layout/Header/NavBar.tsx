import { FC, useState } from 'react';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

const NavBar: FC = () => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <ul className="flex gap-[30px] items-center h-[100%]">
      <NavLink 
        text='HOME'
      />
      <NavLink 
        text='BLOG'
      />
      <NavDropdown 
        text='ABOUT'
        items={[
          {value: 'About', link:'/about'},
          {value: 'What we do', link:'/about'}
        ]}
      />
      <NavLink 
        text='CONTACTS'
      />
    </ul>
  )
}

export default NavBar;