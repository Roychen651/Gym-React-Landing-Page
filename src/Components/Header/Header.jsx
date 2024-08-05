import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';  // Import Link from react-scroll

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo' />
      <FaBars className='hamburger' onClick={() => setMenuOpen(!menuOpen)} />
      <ul className={`header-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Why Us?
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
