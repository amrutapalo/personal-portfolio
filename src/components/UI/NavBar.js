import React, {useState} from 'react';
import './Navbar.css'


import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';


const NavBar = () => {
  const [active, setActive] = useState('#home');

  return (
    <div className="container">
      <nav className='Navbar'>
        <a href="#home" onClick={() => setActive('#home')} className={active == '#home'? 'active' : ''}><AiOutlineHome/></a>
        <a href="#testimonial" onClick={() => setActive('#testimonial')} className={active == '#testimonial'? 'active' : ''}><AiOutlineUser/></a>
        <a href="#contact" onClick={() => setActive('#contact')} className={active == '#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
      </nav>
    </div>
  );
}

export default NavBar; 