import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Bamber Ranch</NavLink>
        <NavIcon onClick={toggle}>
          <p>Mny</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
