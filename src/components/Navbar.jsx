import React from 'react';

function Navbar(props) {
  return (
    <nav>
      <div className="logo--container">
        <a href="https://react.dev" target="_blank">
          <img src={props.logo} className="nav--logo_icon" alt="React logo" />
        </a>
        <h3 className="nav--logo_text">ReactFacts</h3>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
