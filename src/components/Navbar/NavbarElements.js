import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaHatCowboy } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  filter: drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3));
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    color: #fff;
    font-size: 1.7rem;
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  filter: drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3));
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: normal;
  }
`;

export const Bars = styled(FaHatCowboy)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
