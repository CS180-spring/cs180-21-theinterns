import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
function Nav() {
  return (
    <StyledNav>
        <h1> <Link to="/">YumYumBook</Link></h1>
        <li> <Link to="/Pricing">Pricing</Link></li>
        <li> <Link to="/Reference">Api Reference</Link></li>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: -40px;
  background-color: #bac2ba;

  a{
    text-decoration: none;
    color: black;
  }

  h1{
    margin-right: auto;
    margin-left: 20px;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
  }

  li{
    margin-right: 30px;
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
  }
`;
export default Nav;