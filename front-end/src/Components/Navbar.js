import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

import "semantic-ui-css/semantic.min.css";

const Navbar = () => {
  const [navVis, setNavVis] = useState("visible");

  const setVisibility = () => {
    const css = navVis === "visible" ? "not-visible" : "visible";
    setNavVis(css);
  };

  const homeClick = () => {
    setNavVis("visible");
  };

  return (
    <ul className='navbar'>
      <Link to='/' onClick={homeClick}>
        Home
      </Link>
      <Link to='/login' className={navVis} onClick={setVisibility}>
        Login
      </Link>
      <Link to='/register' className={navVis} onClick={setVisibility}>
        Register
      </Link>
      <Link to='/new_ticket' className={navVis} onClick={setVisibility}>
        New Ticket
      </Link>
    </ul>
  );
};

export default Navbar;
