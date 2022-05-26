import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/products">Beef</SidebarLink>
        <SidebarLink to="/gallery">Gallery</SidebarLink>
        {/* <SidebarLink to="/signup">Sign Up</SidebarLink> */}
        <SidebarLink to="/faq">FAQ</SidebarLink>
        <SidebarLink to="/testimonial">Testimonials</SidebarLink>
        <SidebarLink to="/aboutus">About us</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/products">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
