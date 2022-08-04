import React from "react";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import {FaBars} from 'react-icons/fa';
import { HashLink as Link } from "react-router-hash-link";

const Nav = styled.nav`
  height: 60px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  display: flex;
  background: ${({ param }) => (param === "set" ? 'black' : 'none' )};
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and ( max-width :768px){
display: block;
color: white;
height: 30px;
width: 30px;
cursor: pointer;
position: absolute;
top: 7px;
right: 0;
transform: translate(-50%,25%);
/* background-image: url($(Bars)); */
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and ( max-width :768px){
display: none;
}
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
/* color: ${({ param }) => (param ? 'black' : 'none' )}; */

@media screen and ( max-width :768px){
display: none;
}
`;

const Navbar = ({toggle,param}) => {
  return (
    <Nav param={param}>
      <Logo to="/#home">CAR RENTAL</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} smooth>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>Contact Us</Button>
        {/* <Button to='/login' primary='false'>Login | Register</Button> */}
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
