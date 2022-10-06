import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import Bars from '../images/bars.svg'

const Navbar = ({toggle}) => {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    });
  }, []);
  return (
    <Nav className={navbar ? 'active' : ''}>
        <Logo to="/">ELIXR</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary={(navbar ? '' : 'true')} to="/contact">Contact Us</Button>
        </NavBtn>
    </Nav>
  );
}

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
        
    @keyframes fadeInAnimation {
      0% {
        transform:translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }
`;
const NavLink = css`
  color:#fff;
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
    font-weight: bold;
`;
const MenuBars = styled.i`
  display: none;

  @media screen and (max-width:768px){
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  transform: scaleX(1); 
  display:inline-block; 
  margin:0;
  transition: width .7s ease-in-out;

  &:after{
    content: '';
    display: block;
    width: 0%;
    height: 3px;
    background: #fff;
    transition: width .4s ease-in;
    margin-top: 6px;
  }
  &:hover::after {
    width: 100%;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export default Navbar;