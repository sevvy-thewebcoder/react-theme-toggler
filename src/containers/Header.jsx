import React from 'react';
import Navbar from '../components/Navbar';

function Header(props) {
  return (
    <header className={props.darkMode ? 'dark' : ''}>
      <Navbar logo={props.logo} toggleDarkMode={props.toggle} />
    </header>
  );
}

export default Header;
